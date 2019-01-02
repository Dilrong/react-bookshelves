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
        this.setState({
            isLoading: true
        })
        return fetch(`http://gsx2json.dilrong.com/api?id=11rI8SWRtC7Tcevlazc7_dVP4dC2n0GyY7BW7_1NHSiE&sheet=${sheet}&columns=false`)
            .then(request => request.json())
            .catch(err => console.log(err))
    }

    handleNavigateClick = (type) => {
        switch(type){
            case '2019':
                this._getBookdata(1);
            break;

            case '2018':
                this._getBookdata(2);
            break;

            case '2017':
                this._getBookdata(3);
            break;
            
            case '2016':
                this._getBookdata(4);
            break;
        }
    }

    render(){
        const {data, isLoading, sheet} = this.state;
        const booklist = data.map((data, index) => (
            <BookCard key={index} data={data}/>
            )
        );

        return(
            <Container fluid>
                <Card.Group centered>
                {isLoading ? (<Dimmer active inverted><Loader inverted content>Loading</Loader></Dimmer>) : (booklist.reverse())}
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