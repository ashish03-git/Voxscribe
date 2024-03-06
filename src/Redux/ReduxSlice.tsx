import {createSlice} from '@reduxjs/toolkit';
import {Satellite} from '@tamagui/lucide-icons';

const slice = createSlice({
  name: 'redux_slice',
  initialState: {
    // firebase initial states
    firebaseUserId: {},
    firebaseUserDetails: {},

    selected_number_to_call: {},
    update_seleceted_number: {},
    contact_full_Details: {},
    selected_chat_user: {},
  },
  reducers: {
    // firebase reducers states
    add_firebaseUserId: (state, action) => {
      state.firebaseUserId = action.payload;
    },
    add_firebaseUserDetails: (state, action) => {
      state.firebaseUserDetails = action.payload;
    },

    // application reducers states
    add_contact_full_Details: (state, action) => {
      state.contact_full_Details = action.payload;
      // console.log(action.payload);
    },
    add_selected_number_to_call: (state, action) => {
      state.selected_number_to_call = action.payload;
      console.log(action.payload);
    },
    update_selected_number_to_call: (state, action) => {
      state.selected_number_to_call = action.payload;
    },
    add_selected_chat_user: (state, action) => {
      state.selected_chat_user = action.payload;
    },
  },
});
export const {
  add_contact_full_Details,
  add_selected_number_to_call,
  update_selected_number_to_call,
  add_firebaseUserId,
  add_firebaseUserDetails,
  add_selected_chat_user,
} = slice.actions;
export default slice.reducer;
