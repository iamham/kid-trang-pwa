import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import CardEmptyState from '../components/CardsEmptyState.react'
import AppHeader from '../components/AppHeader.react'
import { getPPID } from '../data'

const HomePage = styled.div`

`

const HomeContainer = styled.div`
    top: 55px;
    width: 100%;
    position: absolute;
`

class Home extends React.Component {
    getSavedRecord = () => {
        return []
    }
    render () {
        if (!getPPID()) {
            this.props.history.push('/setting')
            return null
        }

        const records = this.getSavedRecord()
        const emptyState = _.isEmpty(records) ? <CardEmptyState /> : null
        const action = <Link to='/setting'>ตั้งค่า</Link>
        return (
            <HomePage>
                <AppHeader action={action} />
                <HomeContainer>
                    {emptyState}
                </HomeContainer>
            </HomePage>
        )
    }
}

export default Home