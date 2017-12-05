import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import addButton from './addButton.svg'

class CardEmptyState extends React.Component {
    render () {
        const EmptyCard = styled.div`
            border-radius: 3px;
            border: 1px dotted #f0f0f2;
            height: 80px;
            margin: 0 15px;
            padding: 15px;
            text-align: center;
        `
        return (
            <EmptyCard>
                <Link to='/add-record'>
                    <img src={addButton} alt='Add New Record' width={50} />
                    <div>เพิ่มบันทึก</div>
                </Link>
            </EmptyCard>
        )
    }
}

export default CardEmptyState