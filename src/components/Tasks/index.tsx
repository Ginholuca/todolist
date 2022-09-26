import React, { useState } from 'react'
import { PanGestureHandlerProps } from 'react-native-gesture-handler'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import CheckSvg from '@assets/check.svg'
import PurpleSvg from '@assets/purple.svg'

import TrashSvg from '@assets/Layer2.svg'

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  name: string
  onRemove?: () => void
}

export function Task({ name, onRemove }: Props) {
  const [isLiked, setIsLiked] = useState(false)
  // usando (props) tbm serve
  const handleLikePress = () => {
    setIsLiked(!isLiked)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLikePress}>
        {isLiked ? <PurpleSvg /> : <CheckSvg />}
      </TouchableOpacity>
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
