import React from "react";
import "../CSS/sidebar.css"

const Sidebar = () => {

    function onClick() {
        try{
            const sidebar = document.querySelector(".sidebar");
            sidebar.classList.add("sidebar-toggled");
            sidebar.classList.remove("sidebar");
        }
        catch(err){
            const sidebar = document.querySelector(".sidebar-toggled")
            sidebar.classList.add("sidebar");
            sidebar.classList.remove("sidebar-toggled");
        }
    }

    return (
        <div className="sidebar-container">
            <div className="sidebar">
            </div>
            <button onClick={onClick} className="sidebar-button">X</button>
        </div>
     );
}
 
export default Sidebar;