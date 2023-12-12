import React from 'react';
import {Button, Linking, ScrollView, View, StyleSheet} from 'react-native';
import {newsStore} from '../store/NewsStore';
import {Card, Text} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsButton: {
    backgroundColor: '#4682B4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  card: {
    marginBottom: 20,
  },
});

function News() {
  const {getNews, news} = newsStore();

  const handleUpdateNews = () => {
    getNews();
    console.log('Sending request to get news');
  };

  return (
    <ScrollView style={styles.container}>
      <Button title={'Оновити'} onPress={handleUpdateNews} color="#4682B4" />
      <View style={{marginBottom: 20}} />
      {news?.articles.map((value, index) => (
        <Card key={index} style={styles.card}>
          {value.urlToImage && <Card.Cover source={{uri: value.urlToImage}} />}
          <Card.Content>
            <Text style={styles.title}>{value.title}</Text>
            <Text>{value.description}</Text>
          </Card.Content>
          <Card.Title
            title={'Автор: ' + (value.author || 'Unknown')}
            subtitle={
              'Дата: ' +
              (value.publishedAt
                ? new Date(value.publishedAt).toLocaleDateString()
                : 'Unknown Date')
            }
          />
          <Card.Actions>
            <Button
              title={'Перейти'}
              onPress={() => Linking.openURL(value.url)}
              color="#4682B4"
            />
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

export default News;
