import { View, Text, StyleSheet } from 'react-native';

export default function Favorites() {
  return (
    <View style={styles.container}>
     <Text>  Pagina de favoritos </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }
});