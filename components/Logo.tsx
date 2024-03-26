import React from 'react';
import {Image, StyleSheet} from 'react-native';
const logoimg = require('../assets/peakpx.png');

const Logo = () => {
  return <Image style={styles.logo} source={logoimg} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 100,
    borderRadius: 5,
    marginTop: 35,
  },
});

export default Logo;
