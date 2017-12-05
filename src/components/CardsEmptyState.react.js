import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import addIcon from './addButton.svg'

class CardEmptyState extends React.Component {
    render () {
        const EmptyCard = styled.div`
            border-radius: 3px;
            border: 1px dotted #777778;
            height: 80px;
            margin: 0 15px;
            padding: 15px;
            text-align: center;
            color: #777778;
            display: flex;
            align-items: center;
        `
        const AddButton = styled.div`
            color: white;
            background: #777778;
            width: 30px;
            height: 30px;
            font-size: 23px;
            text-align: center;
            margin: auto;
            border-radius: 50%;
        `
        const AddText = styled.div`
            margin-top: 10px;
            font-size: 14px;
        `
        return (
            <EmptyCard>
                <Link to='/add-record' style={{'margin': 'auto'}}>
                    <AddButton>+</AddButton>
                    <AddText>เพิ่มบันทึก</AddText>
                </Link>
            </EmptyCard>
        )
    }
}

export default CardEmptyState