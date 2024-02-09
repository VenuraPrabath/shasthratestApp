import { View, useWindowDimensions } from 'react-native'
import { Text } from 'react-native-paper';
import { IWalkthroughItem } from 'types'

const WalkthroughItem = ({data:{Image,title,description}}:{data:IWalkthroughItem}) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{width,paddingHorizontal:20,justifyContent:"center"}}>
        <Image width={width-40}/>
        <Text variant='titleLarge' style={{textAlign:"center"}}>{title}</Text>
        <Text variant='titleSmall' style={{textAlign:"center",marginTop:10}}>{description}</Text>
    </View>
  )
}

export default WalkthroughItem