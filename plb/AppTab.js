
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccueilScreen from './screens/AccueilScreen';
import ContactScreen from './screens/ContactScreen';
const tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <tab.Navigator>
       <tab.Screen name="Home" component={AccueilScreen} options={{ title: 'Accueil' }}/> 
       <tab.Screen name="Contact" component={ContactScreen} options={{ title: 'Call us' }}/> 
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

