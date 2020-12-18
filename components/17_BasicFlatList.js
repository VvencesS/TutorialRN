import React, { Component } from 'react';
import {
    FlatList,
    View, Text, Image,
    StyleSheet,
    Alert,
    TouchableHighlight,
    RefreshControl
} from 'react-native';
import Swipeout from 'react-native-swipeout';

import AddModal from './21_AddModal';
import EditModal from './22_EditModal';

// import flatListData from '../data/FlatListData';

import { getFoodsFromServer } from '../networking/Server';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        };
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        // alert('Update');
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);

                                        // Refresh FlatList
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }
                                },
                            ],
                            { cancelable: true }
                        )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
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
                            source={{ uri: this.props.item.imageUrl }}
                            style={{ width: 100, height: 100, margin: 5 }}
                        >

                        </Image>

                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: 'white' }}></View>
                </View>
            </Swipeout>
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
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
            refresh: false,
            foodsFromServer: []
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        this.setState({ refresh: true });
        getFoodsFromServer()
            .then((foods) => {
                this.setState({ foodsFromServer: foods });
                this.setState({ refresh: false });
            })
            .catch((err) => {
                this.setState({ foodsFromServer: [] });
                this.setState({ refresh: false });
            });
    }
    onRefresh = () => {
        this.refreshDataFromServer();
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd = () => {
        // alert('You add item');
        this.refs.addModal.showAddModal();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    backgroundColor: 'tomato',
                    height: 64,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    <TouchableHighlight
                        style={{ marginRight: 10 }}
                        underlay='tomato'
                        onPress={this._onPressAdd}
                    >
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={require('../icons/icons-add.png')}
                        />
                    </TouchableHighlight>
                </View>
                <FlatList
                    ref={"flatList"}
                    // data={flatListData}
                    data={this.state.foodsFromServer}
                    renderItem={({ item, index }) => {
                        // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>

                            </FlatListItem>);
                    }}
                    keyExtractor={(item, index) => item.name}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refresh}
                            onRefresh={this.onRefresh}
                        />
                    }
                >

                </FlatList>
                <AddModal ref={"addModal"} parentFlatList={this} >

                </AddModal>
                <EditModal ref={"editModal"} parentFlatList={this} >

                </EditModal>
            </View>
        );
    }
}
