import React, { useState, useEffect } from 'react'
import {Text, View, Image, FlatList } from 'react-native'
import styles from '../styles/style';
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import { useNavigation } from '@react-navigation/native';
const ArticleScreen = () => {
   
   // const navigation=useNavigation();
    const [articles, setArticles] = useState([]);
    //navigation.reset({ index: 0, routes: [{ name: 'Articles', params: { refresh: true } }], });
    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        const u = await asyncStorage.getItem("token");
        axios.defaults.headers['Authorization'] = 'Bearer ' + u;
        const a = await asyncStorage.getItem("id");

        const res = await axios
            .get("https://ams.smart-it-partner.com/api/articles")
            .then(response => response.data["hydra:member"])
        setArticles(res);

    }
   
    return (
        <FlatList
            enableEmptySections={true}
            data={articles}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                    <View style={styles.box}>
                        <Image style={styles.image} resizeMode="contain" source={{ uri: 'https://ams.smart-it-partner.com/uploads/article/' + item.photo }} />
                        <View style={styles.boxContent}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.description}>{item.prix}</Text>
                        </View>
                    </View>
                )
            }}
        />
    )
}

export default ArticleScreen;
