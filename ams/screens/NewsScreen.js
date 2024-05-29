import React, { useState, useEffect } from 'react';
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import Moment from 'moment';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import styles from '../styles/style';
const NewsScreen = () => {
    const [news, setNews] = useState([]);
    const fetchNews = async () => {
        const u = await asyncStorage.getItem("token");
        axios.defaults.headers['Authorization'] = 'Bearer ' + u;
        const a = await asyncStorage.getItem("id");

        const res = await axios
            .get("https://ams.smart-it-partner.com/api/news")
            .then(response => response.data["hydra:member"])
        setNews(res);

    }
    useEffect(() => {
        fetchNews();
        console.log(news[0])
    }, []);
    return (
        <ScrollView>
            {news.map(post => (
                <TouchableOpacity key={post.id} style={styles.post}>
                    <Image source={{ uri: 'https://ams.smart-it-partner.com/uploads/news/' + post.image }} resizeMode="contain" style={styles.postImage} />
                    <View style={styles.postContent}>
                        <Text style={styles.postTitle}>{post.titre}</Text>
                        <Text style={styles.postMeta}>
                            {Moment(post.date).format('DD-MM-YYYY')}
                        </Text>
                        <Text style={styles.postExcerpt}>{post.description}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default NewsScreen;
