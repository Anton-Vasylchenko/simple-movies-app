import React, { Component } from 'react';
import TheMovieService from '../../services/TheMovieService';
import Spinner from '../spinner';

import './item-details.css';

const Record = ({ item, field, label }) => {
    return(
        <li className="list-group-item">
            <span className="text-info">{label}: </span>
            <span>{ item[field] } </span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

    movieService = new TheMovieService();
    
    state = {
        itemId: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.itemLoadingSpinner();
            this.updateItem();
        }
    }

    itemLoadingSpinner() {
        this.setState({
            loading: true
        })
      }
    
    onItemLoaded = (item) => {
        this.setState({
            item,
            loading: false
        });
      };

    updateItem() {        
        const { itemId, getData } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
        .then(this.onItemLoaded)
    }

    render() {

        if(!this.state.item) {
            return <span className="item-detail jumbotron rounded">Select a item from a list</span>
        }
        
        const { item, loading } = this.state;
        const content = loading ? <Spinner /> : <ItemDetailsView item={item} children={this.props.children} />

        return(
            <div className="item-detail jumbotron rounded">                   
                { content }                
            </div>            
        )
    }

}

const ItemDetailsView = ({ item, children }) => {
        
    const { img } = item;

    return(
        <React.Fragment>
            <img className="item-img rounded" src={`http://image.tmdb.org/t/p/w185${img}`} alt="img"/>            
            <ul className="list-group list-group-flush">                
                { 
                    React.Children.map(children, (child, idx) => {
                        return React.cloneElement(child, { item });
                    })
                }
            </ul>       
        </React.Fragment>
    )
}