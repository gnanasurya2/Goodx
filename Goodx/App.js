import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import MainNavigator from "./navigation/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import UserReducer from "./store/reducers/User";
import ProductsReducer from "./store/reducers/products";
import { init, DropTable } from "./database/database";
import RootNavigator from "./navigation/RootNavigation";

console.disableYellowBox = true;

const rootReducer = combineReducers({
  user: UserReducer,
  products: ProductsReducer,
});
init();
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
