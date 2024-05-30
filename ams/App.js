import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native';
import Navigation from './navigation';
import registerNNPushToken from 'native-notify';
export default function App() {
  registerNNPushToken(21579, '7ohbRkDJaScp13QqG31kgP');
  return (
    <SafeAreaView style={styles.container}>
     <Navigation />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F8FEFE'
  },
});
