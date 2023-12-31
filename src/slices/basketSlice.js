import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // action.payload is the product that was clicked on
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      )

      let newBasket = [...state.items]
      if (index >= 0) newBasket.splice(index, 1)
      else console.warn(`Can't remove product (id: ${action.payload.id}) as it's not in the basket!`)

      state.items = newBasket
    },
  },
})

export const {addToBasket, removeFromBasket} = basketSlice.actions

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items

export const selectTotalPrices = (state) => (state.basket.items).reduce(
  (total, item) => total + item.price, 0
)

export default basketSlice.reducer
