import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const TodoHeader = () => {
    const [todo, setTodo] = useState("");
    return (
        <View>
            <Text
                style={{
                    fontSize: 21,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: '16%',
                    paddingVertical:10
                }}
            >Todo List</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    style={{
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 16,
                        margin: 10,
                        width: "90%",
                        borderRadius: 5,
                    }}
                    placeholder='Add todo'
                    onChangeText={(text) => setTodo(text)}
                    value={todo}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: 'gray',
                        padding: 10,
                        margin: 10,
                        width: '90%',
                        borderRadius: 5,
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        setTodo("");
                    }}>
                    <Text style={{ color: "white",fontSize:16 }}>Add</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default TodoHeader

const styles = StyleSheet.create({})