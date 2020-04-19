export const TOGGLE_FAVS = 'TOGGLE_FAVS';

export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAVS,
        mealId: id
    }
}