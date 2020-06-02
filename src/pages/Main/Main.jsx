import React from 'react'
import HeaderContainer from '../../components/Header/HeaderContainer'
import CardContainer from '../../components/Card/CardContainer'
import styled from 'styled-components'

const PaginationWrap = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 justify-items: center;
`

export const Main = () => {
    return (
        <div>
            <HeaderContainer/>
            <CardContainer/>
        </div>
    )
}