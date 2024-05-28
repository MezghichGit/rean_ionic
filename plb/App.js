import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';

const App = () => {

  const[img, setImg]=useState(' ');

  const getCat = () => {
    setImg('https://cataas.com/cat');
    /*fetch('https://cataas.com/cat').then(
      (res) => { return res.json() }).then(data => { 
        console.log(data) ;
        setImg(data.file);
      })*/
  }
    
  //getCat();

  return (
    <View style={styles.container}>
    <Text>Cliquer ici pour avoir un chat</Text>
    <Image source={{uri: img}} style={styles.img}/>
    <Button
      onPress={getCat}
      title="Nouveau Chat"
      color="#f00"
      />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: '80%',
    height:'60%',
    marginBottom:'5%',
    marginTop:'5%',
  }
});

export default App;
