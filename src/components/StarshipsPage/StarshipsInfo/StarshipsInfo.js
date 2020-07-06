import React from 'react';

import './DetailsInfo.css'
import ErrorTest from '../../ErrorTest';
import SwapiContext from '../../SwapiServiceContext';

export default class StarshipsInfo extends React.Component {

    static contextType = SwapiContext;

    state = {
        starships: null
    };

    componentDidMount() {
        this.updateStarships();
    }

    componentDidUpdate(prevProps) {
        if (this.props.starshipsId !== prevProps.starshipsId) {
            this.updateStarships();
        }
    }

    updateStarships() {
        const { starshipsId } = this.props;
        if (!starshipsId) {
            return;
        }

        this.context.getStarships(starshipsId).then((starships) => {
            this.setState({ starships });
        })
    }

    render () {

        if (!this.state.starships) {
            return <p>please, select starships</p>
        }

        const { id, name, model, length, manufacturer } = this.state.starships;

        return(
            <div className = "DetailsInfo" >
                <h3> {name}</h3>
                    <div className="d-flex info_block">
                         <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="starships" />
                            <ul className="detail_info_block">
                                <li>
                            <span>model </span>
                            <span>{model}</span>
                                </li>
                                <li>
                            <span>length  </span>
                            <span>{length}</span>
                                </li>
                                <li>
                            <span>manufacturer </span>
                            <span>{manufacturer}</span>
                                </li>
                            </ul>
                    </div>
                <ErrorTest />
            </div>            
        );
    }
}

