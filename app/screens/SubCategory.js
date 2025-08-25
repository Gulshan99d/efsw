import React from 'react';
import {
	View,
	Text,
	FlatList,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useData from '../../hooks/useData.js'; // Adjust path as needed
import BottomNav from '../../components/BottomNav.js';
import { useRoute, useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const SubcategoryScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
	const data = useData();
	const { category, subcategory } = route.params || {};

	// Filter products by category and subcategory
	const products = data.products.filter(
		p =>
			p.category.toLowerCase() === category?.toLowerCase() &&
			p.subcategory.toLowerCase() === subcategory?.toLowerCase()
	);

	const renderProductItem = ({ item }) => (
		<TouchableOpacity
			style={styles.productItem}
			onPress={() =>
				navigation.navigate('DetailScreen', { productId: item._id })
			}>
			<Image
				source={{ uri: item.images.main[0] }}
				style={styles.productImage}
			/>
			<Text style={styles.productTitle}>{item.title}</Text>
			<Text style={styles.productPrice}>₹{item.currentPrice}</Text>
		</TouchableOpacity>
	);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				{subcategory} in {category}
			</Text>
			<FlatList
				data={products}
				renderItem={renderProductItem}
				keyExtractor={item => item._id}
				numColumns={2}
				contentContainerStyle={styles.grid}
				ListEmptyComponent={
					<Text style={styles.emptyText}>No products found</Text>
				}
			/>
			<BottomNav />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F3F5F8',
		paddingTop: 20, // Additional padding if needed
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 16,
		color: '#0D1527',
		fontFamily: 'Cinzel',
	},
	grid: {
		paddingHorizontal: 16,
	},
	productItem: {
		width: width / 2 - 24, // 2 columns with padding
		margin: 8,
		backgroundColor: '#fff',
		borderRadius: 12,
		padding: 8,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.08,
		shadowRadius: 8,
		elevation: 2,
	},
	productImage: {
		width: '100%',
		height: 150,
		borderRadius: 8,
	},
	productTitle: {
		fontSize: 16,
		fontWeight: '600',
		color: '#0D1527',
		marginTop: 8,
	},
	productPrice: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#73D5E8',
		marginTop: 4,
	},
	emptyText: {
		textAlign: 'center',
		fontSize: 16,
		color: '#374151',
		marginTop: 20,
	},
});

export default SubcategoryScreen;
