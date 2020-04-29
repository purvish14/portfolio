import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';

export const CardVisaButton = () => {
    const { colors } = useTheme();

    return (
        <View style={{ paddingVertical: 10 }}>
            <Icon name='cc-visa' size={20} color='#2451C7' />
        </View>
    );
}