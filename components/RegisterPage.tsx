import React from 'react';
import {Pressable, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from './Logo';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {setUserName, setEmail, setPassword, addUser} from './slices/UserSlice';

const RegisterPage = ({navigation}) => {
  const dispatch = useDispatch();
  const username = useSelector(store => store.User.username);
  const email = useSelector(store => store.User.email);
  const password = useSelector(store => store.User.password);
  const userArr = useSelector(store => store.User.userArr);
  const showToast = SuccFail => {
    ToastAndroid.showWithGravityAndOffset(
      `${SuccFail}`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };
  const handleRegister = () => {
    if (username && email && password) {
      const newUser = {username, email, password};
      dispatch(addUser(newUser));
      showToast('Sucessfully registered');
      navigation.navigate('Home');
    } else {
      showToast('Please fill in all fields');
    }
  };
  return (
    <SafeAreaView>
      <Logo />
      <View style={styles.parentViu}>
        <Text style={styles.label}>User Name</Text>
        <TextInput
          placeholder="Name - Akshay Saini"
          placeholderTextColor={'brown'}
          style={styles.userName}
          value={username}
          onChangeText={text => dispatch(setUserName(text))}
        />
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
        <Pressable style={styles.submitBtn} onPress={handleRegister}>
          <Text style={styles.submitTxt}>Register</Text>
        </Pressable>
        <Text
          style={styles.signUpTxt}
          onPress={() => navigation.navigate('Login')}>
          Already a user ? Click here to Login.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentViu: {
    marginTop: 20,
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
    paddingLeft: 20,
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
    marginLeft: 75,
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
});

export default RegisterPage;
