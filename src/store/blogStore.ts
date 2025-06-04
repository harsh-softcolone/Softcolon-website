import { create } from 'zustand';
import { HashnodePost } from '@/interface';

interface BlogStore {
  posts: HashnodePost[];
  hasNextPage: boolean;
  endCursor: string | null;
  setPosts: (posts: HashnodePost[]) => void;
  appendPosts: (posts: HashnodePost[]) => void;
  setHasNextPage: (value: boolean) => void;
  setEndCursor: (cursor: string | null) => void;
  resetPosts: () => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  hasNextPage: true,
  endCursor: null,
  setPosts: (posts) => set({ posts }),
  appendPosts: (posts) =>
    set((state) => ({ posts: [...state.posts, ...posts] })),
  setHasNextPage: (value) => set({ hasNextPage: value }),
  setEndCursor: (cursor) => set({ endCursor: cursor }),
  resetPosts: () =>
    set({
      posts: [],
      hasNextPage: true,
      endCursor: null,
    }),
}));
