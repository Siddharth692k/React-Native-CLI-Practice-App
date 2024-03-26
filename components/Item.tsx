import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';

interface ItemProps {
  title: string;
  image: string;
}

const Item = ({title, image}: ItemProps) => {
  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      `${title}`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };
  return (
    <Pressable onPress={() => showToast()}>
      <View style={styles.container}>
        <Image
          style={styles.picstyle}
          source={{
            uri: image,
          }}
        />
        <Text style={styles.titleSty}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
  },
  picstyle: {
    width: 100,
    height: 100,
  },
  titleSty: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Item;
