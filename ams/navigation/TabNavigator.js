import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const tab = createBottomTabNavigator();
export default function TabNavigator() {
    return (
        <tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name == "Providers") { iconName = "home-outline"; }

                    return (
                        <Ionicons
                            name={iconName}
                            color={color}
                            size={size}
                        />
                    );
                },
            })}>

            <tab.Screen name="Providers" component={HomeScreen} options={{ title: 'Providers' }} />
            <tab.Screen name="Home1" component={HomeScreen} options={{ title: 'Providers' }} />
            <tab.Screen name="Home2" component={HomeScreen} options={{ title: 'Providers' }} />
        </tab.Navigator>

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
