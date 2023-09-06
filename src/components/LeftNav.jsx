import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
    const { selectedCategory, setSelectedCategory, mobileMenu } =
        useContext(Context);

    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };
  

    return (
        <div
            className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-white  absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
                mobileMenu ? "translate-x-0" : ""
            }`}
        >
            <div className="flex px-5 flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    clickHandler(item.name, item.type);
                                    navigate("/");
                                }}
                                className={`${
                                    selectedCategory === item.name
                                        ? "bg-black/[0.15]"
                                        : ""
                                }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-black/[0.2]" />
                           )}
                
                        </React.Fragment>
                    );
                })}
                <p style={{color:"red", marginLeft:"2rem",fontSize:"1rem",lineHeight:"2rem"}}></p>
                <hr className="my-5 border-black/[0.2]" />
                <div className="text-black/[0.5] text-[13px] text-right">
                    Clone by : @Poonam Sengar, @Aman Makwa
                </div>
            </div>
        </div>
    );
}; 

export default LeftNav;
