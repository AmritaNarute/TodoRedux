import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const TodoList = () => {
    const data = [
        {
            id: 1,
            title: "Learn React Native"
        },
        {
            id: 2,
            title: "Learn Redux Toolkit"
        }
    ]

    const renderItem = ({ item }) => {

        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => {
                        deleteItem(item.id)
                    }}>
                    <Ionicons name="trash" size={30} color="red" />
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#e9e9e9",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    title: {
        fontSize: 20
    },
    delete: {
        fontSize: 20,
        color: 'red'
    }

})