import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const POSTS_URL = "http://localhost:8000/api/posts";

export const postSlice = createApi({
  reducerPath: "postapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
    credentials: "include",
  }),
  tagTypes: ["post"],
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: `${POSTS_URL}`,
        method: "GET",
      }),
      providesTags: ["post"],
    }),
    getSinglePost: builder.query({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}`,
        method: "GET",
      }),
      providesTags: ["post"],
    }),
    addPost: builder.mutation({
      query: ({ content, image }) => ({
        url: `${POSTS_URL}`,
        method: "POST",
        body: { content, image },
      }),
      invalidatesTags: ["post"],
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["post"],
    }),
    updatePost: builder.mutation({
      query: ({ postId, content }) => ({
        url: `${POSTS_URL}/${postId}`,
        method: "PUT",
        body: { content },
      }),
      invalidatesTags: ["post"],
    }),
    likePost: builder.mutation({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}/like`,
        method: "POST",
      }),
      invalidatesTags: ["post"],
    }),
    unlikePost: builder.mutation({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}/unlike`,
        method: "POST",
      }),
      invalidatesTags: ["post"],
    }),
    commentOnPost: builder.mutation({
      query: ({ postId, comment }) => ({
        url: `${POSTS_URL}/${postId}/comments`,
        method: "POST",
        body: { comment },
      }),
      invalidatesTags: ["post"],
    }),
    replyOnComment: builder.mutation({
      query: ({ postId, commentId, reply }) => ({
        url: `${POSTS_URL}/${postId}/comments/${commentId}/reply`,
        method: "POST",
        body: { reply },
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const {
  useAddPostMutation,
  useGetAllPostsQuery,
  useGetSinglePostQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useLikePostMutation,
  useUnlikePostMutation,
  useCommentOnPostMutation,
  useReplyOnCommentMutation,
} = postSlice;
