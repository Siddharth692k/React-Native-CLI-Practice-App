import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Description = ({route, navigation}) => {
  const {title, description, content} = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.cardItemSty}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.contentSty}>{content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  desc: {
    color: 'black',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  cardItemSty: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    padding: 35,
    margin: 5,
  },
  contentSty: {
    fontSize: 12,
    color: 'black',
  },
});

export default Description;
