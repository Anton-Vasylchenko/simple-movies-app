import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withApiService } from '../hoc-helper';

const PersonDetails = (props) => {    
    return(
        <ItemDetails {...props}>
            <Record field="name" label="Name" />
            <Record field="gender" label="Gender" />
            <Record field="birthday" label="Birthday" />
        </ItemDetails>
    );    
}

const mapMethodsToProps = (movieService) => {
    return {
        getData: movieService.getPerson
    }
}

export default withApiService(PersonDetails, mapMethodsToProps);