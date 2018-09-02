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
            data: data.rows
        })
        console.log(data)
    }


    _callBookAPI = async() => {
        return fetch('http://dilrong.com:2095/api?id=11rI8SWRtC7Tcevlazc7_dVP4dC2n0GyY7BW7_1NHSiE&&columns=false')
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