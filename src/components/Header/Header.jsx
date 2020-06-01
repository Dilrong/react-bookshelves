import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    background-color: #0F4C81;
    color: white;
    font-size: 1.5rem;
    padding: 1rem;
    text-align: left;
    padding-left: 1rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

export const Header = ({name}) => {
    return <Wrap>{name}</Wrap>;
}