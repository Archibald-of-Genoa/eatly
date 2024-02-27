import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostsResponse = {
  posts: Post[];
  total: number;
};

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<PostsResponse, { skip: number; limit: number }>({
      query: ({ skip, limit }) =>
        `posts?limit=${limit}&skip=${skip}&select=title,userId,body`,
    }),
  }),
});

export const { useFetchPostsQuery } = postsApi;
