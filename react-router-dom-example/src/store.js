import {configureStore} from '@reduxjs/toolkit';
import conuterSlice from './counterSlice';
//createSlice : 스토어가 여럿일 때, 각자 스토어를 만든다
//configureStore: 슬라이스로 만든 스토어들을 하나로 합쳐준다.


const store=configureStore({
  reducer:{
    counter:conuterSlice.reducer
  }
});
export default store;