import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const OrderBasket = () => {
    const [modalVisible, setModalVisible] = useState(false);
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
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <View style={styles.buttons}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.sendOrder]}
                                onPress={() => setModalVisible(!modalVisible)}
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
