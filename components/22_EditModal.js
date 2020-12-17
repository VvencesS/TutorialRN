import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image,
    TouchableHighlight, Dimensions, TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/FlatListData';

var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            foodDescription: ''
        };
        console.log(`Call 1: ${this.state.foodName}`);
    }
    showEditModal = (editingFood, flatListItem) => {
        // console.log(`editingFood = ${JSON.stringify(editingFood)}`);
        this.setState = {
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flatListItem: flatListItem,
        }
        this.refs.myModal.open();
        console.log(`Call 2: ${JSON.stringify(editingFood)}`);
    }
    generateKeys = (numbersOfCharacters) => {
        return require('random-string')({length: numbersOfCharacters});
    }
    render() {
        return (
            <Modal 
                ref={"myModal"}
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
                    Update food's information 
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
                    onChangeText={(text) => this.setState({ foodName: text })}
                    placeholder="Enter food's name"
                    value={this.state.foodName}
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
                    onChangeText={(text) => this.setState({ foodDescription: text })}
                    placeholder="Enter food's description"
                    value={this.state.foodDescription}
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
                        if(this.state.foodName.length === 0 
                            || this.state.foodDescription.length === 0) {
                                alert('You must enter food\'s name and description');
                                return;
                        }

                        // Update existing food
                        var foundIndex = flatListData.findIndex(item => this.state.key = item.key);
                        if(foundIndex < 0) {
                            return; // not found
                        }
                        flatListData[foundIndex].name = this.state.foodName;
                        flatListData[foundIndex].foodDescription = this.state.foodDescription;

                        this.state.flatListItem.refreshFlatListItem();
                        this.refs.myModal.close();
                    }}
                >
                    Update
                </Button>
            </Modal>
        );
    }
}
