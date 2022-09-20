import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import LogoSvg from '../../assets/Logo.svg'
import PlusSvg from '@assets/plus.svg'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <LogoSvg
          style={{
            position: 'absolute',
            top: 60,
            left: 110,
          }}
          width={150}
          height={42}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          // onChangeText={setParticipantName}
          // value={participantName}
        />

        <TouchableOpacity
          style={styles.button}
          // onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            <PlusSvg height={62} width={22} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.below}>
        <Text style={styles.created}>Criadas</Text>
        <View style={styles.zeroborder}>
          <Text style={styles.zero}>0</Text>
        </View>
        <Text style={styles.completed}>Concluídas</Text>
        <View style={styles.zeroborder}>
          <Text style={styles.zero}>0</Text>
        </View>
      </View>
    </View>
  )
}
