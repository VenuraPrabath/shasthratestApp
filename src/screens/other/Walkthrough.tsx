import { useEffect, useRef, useState } from 'react'
import { View, FlatList } from 'react-native'
import { WalkthroughItem } from 'components'
import { IWalkthroughItem } from 'types'
import { useAppDispatch } from 'hooks/redux'
import { completedWalkthrough } from 'store/auth'
import { PrimaryBtn } from 'components/core/Button'
import { Walkthrough_01,Walkthrough_02,Walkthrough_03 } from 'assets/images'
import color from 'constants/color'


const Walkthrough = () => {
    const walkthroughItems:IWalkthroughItem[] = [
        {
            Image:Walkthrough_01,
            title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minima, doloremque eligendi maxime magni deleniti?",
        },
        {
            Image:Walkthrough_02,
            title:"Lorem ipsum dolor sit, adipisicing elit.",
            description:"Lorem ipsum dolor adipisicing elit. Illo minima, doloremque eligendi maxime magni deleniti?",
        },
        {
            Image:Walkthrough_03,
            title:"Lorem ipsum dolor sit, elit.",
            description:"Lorem ipsum dolor sit adipisicing elit. Illo minima, doloremque deleniti?",
        },
    ]
    const dispatch = useAppDispatch();
    const [currentIndex,setCurrentIndex] = useState<number>(0);
    const slideRef = useRef<FlatList<any>>(null);
    useEffect(()=>{
        if(currentIndex <= 2){
            slideRef.current?.scrollToIndex({ index: currentIndex, animated: true })
        }else{
            dispatch(completedWalkthrough());
        }
    },[currentIndex])
    return (
        <View style={{flex:1,backgroundColor:color.SECONDARY}}>
            <FlatList ref={slideRef} bounces horizontal scrollEnabled={false} data={walkthroughItems} renderItem={({item})=><WalkthroughItem data={item}/>}/>
            <View style={{alignItems:"center",paddingVertical:40}}>
                <View style={{flexDirection:"row",paddingBottom:20,columnGap:30}}>
                    {walkthroughItems.map((_,index)=>(
                        <View key={index} style={{width:10,height:10,borderRadius:5,backgroundColor:currentIndex === index ? color.ACCENT : color.BORDER}}></View>
                    ))}
                </View>
                <PrimaryBtn contentStyle={{paddingHorizontal:50}} onPress={()=>setCurrentIndex(currentIndex+1)}>Next</PrimaryBtn>
            </View>
        </View>
    )
}

export default Walkthrough