import { View, ScrollView, useWindowDimensions, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import color from 'constants/color'
import { Text } from 'react-native-paper';
import { WalletPiggyBank } from 'assets/images';
import { useAppDispatch } from 'hooks/redux';
import { changeStatusBar } from 'store/app';
import { AddonsCardItem, PlansCardItem } from 'components';


const Wallet = () => {
  const dispatch = useAppDispatch();
  const { width, height } = useWindowDimensions();



  const PLAN_DATA = [
    {
      fields: ["Basic", "Rs:2500", "Questions: 10"],
    },
    {
      fields: ["Basic", "Rs:2500", "Questions: 10"],
    },
    {
      fields: ["Basic", "Rs:2500", "Questions: 10"],
    },
  ]
  const ADDON_DATA = [
    {
      fields: ["Questions: 10", "Rs:2500",],
    },
    {
      fields: ["Questions: 10", "Rs:2500",],
    },
    {
      fields: ["Questions: 10", "Rs:2500",],
    },
  ]



  useEffect(() => {
    dispatch(changeStatusBar({ backgroundColor: color.SECONDARY }))
  }, [dispatch])

  return (
    <ScrollView>
      <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: color.SECONDARY, minHeight: height }}>
        <Text variant='titleLarge'>Wallet</Text>
        <View style={{ backgroundColor: color.PRIMARY, marginTop: 50, padding: 20, borderRadius: 20 }}>
          <Text variant='titleMedium'>Current Plan</Text>
          <Text variant='bodyLarge'>Basic</Text>
          <WalletPiggyBank style={{ position: 'absolute', top: -50, right: 0 }} width={150} />
          <Text variant='bodyMedium' style={{ textAlign: 'right', marginTop: 15 }}>Questions Quota</Text>
          <Text variant='bodyMedium' style={{ textAlign: 'right' }}>2/10</Text>
        </View>
        <Text variant='titleMedium' style={{ marginTop: 40 }}>Plans</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList horizontal contentContainerStyle={{ gap: 10 }} data={PLAN_DATA} renderItem={({ item }) => <PlansCardItem fields={item.fields} />} />
        </View>
        <Text variant='titleMedium' style={{ marginTop: 40 }}>Add-Ons</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList horizontal contentContainerStyle={{ gap: 10 }} data={ADDON_DATA} renderItem={({ item }) => <AddonsCardItem fields={item.fields} />} />
        </View>
      </View>
    </ScrollView>
  )
}

export default Wallet