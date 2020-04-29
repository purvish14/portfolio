import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { AddIconButton, CardIconButton } from './icons/MaterialIcons';
import { CardVisaButton } from './icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const Dashboard = () => {
    const { colors } = useTheme();

    return (
        <View style={{ marginTop: 20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ justifyContent: 'center', paddingHorizontal: 30 }} >
                    <AddIconButton />
                </View>
                {[...Array(20).keys()].map(i => <DashboardCard key={i} count={i} />)}
            </ScrollView>
        </View>
    );
}

const DashboardCard = props => {

    const { colors } = useTheme();

    const [cardColors, setCardColors] = useState({});

    if (props.count % 2) {
        return (
            <View>
                <LinearGradient
                    start={[1, 0]}
                    colors={[colors.secondaryCard, colors.secondaryCardVariant]}
                    style={{
                        width: 150,
                        borderRadius: 10,
                        marginHorizontal: 10,
                        padding: 20
                    }}>
                    <CardVisaButton />
                    <Text style={{ fontFamily: 'OpenSans-bold', color: colors.onSecondaryCard, fontSize: 14, paddingVertical: 5 }}>Credit Card</Text>
                    <Text style={{ fontFamily: 'OpenSans-regular', color: colors.onSecondaryCard, fontSize: 12 }}>Platinum</Text>
                    <Text style={{ fontFamily: 'OpenSans-bold', color: colors.primary, fontSize: 20, paddingTop: 30 }}>$1,560.00</Text>
                </LinearGradient>
            </View>
        );
    } else {
        return (
            <View style={{
                shadowOffset: { width: 10, height: 10, },
                shadowColor: 'black',
                shadowOpacity: 1.0,
            }}>
                <LinearGradient
                    start={[1, 0]}
                    colors={[colors.primaryCard, colors.primaryCardVariant]}
                    style={{
                        width: 150,
                        borderRadius: 10,
                        marginHorizontal: 5,
                        padding: 20,
                    }}>
                    <CardIconButton />
                    <Text style={{ fontFamily: 'OpenSans-bold', color: colors.onPrimaryCard, fontSize: 20, paddingVertical: 5 }}>-$300</Text>
                    <Text style={{ fontFamily: 'OpenSans-regular', color: colors.onPrimaryCard, fontSize: 12 }}>Transfer</Text>
                    <Text style={{ fontFamily: 'OpenSans-regular', color: colors.onPrimaryCard, fontSize: 14, paddingTop: 30 }}>Dec 30, 2018</Text>
                </LinearGradient>
            </View>
        );
    }


}

export default Dashboard;