import React, { useState } from 'react'
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

interface Props {
  id: number
  name: string
  finished: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Props[]>([])
  const [taskName, setTaskName] = useState('')

  const tasksFinished = tasks.filter(
    (taskFiltered) => taskFiltered.finished === true,
  ).length

  function handleTaskAdd() {
    if (taskName === '') {
      Alert.alert('Erro', 'Insira uma tarefa')
    } else {
      if (!taskName.trim()) {
        return Alert.alert(
          'Tarefa já cadastrada!',
          'Já existe um tarefa na lista com esse nome.',
        )
      }

      setTasks((prevState) => [
        ...prevState,
        { id: Math.random(), name: taskName, finished: false },
      ])
      setTaskName('')
    }
  }

  function handleTaskRemove(taskName: string) {
    Alert.alert('Remover', `Remover a tarefa ${taskName}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.name !== taskName),
          ),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function handleFinishTask(taskName: string) {
    const finishedTasks = tasks.map((task) => {
      if (task.name === taskName) {
        return {
          ...task,
          finished: !task.finished,
        }
      }
      return task
    })
    setTasks(finishedTasks)
  }

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
          <Text style={styles.zero}>{tasks.length}</Text>
        </View>
        <Text style={styles.completed}>Concluídas</Text>
        <View style={styles.zeroborder}>
          <Text style={styles.zero}>{tasksFinished}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ marginRight: 20 }}
        renderItem={({ item }) => (
          <Task
            task={item}
            onRemove={() => handleTaskRemove(item.name)}
            onFinished={() => handleFinishTask(item.name)}
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
