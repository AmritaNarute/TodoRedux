
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import TodoList from './src/components/TodoList';

export default function App() {

  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader />
        <TodoList />
      </SafeAreaView>
    );
  }
  return (
    <View>
      <RootApp />
    </View>
  );
}

