import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  x: 10,
};

export const simpleReducer = createReducer(intialState, (builder) => {
  builder.addCase("actionTypeIncrement", (state, action) => {
    state.x = state.x + 1;
  })
  .addCase("actionTypeDecrement", (state, action) => {
    state.x = state.x - 1 })
});




export const loginUserReducer = createReducer({}, (builder)=>{

});
export const getUserReducer = createReducer({}, (builder)=>{

});
export const getUserDataReducer = createReducer({}, (builder)=>{

});
