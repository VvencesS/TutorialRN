import React, { Component } from 'react';
import {
    ScrollView,
    Text, View, 
    Dimensions
} from 'react-native';

export default class HorizontalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                onMomentumScrollBegin={() => {
                    // alert('Begin scrolling');
                }}
                onMomentumScrollEnd={() => {
                    // alert('End scrolling');
                }}
                onScroll={(event) => {
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`;
                    console.log(logData);
                }}
                scrollEventThrottle={10}
            >
                <View style={{
                    backgroundColor: 'blue',
                    flex:1,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',
                    }}>
                        Screen 1
                    </Text>
                </View>
                <View style={{
                    backgroundColor: 'tomato',
                    flex:1,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',
                    }}>
                        Screen 2
                    </Text>
                </View>
                <View style={{
                    backgroundColor: 'yellow',
                    flex:1,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',
                    }}>
                        Screen 3
                    </Text>
                </View>
            </ScrollView>
        );
    }
}