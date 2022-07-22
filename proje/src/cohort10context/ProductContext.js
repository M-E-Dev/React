import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext()

const initialProducts = [
    { id: 0, product: "Football", price: 12},
    { id: 1, product: "Baseball", price: 9},
    { id: 2, product: "Football", price: 89}
]

export const ProductProvider = (props) => {
    const [products, setProducts] = useState(initialProducts)

    const increasePrice = (id) => {
        console.log("increase");
        const newProducts = [...products];
        newProducts[id].price += 1;
        setProducts(newProducts);
    };

    const decreasePrice = (id) => {
        console.log("decrease");
        const newProducts = [...products];
        newProducts[id].price -= 1;
        setProducts(newProducts);
    };

    return(
        <ProductContext.Provider value={{products, increasePrice, decreasePrice, setProducts}} >
            {props.children}
        </ProductContext.Provider>
    )

}