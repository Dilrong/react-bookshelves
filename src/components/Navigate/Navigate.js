import React from 'react';
import {Button, Container} from 'semantic-ui-react';
import './Navigate.css'

const Navigate = ({onClick, disabled}) => (
    <Container className="Navigate">
        <Button
            style={{background: '#0F4C81', color: 'white', margin: '5px'}}
            content="#2020"
            onClick={
                () => onClick('2020')
            }
            disabled={disabled}
        />
        <Button
            style={{background: '#EC7969', color: 'white', margin: '5px'}}
            content="#2019"
            onClick={
                () => onClick('2019')
            }
            disabled={disabled}
        />
        <Button
            style={{background: '#554482', color: 'white', margin: '5px'}}
            content="#2018"
            onClick={
                () => onClick('2018')
            }
            disabled={disabled}
        />
        <Button
            style={{background: '#7DA742', color: 'white', margin: '5px'}}
            content="#2017"
            onClick={
                () => onClick('2017')
            }
            disabled={disabled}
        />
        <Button
            style={{background: '#819AC6', color: 'white', margin: '5px'}}
            content="#2016"
            onClick={
                () => onClick('2016')
            }
            disabled={disabled}
        />
    </Container>
);

export default Navigate;