import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    flex: 1,
    backgroundColor: '#ffcc00',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  jokeText: {
    textAlign: 'center',
    fontSize: 48,
  },
  punchline: {
    textAlign: 'center',
    color: '#c00',
    fontSize: 32,
  },
  bigButton: {
    backgroundColor: 'blue',
    padding: 24,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
})

export default styles;
