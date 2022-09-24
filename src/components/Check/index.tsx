import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import PurpleSvg from '@assets/purple.svg'

export const CheckBox = ({ options = [], onChange }) => {
  return (
    <View>
      {options.map((op, index) => (
        <View key={1}>
          <TouchableOpacity>
            <PurpleSvg />
          </TouchableOpacity>
          <Text>{op?.text}</Text>
        </View>
      ))}
    </View>
  )
}
