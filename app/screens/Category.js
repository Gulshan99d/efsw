import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	FlatList,
	Image,
	StyleSheet,
	Dimensions,
} from 'react-native';
import useData from '../../hooks/useData';
import BottomNav from "../../components/BottomNav";

const { width } = Dimensions.get('window');
const MAX_WIDTH = 500;
const SIDEBAR_WIDTH = 80;

const CategoriesScreen = ({ route, navigation }) => {
	const { products } = useData();
	const [activeCategory, setActiveCategory] = useState('Mens'); // Default to first category

	// Derive unique categories from products
	const categories = [...new Set(products.map(p => p.category))].map(
		category => ({
			name: category,
			image:
				products.find(p => p.category === category)?.images.main[0] ||
				'https://via.placeholder.com/150',
		})
	);

	// Group products by category and subcategory
	const subcategoriesByCategory = products.reduce((acc, product) => {
		if (!acc[product.category]) {
			acc[product.category] = {};
		}
		if (!acc[product.category][product.subcategory]) {
			acc[product.category][product.subcategory] = {
				name: product.subcategory,
				image: product.images.main[0],
				productId: product._id,
			};
		}
		return acc;
	}, {});

	const renderCategoryButton = ({ item }) => (
		<TouchableOpacity
			style={[
				styles.categoryBtn,
				activeCategory === item.name && styles.categoryBtnActive,
			]}
			onPress={() => setActiveCategory(item.name)}>
			<Image source={{ uri: item.image }} style={styles.categoryImage} />
			<Text style={styles.categoryText}>{item.name}</Text>
		</TouchableOpacity>
	);

	const renderSubcategoryItem = ({ item }) => (
		<TouchableOpacity
			style={styles.popularItem}
			onPress={() =>
				navigation.navigate('DetailScreen', { productId: item.productId })
			}>
			<Image source={{ uri: item.image }} style={styles.popularImage} />
			<Text style={styles.popularTitle}>{item.name}</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.mobileContainer}>
			{/* Main Layout */}
			<View style={styles.categoriesLayout}>
				{/* Sidebar */}
				<ScrollView
					style={styles.sidebar}
					contentContainerStyle={styles.categoryList}
					showsVerticalScrollIndicator={false}>
					<FlatList
						data={categories}
						renderItem={renderCategoryButton}
						keyExtractor={item => item.name}
						scrollEnabled={false}
					/>
				</ScrollView>

				{/* Main Content */}
				<ScrollView
					style={styles.mainContent}
					contentContainerStyle={styles.categories}
					showsVerticalScrollIndicator={false}>
					{Object.keys(subcategoriesByCategory)
						.filter(category => category === activeCategory)
						.map(category => (
							<View key={category} style={styles.categorySection}>
								<Text style={styles.sectionTitle}>{category}</Text>
								<FlatList
									data={Object.values(subcategoriesByCategory[category])}
									renderItem={renderSubcategoryItem}
									keyExtractor={item => item.name}
									numColumns={2}
									columnWrapperStyle={styles.popularGrid}
								/>
							</View>
						))}
				</ScrollView>
				        <BottomNav />

			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mobileContainer: {
		width: '100%',
		maxWidth: MAX_WIDTH,
		alignSelf: 'center',
		backgroundColor: '#F3F5F8',
		flex: 1,
	},
	navContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	backIcon: {
		fontSize: 24,
		color: '#374151',
		marginRight: 12,
	},
	headerTitle: {
		fontSize: 21,
		fontWeight: '700',
		color: '#0D1527',
		fontFamily: 'Cinzel', // Ensure font is loaded
	},
	categoriesLayout: {
		flexDirection: 'row',
		height: '100%',
	},
	sidebar: {
		maxWidth: SIDEBAR_WIDTH,
		backgroundColor: 'rgba(5, 25, 235, 0.1)',
		borderRightWidth: 1,
		borderRightColor: '#E5E7EB',
	},
	categoryList: {
		padding: 8,
	},
	categoryBtn: {
		alignItems: 'center',
		padding: 8,
	},
	categoryBtnActive: {
		borderLeftWidth: 5,
		borderLeftColor: '#73D5E8',
	},
	categoryImage: {
		width: 52,
		height: 52,
		borderRadius: 13,
		borderWidth: 1,
		borderColor: '#E5E7EB',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.08,
		shadowRadius: 8,
	},
	categoryText: {
		fontSize: 11.5,
		fontWeight: '700',
		color: '#0D1527',
		textAlign: 'center',
		fontFamily: 'Cinzel', // Ensure font is loaded
	},
	mainContent: {
		flex: 1,
		maxWidth: MAX_WIDTH - SIDEBAR_WIDTH,
		padding: 12,
	},
	categories: {
		paddingBottom: 16,
	},
	categorySection: {
		marginBottom: 18,
	},
	sectionTitle: {
		fontSize: 19,
		fontWeight: '700',
		color: '#0D1527',
		marginBottom: 12,
		paddingLeft: 8,
		fontFamily: 'Cinzel', // Ensure font is loaded
	},
	popularGrid: {
		justifyContent: 'center',
		marginBottom: 10,
	},
	popularItem: {
		alignItems: 'center',
		width: 110,
	},
	popularImage: {
		width: 92,
		height: 92,
		borderRadius: 23,
		borderWidth: 1,
		borderColor: '#E5E7EB',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 10,
	},
	popularTitle: {
		fontSize: 13.5,
		fontWeight: '600',
		color: '#0D1527',
		textAlign: 'center',
		fontFamily: 'Cinzel', // Ensure font is loaded
	},
});

export default CategoriesScreen;
