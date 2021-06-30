import styled from "styled-components"
import { useContext, useState } from "react"
import axios from "axios"
import UserContext from "../UserContext"
import { Link } from "react-router-dom"

export default function SearchBar(){
    const [results, setResults] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(UserContext)

    const search = (searchProduct) => {
        if(searchProduct === ""){
            setResults(null)
            return
        }
        setIsLoading(true)
        const config = {
            params: {
                searchProduct: `${searchProduct}`
            }
        };
        const request = axios.get(`http://localhost:4000/search`, config)
        request.then((res) => {
            setResults(res.data.products)
            setIsLoading(false)
        })
        request.catch((err) => {
            alert("Houve um erro ao pesquisar pelo produto, tente novamente.")
            setIsLoading(false)
        })
    }

    return(
        <StyledSearchBar>
            <input 
                type="search"
                placeholder="Procure por produtos incríveis!"
                onChange={(event) => { 
                    search(event.target.value)
                }}
            /> 

        </StyledSearchBar>
    )
}

const StyledSearchBar = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 563px;
    height: 45px;
    border-radius: 8px;
    padding: 0 15px;
    color: #bfbfbf;
    input {
        width: 100%;
        border-style: none;
        :focus{
            outline: none;
        }
        ::placeholder{
            font-family: FontAwesome;
            font-size: 19px;
            color: #c6c6c6;
        }
    }
`

