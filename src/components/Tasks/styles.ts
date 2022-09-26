import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginHorizontal: 10,
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },

  button: {
    marginRight: 20,
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    marginLeft: 15,
  },

  taskNameFinished: {
    flex: 1,
    fontSize: 16,
    color: '#808080',
    marginLeft: 16,
    textDecorationLine: 'line-through',
  },
})
