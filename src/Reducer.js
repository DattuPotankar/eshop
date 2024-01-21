// here we define all the application level states and define actions to make the state
export const initialState = {
    basket: [],
  };

  export const getBasketTotal = (basket) => {
    return (basket?.reduce((amount,item) => item.price + amount, 0));
  }
  
  const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case 'ADD_TO_BASKET':
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
        case 'REMOVE_FROM_BASKET': {
            //findinde get first index;
            const indexToRemove = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            let items = [...state.basket];
            // items.splice
            if (indexToRemove !== -1) {
                items.splice(indexToRemove, 1);
              }
            return {
                ...state,
                basket: items,
            };
        }
      default:
        return state;
    }
  };
  
  export default reducer;
      