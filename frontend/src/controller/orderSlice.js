import { createSlice } from "@reduxjs/toolkit";
import { mockBuyer } from "../utils/mockBuyer";
import { quinn, gavin } from "../utils/mockFetch";
const orderSlice = createSlice({
  name: "orders",
  initialState: {
    id: mockBuyer.id,
    buyer: mockBuyer.buyer,
    status: mockBuyer.status,
    cart: mockBuyer.cart,
    sum: mockBuyer.sum,
    orders: quinn.orders,
    orderDetail: quinn.orders_detail,
    stats: quinn.stats,
  },
});

// ------------------ Getters ------------------- //
export const getCart = (state) => state.orders.cart;
export const getOrders = (state) => state.orders.orders;
export const getStats = (state) => state.orders.stats;
export const getSum = (state) => state.orders.sum;
export const getOrderDetails = (state) => state.orders.orderDetail;

export default orderSlice.reducer;