import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Login from './components/Login';
import RegisterPage from './components/RegisterPage';
import HomeScreen from './components/HomeScreen';
import Description from './components/Description';
import {Provider} from 'react-redux';
import store from './components/Store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Description" component={Description} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
