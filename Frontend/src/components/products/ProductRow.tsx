import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import {SIZES} from '../../../constant/theme';
import ProductCardView from './ProductCardView';
import useFetch from '../../hooks/useFetch';
import {ProductType} from '../../utils/productTypes';

const ProductRow = () => {
  const {data, error, loading} = useFetch();
  const products: ProductType[] = data;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>Something went wrong! - {error}</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductCardView product={item} />}
          horizontal={true}
          contentContainerStyle={{columnGap: SIZES.medium}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginLeft: 12,
  },
});

export default ProductRow;
