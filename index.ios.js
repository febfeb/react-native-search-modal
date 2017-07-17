import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';
import {SearchModal} from './src/components/searchModal';

export default class ReactNativeSearchModal extends Component {
    componentWillMount(){
        this.state = {
            selectedData : null
        };
    }

    render() {
        const { rootStyle, logStyle, logTextStyle } = styles;

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

        let selectedData = JSON.stringify(this.state.selectedData);

        return (
            <View style={rootStyle}>
                <SearchModal
                    label="Your Destination"
                    data={data}
                    value="CGK"
                    onSelect={(result)=>{ this.setState({selectedData:result}) }}
                />

                <View style={logStyle}>
                    <Text style={logTextStyle}>{selectedData}</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle : {
        flex: 1,
        paddingTop: 30
    },
    logStyle : {
        flex: 1,
        backgroundColor : '#1abc9c',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logTextStyle : {
        color : '#fff'
    }
};

AppRegistry.registerComponent('ReactNativeSearchModal', () => ReactNativeSearchModal);
