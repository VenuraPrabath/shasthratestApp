import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "react-native"
import { useAppSelector } from "hooks/redux"
import AuthStack from "./AuthStack"
import SplashStack from "./SplashStack"
import WalkthroughStack from "./WalkthroughStack"
import AppStack from "./AppStack"

const Router = () => {
  const { statusBar } = useAppSelector(state=>state.app);
  const auth = useAppSelector(state=>state.auth);
  return (
    <NavigationContainer>
      <StatusBar {...statusBar}/>
      {
        auth.completeWalkthrough === undefined || auth.user === undefined ?
          <SplashStack/>
          : auth.completeWalkthrough === null ? <WalkthroughStack/>
          : auth.user === null ? <AuthStack/> 
          : <AppStack/>
      }
    </NavigationContainer>
  )
}

export default Router