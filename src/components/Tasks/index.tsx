import React from 'react'
import { Pressable, useColorModeValue, useToken } from 'native-base'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import TrashSvg from '@assets/Layer2.svg'
// import PurpleSvg from '@assets/purple.svg'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'

type Props = {
  name: string
  onRemove: () => void
  isDone: boolean
  onToggleCheckbox?: () => void
}

export function Task({ name, onRemove, onToggleCheckbox, isDone }: Props) {
  // usando (props) tbm serve

  const highlightColor = useToken(
    'colors',
    useColorModeValue('blue.500', 'blue.400'),
  )
  const boxStroke = useToken(
    'colors',
    useColorModeValue('muted.300', 'muted.500'),
  )

  const checkmarkColor = useToken('colors', useColorModeValue('white', 'white'))

  return (
    <View style={styles.container}>
      <Pressable onPress={onToggleCheckbox}>
        <AnimatedCheckbox
          highlightColor={highlightColor}
          checkmarkColor={checkmarkColor}
          boxOutlineColor={boxStroke}
          checked={isDone}
        />
      </Pressable>
      {/* <PurpleSvg /> */}

      <Text style={styles.name}>
        {/* Dai ficaria {props.name} */}
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <TrashSvg />
      </TouchableOpacity>
    </View>
  )
}
