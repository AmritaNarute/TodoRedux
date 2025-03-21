import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const TodoHeader = () => {
    const dispatch = useDispatch();
    const onSubmitTask = () => {
        if (todo.trim().length === 0) {
            Alert.alert(
                'you need to Enter task'
            );
            setTodo("");
            return;
        }
        dispatch(
            addTodo({
                task: todo,
            })
        );
        setTodo("");
    }

    const [todo, setTodo] = useState("");
    return (
        <View>
            <Text
                style={{
                    fontSize: 21,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: '16%',
                    paddingVertical: 10
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
                    onPress={onSubmitTask}>
                    <Text style={{ color: "white", fontSize: 16 }}>Add</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default TodoHeader

const styles = StyleSheet.create({})