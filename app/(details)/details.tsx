import React, { useEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const HymnDetailsScreen: React.FC = () => {
  const router = useRoute();
  const navigation = useNavigation();
  const hymn = router.params?.hymn;

  useEffect(() => {
    if (hymn) {
      navigation.setOptions({
        headerTitle: hymn.title, // Set the header title to the hymn title
      });
    }
  }, [navigation, hymn]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{hymn.title}</Text>
      <Text style={styles.author}>Author: {hymn.author}</Text>
      <Text style={styles.lyrics}>{hymn.lyrics}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1, // Allow scrolling of entire content
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  lyrics: {
    fontSize: 22,
  },
});

export default HymnDetailsScreen;
