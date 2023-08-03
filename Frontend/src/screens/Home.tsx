import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS, FONTS, SIZES} from '../../constant/theme';
import Welcome from '../components/home/Welcome';
import Carousel from '../components/home/Carousel';
import Heading from '../components/home/Heading';
import ProductRow from '../components/products/ProductRow';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={SIZES.xLarge} />

          <Text style={styles.locationTxt}>Kolkata, W.B.</Text>

          <View style={styles.cartContainer}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={SIZES.xLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appContainer: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  cartContainer: {
    alignItems: 'flex-end',
  },
  cartCount: {
    position: 'absolute',
    bottom: SIZES.medium,
    width: SIZES.medium,
    height: SIZES.medium,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: FONTS.regular,
    color: COLORS.lightWhite,
    fontSize: SIZES.xSmall,
  },
  locationTxt: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  textStyle: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
  },
});
