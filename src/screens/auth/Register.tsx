import { useState } from 'react'
import { Text } from 'react-native-paper'
import { Image, ScrollView, View, useWindowDimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PrimaryPasswordInput, PrimaryTextInput } from 'components/core/TextInput'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParams } from 'constants/routes'
import { PrimaryBtn } from 'components/core/Button'
import { Logo } from 'assets/images'
import { IRegisterUser } from 'types'
import color from 'constants/color'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { register } from 'store/auth/service'

const Register = ({ navigation }:NativeStackScreenProps<AuthStackParams>) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state=>state.auth);
  const { width, height } = useWindowDimensions();
  const [user,setUser] = useState<IRegisterUser>({username:"",email:"",password:""});
  return (
    <KeyboardAwareScrollView>
      <ScrollView>
        <View style={{flex:1,backgroundColor:color.PRIMARY,minHeight:height}}>
          <View style={{paddingHorizontal:20,paddingVertical:30}}>
            <Text variant='titleLarge'>Welcome</Text>
            <Text variant='bodyMedium' style={{textAlign:"center",paddingHorizontal:5,marginTop:5}}>Publish, an LMS provides an instructor with a way to create performance.</Text>
          </View>
          <View style={{flex:1,backgroundColor:color.SECONDARY,borderTopLeftRadius:25,borderTopRightRadius:25,paddingHorizontal:30}}>
              <View style={{width:width/3,height:width/3,backgroundColor:color.PRIMARY,alignSelf:"center",marginTop:30,justifyContent:"center",alignItems:"center",borderRadius:width/3}}>
                <Image source={Logo} style={{width:width/3.5,height:width/3.5,}}/>
              </View>
              <Text variant='titleLarge' style={{textAlign:"center",marginTop:15}}>Register</Text>
              <Text variant='bodyMedium' style={{textAlign:"center",marginTop:5}}>Publish, an LMS provides an instructor with a way to create performance.</Text>
              <View style={{flex:1,minHeight:30}}></View>
              <View style={{alignItems:"center",paddingBottom:40,rowGap:5}}>
                <PrimaryTextInput onChangeText={username=>setUser({...user,username})} style={{width:"100%"}} placeholder='Enter name' label={"Username"}/>
                <PrimaryTextInput onChangeText={email=>setUser({...user,email})} style={{width:"100%"}} placeholder='Enter email' label={"Email"}/>
                <PrimaryPasswordInput style={{width:"100%"}} value={user.password} onChangeText={password=>setUser({...user,password})} placeholder='Enter password' label={"Password"} />
                <PrimaryBtn onPress={()=>dispatch(register(user))} loading={auth.isLoading} style={{marginTop:10}} contentStyle={{paddingHorizontal:50}}>Register</PrimaryBtn>
                <View style={{flexDirection:"row",columnGap:5,alignItems:"flex-end",marginTop:5}}>
                  <Text variant='labelSmall'>Already Registered?</Text>
                  <Text variant='titleSmall' style={{fontSize:16,color:color.PRIMARY,paddingHorizontal:5}} onPress={()=>navigation.navigate("login")}>Login</Text>
                </View>
              </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  )
}

export default Register