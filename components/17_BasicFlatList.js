import React, { Component } from 'react';
import { 
    FlatList, 
    View, Text, Image,
    StyleSheet, 
} from 'react-native';

import flatListData from '../data/FlatListData';

class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato',
                    backgroundColor: 'mediumseagreen'
                }}>
                    <Image 
                        source={{uri: this.props.item.imageUrl}}
                        style={{width: 100, height: 100, margin: 5}}
                    >

                    </Image>

                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                        <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                    </View>
                </View>
                <View style={{height:1, backgroundColor: 'white'}}></View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

export default class BasicFlatList extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 22 }}>
                <FlatList
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>);
                    }}
                >

                </FlatList>
            </View>
        );
    }
}
