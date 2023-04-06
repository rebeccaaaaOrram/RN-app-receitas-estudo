import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from  '@expo/vector-icons';
import Logo from '../../components/logo';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title}>que combina com você</Text>

      <View style={styles.form}>
        <TextInput style={styles.searchInput} placeholder="Digite o nome da comida"/>
        <TouchableOpacity>
          <Ionicons name="search" size={28} color="#4cbe6c" />
        </TouchableOpacity>
      </View>
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