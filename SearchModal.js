import React, { Component } from 'react';
import {View, Text, TouchableHighlight, TouchableOpacity, ListView, Modal, TextInput} from 'react-native';
import Button from './Button';

class SearchModal extends Component {
    componentWillMount(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.data),
            selectedValue : null,
            selectedText : null,
            modalVisible : false,
            searchText : ''
        };

        this.searchForSelectedValue();
    }

    setData(data){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource : ds.cloneWithRows(data)
        });
    }

    searchForSelectedValue(){
        this.props.data.map((single)=>{
            if(single.key === this.props.value){
                this.state.selectedValue = single.key;
                this.state.selectedText = single.text;
                this.props.onSelect(single);
            }
        });
    }

    selectRow(rowData){
        this.setState({
            modalVisible: false,
            selectedValue: rowData.key,
            selectedText: rowData.text
        });

        this.props.onSelect(rowData);
    }

    renderRow(rowData){
        return (
            <View>
                <TouchableOpacity style={styles.rowStyle} onPress={()=>{this.selectRow(rowData)}}>
                    <Text>{rowData.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onDismiss(){
        this.setState({modalVisible:false});
    }

    filter(text) {
        let pattern = new RegExp(text, 'i');
        let arr = _.filter(this.props.data, (user) => {
            if (user.text.search(pattern) != -1)
            return user;
        });

        this.setData(arr);
    }

    render(){
        const { inputStyle, labelStyle, containerStyle, rootContainerStyle, modalBackgroundStyle, modalBoxStyle, searchStyle, searchTextStyle} = styles;
        const { label } = this.props;

        return (
            <View style={rootContainerStyle}>
                <View style={containerStyle}>
                    <Text style={labelStyle}>{label}</Text>
                    <TouchableOpacity style={inputStyle}
                        onPress={()=>{ this.setState({modalVisible:true}); }}>
                        <Text>{this.state.selectedText}</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                  animationType={"fade"}
                  transparent={true}
                  visible={this.state.modalVisible}
                  >
                    <View style={modalBackgroundStyle}>
                        <View style={modalBoxStyle}>
                            <View style={searchStyle}>
                                <TextInput
                                    style={searchTextStyle}
                                    onChangeText={(searchText) => {
                                        this.setState({searchText});
                                        this.filter(searchText);
                                    }}
                                    autoCorrect={false}
                                    value={this.state.searchText}
                                />

                            </View>
                            <ListView
                                style={{height:400}}
                                dataSource={this.state.dataSource}
                                renderRow={this.renderRow.bind(this)}
                            />
                            <View style={{height:45}}>
                                <Button onPress={this.onDismiss.bind(this)}>
                                    Cancel
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = {
    rootContainerStyle : {
        //flex : 1
        height: 40
    },
    rowStyle : {
        paddingVertical : 10,
        paddingHorizontal : 15
    },
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        flex: 2
    },
    labelStyle: {
        fontSize: 13,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    modalBackgroundStyle : {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalBoxStyle : {
        backgroundColor: '#ffffff',
        height: 500,
        width: 300,
        borderRadius: 6,
        paddingVertical: 5
    },
    searchStyle : {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    searchTextStyle : {
        fontSize: 13
    }
};

module.exports = SearchModal;
