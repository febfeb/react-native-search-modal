/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';
import {SearchModal} from './src/components/searchDialog';

export default class App extends Component {
    render() {
        const data = [
        	{ key : 'ATL', text : 'Hartsfield Jackson Atlanta International' },
        	{ key : 'PEK', text : 'Beijing Capital International' },
        	{ key : 'DXB', text : 'Dubai International' },
        	{ key : 'ORD', text : 'Chicago O’Hare International' },
        	{ key : 'HND', text : 'Tokyo International' },
        	{ key : 'LHR', text : 'London Heathrow' },
        	{ key : 'LAX', text : 'Los Angeles International' },
        	{ key : 'HKG', text : 'Hong Kong International' },
        	{ key : 'CDG', text : 'Charles de Gaulle International' },
        	{ key : 'DFW', text : 'Dallas Fort Worth International' },
        	{ key : 'IST', text : 'Atatürk International' },
        	{ key : 'FRA', text : 'Frankfurt am Main International' },
        	{ key : 'PVG', text : 'Shanghai Pudong International' },
        	{ key : 'AMS', text : 'Amsterdam Schiphol' },
        	{ key : 'JFK', text : 'John F Kennedy International' },
        	{ key : 'SIN', text : 'Singapore Changi International' },
        	{ key : 'CAN', text : 'Guangzhou Baiyun International' },
        	{ key : 'CGK', text : 'Soekarno-Hatta International' },
        ];
        return (
            <View style={{paddingTop: 100}}>
                <SearchModal
                    label="Your Destination"
                    data={data}
                    value="CGK"
                    onSelect={(result)=>{ console.log(result) }}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('SearchDialog', () => App);
