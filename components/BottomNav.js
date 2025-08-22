import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import Svg, { Path, Line, Rect, Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const BottomNav = () => {
	const navigation = useNavigation();
	const navItems = [
		{
			icon: (
				<Svg width={24} height={24} viewBox='0 0 24 24' fill='#FBC886'>
					<Path d='M3 10.5V21a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10.5L12 3l-9 7.5z' />
					<Rect x='7' y='14' width='10' height='9' rx='1' />
				</Svg>
			),
			label: 'Home',
			active: true,
		},
		{
			icon: (
				<Svg
					width={24}
					height={24}
					viewBox='0 0 24 24'
					fill='none'
					stroke='#6b7280'
					strokeWidth={1}>
					<Rect x='4' y='4' width='6' height='6' rx='1' />
					<Rect x='14' y='4' width='6' height='6' rx='1' />
					<Rect x='4' y='14' width='6' height='6' rx='1' />
					<Rect x='14' y='14' width='6' height='6' rx='1' />
				</Svg>
			),
			label: 'Categories',
		},
		{
			icon: (
				<Svg width={16} height={16} viewBox='0 0 16 16' fill='#6b7280'>
					<Path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
				</Svg>
			),
			label: 'Search',
		},
		{
			icon: (
				<Svg width={16} height={16} viewBox='0 0 16 16' fill='#6b7280'>
					<Path
						fillRule='evenodd'
						d='M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386'
					/>
				</Svg>
			),
			label: 'Wishlist',
		},
		{
			icon: (
				<Svg width={16} height={16} viewBox='0 0 16 16' fill='#6b7280'>
					<Path
						fillRule='evenodd'
						d='M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z'
					/>
				</Svg>
			),
			label: 'My Orders',
		},
	];

	return (
		<View style={styles.bottomNav}>
			{navItems.map((item, index) => (
				<TouchableOpacity
					onPress={() =>
						navigation.navigate('CategoryScreen')
					}
					key={index}
					style={styles.navItem}>
					<View style={[styles.navIcon, item.active && styles.activeIcon]}>
						{item.icon}
					</View>
					<Text style={[styles.navLabel, item.active && styles.activeLabel]}>
						{item.label}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default BottomNav;

const styles = StyleSheet.create({
	bottomNav: {
		position: 'absolute',
		bottom: 0,
		width: Dimensions.get('window').width,
		maxWidth: 500,
		backgroundColor: '#ffffff',
		borderTopWidth: 1,
		borderColor: '#e5e7eb',
		flexDirection: 'row',
		height: 64,
		alignSelf: 'center',
	},
	navItem: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 4,
	},
	navIcon: {
		width: 24,
		height: 24,
	},
	activeIcon: {
		color: '#FBC886',
	},
	navLabel: {
		fontSize: 12,
		fontWeight: '500',
		color: '#6b7280',
	},
	activeLabel: {
		color: '#FBC886',
	},
});
