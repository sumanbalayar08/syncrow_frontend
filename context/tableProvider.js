import tableContext from "./tableContext";
import { useReducer } from "react";

const defaultTableState = {
    lis1: [],
    lis2: [],
    lis3: [],
    totalAmount: 0,
};

const tableReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                lis1: [...state.lis1, action.items],
            };
        case "SUB":
            return {
                ...state,
                lis1: state.lis1.filter((item) => item.bundle_item.data.id !== action.items.bundle_item.data.id),
            };
        case "SUM":
            return {
                ...state,
                totalAmount: 0,
            };
        default:
            return state;
    }
}
