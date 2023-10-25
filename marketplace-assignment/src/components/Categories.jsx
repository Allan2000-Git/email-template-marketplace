import React, {useState, useCallback, useEffect} from 'react'
import { useMarketContext } from '../contexts/Market.jsx';
import { data } from '../data.js';

const Categories = () => {

    const {setFilteredData, filteredData, selectedCategories, setSelectedCategories} = useMarketContext();

    // ------------------------------------------------------------
    
    // handleCategoryToggle

    function handleCategoryToggle(category) {
        setSelectedCategories((prevSelected) => {
            if (prevSelected.includes(category)) {
                return prevSelected.filter((c) => c !== category);
            } else {
                return [...prevSelected, category];
            }
        });
    }
    

    const filteredCategoriesData = data.filter((item) =>{
        return selectedCategories.length === 0 ? true : selectedCategories.includes(item.category)
        }
    );

    // setFilteredData(filteredCategoriesData)

    console.log(filteredCategoriesData);

    return (
        <>
            <div className="flex flex-col gap-[16px] sm:sticky sm:top-0">
                <span className="text-[#595250)] text-[16px] font-normal leading-[24px]">Categories</span>
                <div className="flex flex-col gap-[16px]">
                    <div className="flex items-center gap-[8px]">
                        <input className="checkbox-size" value="Announcement" checked={selectedCategories.includes('Announcement')} type="checkbox" onChange={() => handleCategoryToggle('Announcement')}  />
                        <span className="text-[#161616] text-[16px] font-bold leading-[24px]"> Announcement </span>
                    </div>

                    <div className="flex items-center gap-[8px]">
                        <input className="checkbox-size" value="Educate & Inform" checked={selectedCategories.includes('Educate & Inform')} type="checkbox" onChange={() => handleCategoryToggle('Educate & Inform')}  />
                        <span className="text-[#161616] text-[16px] font-bold leading-[24px] w-[150px]"> Educate & Inform </span>
                    </div>

                    <div className="flex items-center gap-[8px] container">
                        <input className="checkbox-size" value="Invitations" checked={selectedCategories.includes('Invitations')} type="checkbox" onChange={() => handleCategoryToggle('Invitations')}   />
                        <span className="text-[#161616] text-[16px] font-bold leading-[24px]"> Invitation </span>
                    </div>

                    <div className="flex items-center gap-[8px]">
                        <input className="checkbox-size" value="Occassions" checked={selectedCategories.includes('Occassions')} type="checkbox" onChange={() => handleCategoryToggle('Occassions')}   />
                        <span className="text-[#161616] text-[16px] font-bold leading-[24px]"> Occassions </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
