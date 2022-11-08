import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

export default function Another({ getNextJoke }) {
  return (
    <TouchableOpacity style={styles.bigButton} onPress={getNextJoke}>
      <Text style={styles.buttonText}>Tell Me Another</Text>
    </TouchableOpacity>
  )
}