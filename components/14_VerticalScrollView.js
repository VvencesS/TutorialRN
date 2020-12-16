import React, { Component } from 'react';
import {
    ScrollView,
    Image, Text, View,
    TextInput, Dimensions
} from 'react-native';

export default class VerticalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <ScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{paddingLeft: 20}}
            >
                <Image
                    source={require('../images/images.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 768/1024}}
                >
                </Image>
                <Text
                    style={{
                        fontSize: 20,
                        padding: 15, 
                        color: 'white',
                        textAlign: 'center',
                        backgroundColor: 'green',
                    }}
                >
                    This is text
                </Text>
                <TextInput
                    style={{padding: 10, margin: 10, borderWidth: 1}}
                    placeholder='Enter text'
                >
                </TextInput>
                <View style={{backgroundColor: 'red', height: 50}}>
                    <Text
                        style={{
                            fontSize: 20,
                            padding: 15,
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                        Text inside a View
                    </Text>
                </View>
                <Image
                    source={require('../images/images.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 768/1024}}
                >
                </Image>
                <Image
                    source={require('../images/images.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 768/1024}}
                >
                </Image>
                <Image
                    source={require('../images/images.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 768/1024}}
                >
                </Image>
                <Image
                    source={require('../images/images.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 768/1024}}
                >
                </Image>
            </ScrollView>
        );
    }
}