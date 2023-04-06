import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Card({data}) {
    const navigation = useNavigation();

    function handleNavigate() {
       navigation.navigate('Detail', {data: data});
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={handleNavigate}>
            <Image source={{uri: data.cover}} style={styles.cover}/>
        <View style={styles.info}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.description}>{data.total_ingredients} ingredientes | {data.time} min</Text>
        </View>
        <LinearGradient style={styles.gradient} colors={[
            'transparent', 'rgba(0,0,0,0.70)', 'rgba(0,0,0,0.90)'
        ]}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
       marginBottom: 20,
    },
    cover: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    info: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10,
        borderRadius: 10,
        zIndex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    description: {
        fontSize: 14,
        color: '#fff',
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 100,
        borderRadius: 10,
    }
});