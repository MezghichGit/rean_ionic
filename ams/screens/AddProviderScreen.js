import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/style';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from "react-native-vector-icons/Ionicons";

const AddProviderScreen = () => {

    const [name, setName] = useState();
    const [adress, setAdress] = useState();
    const [email, setEmail] = useState();
    const [pickedImagePath, setPickedImagePath] = useState('');
    const navigation = useNavigation();

    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.didCancel) {
            setPickedImagePath(result.assets[0].uri);
        } else {
            console.log('Sélection d\'image annulée');
        }
    }


    // This function is triggered when the "Open camera" button pressed
    const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your camera!");
            return;
        }
        const result = await ImagePicker.launchCameraAsync();
        if (!result.didCancel) {
            setPickedImagePath(result.assets[0].uri);
        }
    }

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
            <View style={styles.imageContainer}>
                {pickedImagePath !== '' && <Image
                    source={{ uri: pickedImagePath }}
                    style={styles.imageCont}
                />
                }
            </View>
            <View style={styles.form}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.label}>Image</Text>
                    <TouchableOpacity style={styles.uploadButton} onPress={showImagePicker}>
                        <Ionicons
                            name="image"
                            size={30}
                            color="#149750"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
                        <Ionicons
                            name="camera"
                            size={30}
                            color="#165FAD"
                        />
                    </TouchableOpacity>
                </View>
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
