import React from 'react';

import './DetailsInfo.css'
import ErrorTest from '../../ErrorTest';
import SwapiContext from '../../SwapiServiceContext';

export default class PlanetInfo extends React.Component {

    static contextType = SwapiContext;

    state = {
        planet: null
    };

    componentDidMount() {
        this.updatePlanet();
    }

    componentDidUpdate(prevProps) {
        if(this.props.planetId !==prevProps.planetId) {
        this.updatePlanet();
        }
    }

    updatePlanet() {
        const { planetId } = this.props;
        if(!planetId) {
            return;
        }

        this.context.getPlanet(planetId).then((planet) => {
            this.setState({ planet });
        })
    }

    render () {

        if(!this.state.planet) {
            return <p>please, select person</p>
        }

        const { id, name, population, gravity, diameter } = this.state.planet;

        return(
            <div className = "DetailsInfo" >
                <h3> {name}</h3>
                    <div className="d-flex info_block">
                         <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
                            <ul className="detail_info_block">
                                <li>
                            <span>population </span>
                            <span>{population}</span>
                                </li>
                                <li>
                            <span>gravity </span>
                            <span>{gravity}</span>
                                </li>
                        <li>
                            <span>diameter </span>
                            <span>{diameter}</span>
                        </li>
                            </ul>
                    </div>
                <ErrorTest />
            </div>            
        );
    }
}

