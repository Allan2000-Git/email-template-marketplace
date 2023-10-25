import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { data } from "../data";

const SkeletonProductLib = ({ amount }) => {

    const loadCards = Array(amount).fill(3);

    return (
        <>
            <div className="mt-[60px]">
                <Skeleton width={200} />
            </div>
                <div className="card-skeleton my-[20px]" >
                    <div className="flex justify-between">
                        {
                            [1,2,3].map((card, i) => (
                                <div key={i} className="w-[300px] h-[330px] rounded-[12px] border border-[#E0E0E0] overflow-hidden flex flex-col">
                                    <Skeleton className="w-full h-[250px]" />
                                    <div className="p-[20px]">
                                        <Skeleton width={100} count={1}  />
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
        </>
    )
};
export default SkeletonProductLib;