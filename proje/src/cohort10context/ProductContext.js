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

    const increasePrice = (e) => {
        console.log("increase", e.target.id);
        const newProducts = [...products];
        newProducts[e.target.id].price += 1
        setProducts(newProducts);
    };

    const deceasePrice = (e) => {
        console.log("decrease", e.target.id);
        const newProducts = [...products];
        newProducts[e.target.id].price -= 1
        setProducts(newProducts);
    };

    return(
        <ProductContext.Provider value={{products, increasePrice, deceasePrice, setProducts}} >
            {props.children}
        </ProductContext.Provider>
    )

}