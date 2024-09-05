// ProductCard.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For the heart icon

export default function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.iconContainer} onPress={toggleLike}>
          <FontAwesome name="heart" size={25} color={isLiked ? 'red' : 'gray'} />
        </TouchableOpacity>
        <Image source={product.image} style={styles.image} />
      </View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    // backgroundColor: 'red', 
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 'auto', // Adjust the width according to your needs
  },
  card: {
    width: 180,
    height: 200,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    // marginHorizontal: 5,
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  image: {
    width: 150,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    color: '#333',
    textAlign: 'start',
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 2,
  },
});
