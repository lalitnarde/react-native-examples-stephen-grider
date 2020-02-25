import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/SearchScreen";

const navigator = createStackNavigator(
  {
    SearchScreen: SearchScreen
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: "Zomato Search"
    }
  }
);

export default createAppContainer(navigator);
