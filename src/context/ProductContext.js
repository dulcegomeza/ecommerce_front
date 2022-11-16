/*Se importa createContext para crear el context de productos */
import { createContext } from "react";
/* Se define el contexto */
const  ProductContext = createContext();
/* Se exporta el contexto para hacer uso del mismo dentron de ProductState */
export default ProductContext;