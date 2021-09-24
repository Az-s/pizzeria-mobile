import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DishList = () => {
    return (
        <View style={styles.cards}>
            <View style={styles.card}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://static.1000.menu/img/content-v2/85/ff/6190/pitstsa-pepperoni-_1612599986_22_max.jpg' }}
                />
                <View style={styles.title}>
                    <Text>Pepperoni</Text>
                </View>
                <View style={styles.price}>
                    <Text>80 KGS</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cards: {
        marginVertical: 15,
    },
    card: {
        borderWidth: 1,
        // borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '90%',
    },
    img: {
        width: 150,
        height: 150,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    price: {
        marginRight: 10,
    },
});

export default DishList;
