import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

import TrashSvg from '@assets/Layer2.svg'

type Props = {
  name: string
  onRemove: () => void
}

export function Task({ name, onRemove }: Props) {
  // usando (props) tbm serve
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {/* Dai ficaria {props.name} */}
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <TrashSvg style={styles.buttonText} />
      </TouchableOpacity>
    </View>
  )
}
