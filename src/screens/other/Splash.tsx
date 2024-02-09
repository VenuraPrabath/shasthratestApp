import { View, Image } from 'react-native'
import { useEffect } from 'react'
import { useAppDispatch } from 'hooks/redux'
import { isAuthenticate, isCompleteWalkthrough } from 'store/auth/service'
import { Logo } from 'assets/images'
import color from 'constants/color'

const Splash = () => {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(isCompleteWalkthrough())
        dispatch(isAuthenticate())
    },[])
    return (
        <View style={{flex:1,backgroundColor:color.PRIMARY,alignItems:"center",justifyContent:"center"}}>
            <Image source={Logo} style={{maxWidth:200,maxHeight:200}}/>
        </View>
    )
}

export default Splash