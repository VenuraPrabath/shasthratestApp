import React, { useCallback } from 'react'
import { View, ScrollView, useWindowDimensions, FlatList } from 'react-native'
import { Text } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native'
import { BackButton } from 'components/core/Button'
import { changeStatusBar } from 'store/app'
import { useAppDispatch } from 'hooks/redux'
import { IQuestion, QuestionCard } from 'components'
import color from 'constants/color'

const questionCards:IQuestion[] = [
    {
        subject:"Maths",
        status:"pending",
        date:"10/1/2024",
    },
    {
        subject:"Maths",
        status:"pending",
        date:"10/1/2024",
    },
    {
        subject:"Maths",
        status:"pending",
        date:"10/1/2024",
    },
    {
        subject:"Maths",
        status:"pending",
        date:"10/1/2024",
    },
    {
        subject:"Maths",
        status:"pending",
        date:"10/1/2024",
    },
    {
        subject:"Maths",
        status:"pending",
        date:"10/1/2024",
    },
    {
        subject:"Maths",
        status:"pending",
        date:"10/1/2024",
    },
    {
        subject:"Maths",
        status:"pending",
        date:"10/1/2024",
    },
]

const RecentQuestions = () => {
    const dispatch = useAppDispatch();
    const { height, width } = useWindowDimensions();

    useFocusEffect(useCallback(()=>{
        dispatch(changeStatusBar({backgroundColor:color.SECONDARY}))
    },[]))

    return (
        <ScrollView horizontal scrollEnabled={false}>
            <View style={{height,width,backgroundColor:color.SECONDARY,flex:1}}>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Text variant="titleMedium" style={{textAlign:"center",position:"absolute",width:"100%"}}>Recent Questions</Text>
                    <BackButton/>
                </View>
                <View style={{padding:20}}>
                    <FlatList style={{height:height-83}} data={questionCards} renderItem={({item})=><QuestionCard {...item}/>} />
                </View>
            </View>
        </ScrollView>
    )
}

export default RecentQuestions