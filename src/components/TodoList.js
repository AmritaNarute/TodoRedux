import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

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
                    <Text style={styles.delete}>Delete</Text>
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
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 30
    },
    delete: {
        fontSize: 20
    }

})