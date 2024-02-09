import { createStackNavigator } from "@react-navigation/stack";
import { Splash } from "screens";
import { splash } from "constants/routes";

const Stack = createStackNavigator();

const SplashStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={splash.SPLASH} component={Splash}/>
    </Stack.Navigator>
  )
}

export default SplashStack