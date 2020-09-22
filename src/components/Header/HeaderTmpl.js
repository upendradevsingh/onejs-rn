import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderTmpl = ({navText}) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.header}>onejs with react-native</Text>
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 48,
    fontWeight: '700',
  },
});

export default HeaderTmpl;
