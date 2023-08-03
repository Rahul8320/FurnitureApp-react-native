import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS, FONTS, SIZES} from '../../constant/theme';
import Toast from 'react-native-toast-message';

const ProductDetails = ({navigation}: any) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count >= 3) {
      Toast.show({
        type: 'info',
        text1: 'Opps',
        text2: 'Max 3 item per order 🛒',
        position: 'bottom',
      });
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count <= 1) {
      Toast.show({
        type: 'error',
        text1: 'Opps',
        text2: 'Minimum one item needed 😢',
        position: 'bottom',
      });
    } else {
      setCount(count - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        }}
        style={styles.img}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$660</Text>
          </View>
        </View>

        <View style={styles.rationRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map(index => (
              <Ionicons
                name="star"
                size={SIZES.large}
                color="gold"
                key={index}
              />
            ))}

            <Text style={styles.ratingTxt}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={increment}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingTxt}> {count} </Text>
            <TouchableOpacity onPress={decrement}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descWrapper}>
          <Text style={styles.desc}>Description</Text>
          <Text style={styles.descTxt}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            veniam ea vitae omnis! Ratione neque facilis illum minus vero?
            Similique quae eveniet, vero, delectus maiores aperiam consequuntur
            praesentium maxime quam laudantium dolorem vel magni. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>

        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="location-outline" size={20} />
              <Text style={{marginLeft: 5}}>Bankura</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text style={{marginLeft: 5}}>Free Delivery</Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.cartBtnTxt}>Buy Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addCartBtn}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addCartBtn: {
    width: 37,
    height: 37,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBtn: {
    width: '60%',
    backgroundColor: COLORS.primary,
    padding: SIZES.small / 2,
    marginLeft: SIZES.small,
    borderRadius: SIZES.large,
  },
  cartBtnTxt: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    textAlign: 'center',
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '96%',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: '100%',
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  desc: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.large,
  },
  descWrapper: {
    marginTop: SIZES.large,
    marginHorizontal: SIZES.large,
  },
  descTxt: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    textAlign: 'justify',
    marginBottom: SIZES.small,
  },
  img: {
    aspectRatio: 4 / 3,
    resizeMode: 'cover',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: SIZES.large,
    marginHorizontal: SIZES.small,
  },
  price: {
    paddingHorizontal: 15,
    paddingVertical: 2,
    fontSize: SIZES.large,
    fontFamily: FONTS.semiBold,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  rating: {
    top: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large,
  },
  rationRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 5,
    width: '95%',
  },
  ratingTxt: {
    fontFamily: FONTS.medium,
    color: COLORS.gray,
    paddingHorizontal: SIZES.xSmall,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 20,
    width: '90%',
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.small,
    zIndex: 999,
    width: '90%',
  },
});

export default ProductDetails;
