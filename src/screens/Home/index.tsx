import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

import logo from '../../assets/Logo.png'

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Image source={logo} stule={styles.logo} />
        <View style={styles.top}></View>
      </View>
    </>
  )
}
