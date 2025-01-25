import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

const ProductDetailModal = ({
  isVisible,
  product,
  onClose,
}: {
  isVisible: boolean;
  product: any;
  onClose: () => void;
}) => {
  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{product.title}</Text>
        <Text style={styles.modalDescription}>{product.description}</Text>
        <Text style={styles.modalPrice}>Price: ${product.price}</Text>
        <Text style={styles.modalCategory}>Category: {product.category}</Text>
        <View style={styles.rating}>
          <Text>Rating: {product?.rating?.rate} ⭐</Text>
          <Text>({product?.rating?.count} reviews)</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '50%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  modalPrice: {
    fontSize: 16,
    color: '#e91e63',
    marginBottom: 10,
  },
  modalCategory: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    width: 100,
    backgroundColor: '#e91e63',
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductDetailModal;
