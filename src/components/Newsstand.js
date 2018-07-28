import React, {Component} from 'react';
import axios from 'axios';

export default class Newsstand extends Component {
    state = {
        articles: []
    }

    componentDidMount(){
    axios.get(`https://secure-cliffs-25767.herokuapp.com/hivery/newspapers`, {
        headers : {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token',
          },
          responseType: 'json',
    })
    .then( res => {
        const articles = res.data;
        this.setState({ articles })
        })
    .catch( err => {
        console.log(`error: ${err} `);
        
    })
    }

    render(){
        return (
            <ul>
                {this.state.articles.map( article => <li>{article.name}</li>)}
            </ul>
        )
    }
}