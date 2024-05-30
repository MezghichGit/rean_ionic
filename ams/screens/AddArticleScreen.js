import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/style';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from "react-native-vector-icons/Ionicons";

const AddArticleScreen = () => {
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [prix, setPrix] = useState(0)
    const [provider, setProvider] = useState("/api/providers/2")
    const navigation = useNavigation();
    const addArticle = async () => {
        try {
            let r = axios.post("https://ams.smart-it-partner.com/api/articles", {
                "name": name,
                "photo": photo,
                "prix": prix,
                "provider": provider,
            }, {
                headers: {
                    "Content-Type": "application/ld+json"
                }
            })
            navigation.navigate('ListeArticles');
            /*navigation.reset({
                index: 0,
                routes: [{ name: 'Devices', params: { refresh: true } }],
            });*/
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.label}>Photo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="set photo"
                    value={photo}
                    onChangeText={setPhoto}
                />
                <Text style={styles.label}>Prix</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Price"
                    value={prix}
                    onChangeText={setPrix}
                    type="number"
                />
                <Text style={styles.label}>Fournissuer</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Fournisseur"
                    value={provider}
                    onChangeText={setProvider}
                />
                <TouchableOpacity style={styles.button} onPress={addArticle}>
                    <Text style={styles.buttonText}>Valider</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddArticleScreen;
