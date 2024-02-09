import { createStackNavigator } from "@react-navigation/stack";
import { Walkthrough } from "screens";
import { useAppDispatch } from "hooks/redux";
import { walkthrough } from "constants/routes";
import { useEffect } from "react";
import { changeStatusBar } from "store/app";
import color from "constants/color";

const Stack = createStackNavigator();

const WalkthroughStack = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(changeStatusBar({backgroundColor:color.SECONDARY}))
    },[])
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={walkthrough.WALKTHROUGH} component={Walkthrough}/>
        </Stack.Navigator>
    )
}

export default WalkthroughStack