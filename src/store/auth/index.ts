import {  createSlice  } from '@reduxjs/toolkit'
import { isAuthenticate, isCompleteWalkthrough, login, register } from './service';
import useLocalStorage from 'hooks/useLocalStorage';
import { authStorage } from 'constants/storage';
import { IUser } from 'types';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
// import type { PayloadAction } from '@reduxjs/toolkit'


interface AuthState{
    isLoading:boolean;
    completeWalkthrough?:boolean|undefined|null;
    user?:IUser|null;
    error?:string|null
}

const initialState:AuthState = {
    isLoading:false,
    error:null
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        completedWalkthrough:(state)=>{
            state.completeWalkthrough = true,
            useLocalStorage.setItem(authStorage.walkthrough,true);
        },
        removeUser:(state)=>{
            state.user = null;
            useLocalStorage.removeItem(authStorage.authenticate);
        }
    },
    extraReducers:(builder)=>{
       builder
        .addCase(isCompleteWalkthrough.pending,state=>{
            state.completeWalkthrough = undefined;
        })

        .addCase(isCompleteWalkthrough.fulfilled,(state,{payload})=>{
            state.completeWalkthrough = payload??null;
        })

        .addCase(isCompleteWalkthrough.rejected,state=>{
            state.completeWalkthrough = null;
        })
        //register
        .addCase(register.pending,(state)=>{
            state.isLoading = true;
            console.log('pending',state.isLoading);
        })
        .addCase(register.fulfilled,(state,{payload})=>{
            state.isLoading = false;
            console.log(payload);
        })
        .addCase(register.rejected,(state,{error})=>{
            state.isLoading = false;
            console.log(error.message);
            state.error = error.message;
        })
        //login
        .addCase(login.pending,(state)=>{
            state.isLoading = true;
            console.log('pending',state.isLoading);
        })
        .addCase(login.fulfilled,(state,{payload})=>{
            state.isLoading = false;
            console.log(payload);
        })
        .addCase(login.rejected,(state,{error})=>{
            state.isLoading = false;
            console.log(error.message);
            state.error = error.message;
        })
        //isAuthentication
        .addCase(isAuthenticate.pending,state=>{
            state.user = undefined;
        })
        .addCase(isAuthenticate.fulfilled,(state,{payload})=>{
            state.user = payload??null;
        })

        .addCase(isAuthenticate.rejected,state=>{
            state.user = null;
        })
    },
})

export const { completedWalkthrough, removeUser } = authSlice.actions;
export default authSlice.reducer;