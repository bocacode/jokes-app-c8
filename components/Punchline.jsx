import { Text } from 'react-native'
import styles from '../styles'

export default function Punchline({ punchline }) {
  return (
    <Text style={styles.punchline}>{punchline}</Text>
  )
}