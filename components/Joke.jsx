import { Text } from 'react-native'
import styles from '../styles'

export default function Joke({ joke }) {
  return (
    <Text style={styles.jokeText}>{joke}</Text>
  )
}