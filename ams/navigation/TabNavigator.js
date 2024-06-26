import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import NewsScreen from '../screens/NewsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddProviderScreen from '../screens/AddProviderScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddArticleScreen from '../screens/AddArticleScreen';
import authtoken from '../service/authtoken';
import { useNavigation } from '@react-navigation/native';
import MapScreen  from '../screens/MapScreen';
const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="ListProviders" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddProvider" component={AddProviderScreen} options={({ route }) => ({
                title: route.params?.title,
                headerStyle: {
                    backgroundColor: '#DFF8F7',
                }
            })}
        />
        <Stack.Screen name="Maps" component={MapScreen} options={({route}) => ({
          title: route.params?.title,
          headerStyle: {
            backgroundColor: '#DFF8F7',
          }
        })}
      />

    </Stack.Navigator>
);



const ArticleStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="ListeArticles" component={ArticleScreen} options={{ headerShown: false }} />
        <Stack.Screen
            name="AddArticle"
            component={AddArticleScreen}
            options={({ route }) => ({
                title: route.params?.title,
                headerStyle: {
                    backgroundColor: '#DFF8F7',
                }
            })}
        />
    </Stack.Navigator>
);


export default function TabNavigator() {

    const navigation = useNavigation();
    const logout = () => {
        authtoken.logout();
        navigation.navigate('Login');
    };
    const LogoutButton = () => (
        <TouchableOpacity onPress={logout} style={{ marginRight: 10 }}>
            <Ionicons name="log-out-outline" size={25} color="#000" />
        </TouchableOpacity>
    );


    return (
        <tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name == "Providers") { iconName = "home-outline"; }
                    if (route.name == "Articles") { iconName = "phone-portrait-outline"; }
                    if (route.name == "News") { iconName = "newspaper-outline"; }
                    return (
                        <Ionicons
                            name={iconName}
                            color={color}
                            size={size}
                        />
                    );
                },
            })}>

            <tab.Screen name="Providers" component={HomeStack} options={{ title: 'Providers' }} />
            <tab.Screen name="Articles" component={ArticleStack} options={{ title: 'Articles' }} />
            <tab.Screen name="News" component={NewsScreen} options={{ title: 'News'}} />
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
