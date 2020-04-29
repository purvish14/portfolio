import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, ScrollView, Keyboard } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { DropDownArrowIconButton, AddIconButton, CardIconButton } from './icons/MaterialIcons';
import Dashboard from './Dashboard';
import Statistics from './Statistics';
import History from './History';

const Home = () => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.png')} style={styles.background}>
                <AppHeader />
                <Dashboard />
                <Statistics />
                <History />
            </ImageBackground>
        </View>
    );
}

const AppHeader = () => {
    const { colors } = useTheme();

    return (
        <View style={{ marginTop: StatusBar.currentHeight, padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'space-between' }}>
                    <Text style={{ color: colors.onPrimary }}>Mon, Jan 06 2019</Text>
                    <Text style={{ color: colors.onPrimary, fontSize: 24, fontFamily: 'OpenSans-bold' }}>My Account</Text>
                </View>
                <View>
                    <DropDownArrowIconButton />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    }
});


export default Home;