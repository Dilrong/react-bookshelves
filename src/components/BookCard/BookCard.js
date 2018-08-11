import React from 'react'
import './BookCard.css'
import { Button, Card, Image, Rating } from 'semantic-ui-react'

const BookCard = () => (
    <Card>
        <Image src='https://cdn.namuwikiusercontent.com/s/9edca3c71c7aee548ca2de3a9e3dab783dc369dbdc8c6ca4e1db42d7ed92c48c55b2ed45b63cff8c001aa5d37875261cc6ca2c6b8a2ca9ed6690f0a8a369219409892954392f1e33470d72695dec8450?e=1535057920&k=uUesc1UNQej8tUw0mHyqjw'/>
        <Card.Content>
            <Card.Header>데미안</Card.Header>
            <Card.Meta>헤르만 헤세</Card.Meta>
            <Rating icon='star' defaultRating={3} maxRating={5} />
            <Button circular icon='search plus' floated='right'/>
        </Card.Content>
    </Card>
)



export default BookCard;