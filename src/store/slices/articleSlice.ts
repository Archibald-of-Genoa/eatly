import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type Post = {
  id: number;
  title: string;
  body: string;
};

type ArticlesState = {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  currentPage: number;
  totalPosts: number;
  postsPerPage: number;
};

const initialState: ArticlesState = {
  posts: [],
  status: "idle",
  error: null,
  currentPage: 0,
  totalPosts: 0,
  postsPerPage: 12,
};

export const fetchPosts = createAsyncThunk<
  { posts: Post[]; total: number; skip: number; limit: number },
  { skip: number; limit: number },
  {
    rejectValue: string;
  }
>("articles/fetchPosts", async ({ skip, limit }, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/posts?limit=${limit}&skip=${skip}&select=title,userId,body`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    return { posts: data.posts, total: data.total, skip, limit }; // Возвращаем объект с постами и информацией о пагинации
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload.posts;
        state.totalPosts = action.payload.total;
        state.currentPage = action.payload.skip / action.payload.limit;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default articlesSlice.reducer;
