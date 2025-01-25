import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

const ProductCard = ({
  title,
  price,
  description,
  image,
  rating,
  onPress,
}: {
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {rate: number; count: number};
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.rating}>
          <Text>{rating.rate} ⭐</Text>
          <Text>({rating.count} reviews)</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#e91e63',
  },
  description: {
    fontSize: 12,
    color: '#555',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  viewDetails: {
    color: '#007bff',
    marginTop: 10,
  },
});

export default ProductCard;
