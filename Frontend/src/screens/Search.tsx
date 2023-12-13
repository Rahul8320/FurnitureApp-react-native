import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/theme';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import ProductCardView from '../components/products/ProductCardView';

const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchKey}`,
      );
      setSearchResult(response.data.products);
      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Feather
              name="search"
              size={SIZES.large}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
          </View>
        ) : searchResult.length > 0 && searchKey.length > 0 ? (
          <FlatList
            data={searchResult}
            numColumns={2}
            keyExtractor={(item: any) => item.id}
            renderItem={({item}) => <ProductCardView product={item} />}
            contentContainerStyle={styles.container}
          />
        ) : (
          <Text>No Item Found</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: SIZES.small / 2,
    paddingLeft: SIZES.small / 2 - 2,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.xLarge,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
  },
  searchInput: {
    fontFamily: FONTS.regular,
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.small,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
});
