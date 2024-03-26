import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface CardDataProps {
  cardtitle: string;
  date: string;
  description: string;
}

const CardItem = ({cardtitle, date, description}: CardDataProps) => {
  return (
    <View style={styles.cardItemSty}>
      <Text style={styles.dateStyle}>{date}</Text>
      <Text style={styles.titleStyle}>{cardtitle}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  desc: {
    color: 'black',
  },
  dateStyle: {
    fontSize: 15,
    fontWeight: 'bold',
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
});

export default CardItem;
