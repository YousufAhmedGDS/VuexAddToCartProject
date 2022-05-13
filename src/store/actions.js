import axios from "axios"
export const getProducts = ({ commit }) => {
    axios.get("http://localhost:3000/products")
        .then(response => {
            commit("SET_PRODUCTS", response.data)
        })
}
export const getProduct = ({ commit }, productid) => {
    axios.get(`http://localhost:3000/products/${productid}`)
        .then(response => {
            commit("SET_PRODUCT", response.data)
        })
}
export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit("ADD_TO_CART", { product, quantity })
    axios.post("http://localhost:3000/cart", {
        product_id: product,
        quantity
    });
}
export const getCartItems = ({ commit }) => {
    axios.get("http://localhost:3000/cart")
        .then(response => {
            commit("SET_CART", response.data)
        })
}