import {createSlice} from '@reduxjs/toolkit';
//createSlice : 스토어가 여럿일 때, 각자 스토어를 만든다
//configureStore: 슬라이스로 만든 스토어들을 하나로 합쳐준다.

const conuterSlice = createSlice({
    name:'conuterSlice',
    initialState:{value:0},
    reducers:{
      up:(state, action)=>{
        state.value=state.value+action.payload;
      }
    }
  });
  export default conuterSlice;
  export const {up} =conuterSlice.actions;