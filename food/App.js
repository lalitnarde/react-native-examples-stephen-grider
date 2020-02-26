import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/SearchScreen";
import RestaurantShowScreen from "./src/screens/RestaurantShowScreen";

const navigator = createStackNavigator(
  {
    SearchScreen: SearchScreen,
    RestaurantShowScreen: RestaurantShowScreen
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: "Zomato Search"
    }
  }
);

export default createAppContainer(navigator);
