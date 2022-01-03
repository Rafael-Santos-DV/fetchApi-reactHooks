import * as types from "../types";

export const reducer = (state, action) => {
    switch (action.type) {
        case types.BUTTON_1: {
            return { quantButton: 1};
        } 
        case types.BUTTON_2: {
            return { quantButton: 2};
        }
        case types.BUTTON_3:{
            return { quantButton: 3};
        }
        case types.BUTTON_4:{
            return { quantButton: 4};
        }
        case types.BUTTON_5:{
            return { quantButton: 5};
        }
        case types.BUTTON_6:{
            return { quantButton: 6};
        }
        case types.BUTTON_7:{
            return { quantButton: 7};
        }
        case types.BUTTON_8:{
            return { quantButton: 8};
        }
        case types.BUTTON_9:{
            return { quantButton: 9};
        }
        case types.BUTTON_10:{
            return { quantButton: 10};
        }
        default: {
            return state;
        }
    }
};