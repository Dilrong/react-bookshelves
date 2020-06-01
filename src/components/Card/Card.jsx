import React from 'react'
import styled from 'styled-components'
import Rating from '@material-ui/lab/Rating'

const Wrap = styled.div`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 470px;
  margin: 1rem;
  position: relative;
  width: 250px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

const Thumbnail = styled.img`
 height: 350px;
 width: 250px;
 border-top-left-radius: 2px;
 border-top-right-radius: 2px;
`

const Title = styled.div`
 font-size: 20px;
 margin: 5px;
 font-weight: bold;
`

const Author = styled.div`
 font-size: 16px;
 margin: 5px;
`

const Publisher = styled.div`
 font-size: 14px;
 margin: 5px;
 color: gray;
`

const RatingWrap = styled.div`
 margin: 3px;
`

export const Card = ({image, title, author, publisher, rating}) => {
    return (
        <Wrap>
            <Thumbnail src={image} alt="books thumbnail"/>
            <Title>{title}</Title>
            <Author>{author}</Author>
            <Publisher>{publisher}</Publisher>
            <RatingWrap>
                <Rating name="read-only" value={rating} readOnly/>
            </RatingWrap>
        </Wrap>
    )
}