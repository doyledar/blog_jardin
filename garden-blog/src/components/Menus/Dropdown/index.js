import React from 'react';



const Dropdown = (props) => {
    return (
        <ul className="dropdown-menu">
            {props.children}
        </ul>
    );
}

export default Dropdown;
