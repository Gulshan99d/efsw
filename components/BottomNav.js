import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet } from 'react-native';

import HomeScreen from '../app/tabs/Home';
import CategoryScreen from '../app/tabs/Category';
import SearchTab from '../app/tabs/Search';
import CartTab from '../app/tabs/Cart';
import OrdersTab from '../app/tabs/Orders';

import Svg, { Path, Rect } from 'react-native-svg';

const Tab = createBottomTabNavigator();

function BottomTabs() {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: true,
				tabBarStyle: {
					backgroundColor: '#ffffff',
					borderTopWidth: 1,
					borderColor: '#e5e7eb',
					height: 64,
				},
				tabBarActiveTintColor: '#FBC886',
				tabBarInactiveTintColor: '#6b7280',
			}}>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Svg width={24} height={24} viewBox='0 0 24 24' fill='#FBC886'>
							<Path d='M3 10.5V21a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10.5L12 3l-9 7.5z' />
							<Rect x='7' y='14' width='10' height='9' rx='1' />
						</Svg>
					),
				}}
			/>
			<Tab.Screen
				name='Category'
				component={CategoryScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Svg
							width={24}
							height={24}
							viewBox='0 0 24 24'
							fill='none'
							stroke={color}
							strokeWidth={1}>
							<Rect x='4' y='4' width='6' height='6' rx='1' />
							<Rect x='14' y='4' width='6' height='6' rx='1' />
							<Rect x='4' y='14' width='6' height='6' rx='1' />
							<Rect x='14' y='14' width='6' height='6' rx='1' />
						</Svg>
					),
				}}
			/>
			<Tab.Screen
				name='Search'
				component={SearchTab}
				options={{
					tabBarIcon: ({ color }) => (
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
				}}
			/>
			<Tab.Screen
				name='Cart'
				component={CartTab}
				options={{
					tabBarIcon: ({ color }) => (
						<Svg width={16} height={16} viewBox='0 0 16 16' fill='#6b7280'>
							<Path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
						</Svg>
					),
				}}
			/>
			<Tab.Screen
				name='Orders'
				component={OrdersTab}
				options={{
					tabBarIcon: ({ color }) => (
						<Svg width={16} height={16} viewBox='0 0 16 16' fill='#6b7280'>
							<Path
								fillRule='evenodd'
								d='M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z'
							/>
						</Svg>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default BottomTabs;

// const styles = StyleSheet.create({
//	bottomNav: {
//		position: 'absolute',
//		bottom: 0,
//		width: Dimensions.get('window').width,
//		maxWidth: 500,
//		backgroundColor: '#ffffff',
//		borderTopWidth: 1,
//		borderColor: '#e5e7eb',
//		flexDirection: 'row',
//		height: 64,
//		alignSelf: 'center',
//	},
//	navItem: {
//		flex: 1,
//		alignItems: 'center',
//		justifyContent: 'center',
//		gap: 4,
//	},
//	navIcon: {
//		width: 24,
//		height: 24,
//	},
//	activeIcon: {
//		color: '#FBC886',
//	},
//	navLabel: {
//		fontSize: 12,
//		fontWeight: '500',
//		color: '#6b7280',
//	},
//	activeLabel: {
//		color: '#FBC886',
//	},
// });
