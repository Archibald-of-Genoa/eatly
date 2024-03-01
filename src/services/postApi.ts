import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type PostsResponse = {
  posts: Post[];
  total: number;
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
};

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<PostsResponse, { skip: number; limit: number }>({
      query: ({ skip, limit }) =>
        `posts?limit=${limit}&skip=${skip}&select=title,userId,body`,
    }),
    fetchPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
    fetchUserById: builder.query<User, number>({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useFetchPostsQuery, useFetchPostByIdQuery, useFetchUserByIdQuery  } = postsApi;
