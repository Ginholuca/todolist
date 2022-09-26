import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import PurpleSvg from '@assets/purple.svg'

type Props = {
  onChange: () => void
}

export function CheckBox({ onChange }: Props) {
  return (
    <View>
      <TouchableOpacity>
        <PurpleSvg onPress={onChange} />
      </TouchableOpacity>
    </View>
  )
}
