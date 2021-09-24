import React, { useState, useMemo } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const OrderBasket = ({ dishes, orderCart, remove }) => {
    const [modalVisible, setModalVisible] = useState(false);

    let totalSum = 0;

    const items = Object.keys(orderCart).map(id => {
        const dish = dishes.find(d => d.id === id);
        const count = orderCart[id];
        const dishSum = count * dish.price;
        totalSum += dishSum + 150;

        return (
            <>
                <View>
                    <Text>
                        {dish.dish} {dish.price} KGS  x{orderCart[id]} Sum: {dishSum}
                    </Text>
                    <Pressable
                        style={[styles.button, styles.sendOrder]}
                    >
                        <Text style={styles.textStyle} onPress={remove}>&#10006;</Text>
                    </Pressable>
                </View>
            </>
        )
    });

    const createOrder = async e => {
        e.preventDefault();
        try {
            await axios.post('https://az-sa-bd3f9-default-rtdb.firebaseio.com/orders.json', {
                dish,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const purchasable = useMemo(() => {
        const totalCount = Object.keys(orderCart)
            .reduce((sum, id) => sum + orderCart[id], 0);

        return totalCount > 0;
    }, [orderCart]);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Your order:</Text>
                        {items}
                        <Text style={styles.modalText}>Delivery: 150 KGS</Text>
                        <Text style={styles.modalText}>Total: {totalSum}</Text>
                        <View style={styles.buttons}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.sendOrder]}
                                onPress={createOrder}
                            >
                                <Text style={styles.textStyle}>Order</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Checkout</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        width: '90%',
        height: 'auto',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 20,
        padding: 15,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#73c267",
        position: 'absolute',
        bottom: 0,
        marginBottom: 5,
    },
    buttonClose: {
        backgroundColor: "#c47331",
    },
    sendOrder: {
        backgroundColor: "#497ebf",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});


export default OrderBasket;
