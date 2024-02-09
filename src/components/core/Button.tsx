import { useNavigation } from "@react-navigation/native"
import { Button, ButtonProps, IconButton, IconButtonProps } from "react-native-paper"
import color from "constants/color"

export const PrimaryBtn = (props:ButtonProps) => {
  return (
    <Button {...props} mode={"contained"} labelStyle={{fontFamily:"Nunito-SemiBold",fontSize:16,lineHeight:22}}/>
  )
}

export const BackButton = (props:Omit<IconButtonProps,'icon'>)=>{
  const { goBack } = useNavigation();
  return(
    <IconButton {...props} onPress={goBack} iconColor={color.ACCENT} icon={"chevron-left"} size={35} />
  )
}