import React from 'react';

import './ItemsList.css';
import SwapiService from '../../../services/SwapiService';
import  withData from '../../helpers/withData';


const StarshipsList = (props) => {

    const { data, onItemClick, renderItem } = props;

   
    const renderItems = (arr) => {
        return arr.map((item) => {
            const text = renderItem(item)
            return(
                <li 
                    className = "list-group-item"
                    key = { item.id }
                    onClick = {() => onItemClick(item.id)}
                >
                    { text }
                </li>
            );
        });
    }

    const items = renderItems(data);

        return (
            <ul className="ItemsList">
               {items}
            </ul>
        );
    }

const { getAllStarships} = new SwapiService();

export default withData(StarshipsList, getAllStarships);