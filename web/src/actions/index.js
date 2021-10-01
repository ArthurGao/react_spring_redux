export const setInterval = (num) => {
    return {
        type: 'SETINTERVAL',
        payload: {
            num
        }
    }
}

export const setFavourites = (ids) => {
    return {
        type: 'SETFAVOURITES',
        payload: {
            ids
        }
    }
}