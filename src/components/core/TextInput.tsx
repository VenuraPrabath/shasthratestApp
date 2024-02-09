import { useState } from "react"
import { TextInput, TextInputProps } from "react-native-paper"

export const PrimaryTextInput = (props:TextInputProps) => {
    return (
        <TextInput {...props} mode='outlined' outlineStyle={{borderRadius:8}} contentStyle={{fontFamily:"Nunito-SemiBold"}} />
    )
}

export const PrimaryPasswordInput = (props:TextInputProps) => {
    const [secure,setSecure] = useState<boolean>(true);
    const { value } = props;
    return (
        <TextInput {...props} mode='outlined' secureTextEntry={secure} right={!!value && <TextInput.Icon onPress={()=>setSecure(!secure)} forceTextInputFocus={false} icon={secure?"eye":"eye-off"} />} outlineStyle={{borderRadius:8}} contentStyle={{fontFamily:"Nunito-SemiBold"}} />
    )
}