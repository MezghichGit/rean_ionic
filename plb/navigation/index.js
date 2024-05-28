import { StyleSheet } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from '../screens/ProductsScreen';
import DetailsProductScreen from '../screens/DetailsProductScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ProductList'>
                <Stack.Screen name="ProductDetails" component={DetailsProductScreen} options={{ title: 'Détails produit' }} />
                <Stack.Screen name="ProductList" component={ProductsScreen} options={{ title: 'Nos produits' }} />
                </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FEFE'
    },
});

export default Navigation