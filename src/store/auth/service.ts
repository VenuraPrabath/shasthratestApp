// import http from '@/utils/http'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { authStorage } from 'constants/storage';
import useLocalStorage from 'hooks/useLocalStorage';

export const isCompleteWalkthrough = createAsyncThunk("auth/isCompleteWalkthrough",async(_,{rejectWithValue})=>{
    try {
        const res = await useLocalStorage.getItem(authStorage.walkthrough);
        await new Promise(res=>{
            setTimeout(res,1000);
        })
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const isAuthenticate = createAsyncThunk("auth/isAuthenticate",async(_,{rejectWithValue})=>{
    try {
        useLocalStorage.setItem(authStorage.authenticate,{id:"92030",username:"lakshitha",school:"holy cross collage",university:"java institute",number:"0759909773",address:"140/1 st marry's road kuda payagala, payagala",email:"lakshithasandamal999@gmail.com",avatar:"https://pics.craiyon.com/2023-10-22/b00a41cd1d87467d961c144b7169932c.webp"})
        const res = await useLocalStorage.getItem(authStorage.authenticate);
        await new Promise(res=>{
            setTimeout(res,2000);
        })
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
});
