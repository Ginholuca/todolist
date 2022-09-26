import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import CheckSvg from '@assets/check.svg'
import PurpleSvg from '@assets/purple.svg'

import TrashSvg from '@assets/Layer2.svg'

type Props = {
  task: {
    name: string
    finished: boolean
  }
  onRemove: () => void
  onFinished: () => void
}

export function Task({ task, onRemove, onFinished }: Props) {
  // usando (props) tbm serve

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onFinished}>
        {task.finished ? <CheckSvg /> : <PurpleSvg />}
      </TouchableOpacity>
      {task.finished ? (
        <Text style={styles.taskNameFinished}>{task.name}</Text>
      ) : (
        <Text style={styles.name}>{task.name}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <TrashSvg />
      </TouchableOpacity>
    </View>
  )
}
