import axios from "axios";
import {API} from "../config/api";

export default function Category(c, setcategories){
    

    async function changeProductsPage(category){
        try {            
            const response = await axios.get(`${API}/api/categories`);
            if (!response.status === 200) throw new Error(response.status);
            setcategories(response.data);

        } catch (error) {
            console.log(error);    
        }
    }   

    return(
        <span onClick={changeProductsPage} >{c.category.description}</span>
    );
}