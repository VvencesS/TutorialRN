import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';

const apiGetAllFoods = 'http://10.0.2.2:3000/list_all_foods'; // Use 10.0.2.2 to access your actual machine.

async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJSON = await response.json();
        return responseJSON;
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

export { getFoodsFromServer };
