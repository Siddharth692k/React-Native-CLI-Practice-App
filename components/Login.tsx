import React from 'react';
import {Pressable, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import Logo from './Logo';
import {useDispatch, useSelector} from 'react-redux';
import store from './Store';
import {addCurrUser, setEmail, setPassword} from './slices/UserSlice';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const email = useSelector(store => store.User.email);
  const password = useSelector(store => store.User.password);
  const registeredUsers = useSelector(store => store.User.usersArr);
  const showToast = SuccFail => {
    ToastAndroid.showWithGravityAndOffset(
      `${SuccFail}`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };
  const handleLogin = () => {
    if (!email || !password) {
      showToast('Please enter email and password');
      return;
    }

    const user = registeredUsers.find(user => user.email === email);

    if (user && user.password === password) {
      const currentUserDetails = {username: user.username, email, password};
      dispatch(addCurrUser(currentUserDetails));
      showToast('Login successfull ');
      navigation.navigate('Home');
    } else {
      showToast('Invalid email or password');
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Logo />
      </View>
      <View style={styles.parentViu}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email - eg : akshaysaini@gmail.com"
          placeholderTextColor={'brown'}
          style={styles.userName}
          value={email}
          onChangeText={text => dispatch(setEmail(text))}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor={'brown'}
          secureTextEntry={true}
          style={styles.userName}
          value={password}
          onChangeText={text => dispatch(setPassword(text))}
        />
        <Pressable style={styles.submitBtn} onPress={handleLogin}>
          <Text style={styles.submitTxt}>Login</Text>
        </Pressable>
        <Text
          style={styles.signUpTxt}
          onPress={() => navigation.navigate('Register')}>
          Don't have an account ? Click here to Sign Up.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentViu: {
    marginTop: 25,
  },
  userName: {
    paddingLeft: 30,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 30,
  },
  submitBtn: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    marginRight: 50,
    marginLeft: 250,
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: 'black',
  },
  submitTxt: {
    color: 'white',
  },
  signUpTxt: {
    marginTop: 30,
    marginLeft: 50,
    color: 'brown',
    fontSize: 15,
    fontWeight: 'bold',
  },
  label: {
    marginTop: 30,
    marginLeft: 50,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    marginLeft: 50,
    marginRight: 120,
  },
});

export default Login;
