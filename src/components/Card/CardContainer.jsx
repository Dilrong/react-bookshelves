import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Pagination from '@material-ui/lab/Pagination'
import styled from 'styled-components'
import axios from 'axios'
import { Card } from './Card'

const Wrap = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 justify-items: center;
`
const LoadingWrap = styled.div`
 display: flex;
 padding-top: 1rem;
 padding-bottom: 1rem;
 justify-content: center;
 justify-items: center;
 `
const PaginationWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
justify-items: center;
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
        this.setData(this.state.page)
    }

    async setData(page) {
        await axios.get(`https://gsx2json.dilrong.com/api?id=11rI8SWRtC7Tcevlazc7_dVP4dC2n0GyY7BW7_1NHSiE&columns=false&sheet=${page}&q=${this.state.query}`)
        .then((res) => {
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
        const handleChange = async (event, value) => {
          await this.setState({
              page: value,
              isLoading: false
            });
            this.setData(this.state.page)
        };
        const list = this.state.data.map((data, index) => (
            <Card 
            key={index}
            image={data.image ? data.image:"https://res.cloudinary.com/wet932/image/upload/v1546436392/Dilrong%27s%20Book%20Shelves/noImage.png"}
            title={data.name}
            author={data.author}
            publisher={data.publisher}
            date={data.time}
            rating={data.grade}
            />
        ));
        return this.state.isLoading?(
        <>
            <Wrap>{list.reverse()}</Wrap>
            <PaginationWrap><Pagination count={5} page={this.state.page} onChange={handleChange}/></PaginationWrap>
        </>) : (<LoadingWrap><CircularProgress/></LoadingWrap>)
    }
}
