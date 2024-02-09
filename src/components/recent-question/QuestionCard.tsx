import { View } from 'react-native'
import { Text } from 'react-native-paper';

export interface IQuestion{
    subject:string;
    status:string;
    date:string;
}

const QuestionCard = ({subject,status,date}:IQuestion) => {
  return (
    <View style={{borderWidth:.5,borderRadius:20,padding:20,marginVertical:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View>
            <Text variant='titleMedium'>{subject}</Text>
            <Text variant='bodyMedium'>{status}</Text>
        </View>
        <Text variant='bodyMedium'>{date}</Text>
    </View>
  )
}

export default QuestionCard