import React, { useState } from 'react'
import "./style.css";
import Photo from "./photoapi.js";
import Photocard from "./photocard.js";
const Gallery = () => {
    const [menuData, setmenuData] = useState(Photo);

    const filterItem = (category) => {
        const updatedList = Photo.filter((curElem) => {
            return curElem.category === category;
        });
        setmenuData(updatedList)
    };
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick ={()=> filterItem("food")} >Food</button>
                    <button className="btn-group__item" onClick ={()=> filterItem("Hill")}>Hill</button>
                    <button className="btn-group__item" onClick ={()=> filterItem("Water")}>Water</button>
                    <button className="btn-group__item" onClick ={()=> filterItem("Cartoon")}>Cartoon</button>
                    <button className="btn-group__item" onClick ={()=> filterItem("Birds")}>Birds</button>
                    <button className="btn-group__item" onClick ={()=> filterItem("Animals")}>Animals</button>
                    <button className="btn-group__item" onClick ={()=> setmenuData(Photo)}>All</button>
                </div>
            </nav>
            <Photocard menuData={menuData} />

        </>
    )
}

export default Gallery;
