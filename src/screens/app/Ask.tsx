import React, { useEffect, useState } from 'react'
import { View, useWindowDimensions } from 'react-native'   
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { changeStatusBar } from 'store/app'
import color from 'constants/color'
import { ScrollView } from 'react-native-gesture-handler'
import { Text } from 'react-native-paper'
import DropDownPicker from 'react-native-dropdown-picker';
import { SingleSelectDropdown } from 'components'

const Ask = () => {
  const dispatch = useAppDispatch();
  const { width, height } = useWindowDimensions();
  const { statusBar } = useAppSelector(state => state.app);

  const [dropDownValue, setDropDownValue] = useState("");
  const [dropDownItems, setDropDownItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);

  useEffect(() => {
    dispatch(changeStatusBar({ backgroundColor: color.SECONDARY }))
  }, [])

  return (
    <ScrollView horizontal scrollEnabled={false}>
      <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: color.SECONDARY, height, width }}>
        <Text variant='titleLarge'>Ask a question</Text>
        <Text variant='titleSmall' style={{ marginTop: 40 }}>Subject</Text>
        <View style={{marginTop:20}}>
        {/* <SingleSelectDropdown value={dropDownValue} items={dropDownItems} setValue={setDropDownValue} setItems={setDropDownItems} /> */}
        </View>
        <Text variant='titleSmall' style={{ marginTop: 40 }}>Question</Text>
      </View>
    </ScrollView>
  )
}

export default Ask