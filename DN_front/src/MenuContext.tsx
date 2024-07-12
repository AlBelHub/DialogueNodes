import React from 'react'

const MenuContext = (data) => {
    return(
        <>
        {data.map((item) => {
            <div className="menu"
                onContextMenu={(e) => {
                    e.preventDefault();
                    console.log(item);
                }}
            >

            </div>
        })}
        </>
    );
}


export default MenuContext;