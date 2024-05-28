
import { StatusBar } from 'expo-status-bar';
import { Text, View,StyleSheet,ActivityIndicator, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
function NewspaperScreen() {


  const[albums,setAlbums]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response=>response.json())
    .then(data=>{
      //console.log(data);
      setAlbums(data);
     // setIsLoading(false);
     setTimeout(() => {
        setIsLoading(false);
    }, 1000);
    })
  }
  useEffect(() => {
      getData();
    },[])

    

    if(isLoading){
      return(
          <ScrollView >
              <ActivityIndicator size="large"/>
          </ScrollView>
      );
  } else {
    return (<ScrollView >
    
      <Text>Welcome sNewspapers screen</Text>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {albums.map(_albums=><Text key={_albums.id}>{_albums.userId}***{_albums.title}</Text>)}
      </View>
    </ScrollView>)};

    
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default NewspaperScreen;