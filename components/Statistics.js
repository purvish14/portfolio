import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { PeriodIconButton } from './icons/MaterialIcons';
import { LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const Statistics = () => {
    const { colors } = useTheme();

    return (
        <View>
            <View style={{ marginTop: 35, padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ justifyContent: 'space-between' }}>
                        <Text style={{ color: colors.onPrimary }}>- 2.50%</Text>
                        <Text style={{ color: colors.onPrimary, fontSize: 24, fontFamily: 'OpenSans-bold' }}>Statistic</Text>
                    </View>
                    <View>
                        <PeriodIconButton />
                    </View>
                </View>
            </View>
            <LineChartGraph />
        </View>
    );
}

const LineChartGraph = () => {

    const data1 = [50, 10, 35, 75, -4, -24, 60, 80, 35, 53, -53, 15, 30, -20, -80]
    const data2 = [50, 10, 40, 95, -4, -24, 85, 100, 35, 53, -53, 24, 50, -20, -80]

    const data = [
        {
            data: data1,
            svg: {
                stroke: '#4F31C3',
                strokeWidth: 2
            }
        },
        {
            data: data2,
            svg: {
                stroke: 'white',
                strokeWidth: 3
            }
        }
    ]

    return (
        <View>
            <LineChart
                style={{ height: 150 }}
                data={data}
                // contentInset={{ top: 20, bottom: 40 }}
                curve={shape.curveBasis}
            >
            </LineChart>
        </View>
    )
}

export default Statistics;