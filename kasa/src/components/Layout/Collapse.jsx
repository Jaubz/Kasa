import React from 'react';
import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import angleDown from '../../assets/vectorBas.png'
import angleUp from '../../assets/vectorHaut.png'

// const angleDown = <FontAwesomeIcon icon={faAngleDown} />
// const angleUp = <FontAwesomeIcon icon={faAngleUp} />

const Collapse = (props) => {
    const [ openTab, setOpenTab ] = useState(false);

    const openTabHandler = () => {
        setOpenTab((openTab) => !openTab); 
    };

    return (
        <>
            <div onClick={openTabHandler} className="collapse_header">
                <h2 className="collapse_header_title">{props.title}</h2>
                {!openTab ? <img alt="Flèche bas" src={angleDown} className="collapse_header_icon"/> : <img alt="Flèche haut" src={angleUp} className="collapse_header_icon"/>}
                {/* {!openTab ? <i className="collapse_header_icon">{angleDown}</i> : <i className="collapse_header_icon">{angleUp}</i>} */}
            </div>
            {openTab && 
                <div className="collapse_content">
                    <p>{props.content}</p>
                </div>
            }
        </>
    )
}

export default Collapse;