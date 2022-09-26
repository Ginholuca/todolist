import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

import TrashSvg from '@assets/Layer2.svg'
import CheckSvg from '@assets/check.svg'
// import PurpleSvg from '@assets/purple.svg'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'

type Props = {
  name: string
  onRemove: () => void
}

export function Task({ name, onRemove }: Props) {
  // usando (props) tbm serve
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <CheckSvg style={{ marginLeft: 10 }} />
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
