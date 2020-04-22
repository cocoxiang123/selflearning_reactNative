import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/AddTodo'

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: '1' },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" }
  ])

  const pressHandler = key => {
    setTodos(prev => prev.filter(item => item.key !== key))
  }
  const sumbitHandler = text => {
    if (text.length > 3) {
      setTodos(prevToDos => [{ text, key: Math.random().toString() }, ...todos])
    } else {
      Alert.alert('OOPS', 'Todos much be over 3 chars long', [
        { text: 'UnderStood', onPress: () => { console.log('11') } }
      ])
    }

  }
  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        {/*  header */}
        <Header />
        <View style={styles.content}>
          {/*   form */}
          <AddTodo sumbitHandler={sumbitHandler} />
          <View style={styles.list}>

            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />

              )}
            />
          </View>

        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 50,
  },
  list: {
    marginTop: 30
  }
});
