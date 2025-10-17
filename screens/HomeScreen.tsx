import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) 
{
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>This is my homescreen</Text>

            <Button title="Go to Details" onPress={() => navigation.navigate('DetailsScreen')} />
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
