import React, { useRef, useState } from 'react';
import { Text, View, Animated, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { InitialsIcon, BarIcon } from './icons/MaterialIcons';

const History = () => {
    const { colors } = useTheme();
    const yLen = useRef(new Animated.Value(0)).current;
    const [scrollEnable, setScrollEnable] = useState(false);

    const data = [
        {
            color: colors.primaryCard,
            name: 'Saepul Rohman',
            description: 'Transfer',
            amount: '-$300',
            initials: 'SR'
        },
        {
            color: '#15C9DC',
            name: 'Jerome Boateng',
            description: 'Received',
            amount: '+$1200',
            initials: 'JB'
        },
        {
            color: colors.primaryCard,
            name: 'Saepul Rohman',
            description: 'Transfer',
            amount: '-$300',
            initials: 'SR'
        },
        {
            color: '#15C9DC',
            name: 'Jerome Boateng',
            description: 'Received',
            amount: '+$1200',
            initials: 'JB'
        },
        {
            color: colors.primaryCard,
            name: 'Saepul Rohman',
            description: 'Transfer',
            amount: '-$300',
            initials: 'SR'
        },
        {
            color: '#15C9DC',
            name: 'Jerome Boateng',
            description: 'Received',
            amount: '+$1200',
            initials: 'JB'
        },
        {
            color: colors.primaryCard,
            name: 'Saepul Rohman',
            description: 'Transfer',
            amount: '-$300',
            initials: 'SR'
        },
        {
            color: '#15C9DC',
            name: 'Jerome Boateng',
            description: 'Received',
            amount: '+$1200',
            initials: 'JB'
        },
        {
            color: colors.primaryCard,
            name: 'Saepul Rohman',
            description: 'Transfer',
            amount: '-$300',
            initials: 'SR'
        },
        {
            color: '#15C9DC',
            name: 'Jerome Boateng',
            description: 'Received',
            amount: '+$1200',
            initials: 'JB'
        },
        {
            color: colors.primaryCard,
            name: 'Saepul Rohman',
            description: 'Transfer',
            amount: '-$300',
            initials: 'SR'
        },
        {
            color: '#15C9DC',
            name: 'Jerome Boateng',
            description: 'Received',
            amount: '+$1200',
            initials: 'JB'
        },
        {
            color: colors.primaryCard,
            name: 'Saepul Rohman',
            description: 'Transfer',
            amount: '-$300',
            initials: 'SR'
        },
        {
            color: '#15C9DC',
            name: 'Jerome Boateng',
            description: 'Received',
            amount: '+$1200',
            initials: 'JB'
        },
        {
            color: colors.primaryCard,
            name: 'Saepul Rohman',
            description: 'Transfer',
            amount: '-$300',
            initials: 'SR'
        },
        {
            color: '#15C9DC',
            name: 'Jerome Boateng',
            description: 'Received',
            amount: '+$1200',
            initials: 'JB'
        },
    ];

    const swipeUp = () => {
        transformYAxis(-570);
        setScrollEnable(true);
    }

    const swipeDown = () => {
        transformYAxis(0);
        setScrollEnable(false);
    }

    const transformYAxis = (value) => {
        Animated.timing(yLen, {
            toValue: value,
            duration: 500
        }).start();
    }

    return (
        <GestureRecognizer onSwipeUp={swipeUp} onSwipeDown={swipeDown}>
            <Animated.View style={[
                {
                    marginTop: 20,
                    padding: 20,
                    borderRadius: 40,
                    backgroundColor: colors.secondaryCard,
                    transform: [{ translateY: yLen }]
                }
            ]}>
                <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <BarIcon />
                </View>
                <Text style={{ color: colors.onSecondaryCard, fontSize: 24, fontFamily: 'OpenSans-bold', marginVertical: 20 }}>History</Text>
                <ScrollView scrollEnabled={scrollEnable} showsVerticalScrollIndicator={false}>
                    {data.map(d => <Transaction key={Math.random()} data={d} />)}
                </ScrollView>
            </Animated.View>
        </GestureRecognizer >
    );
}

const Transaction = props => {
    const { colors } = useTheme();
    return (
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <View >
                <InitialsIcon initials={props.data.initials} color={props.data.color} />
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'space-between', padding: 8, paddingHorizontal: 20 }}>
                    <Text style={{ fontFamily: 'OpenSans-bold', color: colors.onSecondaryCard, fontSize: 16 }}>{props.data.name}</Text>
                    <Text style={{ fontFamily: 'OpenSans-regular', color: colors.onSecondaryCard, fontSize: 12 }}>{props.data.description}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'OpenSans-bold', color: colors.onSecondaryCard, fontSize: 20, paddingVertical: 5 }}>{props.data.amount}</Text>
                </View>
            </View>

        </View>
    );
}

export default History;