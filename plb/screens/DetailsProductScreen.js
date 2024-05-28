import {View,Text } from 'react-native';
const DetailsProductScreen = ({ navigation, route }) => {
    return (
    <View>
    <Text>Titre: {route.params.produit.title}</Text>
    <Text>Prix: {route.params.produit.prix}</Text>
    <Text>Ingrédients{route.params.produit.ingredients}</Text>
    </View>
    )
  };

  export default DetailsProductScreen;