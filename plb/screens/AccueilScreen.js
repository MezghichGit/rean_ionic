import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
function AccueilScreen() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, [])

  /* const getData=()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
     .then(data=>{
       //console.log(data);
       setUsers(data);
      // setIsLoading(false);
      setTimeout(() => {
         setIsLoading(false);
     }, 1000);
     })
   }*/
  const getData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log("Erreur dans lapi : "+error)
    }
    finally{
      setIsLoading(false)
    }

  }


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (<View style={styles.container}>
      
      <Text>Welcome screen</Text>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {users.map(_user => <Text key={_user.id}>{_user.name}***{_user.email}</Text>)}
      </View>
    </View>)
  };

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AccueilScreen;