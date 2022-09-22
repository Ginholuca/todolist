import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  text: {
    fontSize: 60,
    color: '#000',
  },
  top: {
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D',
    top: 0,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 6,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  plus: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    paddingHorizontal: 18,
    width: '100%',
    flexDirection: 'row',
    marginTop: -30,
  },

  below: {
    paddingTop: 36,
    paddingBottom: 18,
    flexDirection: 'row',
    borderBottomWidth: 2,
    marginHorizontal: 18,
    borderColor: '#262626',
    marginBottom: 20,
  },

  created: {
    fontSize: 16,
    color: '#4EA8DE',
    fontWeight: 'bold',
    paddingRight: 10,
  },

  completed: {
    fontSize: 16,
    color: '#8284FA',
    fontWeight: 'bold',
    paddingLeft: 125,
    paddingRight: 10,
  },

  zero: {
    paddingHorizontal: 3,
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  zeroborder: {
    marginTop: 1,
    backgroundColor: '#262626',
    borderColor: '#262626',
    borderTopWidth: 2,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderWidth: 3,
    borderRadius: 10,
  },
  listEmptyText: {
    marginTop: 100,
    textAlign: 'center',
    color: '#808080',
    fontSize: 15,
    fontWeight: 'bold',
  },
  listEmptyText2: {
    paddingTop: 5,
    textAlign: 'center',
    color: '#555555',
    fontSize: 14,
  },
  flat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
