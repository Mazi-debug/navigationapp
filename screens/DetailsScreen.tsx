import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>;

export default function DetailsScreen({ navigation }: Props) 
{
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>This is my details screen</Text>

            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        marginBottom: 20,        
    },
});
