import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES} from '../../../constant/theme';
import {useNavigation} from '@react-navigation/native';
import {productsListScreenProps} from '../../utils/rootStackParamList';

const Heading = () => {
  const navigation = useNavigation<productsListScreenProps>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProductsList')}>
          <Ionicons name="grid" size={SIZES.large} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    // marginBottom: -SIZES.xSmall,
    marginHorizontal: SIZES.small,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
  },
});

export default Heading;
