import React from 'react'
import './BookCard.css'
import { Card, Image, Rating } from 'semantic-ui-react'

const BookCard = ({data}) => (
    <Card>
        <Image src={data.image} size='medium'/>
        <Card.Content>
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>{data.author}<p/> {data.time}</Card.Meta>
            <Rating icon='star' defaultRating={data.grade} maxRating={5} />
        </Card.Content>
    </Card>
)



export default BookCard;