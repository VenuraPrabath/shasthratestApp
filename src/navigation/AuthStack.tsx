import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useAppDispatch } from "hooks/redux";
import { changeStatusBar } from "store/app";
import { Login, Register } from "screens";
import { AuthStackParams } from "constants/routes";
import color from "constants/color";

const Stack = createStackNavigator<AuthStackParams>();

const AuthStack = () => {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(changeStatusBar({backgroundColor:color.PRIMARY}))
  },[])
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={"login"} component={Login}/>
      <Stack.Screen name={"register"} component={Register}/>
    </Stack.Navigator>
  )
}

export default AuthStack