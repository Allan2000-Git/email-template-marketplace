import { createContext, useContext, useState } from "react";
import { data } from "../data";

const MarketContext = createContext();

export const MarketContextProvider = ({children}) =>{
    const [searchInput, setSearchInput] = useState("");
    const [sortType, setSortType] = useState("");

    //checkboxes
    const [selectedOption, setSelectedOption] = useState({
        categories: [], 
        response: [], 
    })

    const [selectedCategories, setSelectedCategories] = useState([])
    const [filteredData, setFilteredData] = useState(data);

    return(
        <MarketContext.Provider value={{selectedOption, setSelectedOption, searchInput, setSearchInput, sortType, setSortType, filteredData, setFilteredData, selectedCategories, setSelectedCategories}}>
            {children}
        </MarketContext.Provider>
    )
}

export const useMarketContext = () =>{
    return useContext(MarketContext)
}