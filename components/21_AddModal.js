import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image,
    TouchableHighlight, Dimensions, TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/FlatListData';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription: ''
        };
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    generateKeys = (numbersOfCharacters) => {
        return require('random-string')({length: numbersOfCharacters});
    }
    render() {
        return (
            <Modal 
                ref={'myModal'}
                style={{
                    justifyContent: 'center',
                    width: screen.width - 80,
                    height: 280,
                }}
                position= 'center'
                onClose={() => {
                    // alert('Modal closed');
                }}
            >
                <Text 
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 40
                    }}
                >
                    New food's information
                </Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginTop: 20,
                        marginBottom: 10,
                        marginRight: 30,
                        marginLeft: 30,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ newFoodName: text })}
                    placeholder="Enter new food's name"
                    value={this.state.newFoodName}
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginTop: 20,
                        marginBottom: 10,
                        marginRight: 30,
                        marginLeft: 30,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ newFoodDescription: text })}
                    placeholder="Enter new food's description"
                    value={this.state.newFoodDescription}
                />
                <Button
                    style={{fontSize: 18, color: 'white'}}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen',
                    }}
                    onPress={(event) => {
                        if(this.state.newFoodName.length === 0 
                            || this.state.newFoodDescription.length === 0) {
                                alert('You must enter food\'s name and description');
                                return;
                        }

                        const newKey = this.generateKeys(24);   
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            imageUrl: "https://loremflickr.com/320/240",
                            foodDescription: this.state.newFoodDescription
                        };
                        flatListData.push(newFood);
                        this.props.parentFlatList.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }}
                >
                    Save
                </Button>
            </Modal>
        );
    }
}
