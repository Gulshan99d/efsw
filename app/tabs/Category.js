import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	Image,
	StyleSheet,
	Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useData from '../../hooks/useData.js';

const { width } = Dimensions.get('window');
const MAX_WIDTH = 500;
const SIDEBAR_WIDTH = 80;
const MAIN_CONTENT_WIDTH = width - SIDEBAR_WIDTH;
const HEADER_HEIGHT = 60;
const GRID_ITEM_WIDTH = (MAIN_CONTENT_WIDTH - 24 - 10) / 2; // 280px - 12px padding - 10px gap

const CategoriesScreen = () => {
	const { categories } = useData();
	const navigation = useNavigation();
	const [activeCategory, setActiveCategory] = useState('Men Accessories');

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
		key={item}
			style={styles.popularItem}
			onPress={() =>{
			navigation.navigate('SubCategory', { category: activeCategory,subcategory:item.name })
			console.log(activeCategory,item);
			  
			}}>
			<Image
				source={{ uri: item.image || 'https://via.placeholder.com/150' }}
				style={styles.popularImage}
			/>
			<Text style={styles.popularTitle}>{item.name}</Text>
		</TouchableOpacity>
	);

	const renderSection = ({ item }) =>
		activeCategory === item.name && (
			<View style={styles.categorySection}>
				<Text style={styles.sectionTitle}>{item.name}</Text>
				<FlatList
					data={item.subcategories}
					renderItem={renderSubcategoryItem}
					keyExtractor={sub => sub.name}
					numColumns={2}
					contentContainerStyle={styles.popularGrid}
					scrollEnabled={false}
				/>
			</View>
		);

	return (
		<View style={styles.mobileContainer}>
			{/* Main Layout */}
			<View style={styles.categoriesLayout}>
				{/* Sidebar */}
				<View style={styles.sidebar}>
					<FlatList
						data={categories}
						renderItem={renderCategoryButton}
						keyExtractor={item => item.name}
						contentContainerStyle={styles.categoryList}
						showsVerticalScrollIndicator={false}
					/>
				</View>

				{/* Main Content */}
				<FlatList
					data={categories}
					renderItem={renderSection}
					keyExtractor={item => item.name}
					contentContainerStyle={styles.categories}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mobileContainer: {
		paddingTop: 10,
		width: '100%',
		maxWidth: MAX_WIDTH,
		alignSelf: 'center',
		backgroundColor: '#F3F5F8',
		flex: 1,
	},
	categoriesLayout: {
		flexDirection: 'row',
		marginTop: HEADER_HEIGHT,
		height: '100%',
	},
	sidebar: {
		width: SIDEBAR_WIDTH,
		backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
	},
	categories: {
		padding: 12,
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
	},
	popularGrid: {
		paddingHorizontal: 10,
	},
	popularItem: {
		width: GRID_ITEM_WIDTH, // ~125px
		alignItems: 'center',
		marginBottom: 10,
		marginHorizontal: 1, // Half of 10px gap
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
	},
});

export default CategoriesScreen;
