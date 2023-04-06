import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRoute , useNavigation} from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export default function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data.name,
      headerRight: () => (
        <Pressable onPress={
          () => {
            console.log('Clicou no botão de favoritar');
          }
        }>
          <Entypo name="heart" size={28} color="#ff4141" />
        </Pressable>
        
      )
    });
  }, [navigation, route.params?.data]);

  return (
    <View style={styles.container}>
      <Text>{route.params?.data.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }
});