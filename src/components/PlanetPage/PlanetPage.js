import React from 'react';
import PlanetInfo from './PlanetInfo';


import './PlanetPage.css'
import ErrorComponent from '../ErrorComponent';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';
import PlanetList from './PlanetList';


export default class PlanetPage extends React.Component {

    swapi = new SwapiService();

    state = {
        selectedPlanet: 3,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true });
    }


    onPlanetSelect = (id) => {
        this.setState({
            selectedPlanet: id
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorComponent />
        }

        const planetList = (
            <PlanetList
                onItemClick={this.onPlanetSelect}
                renderItem={(item) =>
                    `${item.name}
                         (${item.population}, ${item.gravity})`
                }
            />
        );

        const planetInfo = (
            <PlanetInfo
                planetId={this.state.selectedPlanet}
            />
        )

        return (
            <div className="PlanetPage">
                <Row left={planetList} right={planetInfo} />

            </div>
        )
    }
}