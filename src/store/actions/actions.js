import * as actionTypes from './actionTypes';

export const addItem = () => {
    return {
        types: actionTypes.ADD_ITEM,
    }
}

export const editItem = (item) => {
    return {
        actions: actionTypes.EDIT_ITEM,
        item: item
    }
}

export const deleteItem = (item) => {
    return {
        types: actionTypes.DELETE_ITEM,
        item: item
    }
}

export const setTitle = (title) => {
    return {
        types: actionTypes.SET_TITLE,
        title: title
    }
}

export const setItem = (item) => {
    return { 
        types: actionTypes.SET_ITEM,
        item: item
    }
}

export const setEditTitle = () => {
    return {
        types: actionTypes.SET_EDIT
    }
}

export const setError = (error) => {
    return {
        types: actionTypes.SET_ERROR,
        error: error
    }
}
