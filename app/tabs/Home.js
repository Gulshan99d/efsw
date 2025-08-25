import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Pressable,
	TouchableOpacity,
	FlatList,
	Image,
	Button,
	Dimensions,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Svg, { Path, Line, Rect, Circle } from 'react-native-svg';
import useData from '../../hooks/useData';
import { useIsLoggedIn } from '../../hooks/useLoggedIn';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
	const { categories, products } = useData();
	// const [accessToken, isLoggedIn] = useIsLoggedIn();
	const navigation = useNavigation();

	// const setTemp = async () => {
	//   try {
	//     console.log("Setting temporary data");
	//     await SecureStore.setItemAsync(
	//       "accessToken", // spelling fix bhi note karo
	//       JSON.stringify({
	//         token:
	//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhcnRsaW5lMDMzQGdtYWlsLmNvbSIsIl9pZCI6IjY4N2U0NjNhNGVjN2M5NzlmNjQxMzFkMiIsImlhdCI6MTc1Mzk3MDEyMiwiZXhwIjoxNzU2NTYyMTIyfQ.4OYJhkdjMSMXodSCPhWihGnW8cD8lVDEgCCn11gOe_A",
	//         expiry: "1756562122555",
	//       })
	//     );
	//     console.log("✅ Data set successfully");
	//   } catch (err) {
	//     console.error("❌ Failed to set token in SecureStore:", err);
	//   }
	// };
	// setTemp();

	// useEffect(() => {}, []);

	const categoryImage = {
		'Mens': require('../../assets/homeImages/mensCat.avif'),
		'Womens': require('../../assets/homeImages/womensCat.png'),
		Kids: require('../../assets/homeImages/kidsCat.jpg'),
	};
	const renderCategory = ({ item }) => (
		<View style={styles.categoryItem}>
			<View style={styles.categoryImage}>
				<Image source={categoryImage[item.name]} style={styles.categoryImage} />
			</View>
			<Text style={styles.categoryText}>{item.name}</Text>
		</View>
	);

	const renderProduct = ({ item }) => (
		<Pressable
			key={item.__id}
			onPress={() =>
				navigation.navigate('Details', { productId: item._id, affilatorId: '' })
			}
			style={styles.productCard}>
			<View style={styles.productImageContainer}>
				<Image
					source={{
						uri: item.images.main[0] || 'https://placeholder.com/172x208',
					}}
					style={styles.productImage}
				/>
				<TouchableOpacity style={styles.heartIcon}>
					<Svg
						width={16}
						height={16}
						viewBox='0 0 24 24'
						fill='none'
						stroke='#6b7280'
						strokeWidth={2}>
						<Path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
					</Svg>
				</TouchableOpacity>
				{item.tag !== 'None' && (
					<View style={styles.newBadge}>
						<Text style={styles.newBadgeText}>{item.tag}</Text>
					</View>
				)}
			</View>
			<View style={styles.productContent}>
				<Text style={styles.productTitle} numberOfLines={2}>
					{item.title}
				</Text>
				<View style={styles.priceContainer}>
					<Text style={styles.currentPrice}>₹{item.currentPrice}</Text>
					<Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
				</View>
				<View style={styles.delivery}>
					<Svg
						width={12}
						height={12}
						viewBox='0 0 24 24'
						fill='none'
						stroke='#FBC886'
						strokeWidth={2}>
						<Path d='M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2' />
						<Path d='M15 18H9' />
						<Path d='M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14' />
						<Circle cx='7' cy='18' r='2' />
						<Circle cx='17' cy='18' r='2' />
						<Path d='M2 8h3' />
						<Path d='M2 11h2' />
					</Svg>
					<Text style={styles.deliveryText}>Free Delivery</Text>
				</View>
			</View>
		</Pressable>
	);

	const sections = [
		{
			key: 'categories',
			render: () => (
				<View style={styles.categories}>
					<Text style={styles.sectionTitle}>Shop by Category</Text>
					<FlatList
						data={categories}
						renderItem={renderCategory}
						keyExtractor={item => item.name}
						horizontal
						showsHorizontalScrollIndicator={false}
						style={styles.categoryScroll}
					/>
				</View>
			),
		},
		{
			key: 'featuredProducts',
			render: () => (
				<View style={styles.products}>
					<View style={styles.productHeader}>
						<Text style={styles.sectionTitle}>Featured Products</Text>
						<TouchableOpacity>
							<Text style={styles.viewAll}>View All</Text>
						</TouchableOpacity>
					</View>
					<FlatList
						data={products.filter(p => p.inStock)}
						renderItem={renderProduct}
						keyExtractor={item => item._id}
						numColumns={2}
						columnWrapperStyle={styles.productGrid}
						scrollEnabled={false}
					/>
				</View>
			),
		},
		{
			key: 'newArrivals',
			render: () => (
				<View style={styles.products}>
					<View style={styles.productHeader}>
						<Text style={styles.sectionTitle}>New Arrivals</Text>
						<TouchableOpacity>
							<Text style={styles.viewAll}>View All</Text>
						</TouchableOpacity>
					</View>
					<FlatList
						data={products.filter(p => p.tag=== "New Arrival")}
						renderItem={renderProduct}
						keyExtractor={item => item._id}
						numColumns={2}
						columnWrapperStyle={styles.productGrid}
						scrollEnabled={false}
					/>
				</View>
			),
		},
	];

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<FlatList
					data={sections}
					renderItem={({ item }) => item.render()}
					keyExtractor={item => item.key}
					contentContainerStyle={styles.main}
				/>
			</View>
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e9d8ca',
		maxWidth: 500,
		minWidth: Dimensions.get('window').width,
		alignSelf: 'center',
	},
	main: {
		paddingTop: 16,
		paddingBottom: 80,
	},
	categories: {
		marginBottom: 24,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: '600',
		color: '#111827',
		paddingHorizontal: 16,
		marginBottom: 16,
	},
	categoryScroll: {
		paddingHorizontal: 16,
	},
	categoryItem: {
		width: 80,
		alignItems: 'center',
		marginRight: 16,
	},
	categoryImage: {
		width: 64,
		height: 64,
		borderRadius: 32,
		backgroundColor: '#f3f4f6',
	},
	categoryText: {
		fontSize: 12,
		color: '#374151',
		marginTop: 8,
	},
	filterBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 8,
		backgroundColor: '#ffffff',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#e5e7eb',
		marginBottom: 24,
	},
	filterButton: {
		flex: 1,
		alignItems: 'center',
		padding: 6,
		backgroundColor: '#f9fafb',
		borderRadius: 8,
		marginHorizontal: 2,
	},
	filterText: {
		fontSize: 12,
		fontWeight: '600',
		color: '#1f2937',
	},
	filterPanel: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		maxWidth: 360,
		height: '50%',
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		padding: 20,
	},
	closeButton: {
		position: 'absolute',
		top: 12,
		right: 12,
		width: 28,
		height: 28,
		backgroundColor: '#f3f4f6',
		borderRadius: 14,
		alignItems: 'center',
		justifyContent: 'center',
	},
	panelTitle: {
		fontSize: 18,
		fontWeight: '600',
		color: '#111827',
		marginBottom: 16,
	},
	options: {
		flexDirection: 'column',
		gap: 12,
	},
	option: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	checkbox: {
		width: 18,
		height: 18,
		borderWidth: 2,
		borderColor: '#73D5E8',
		borderRadius: 4,
	},
	optionText: {
		fontSize: 14,
		color: '#374151',
	},
	genderImage: {
		width: 28,
		height: 28,
		borderRadius: 14,
		borderWidth: 1,
		borderColor: '#e5e7eb',
		padding: 3,
	},
	sliderContainer: {
		height: 10,
		backgroundColor: '#e5e7eb',
		borderRadius: 5,
		marginBottom: 4,
	},
	rangeFill: {
		height: 10,
		width: '80%',
		backgroundColor: '#73D5E8',
		borderRadius: 5,
	},
	sliderLabels: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	sliderLabel: {
		fontSize: 12,
		color: '#6b7280',
	},
	optionDivider: {
		borderTopWidth: 1,
		borderColor: '#e5e7eb',
		marginVertical: 8,
	},
	filterSubtitle: {
		fontSize: 14,
		fontWeight: '500',
		color: '#111827',
		marginBottom: 8,
	},
	products: {
		marginBottom: 24,
	},
	productHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		marginBottom: 16,
	},
	viewAll: {
		fontSize: 14,
		fontWeight: '500',
		color: '#73D5E8',
	},
	productGrid: {
		paddingHorizontal: 16,
		gap: 16,
	},
	productCard: {
		flex: 1,
		backgroundColor: '#ffffff',
		borderRadius: 8,
		overflow: 'hidden',
		marginBottom: 16,
	},
	productImageContainer: {
		position: 'relative',
	},
	productImage: {
		width: '100%',
		height: 208,
	},
	heartIcon: {
		position: 'absolute',
		top: 8,
		right: 8,
		width: 32,
		height: 32,
		backgroundColor: '#ffffff',
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	newBadge: {
		position: 'absolute',
		top: 8,
		left: 8,
		backgroundColor: '#73D5E8',
		padding: 4,
		borderRadius: 4,
	},
	newBadgeText: {
		fontSize: 12,
		color: '#ffffff',
	},
	productContent: {
		padding: 12,
	},
	productTitle: {
		fontSize: 14,
		fontWeight: '600',
		color: '#111827',
		marginBottom: 4,
	},
	priceContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		marginBottom: 4,
	},
	currentPrice: {
		fontSize: 14,
		fontWeight: '600',
		color: '#73D5E8',
	},
	oldPrice: {
		fontSize: 12,
		color: '#9ca3af',
		textDecorationLine: 'line-through',
	},
	delivery: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	deliveryText: {
		fontSize: 12,
		color: '#FBC886',
	},
});
