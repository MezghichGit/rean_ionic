import { StatusBar } from 'expo-status-bar';
import { Text, View,StyleSheet } from 'react-native';

function ContactScreen() {
    return (<View style={styles.container}>
      <Text>Leave a message here</Text>
      <StatusBar style="auto" />
    </View>);
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default ContactScreen;