import React from 'react'

const Card = ({img, title, p}) => {

    
    return (
        <>
            <div className="flex flex-col items-center hover-card">
                <div className="w-[300px] h-[330px] rounded-[12px] border border-[#E0E0E0] overflow-hidden flex flex-col">

                    <div className="hover-container flex flex-col items-center">
                        <div className="w-full relative">
                            <img className="w-full" src={img} alt={`${title} image`}/>
                            {p ? <img className="absolute right-2 top-2" src="../src/assets/popular.png"/>: ""}
                        </div>
                        
                        <div className="overlay-bottom-slide">
                            <div className="use-btn">
                                <button className="py-[10px] px-[26px] rounded-[24px] bg-[#161616] text-white hover:bg-[#393939]" type="button">Use</button>
                            </div>
                        </div>
                    </div> 


                    <div className="p-[20px]">
                        <span className="text-[#161616] text-[20px] font-bold tracking-[-0.4px] leading-[28px]">{title}</span>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Card
