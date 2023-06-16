import React from 'react';
import { View, TextInput, Button, StyleSheet, useWindowDimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { editItem } from './reducers/cartSlice';

import { RootState } from './store';

const EditCartScreen = () => {
  const windowWidth = useWindowDimensions().width;
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleNameChange = (itemId: string, newName: string) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      const updatedItem = { ...item, name: newName };
      dispatch(editItem(updatedItem));
    }
  };

  const handlePriceChange = (itemId: string, newPrice: string) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      const updatedItem = { ...item, price: parseFloat(newPrice) };
      dispatch(editItem(updatedItem));
    }
  };

  return (
    <View style={[styles.container, { paddingHorizontal: windowWidth * 0.1 }]}>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.item}>
          <TextInput
            style={styles.input}
            value={item.name}
            onChangeText={(text) => handleNameChange(item.id, text)}
          />
          <TextInput
            style={styles.input}
            value={item.price.toString()}
            onChangeText={(text) => handlePriceChange(item.id, text)}
            keyboardType="numeric"
          />
        </View>
      ))}
      <Button title="Save Changes" onPress={() => console.log('Changes saved')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
    width: '80%',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: '2%',
    marginRight: '2%',
  },
});

export default EditCartScreen;
