
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccueilScreen from './screens/AccueilScreen';
import ContactScreen from './screens/ContactScreen';
import NewspaperScreen from './screens/NewspaperScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == "Home") { iconName = "home-outline"; }
            else if (route.name == "Setting") { iconName = "settings-outline"; }
            else if (route.name == "Newsletter") { iconName = "newspaper-outline"; }
            else if (route.name == "Profile") { iconName = "person-circle-outline"; }
 
            return (<Ionicons name={iconName} color={'red'} size={20}/> );
          }
        })}>



       <tab.Screen name="Home" component={AccueilScreen} options={{ title: 'Accueil' }}/> 
       <tab.Screen name="Setting" component={ContactScreen} options={{ title: 'Call us' }}/> 
       <tab.Screen name="Newsletter" component={NewspaperScreen} options={{ title: 'Newspapers' }} />
        <tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
            
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

