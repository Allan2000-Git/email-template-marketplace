import React, {useEffect, useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Card from './Card';
import TemplateType from './TemplateType';
import { useMarketContext } from '../contexts/Market';
import { data } from '../data';

const Templates = () => {

    const {searchInput, setSearchInput, sortType, setSortType, filteredData, selectedCategories, setSelectedCategories} = useMarketContext();
    const [sortData, setSortData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if(searchInput !== ""){
            const filteredData = data.filter((item) => {
                // if(item.toLowerCase().includes(searchInput.toLowerCase())){
                //     return item
                //     console.log(item);
                // }
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else{
            setFilteredResults(data)
        }
    }


    useEffect(()=>{
        const sortArray = (type) => {
            const types = {
                'A-Z': 'category',
                'Z-A': 'category',
            };
            const sortProperty = types[type];
            if(type === 'A-Z'){
                const sorted = [...data].sort((a, b) => a[sortProperty] > b[sortProperty]? 1:-1);
                console.log(sorted);
                setSortData(sorted);
            }else if(type === 'Z-A'){
                const sorted = [...data].sort((a, b) => a[sortProperty] > b[sortProperty]?-1:1);
                console.log(sorted);
                setSortData(sorted);
            } else{
                setSortData(data);
            }
        };

        sortArray(sortType)
    },[sortType])

    const onSubmitForm = (event) => {
        event.preventDefault();
    }

    const categories = [
        'Announcement',
        'Educate & Inform',
        "Invitations",
        "Occassions",
    ];

    const [categoryFilters, setcategoryFilters] = useState(new Set());

    function updateFilters(checked, categoryFilter) {
        if (checked)
        setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
        if (!checked)
        setcategoryFilters((prev) => {
            const next = new Set(prev);
            next.delete(categoryFilter);
            return next;
        });
    }
    
    const filteredProducts =
        categoryFilters.size === 0
        ? data
        : data.filter((p) => categoryFilters.has(p.category));


        

    // setFilterRes(filteredProducts)

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
            return selectedCategories.length === 0 ? true : selectedCategories.includes(item.category);
        }
    );
    console.log(filteredCategoriesData);
    // useEffect(()=>{
    //     setFilterRes(filteredProducts)
    // }, [filterRes])

    // const [filterTags, setFilterTags] = useState([])

    // const filteredDATA = data.filter((node) =>
    //     filterTags.length > 0
    //     ? filterTags.every((filterTag) =>
    //         node.tags.map((tag) => tag.slug).includes(filterTag)
    //         )
    //     : data
    // )

    // const filterHandler = (event) => {
    //     if (event.target.checked) {
    //     setFilterTags([...filterTags, event.target.value])
    //     } else {
    //     setFilterTags(
    //         filterTags.filter((filterTag) => filterTag !== event.target.value)
    //     )
    //     }
    // }
    

    return (
        <>
            <div className="flex flex-col gap-[16px] sm:sticky sm:top-0">
                <span className="text-[#595250)] text-[16px] font-normal leading-[24px]">Categories</span>
                <div className="flex flex-col gap-[16px]">
                    <div className="flex items-center gap-[8px]">
                        <input className="checkbox-size" value="Announcement" checked={selectedCategories.includes('Announcement')}  type="checkbox" onChange={() => handleCategoryToggle('Announcement')}  />
                        <span className="text-[#161616] text-[16px] font-bold leading-[24px] w-[150px]"> Announcement </span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <input className="checkbox-size" value="Educate & Inform" checked={selectedCategories.includes('Educate & Inform')}  type="checkbox" onChange={() => handleCategoryToggle('Educate & Inform')}  />
                        <span className="text-[#161616] text-[16px] font-bold leading-[24px] w-[150px]"> Educate & Inform </span>
                    </div>

                    <div className="flex items-center gap-[8px] container">
                        <input className="checkbox-size" value="Invitations" checked={selectedCategories.includes('Invitations')}   type="checkbox" onChange={() => handleCategoryToggle('Invitations')} />
                        <span className="text-[#161616] text-[16px] font-bold leading-[24px]"> Invitation </span>
                    </div>

                    <div className="flex items-center gap-[8px]">
                        <input className="checkbox-size" value="Occassions" checked={selectedCategories.includes('Occassions')}  type="checkbox" onChange={() => handleCategoryToggle('Occassions')} />
                        <span className="text-[#161616] text-[16px] font-bold leading-[24px]"> Occassions </span>
                    </div>
                    
                </div>
            </div>
            <div className="w-full sm:ml-[100px] ml-0 px-[24px]">
                <div className="sm:flex-row flex items-center justify-between flex-wrap sm:mt-0 mt-[20px]">
                    <div>
                        <form onSubmit={onSubmitForm} autoComplete='off' id="form" className="w-full sm:w-[384px] p-[12px] border border-[#C6C6C6] flex items-center rounded-[8px] gap-[4px] hover:border-[#393939] hover:border-[2px] active:active-class">
                            <AiOutlineSearch size={"20px"} color="#8D8D8D" className="search"/>
                            <input onChange={(e) => searchItems(e.target.value)} value={searchInput} className="placeholder:text-[#8D8D8D] text-[16px] outline-none border-none flex-1 caret-[#4589FF] text-[#4589FF] " type="text" name="category" placeholder="Search email templates" />
                        </form>
                    </div>
                    <div className="border border-[#C6C6C6] rounded-full py-[12px] sm:px-[20px] flex hover:bg-[#E0E0E0] hover:border-[#161616] sm:mt-0 mt-[20px]">
                        <div className="flex items-center sm:gap-[4px] justify-center">
                            <svg className="sm:inline hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3.33333 15H6.66667C7.125 15 7.5 14.625 7.5 14.1667C7.5 13.7083 7.125 13.3333 6.66667 13.3333H3.33333C2.875 13.3333 2.5 13.7083 2.5 14.1667C2.5 14.625 2.875 15 3.33333 15ZM2.5 5.83333C2.5 6.29167 2.875 6.66667 3.33333 6.66667H16.6667C17.125 6.66667 17.5 6.29167 17.5 5.83333C17.5 5.375 17.125 5 16.6667 5H3.33333C2.875 5 2.5 5.375 2.5 5.83333ZM3.33333 10.8333H11.6667C12.125 10.8333 12.5 10.4583 12.5 10C12.5 9.54167 12.125 9.16667 11.6667 9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333Z" fill="#161616"/>
                            </svg>
                            <span className="text-[#161616] text-[16px] font-bold">Sort by:</span>
                        </div>
                        <select onChange={(e) => setSortType(e.target.value)} className="px-[5px] text-[#4589FF] border-none outline-none bg-inherit">
                            <option className="text-[#161616]" value="default" selected>Recent</option>
                            <option className="text-[#161616]" value="Z-A">Categories (Descending)</option>
                            <option className="text-[#161616]" value="A-Z">Categories (Ascending)</option>
                        </select>
                    </div>
                </div>
                <div className="">
                    {searchInput.length > 0 ? (
                        filteredResults.map((item)=>{
                            return(
                                <TemplateType key={item.id} templateTitle={item.category} a1={item.images.a1} a2={item.images.a2} a3={item.images.a3} t1={item.titles.t1.title1} t2={item.titles.t2.title2} t3={item.titles.t3.title3} p1={item.titles.t1.popular1} p2={item.titles.t2.popular2} p3={item.titles.t3.popular3}/>
                            )
                        })
                        ):(
                            sortData ? (
                                sortData.map((item)=>{
                                    return(
                                        <TemplateType key={item.id} templateTitle={item.category} a1={item.images.a1} a2={item.images.a2} a3={item.images.a3} t1={item.titles.t1.title1} t2={item.titles.t2.title2} t3={item.titles.t3.title3} p1={item.titles.t1.popular1} p2={item.titles.t2.popular2} p3={item.titles.t3.popular3}/>                                    )
                                })
                            ):
                            (
                                filteredCategoriesData.length > 0 ?
                                    (
                                        filteredCategoriesData.map((item)=>{
                                            console.log(item);
                                            return(
                                                <TemplateType key={item.id} templateTitle={item.category} a1={item.images.a1} a2={item.images.a2} a3={item.images.a3} t1={item.titles.t1.title1} t2={item.titles.t2.title2} t3={item.titles.t3.title3} p1={item.titles.t1.popular1} p2={item.titles.t2.popular2} p3={item.titles.t3.popular3}/>                                    )
                                        })
                                    ):(
                                        data.map((item)=>{
                                            return(
                                                <TemplateType key={item.id}  templateTitle={item.category} a1={item.images.a1} a2={item.images.a2} a3={item.images.a3} t1={item.titles.t1.title1} t2={item.titles.t2.title2} t3={item.titles.t3.title3} p1={item.titles.t1.popular1} p2={item.titles.t2.popular2} p3={item.titles.t3.popular3}/>
                                        )
                                    })
                                )
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Templates
