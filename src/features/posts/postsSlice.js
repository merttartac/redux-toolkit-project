import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '0', title: 'bu ilk paylasim', content: 'bu da ilk paylasimin icerigi'
    },
    {
        id: '1', title: 'bu ikinci paylasim', content: 'bu da ikinci paylasimin icerigi'
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare (title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;