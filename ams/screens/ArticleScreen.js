import React, { useState, useEffect, useCallback } from 'react'
import { Text, View, Image, FlatList , TouchableOpacity} from 'react-native'
import styles from '../styles/style';
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ArticleScreen = () => {
    const navigation=useNavigation();
    // const navigation=useNavigation();
    const [articles, setArticles] = useState([]);
    //navigation.reset({ index: 0, routes: [{ name: 'Articles', params: { refresh: true } }], });
    useEffect(() => {
        fetchArticles();
    }, []);


    useFocusEffect(
        useCallback(() => {
            const interval = setInterval(async () => { fetchArticles(); }, 1000);
            return () => clearInterval(interval);
        }, [])
    );

    const fetchArticles = async () => {
        const u = await asyncStorage.getItem("token");
        axios.defaults.headers['Authorization'] = 'Bearer ' + u;
        const a = await asyncStorage.getItem("id");

        const res = await axios
            .get("https://ams.smart-it-partner.com/api/articles")
            .then(response => response.data["hydra:member"])
        setArticles(res);

    }
    const addArticle = () => { navigation.navigate('AddArticle'); };
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.addButton} onPress={addArticle}>
                <Icon name="plus" size={20} color="white" />
                <Text style={styles.addButtonText}>Add Article</Text>
            </TouchableOpacity>
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
        </View>
    )
}

export default ArticleScreen;
