import React from 'react';
import StarshipsList from './StarshipsList';
import StarshipsInfo from './StarshipsInfo';

import './PeoplePage.css'
import ErrorComponent from '../ErrorComponent';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';


export default class StarshipsPage extends React.Component{

    swapi = new SwapiService();

    state = {
        selectedStarships: 3,
        error: false,
    }

    componentDidCatch () {
        this.setState({ error:true });
    }
       

    onStarshipsSelect = (id) => {
        this.setState({
            selectedStarships: id
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorComponent />
        }

        const starshipsList = (
            <StarshipsList
                onItemClick={this.onStarshipsSelect}
                renderItem={(item) =>
                    `${item.name}
                         (${item.model}, ${item.length}>m)`
                }
            />
        );

        const starshipsInfo = (
            <StarshipsInfo
                starshipsId={this.state.selectedStarships}
            />
        )

        return (
            <div className = "PeoplePage">
                <Row left={starshipsList} right={starshipsInfo}/>
   
            </div>
        )
    }
}