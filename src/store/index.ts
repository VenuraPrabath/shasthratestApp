import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth';
import appReducer from './app';


const store = configureStore({
    reducer:{
        auth:authReducer,
        app:appReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;