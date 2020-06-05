import React from 'react';

import './ItemsList.css';
import SwapiService from '../../services/SwapiService';


export default class ItemsList extends React.Component {

    swapi = new SwapiService();

    state = {
        people: null,
    }

    componentDidMount() {
        this.swapi.getAllPeople().then((people) => {
            this.setState({
                people
            })
        })
    }


    render() {
        return (
            <ul className="ItemsList">
                <li>
                    First person
            </li>
                <li>
                    Second person
            </li>
                <li>
                    Third person
            </li>
            </ul>
        );
    }
}
