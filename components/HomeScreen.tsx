import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import useData from './custom hooks/useData';
import Item from './Item';
import CardItem from './CardItem';
import Logo from './Logo';
import {resetCurrentUser} from './slices/UserSlice';
import {useDispatch, useSelector} from 'react-redux';
import store from './Store';

function HomeScreen({navigation}) {
  const {cardData, fruitsData} = useData();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(resetCurrentUser());
    navigation.navigate('Login');
  };
  const userName = useSelector(store => store.User.currentUser);
  console.log('user name from HomeScreen: ', userName.username);
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.homeScreenLogo}>
          <Logo />
          <View style={styles.logoutBtn}>
            <Text style={styles.welcome}>Welcome {userName.username} !</Text>
            <Pressable style={styles.submitBtn} onPress={handleLogout}>
              <Text style={styles.submitTxt}>Logout</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Categories</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={fruitsData}
            renderItem={({item}) => (
              <Item title={item?.name} image={item?.imageUri} />
            )}
            keyExtractor={item => item?.name}
          />
        </View>
        <View>
          <Text style={styles.text}>Videos</Text>
          <FlatList
            data={cardData}
            renderItem={({item}) => (
              <Pressable
                onPress={() =>
                  navigation.navigate('Description', {
                    title: item?.title,
                    description: item?.description,
                    content: item?.content,
                  })
                }>
                <CardItem
                  cardtitle={item?.title}
                  date={item?.date}
                  description={item?.description}
                />
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  submitBtn: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 18,
    paddingRight: 12,
    marginLeft: 12,
    marginBottom: 5,
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: 'black',
  },
  submitTxt: {
    color: 'white',
  },
  logoutBtn: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 5,
  },
  welcome: {
    marginTop: 30,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  homeScreenLogo: {
    marginRight: 100,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default HomeScreen;
