import { PayloadAction, createSlice  } from '@reduxjs/toolkit'
import { StatusBarProps } from 'react-native';
import color from 'constants/color';
// import type { PayloadAction } from '@reduxjs/toolkit'


interface AppState{
    isLoading:boolean;
    statusBar:StatusBarProps
}

const initialState:AppState = {
    isLoading:false,
    statusBar:{
        barStyle:"dark-content",
        backgroundColor:color.PRIMARY
    }
}

export const appSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        changeStatusBar:(state,{payload}:PayloadAction<StatusBarProps>)=>{
            state.statusBar = {...state.statusBar,...payload}
        }
    },
    // extraReducers:(builder)=>{
        
    // },
})

export const { changeStatusBar } = appSlice.actions;
export default appSlice.reducer;