import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from  '@expo/vector-icons';
import Card from '../../components/card';
import api from '../../services/api';
import Logo from '../../components/logo';


export default function Home() {

  const [inputValue, setInputValue] = useState('');
  const [foods, setFoods] = useState([]);

  function handleSearch() {
    console.log(inputValue);
  }

  async function fetchApi(){
     const response = await api.get("/foods");
     setFoods(response.data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title}>que combina com você</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Digite o nome da comida"           
          value={inputValue} 
          onChangeText={(text) => setInputValue(text)}/>
        <TouchableOpacity 
          onPress={handleSearch} >
          <Ionicons name="search" size={28} color="#4cbe6c" />
        </TouchableOpacity>
      </View>
      
      <FlatList 
        data={foods}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card data={item}/>
        )}
        showsVerticalScrollIndicator={false} 
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f9ff',
      paddingTop: 36,
      paddingStart: 14,
      paddingEnd: 14,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#0e0e0e',
    },
    form: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      width: '100%',
      borderRadius: 8,
      marginTop: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#e0e0e0',
      paddingLeft: 8,
      paddingRight: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    searchInput: {
      width: '90%',
      height: 40,
      maxWidth: '90%',
    },
});