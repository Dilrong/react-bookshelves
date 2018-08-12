import React from 'react'
import './BookCard.css'
import { Button, Card, Image, Rating, Modal } from 'semantic-ui-react'

const BookCard = ({data}) => (
    <Card>
        <Image src={data.bookCover}/>
        <Card.Content>
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>{data.author}<p/> {data.readDate}</Card.Meta>
            <Rating icon='star' defaultRating={data.score} maxRating={5} />
            <Modal trigger={<Button circular icon='search plus' floated='right'/>}>
                <Modal.Content>
                    {data.comment}
                </Modal.Content>
            </Modal>
        </Card.Content>
    </Card>
)



export default BookCard;