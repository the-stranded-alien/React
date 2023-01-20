import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
   reducer: {
       form: formReducer,
       cars: carsReducer
   }
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm }