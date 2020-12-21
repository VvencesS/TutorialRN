import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';

const apiGetAllFoods = 'http://10.0.2.2:3000/food/list_all_foods'; // Use 10.0.2.2 to access your actual machine.
const apiInsertNewFood = 'http://10.0.2.2:3000/food/insert_new_food'; 
const apiUpdateNewFood = 'http://10.0.2.2:3000/food/update_a_food'; 

// GET request to get data
async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJSON = await response.json();
        return responseJSON;
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

// Send POST request to insert new data
async function insertNewFoodToServer(params) {
    try {
        let response = await fetch(apiInsertNewFood, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        let responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

async function updateAFood(params) {
    try {
        let response = await fetch(apiUpdateNewFood, {
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        let responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        console.log(`${error}`);
    }
}

export { getFoodsFromServer };
export { insertNewFoodToServer };
export { updateAFood };
