import React from 'react';
import {FlatList, View, Text, StyleSheet, StatusBar, Image} from 'react-native';

const Item = ({title, description, urlToImage}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    {urlToImage !== null && (
      <Image style={styles.banner} source={{uri: urlToImage}} />
    )}
    <Text>{description}</Text>
  </View>
);

const RenderItem = ({item}) => <Item {...item} />;

const ListTmpl = ({articles}) => {
  if (!articles.length) {
    return null;
  }

  return (
    <FlatList
      data={articles}
      renderItem={RenderItem}
      keyExtractor={(item) => item.url}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    paddingBottom: 10,
    fontWeight: '500',
  },
  banner: {
    width: '100%',
    height: 250,
    marginBottom: 10,
  },
});

export default ListTmpl;
