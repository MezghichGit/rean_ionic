
import { StatusBar } from 'expo-status-bar';
import { Text, View,StyleSheet } from 'react-native';
function NewspaperScreen() {
    return (<View style={styles.container}>
      <Text>Newspapers</Text>
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
  
  export default NewspaperScreen;