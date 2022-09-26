import React, { useCallback, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from './styles'

import { Task } from '@components/Tasks'

import LogoSvg from '@assets/Logo.svg'
import PlusSvg from '@assets/plus.svg'
import ClipboardSvg from '@assets/Clipboard.svg'

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskName, setTaskName] = useState('')
  const [checked, setChecked] = useState(false)
  const [created, setCreated] = useState(0)
  const [completed, setCompleted] = useState(0)

  function handleTaskAdd() {
    if (taskName === '') {
      Alert.alert('Erro', 'Insira uma tarefa')
    } else {
      if (tasks.includes(taskName)) {
        return Alert.alert('Opa!', `Você já adicionou essa tarefa.`)
      }
      setTasks((prevState) => [...prevState, taskName])
      setTaskName('')
    }
  }

  function handleTaskRemove(name: string) {
    Alert.alert('Remover', 'Deseja remover essa tarefa?', [
      {
        text: 'Sim',
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task !== name)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  const handlePressCheckbox = useCallback(() => {
    setChecked((prevState) => !prevState)
  }, [])

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
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <PlusSvg height={62} width={22} />
        </TouchableOpacity>
      </View>
      <View style={styles.below}>
        <Text style={styles.created}>Criadas</Text>
        <View style={styles.zeroborder}>
          <Text style={styles.zero}></Text>
        </View>
        <Text style={styles.completed}>Concluídas</Text>
        <View style={styles.zeroborder}>
          <Text style={styles.zero}>{completed}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            name={item}
            onRemove={() => handleTaskRemove(item)}
          />
        )}
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
