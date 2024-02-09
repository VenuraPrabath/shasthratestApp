import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Image, View, useWindowDimensions, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableRipple } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { changeStatusBar } from "store/app";
import { AppStackParams, AppTabParams } from "constants/routes";
import { HomeAskQuest, HomeAvailableQuest, HomeRecentQuest, Logo } from "assets/images";
import color from "constants/color";

const Home = ({navigation}:NativeStackScreenProps<AppStackParams&AppTabParams>) => {
  const dispatch = useAppDispatch();
  const { width,height } = useWindowDimensions();

  useFocusEffect(useCallback(()=>{
    dispatch(changeStatusBar({backgroundColor:color.PRIMARY}))
  },[]))

  return (
    <ScrollView>
      <View style={{flex:1,backgroundColor:color.PRIMARY,minHeight:height}}>
          <View style={{paddingHorizontal:20,paddingVertical:30,flexDirection:"row"}}>
            <Image source={Logo} style={{width:width/3,height:width/3}}/>
            <View style={{maxWidth:width-(width/3+40),width:"100%",justifyContent:"space-around"}}>
              <Text variant='titleLarge'>Welcome</Text>
              <Text variant='bodyMedium' style={{marginTop:5}}>Publish, an LMS provides an instructor with a way to create performance.</Text>
            </View>
          </View>
          <View style={{flex:1,backgroundColor:color.SECONDARY,paddingHorizontal:20,borderTopLeftRadius:25,borderTopRightRadius:25}}>
            <View style={{backgroundColor:color.PRIMARY,marginTop:70,padding:15,borderRadius:20}}>
                <View style={{flexDirection:"column"}}>
                  <Text variant="titleMedium">Questions Quota</Text>
                  <Text variant="bodyLarge">2/10</Text>
                </View>
                <HomeAvailableQuest style={{position:"absolute",right:0,top:-50}} width={100}/>
                <Text style={{textAlign:"right", marginTop:15 ,textDecorationLine:"underline"}} variant="bodyMedium">See Plans</Text>
            </View>
            <Text variant="titleMedium" style={{marginTop:40}}>Activities</Text>
            <View style={{marginTop:10,borderColor:color.ACCENT,borderWidth:1,borderRadius:20,overflow:"hidden"}}>
              <TouchableRipple style={{padding:15}} onPress={()=>navigation.navigate("recentQuestions")}>
                  <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <HomeRecentQuest width={70}/>
                    <Text variant="titleMedium">Recent Questions</Text>
                  </View>
              </TouchableRipple>
            </View>
            <View style={{marginTop:10,borderColor:color.ACCENT,borderWidth:1,borderRadius:20,overflow:"hidden"}}>
              <TouchableRipple style={{padding:15}} onPress={()=>navigation.navigate("ask")}>
                  <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Text variant="titleMedium">Ask a Question</Text>
                    <HomeAskQuest width={90}/>
                  </View>
              </TouchableRipple>
            </View>
          </View>
      </View>
    </ScrollView>
  )
}

export default Home