import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

import logoImg from '../../assets/Logo.png'

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Image source={logoImg} stule={styles.logo} />
        <View style={styles.top}></View>
      </View>
    </>
  )
}
