import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        // 'song' + '/' + 'addSong' = 'song/addSong'
        addSong(state, action) {
            // State is not the big state object in the store,
            // it is the piece of state managed by this reducer
            state.push(action.payload);
        },
        // 'song' + '/' + 'removeSong' = 'song/removeSong'
        removeSong(state, action) {
            // action.payload === string, the song we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        resetSongs(state, action) {
            return [];
        }
    },
    extraReducers(builder) {
        // builder.addCase('movie/resetMovies', (state, action) => {
        //     return [];
        // });
        // builder.addCase(moviesSlice.actions.resetMovies, (state, action) => {
        //     return [];
        // });
        builder.addCase(reset, (state, action) => {
            return [];
        });
    }
});

export const { addSong, removeSong, resetSongs } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;