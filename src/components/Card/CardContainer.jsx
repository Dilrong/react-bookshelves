import React, { Component } from 'react'
import { Card } from './Card'

export default class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {

    }

    render() {
        return <Card 
            image="https://res.cloudinary.com/wet932/image/upload/v1589779534/Dilrong%27s%20Book%20Shelves/2020/%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%8D%E1%85%A1_%E1%84%87%E1%85%AE%E1%84%8C%E1%85%A1_%E1%84%80%E1%85%A1%E1%84%8D%E1%85%A1_%E1%84%87%E1%85%AE%E1%84%8C%E1%85%A1.jpg"
            title="진짜 부자 가짜 부자" 
            author="사경인" 
            publisher="시크릿하우스"
            date="2020-05-18"
            rating="3"
        />
    }
}