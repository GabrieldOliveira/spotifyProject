import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Album from './pages/album';
import Search from './pages/search';
import { colors } from './styles';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Album: { screen: Album },
      Search: { screen: Search },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primary,
          borderWidth: 0,
        },
        headerTintColor: colors.white,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
