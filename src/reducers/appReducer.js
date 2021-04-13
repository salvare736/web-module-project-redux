import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/appActions';

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      const addFeaturesArray = [
        ...state.car.features, action.payload
      ]
      const addAdditionalPrice = addFeaturesArray.reduce(function(acc, obj) {return acc + obj.price}, 0);
      return {
        additionalPrice: addAdditionalPrice,
        car: {
          ...state.car,
          features: addFeaturesArray
        },
        additionalFeatures: state.additionalFeatures.filter(feature => action.payload !== feature)
      };
    case REMOVE_FEATURE:
      const remFeaturesArray = state.car.features.filter(feature => action.payload !== feature);
      const remAdditionalPrice = remFeaturesArray.reduce(function(acc, obj) {return acc + obj.price}, 0);
      return {
        additionalPrice: remAdditionalPrice,
        car: {
          ...state.car,
          features: remFeaturesArray
        },
        additionalFeatures: [
          ...state.additionalFeatures, action.payload
        ]
      };
    default:
      return state;
  }
};
