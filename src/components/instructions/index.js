import { View, Text, StyleSheet } from 'react-native'

export function Instructions ({data}) {
    return (
        <View style={styles.instructionArea}>
            <Text style={styles.instructionId}>{data.id}</Text>
            <Text style={styles.instructionText}>{data.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    instructionArea: {
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    instructionId: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    instructionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        width: '90%'
    }

})
