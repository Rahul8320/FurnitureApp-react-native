import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, SIZES} from '../../../constant/theme';
import {ProductType} from '../../utils/productTypes';

interface ProductCardViewType {
  product: ProductType;
}

const ProductCardView = ({product}: ProductCardViewType) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProuctDetails', {product})}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: product.imageUrl,
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {product.title}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            {product.supplier}
          </Text>
          <Text style={styles.price}> ${product.price} </Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    position: 'absolute',
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginBottom: 120,
  },
  details: {
    padding: SIZES.small,
  },
  img: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  imgContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
  },
  price: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  supplier: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});

export default ProductCardView;
