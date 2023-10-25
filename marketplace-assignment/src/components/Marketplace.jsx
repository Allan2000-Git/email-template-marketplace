import React from 'react'
import Categories from './Categories'
import Templates from './Templates'

const Marketplace = () => {
    return (
        <>
            <div className="w-full bg-white">
                <div className="sm:max-w-[1260px] sm:mx-auto">
                    <div className="flex sm:mb-[40px] sm:flex-row ">
                        {/* <Categories /> */}
                        <Templates />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketplace
