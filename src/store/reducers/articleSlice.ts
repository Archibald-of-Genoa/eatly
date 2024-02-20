import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export type Post = {
  id: number;
  title: string;
  body: string;
};

type ArticlesState = {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: ArticlesState = {
  posts: [],
  status: 'idle',
  error: null,
};

// Асинхронный thunk для загрузки статей
export const fetchPosts = createAsyncThunk<Post[]>(
  'articles/fetchPosts',
  async () => {
    const response = await fetch("https://dummyjson.com/posts?limit=12&skip=10&select=title,userId,body");
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data.posts;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = 'succeeded';
        // Добавляем загруженные статьи в состояние
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default articlesSlice.reducer;
