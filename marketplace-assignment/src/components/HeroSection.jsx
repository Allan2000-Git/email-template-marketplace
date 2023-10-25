import React from 'react'

const HeroSection = () => {
    // linear-gradient(180deg, #DEFBE6 0%, rgba(222, 251, 230, 0.00) 100%);
    return (
        <>
            <div className="w-full bg-gradient-to-b from-[#DEFBE6] to-[rgba(222, 251, 230, 0.00)]">
                <div className="sm:max-w-[1260px] w-full sm:mx-auto py-[80px] px-[24px]">
                    <p className="text-[#6F6F6F] text-[14px] font-bold leading-[20px] tracking-[0.28px]">MARKETPLACE</p>
                    <div className="slider-wrapper mt-2">
                        <div className="slider">
                            <div className="slider-text1 title-h1">Email Templates</div>
                            <div className="slider-text2 title-h1">Email Sequences</div>
                            <div className="slider-text3 title-h1">Marketing Recipes</div>
                        </div>
                    </div>
                    <h1 className="text-[#161616] text-[35px] leading-[50px] tracking-[-1.5px] sm:text-[64px] font-normal sm:leading-[72px] sm:tracking-[-1.28px] sm:mt-[80px] mt-[60px]">by the community, for the community.</h1>
                    <p className="text-[#525252] mt-[20px] text-[16px] sm:text-[20px] font-normal leading-[28px]">100s of free templates to help you craft the perfect marketing journey.</p>
                </div>
            </div>
        </> 
    )
}

export default HeroSection
