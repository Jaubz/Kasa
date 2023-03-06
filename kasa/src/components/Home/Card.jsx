// Mettre en place les cartes

import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ id, title, cover }) => {
    return(
        <li className='housing'>
            <NavLink to={`/logement/${id}`}>
                <figure className='housing_figure'>
                    <img src={cover} alt={title}  className='housing_figure_cover'/>
                    <figcaption className='housing_figure_figcaption'>
                        <h2 className='housing_figure_figcaption_title'>{title}</h2>
                    </figcaption>
                </figure>
            </NavLink>
        </li>
    )
}

export default Card;