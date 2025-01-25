import {View, FlatList, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import ProductCard from '../../component/ProductCard';
import ProductDetailModal from '../../component/ProductDetailModal';
import {useHomeData} from '../../hooks/useHomeData';
import {logout} from '../../store/slices/AuthSlice';
import {useDispatch} from 'react-redux';
import NavigationService from '../../navigation/NavigationService';
import {palette} from '../../constants/colors';

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const {data: products, isLoading} = useHomeData();

  const handleCardPress = (product: any) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsModalVisible(false);
    NavigationService.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HomePage</Text>
        <Pressable onPress={handleLogout}>
          <Text style={styles.logout}>Logout</Text>
        </Pressable>
      </View>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <ProductCard {...item} onPress={() => handleCardPress(item)} />
        )}
        keyExtractor={item => item.id.toString()}
      />
      {selectedProduct && (
        <ProductDetailModal
          isVisible={isModalVisible}
          product={selectedProduct}
          onClose={() => setIsModalVisible(false)}
        />
      )}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  logout: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  loadingContainer: {
    position: 'absolute',
    backgroundColor: palette.loadingGrey,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: palette.secondary,
    fontWeight: 'bold',
  },
});
