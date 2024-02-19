import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet   } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

interface Hymn {
    id: number;
    title: string;
    author: string;
    lyrics: string;
}

const hymnsData: { hymns: Hymn[] } = require('../assets/hymns.json');
const { width } = Dimensions.get('window');

const HynmsList: React.FC = () => {
    const navigation = useNavigation();

    const renderHymnItem: React.FC<{ item: Hymn }> = ({ item }) => (
        <TouchableOpacity  
            onPress={() => handleHymnPress(item)}
        >
            <View style={styles.item}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'mon-b'}}>{item.title}</Text>
                <Text style={{ fontSize: 14, fontStyle: 'italic', fontFamily: 'mon-sb'}}>{item.author}</Text>
            </View>
        </TouchableOpacity>

    );

    const handleHymnPress = (hymn: Hymn) => {
        navigation.setOptions({
            title: hymn.title, // Use the hymn's title for the screen title
          });
        
        navigation.navigate('(details)/details', { hymn: hymn });
    };
    
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            vertical
            data={hymnsData.hymns}
            renderItem={renderHymnItem}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={Separator}
            style={{ width }}
        />
    );
};

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
 item: {
    padding: 20,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
  },
});

export default HynmsList