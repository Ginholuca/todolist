import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './styles'

import { Task } from '@components/Tasks'

import LogoSvg from '../../assets/Logo.svg'
import PlusSvg from '@assets/plus.svg'
import ClipboardSvg from '@assets/Clipboard.svg'

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])

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

      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Task />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <View style={styles.flat}>
              <ClipboardSvg
                style={{ top: 60, left: 0 }}
                height={80}
                width={100}
              />
              <Text style={styles.listEmptyText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </>
        )}
      />
    </View>
  )
}
