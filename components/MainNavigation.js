import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from './BottomNav';

import LoginScreen from '../app/screens/Login';
import DetailScreen from '../app/screens/Details';
import SubCategoryScreen from '../app/screens/SubCategory.js';

const Stack = createStackNavigator();

export default function MainNavigation() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='HomeTabs'
					screenOptions={{ headerShown: false }}>
					<Stack.Screen name='HomeTabs' component={BottomNav} />
					<Stack.Screen name='Login'>
						{props => <LoginScreen {...props} />}
					</Stack.Screen>
					<Stack.Screen name='Details'>
						{props => <DetailScreen {...props} />}
					</Stack.Screen>
					<Stack.Screen name='SubCategory' component={SubCategoryScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
