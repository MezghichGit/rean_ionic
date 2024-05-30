import React, { useState, useEffect, useCallback } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import styles from '../styles/style';
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [providers, setProviders] = useState([]);

    const fetchProviders = async () => {
        const u = await asyncStorage.getItem("token");
        axios.defaults.headers['Authorization'] = 'Bearer ' + u;
        const a = await asyncStorage.getItem("id");
        const res = await axios
            .get("https://ams.smart-it-partner.com/api/providers")
            .then(response => response.data["hydra:member"])
        setProviders(res);
        //console.log(res)
    }
    useEffect(() => {
        fetchProviders();
    }, []);

    useFocusEffect(
        useCallback(() => {
            const interval = setInterval(async () => { fetchProviders(); }, 1000);
            return () => clearInterval(interval);
        }, [])
    );

    /*const addProvider = () => {
        console.log('Ajouter un provider');
    };*/
    const addProvider = () => { navigation.navigate('AddProvider'); };

    const deleteProvider = async (idprovider) => {
        await axios.delete("https://ams.smart-it-partner.com/api/providers/" + idprovider)
            .then(response => {
                response.data;
            })
        navigation.navigate('ListProviders');
    }


    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.addButton} onPress={addProvider}>
                <Icon name="plus" size={20} color="white" />
                <Text style={styles.addButtonText}>Add Provider</Text>
            </TouchableOpacity>


            <FlatList
                enableEmptySections={true}
                data={providers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.box}>

                            <Image style={styles.image} resizeMode="contain" source={{ uri: 'https://ams.smart-it-partner.com/uploads/provider/' + item.photo }} />
                            <View style={styles.boxContent}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.description}>{item.adress}</Text>
                                <Text style={styles.description}>{item.email}</Text>
                                <View style={styles.buttonDelete}>
                                    <TouchableOpacity
                                        style={[styles.button, styles.view]}
                                        onPress={() => deleteProvider(item.id)}
                                    >
                                        <Image
                                            style={styles.icon}
                                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6861/6861362.png' }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.button, styles.view]}

                                        onPress={() => navigation.navigate('Maps', { id: item.id})}
                                    >
                                        <Image
                                            style={styles.icon}
                                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/512px-Google_Maps_icon_%282015-2020%29.svg.png' }}
                                        />
                                    </TouchableOpacity>

                                </View>

                            </View>
                        </View>
                    )
                }}
            /></View>
    )
}

export default HomeScreen;
