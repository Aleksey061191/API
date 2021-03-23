import { object } from "prop-types"

export const LocalStorageService = {
    setItems: (items) => {
        Object.entrice(items).forEach((key, value) => {
            localStorage.setItem(item.key, JSON.stringify(item.value))
        })
    },
    deletItems: (itemKeys) => {
        itemKeys.forEach(key => {
            localStorage.removeItem(key)
        })
    },
    getItem: (key) => { return JSON.parse(LocalStorage.getItem(key)) },

    getItems: (keys) => {
        const items = {}
        keys.forEach(key => {
            item[key] = LocalStorageService.getItem(key)

        })
    }
}
