export const ls = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
}

export const lg = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
