import * as actionTypes from './actionTypes';

export const addItem = () => {
    return {
        types: actionTypes.ADD_ITEM,
    }
}

export const deleteItem = (item) => {
    return {
        types: actionTypes.DELETE_ITEM,
        item: item
    }
}

export const editItem = (item) => {
    return {
        actions: actionTypes.EDIT_ITEM,
        item: item
    }
}

