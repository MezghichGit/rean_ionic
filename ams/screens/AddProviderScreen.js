import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/style';

const AddProviderScreen = () => {
    
    const [name, setName] = useState();
    const [adress, setAdress] = useState();
    const [email, setEmail] = useState();

    const navigation = useNavigation();

    const addProvider = async () => {
        const provider = {
            name: name,
            adress: adress,
            email: email,
        };
        try {
            const response = await axios.post("https://ams.smart-it-partner.com/api/providers", provider, {
                headers: { 'Content-Type': 'application/ld+json' }
            });
            navigation.navigate('ListProviders');
        } catch (error) {
            // Gérez l'erreur ici
            console.error(error);
        }
    };
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
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Adress</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Adress"
                    value={adress}
                    onChangeText={setAdress}
                />
                <TouchableOpacity style={styles.button} onPress={() => addProvider()}>
                    <Text style={styles.buttonText}>Valider</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddProviderScreen;
