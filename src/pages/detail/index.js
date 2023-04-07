import { useLayoutEffect } from 'react';
import { Image, Text, StyleSheet, Pressable, ScrollView, View} from 'react-native';
import { useRoute , useNavigation} from '@react-navigation/native';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';

import { Ingredientes } from '../../components/ingredientes';
import { Instructions } from '../../components/instructions';

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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Pressable style={{ marginBottom: 14}}>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={60} color="#fff" />
        </View>
        <Image source={{ uri: route.params?.data.cover }} style={styles.cover} />
      </Pressable>
      <View style={styles.headerDetails}>
       <View>
         <Text style={styles.title}>{route.params?.data.name}</Text>
         <Text style={styles.ingredientesText}>ingredientes ({route.params?.data.total_ingredients})</Text>
        </View>
        <Pressable style={{ marginTop: -14}
        }>
          <Feather name="share-2" size={20} color="#121212" />
        </Pressable>
      </View>

      {
        route.params?.data.ingredients.map((item, index) => (
          <Ingredientes key={index} data={item} />
        ))
      }
      <Instructions />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f9ff',
        padding: 14,
    },
    cover: {
        width: '100%',
        height: 200,
        borderRadius: 14
    },
    playIcon: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        height: 200,
    },
    headerDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
       
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    ingredientesText: {
        fontSize: 14, 
        marginBottom: 14,
    },
});