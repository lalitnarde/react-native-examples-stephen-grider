import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "./components/SearchBar";
import useRestaurants from "./hooks/useRestaurants";
import RestaurantList from "./components/RestaurantList";

const SearchScreen = () => {
  //   console.log(props);
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useRestaurants();

  const filterRestaurantsByPrice = price => {
    return results.filter(result => {
      return result.restaurant.price_range === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView>
        {filterRestaurantsByPrice(1).length > 0 ? (
          <RestaurantList
            results={filterRestaurantsByPrice(1)}
            title="Economic"
          />
        ) : null}
        {filterRestaurantsByPrice(2).length > 0 ? (
          <RestaurantList
            results={filterRestaurantsByPrice(2)}
            title="Cost Effective"
          />
        ) : null}
        {filterRestaurantsByPrice(3).length > 0 ? (
          <RestaurantList
            results={filterRestaurantsByPrice(3)}
            title="Mediumly priced"
          />
        ) : null}
        {filterRestaurantsByPrice(4).length > 0 ? (
          <RestaurantList
            results={filterRestaurantsByPrice(4)}
            title="High"
          />
        ) : null}
        {filterRestaurantsByPrice(5).length > 0 ? (
          <RestaurantList
            results={filterRestaurantsByPrice(5)}
            title="Fine Dine"
          />
        ) : null}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  //   containerStyle: {
  //     flex: 1
  //   }
});

export default SearchScreen;
