import React, {Component} from 'react'
import './BookContainer.css'
import { Container, Card, Loader, Dimmer } from 'semantic-ui-react';
import { BookCard, Navigate } from '../../components/'

export default class BookContainer extends Component{
    state = {
        data: [],
        isLoading: true, 
        sheet: 1
    }

    componentDidMount(){
        this._getBookdata(this.state.sheet)
    }

    _getBookdata = async(sheet) => {
        const data = await this._callBookAPI(sheet)
        this.setState({
            data: data.rows,
            isLoading: false
        })
    }

    _callBookAPI = async(sheet) => {
        return fetch(`http://gsx2json.dilrong.com/api?id=11rI8SWRtC7Tcevlazc7_dVP4dC2n0GyY7BW7_1NHSiE&sheet=${sheet}&columns=false`)
            .then(request => request.json())
            .catch(err => console.log(err))
    }

    handleNavigateClick = (type) => {
        const sheet = this.state.sheet;

        if(type === 'NEXT') {
            this._getBookdata(sheet+1);
        } else {
            this._getBookdata(sheet-1);
        }
    }

    render(){
        const {data, isLoading, sheet} = this.state;
        const booklist = data.map((data, index) => (
            <BookCard key={index} data={data}/>
            )
        );

        return(
            <Container>
                <Card.Group itemsPerRow={5}>
                {isLoading ? (<Dimmer active inverted><Loader/></Dimmer>) : (booklist.reverse())}
                </Card.Group>
                <Navigate
                    sheet={sheet}
                    onClick={this.handleNavigateClick}
                    disabled={isLoading}
                />
            </Container>
        )
    }
}