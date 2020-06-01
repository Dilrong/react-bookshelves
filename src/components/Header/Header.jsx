import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    background-color: #0F4C81;
    color: white;
    font-size: 2rem;
    padding: 1.2rem;
    text-align: center;
    margin-bottom: 2rem;
`

export const Header = ({name}) => {
    return <Wrap>{name}</Wrap>;
}