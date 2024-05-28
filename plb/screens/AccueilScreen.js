import { StatusBar } from 'expo-status-bar';
import { Text, View,StyleSheet } from 'react-native';
function AccueilScreen() {
    return (<View style={styles.container}>
      <Text>Welcome to REACT native</Text>
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
  
  export default AccueilScreen;