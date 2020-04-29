import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useTheme } from '@react-navigation/native';

export const DropDownArrowIconButton = () => {
    const { colors } = useTheme();

    return (
        <View style={{ paddingHorizontal: 8, paddingBottom: 6, paddingTop: 10, borderRadius: 25, backgroundColor: colors.onPrimary, alignSelf: 'flex-start' }}>
            <Icon name='keyboard-arrow-down' size={25} color={colors.primary} />
        </View>
    );
}

export const PeriodIconButton = () => {
    const { colors } = useTheme();

    return (
        <View style={{

            alignItems: 'center',
            backgroundColor: colors.primaryVariant,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 15,
            flexDirection: 'row'
        }}>
            <Text style={{ fontFamily: 'OpenSans-bold', color: colors.onPrimaryVariant }}>Month</Text>
            <Icon name='keyboard-arrow-down' size={25} color={colors.onPrimaryVariant} />
        </View>
    );
}

export const AddIconButton = () => {
    const { colors } = useTheme();

    return (
        <View style={{ padding: 15, borderRadius: 25, backgroundColor: colors.primaryVariant, alignSelf: 'flex-start' }}>
            <Icon name='add' size={20} color={colors.onPrimaryVariant} />
        </View>
    );
}

export const CardIconButton = () => {
    const { colors } = useTheme();

    return (
        <View style={{ paddingVertical: 10 }}>
            <Icon name='account-balance-wallet' size={20} color={colors.onPrimaryCard} />
        </View>
    );
}

export const InitialsIcon = props => {
    const { colors } = useTheme();

    return (
        <View style={{ paddingHorizontal: 16, paddingVertical: 15, borderRadius: 250, backgroundColor: props.color, alignSelf: 'flex-start' }}>
            <Text style={{ color: colors.onPrimaryCard, fontSize: 18, fontFamily: 'OpenSans-bold', }}>{props.initials}</Text>
        </View>
    );
}

export const BarIcon = () => {
    const { colors } = useTheme();

    return (
        <View style={{ backgroundColor: '#CED5DF', paddingHorizontal: 17, paddingVertical: 2, borderRadius: 15, alignSelf: 'flex-start', }} />
    );
}
