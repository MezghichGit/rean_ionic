import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const SignUpScreen = props => {

    const [nom, setNom] = useState("Mezghich");
    const [prenom, setPrenom] = useState("Mohamed Amine");
    const [password, setPassword] = useState("123456789")
    const [username, setUsername] = useState("amine.mezghich@gmail.com");
    const [telephone, setTelephone] = useState("2030405060");
    const [adresse, setAdresse] = useState("France, Paris");
    const navigation=useNavigation();

    const addUserData = async () => {
        const formData = new FormData();
        if (nom.trim() === ''&& prenom.trim() === '' && password.trim() === '' && email.trim() === '') {
            Alert.alert('Erreur', 'Une erreur est survenue lors de l\'inscription');
            return;
        }
        formData.append('password', password);
        formData.append('email', username);
        formData.append('nom', nom);
        formData.append('prenom', prenom);
        formData.append('telephone', telephone);
        formData.append('adresse', adresse);
        try {
            const response = await axios.post("https://ams.smart-it-partner.com/register/mobile", formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Votre compte a été crée avec succès!');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Erreur', 'Une erreur est survenue lors de l\'inscription', error);
        }
    };

    const  onSignInPressed= () =>{
      navigation.navigate('Login')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ backgroundColor: '#ffffff', }}>
                    <View
                        style={{
                            backgroundColor: '#DFF8F7', padding: 50,
                            borderBottomLeftRadius: 60
                        }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center', marginTop: 30
                            }}>
                            <Image
                                source={require('../assets/sip.png')} />
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#DFF8F7', }}>
                    <View style={{
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        paddingHorizontal: 30,
                        borderTopRightRadius: 60
                    }}>
                        <View style={styles.spacing_big}></View>
                        <View style={styles.label}>
                            <Text style={styles.label}>Nom </Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNom}
                            value={nom}
                        />
                        <View style={styles.spacing_big}></View>
                        <View style={styles.label}>
                            <Text style={styles.label}>Prénom</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPrenom}
                            value={prenom}
                        />

                        <View style={styles.spacing_big}></View>
                        <View style={styles.label}>
                            <Text style={styles.label}>Téléphone</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setTelephone}
                            value={telephone}
                        />
                        
                        <View style={styles.spacing_big}></View>
                        <View style={styles.label}>
                            <Text style={styles.label}>Adresse</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setAdresse}
                            value={adresse}
                        />

                        <View style={styles.spacing_big}></View>

                        <View style={styles.label}>
                            <Text style={styles.label}>Email</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setUsername}
                            value={username}
                        />
                        <View style={styles.spacing}></View>
                        <View style={styles.label}>
                            <Text style={styles.label}>Mot de passe</Text>
                        </View>
                        <View style={styles.passwordInputContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                onChangeText={setPassword}
                                secureTextEntry
                                value={password}
                            />
                        </View>
                        <View style={styles.spacing}></View>
                        <TouchableOpacity onPress={addUserData}>
                            <View
                                style={{
                                    margin: 10,
                                    backgroundColor: '#07B0A8',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 100,
                                    paddingVertical: 10,
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 20
                                    }}>S'inscrire </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onSignInPressed}>
                            <View
                                style={{
                                    margin: 10,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 100,
                                    paddingVertical: 10,
                                }}>
                                <Text
                                    style={{
                                        color: '#07B0A8',
                                        fontSize: 20
                                    }}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.text}>© 2024 Smart It Partner - Tous droits réservés</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'white',
        backgroundColor: '#e7e7e7',
        paddingHorizontal: 10,
        borderRadius: 100,
    },
    passwordInput: {
        flex: 1,
        height: 40,
    },
    spacing: {
        margin: 10
    },
    spacing_big: {
        margin: 10
    },
    label: {
        fontWeight: '300',
        paddingLeft: 5,
        fontSize: 17,
        color: '#999',
    },
    input: {
        height: 40,
        margin: 5,
        borderRadius: 100,
        backgroundColor: '#e7e7e7',
        padding: 10,
    },
    imagecontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image_logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 7,
        elevation: 5,
        marginTop: 100,
    },
    footer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        alignItems: 'center',
    },
    text: {
        color: 'gray',
        fontSize: 14,
    },
});
export default SignUpScreen;
