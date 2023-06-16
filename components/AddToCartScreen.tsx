import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,TouchableHighlight,Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from './reducers/cartSlice';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  AddToCart: undefined;
  EditCart: undefined;
};
type AddToCartScreenRouteProp = RouteProp<RootStackParamList, 'AddToCart'>;

type Props = {
    route:AddToCartScreenRouteProp;
  navigation: any;
};

const AddToCartScreen: React.FC<Props> = ({ route,navigation }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = {
      id: Date.now().toString(),
      name: itemName,
      price: parseFloat(itemPrice),
    };

    dispatch(addItem(newItem));
    setItemName('');
    setItemPrice('');
  };

  const navigateToEditCart = () => {
    navigation.navigate('EditCart');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Item Price"
        value={itemPrice}
        onChangeText={setItemPrice}
        keyboardType="numeric"
      />
      <TouchableHighlight style={{
        backgroundColor:'orange',
        borderRadius:10,
        padding:10,
        marginTop:10,
        marginBottom:10,


      }}    onPress={handleAddToCart} >
        <Text style={{fontSize:20,color:'white'}}>Add to Cart</Text>
        </TouchableHighlight>
      <TouchableHighlight style={{
        backgroundColor:'green',
        borderRadius:10,
        padding:10

      }} onPress={navigateToEditCart} >
        <Text style={{fontSize:20,color:'white'}}>Go to Edit Cart</Text>
        </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddToCartScreen;
