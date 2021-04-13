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
      const payloadFeature = action.payload;
      const newFeaturesArray = [
        ...state.car.features, payloadFeature
      ]
      const newAdditionalPrice = newFeaturesArray.reduce(function(acc, obj) {return acc + obj.price}, 0);
      return {
        additionalPrice: newAdditionalPrice,
        car: {
          ...state.car,
          features: newFeaturesArray
        },
        additionalFeatures: state.additionalFeatures.filter(feature => payloadFeature !== feature)
      };
    case REMOVE_FEATURE:
      return {
        ...state,

      };
    default:
      return state;
  }
};
