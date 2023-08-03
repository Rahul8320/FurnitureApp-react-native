import React from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import useFetch from '../../hooks/useFetch';
import {COLORS, SIZES} from '../../../constant/theme';
import {ProductType} from '../../utils/productTypes';
import ProductCardView from './ProductCardView';

const ProductsList = () => {
  const {data, loading} = useFetch();
  const products: ProductType[] = data;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item._id}
        renderItem={({item}) => <ProductCardView product={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: SIZES.small,
    marginLeft: SIZES.xSmall / 2,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  separator: {
    height: 16,
  },
});

export default ProductsList;
