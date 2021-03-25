import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonList, PersonDetails } from '../movie-components';
import Row from '../row';

const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    return(            
        <Row 
            leftElement={ <PersonList onItemSelected={(id) => history.push(`${id}`)}/> }
            rightElement={ <PersonDetails itemId={id}/> }            
            leftCol={7}
            rightCol={5}
        />        
    );
}

export default withRouter(PeoplePage);