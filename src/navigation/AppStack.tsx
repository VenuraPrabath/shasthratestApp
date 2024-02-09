import { useAppDispatch, useAppSelector } from "hooks/redux";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, ScrollView, View, useWindowDimensions } from "react-native";
import { Avatar, IconButton, Button } from "react-native-paper";
import { Ask, Home, RecentQuestions, Wallet } from "screens";
import { IAppDrawerItem, IAppTabItem } from "types";
import { PrimaryBtn } from "components/core/Button";
import { AppStackParams, AppTabParams } from "constants/routes";
import { Dummy, Logo } from "assets/images";
import { removeUser } from "store/auth";
import color from "constants/color";

const Stack = createStackNavigator<AppStackParams>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator<AppTabParams>();

const AppTab = ()=>{
    const navItems:IAppTabItem[] = [
        {
            route:"ask",
            icon:"message-square",
        },
        {
            route:"home",
            icon:"home",
        },
        {
            route:"wallet",
            icon:"credit-card",
        },
    ]
    return(
        <Tab.Navigator backBehavior="initialRoute" tabBar={({navigation,state})=>
            <View style={{backgroundColor:color.SECONDARY,flexDirection:"row",justifyContent:"space-around",borderTopWidth:.5,borderColor:color.BORDER_LIGHT}}>
                {navItems.map(({route,icon},index)=>(
                    <IconButton key={index} onPress={()=>navigation.navigate(route)} iconColor={state.index == index ? color.PRIMARY : color.ACCENT} icon={icon} />
                ))}
            </View>
        } initialRouteName="home">
            <Tab.Screen options={{headerShown:false}} name="ask" component={Ask}/>
            <Tab.Screen options={{headerShown:false}} name="home" component={Home}/>
            <Tab.Screen options={{headerShown:false}} name="wallet" component={Wallet} />
        </Tab.Navigator>
    )
}

const AppDrawer = () => {
    const drawerItems:IAppDrawerItem[] = [
        {
            route:"drawerHome",
            label:"Home"
        },
        {
            route:"setting",
            label:"Settings"
        },
        {
            route:"privacy",
            label:"Privacy"
        },
        {
            route:"terms&conditions",
            label:"Terms & Conditions"
        },
    ]
    const { width, height } = useWindowDimensions();
    const dispatch = useAppDispatch();
    const auth = useAppSelector(state=>state.auth);
    const { statusBar } = useAppSelector(state=>state.app);

    return(
        <Drawer.Navigator  initialRouteName="drawerHome" 
            screenOptions={{
                header(props) {
                    return(
                        <View style={{paddingStart:10,paddingEnd:20,paddingVertical:10,backgroundColor:statusBar.backgroundColor,justifyContent:"space-between",flexDirection:"row"}}>
                            <IconButton onPress={props.navigation.toggleDrawer} iconColor={color.ACCENT} size={30} icon={"align-left"}/>
                            <Avatar.Image size={58} style={{backgroundColor:color.SECONDARY}} source={!!auth.user?.avatar?{uri:auth.user.avatar}:Dummy} />
                        </View>
                    )
                },
            }}
            drawerContent={props=>(
                <ScrollView>
                    <View style={{paddingVertical:20,rowGap:30,alignItems:"center",height}}>
                        <Image source={Logo} style={{width:width/3,height:width/3,backgroundColor:color.PRIMARY,borderRadius:width/3}} />
                        {drawerItems.map(({label,route},index)=>(
                            <Button key={index} mode="text" onPress={()=>props.navigation.navigate(route)} labelStyle={{fontSize:20,fontFamily:"Nunito-Bold",height:26,lineHeight:26,color:props.state.index == index ? color.PRIMARY : color.ACCENT}}>{label}</Button>
                        ))}
                        <View style={{flex:1,marginVertical:"auto"}}></View>
                        <PrimaryBtn style={{width:"80%"}} onPress={()=>dispatch(removeUser())}>Sign Out</PrimaryBtn>
                    </View>
                </ScrollView>
            )}>
            <Drawer.Screen name="appTab" component={AppTab} />
        </Drawer.Navigator>
    )
}

const AppStack = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={"home"} component={AppDrawer}/>
            <Stack.Screen name={"recentQuestions"} component={RecentQuestions}/>
        </Stack.Navigator>
    )
}


export default AppStack

