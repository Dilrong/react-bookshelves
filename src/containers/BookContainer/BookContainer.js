import React, {Component} from 'react'
import './BookContainer.css'
import { Container, Card } from 'semantic-ui-react';
import { BookCard } from '../../components/'

export default class BookContainer extends Component{
    state = {
        data: []
    }

    componentDidMount(){
        this._getBookdata()
    }

    _getBookdata = async() => {
        const data = await this._callBookAPI()
        this.setState({
            data: data
        })
        console.log(data)
    }


    _callBookAPI = async() => {
        return fetch('http://dilrong.com:3005/books')
            .then(request => request.json())
            .catch(err => console.log(err))
    }

    render(){
        const {data} = this.state;
        const booklist = data.map((data, index) => (
            <BookCard key={index} data={data}/>
            )
        );
        console.log(data)
        return(
            <Container>
                <Card.Group>
                {booklist}
                </Card.Group>
            </Container>
        )
    }
}