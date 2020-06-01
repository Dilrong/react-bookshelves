import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'
import axios from 'axios'
import { Card } from './Card'

const Wrap = styled.div`
 display: flex;
 flex-wrap: wrap;
`

export default class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            query: '',
            page: 1,
            isLoading: false
        }
    }

    async componentDidMount () {
        await axios.get(`https://portfilo-278907.du.r.appspot.com/api?id=11rI8SWRtC7Tcevlazc7_dVP4dC2n0GyY7BW7_1NHSiE&columns=false&sheet=${this.state.page}&q=${this.state.query}`)
            .then((res) => {
                console.log(res)
                this.setState({
                    data: res.data.rows,
                    isLoading: true
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const list = this.state.data.map(data => (
            <Card 
            image={data.image}
            title={data.name}
            author={data.author}
            publisher={data.publisher}
            date={data.time}
            rating={data.grade}
            />
        ));
        return this.state.isLoading?(<Wrap>{list}</Wrap>) : (<CircularProgress/>)
    }
}