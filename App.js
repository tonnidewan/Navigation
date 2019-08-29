import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import Example from './src/screens/Example';
import MyHomeScreen from './src/screens/MyHomeScreen';


const AuthStack = createStackNavigator({
  Landing: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Landing'
    }
  },
  SignIn: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'SignIn'
    }
  },
  SignUp: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'SignUp'
    }
  },
  ForgotPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'ForgotPassword'
    }
  },
  ResetPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Reset Password'
    }
  },
});

const FeedStack = createStackNavigator({
  Feed: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Feed'
    }
  },
  Details: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Feed Details'
    }
  },
})

const SearchStack = createStackNavigator({
  Search: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Search'
    }
  },
  Details: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Search Details'
    }
  },
})

const DiscoverStack = createStackNavigator({
  Search: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Discover'
    }
  },
  Details: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Discover Details'
    }
  },
})

const SettingsStack = createStackNavigator({
  SettingsList: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Settings List'
    }
  },
  Profile: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Profile'
    }
  },

})

const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed'
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search'
    }
  },
  Discover: {
    screen: DiscoverStack,
    navigationOptions: {
      tabBarLabel: 'Discover'
    }
  },
});

const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
  Settings: SettingsStack,
  MyHomeScreen: MyHomeScreen
})

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
    Promotion1: {
      screen: Example
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)


const App = createSwitchNavigator({
  Loading: {
    screen: Example,
  },
  Auth: {
    screen: AuthStack
  },
  App: {
    screen: AppModalStack
  }
})



export default createAppContainer(App)