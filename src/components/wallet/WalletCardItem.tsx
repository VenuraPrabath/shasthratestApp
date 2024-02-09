import color from "constants/color";
import { View, } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";

type ItemProps = { fields: string[] };

export const PlansCardItem = ({ fields }: ItemProps) => (
    <View style={{ borderColor: color.ACCENT, borderWidth: 1, borderRadius: 20, overflow: 'hidden' }}>
        <TouchableRipple style={{ paddingVertical: 25, paddingHorizontal: 25 }} onPress={() => console.log('plan pressed')}>
            <View style={{ rowGap: 5 }}>
                {fields.map((item, index) => <Text key={index} variant={index == 0 ? 'titleSmall' : index == 1 ? 'labelSmall' : 'bodyMedium'} style={{ textAlign: 'center' }}>{item}</Text>)}
            </View>
        </TouchableRipple>
    </View>
)
export const AddonsCardItem = ({ fields }: ItemProps) => (
    <View style={{ borderColor: color.ACCENT, borderWidth: 1, borderRadius: 20, overflow: 'hidden' }}>
        <TouchableRipple style={{ paddingVertical: 25, paddingHorizontal: 12 }} onPress={() => console.log('plan pressed')}>
            <View style={{ rowGap: 5 }}>
                {fields.map((item, index) => <Text key={index} variant={index == 0 ? 'titleSmall' : index == 1 ? 'labelSmall' : 'bodySmall'} style={{ textAlign: 'center' }}>{item}</Text>)}
            </View>
        </TouchableRipple>
    </View>
)