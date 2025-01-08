import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Star = () => {
  const [rating, setRating] = useState(0);

  const handlePress = (selectedRating: number) => {
    setRating(selectedRating); 
  };

  const renderStars = () => {
    // array de 5 elementos e map para renderizar as estrelas
    return [...Array(5)].map((_, i) => (
      <TouchableOpacity key={i} onPress={() => handlePress(i + 1)}>
        <Icon
          name={i < rating ? 'star' : 'star-o'}
          size={30}
          color={i < rating ? 'orange' : '#ccc'}
        />
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Avaliação:</Text>
      <View style={styles.starsContainer}>{renderStars()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Star;
