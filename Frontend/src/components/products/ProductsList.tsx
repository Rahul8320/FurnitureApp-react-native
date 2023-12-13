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
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductCardView product={item} key={item.id} />
        )}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: SIZES.xxLarge,
    paddingLeft: SIZES.small / 2,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default ProductsList;
