import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import CardEmptyState from '../components/CardsEmptyState.react'

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

        const records = this.getSavedRecord()
        const emptyState = _.isEmpty(records) ? <CardEmptyState /> : null
        return (
            <HomeContainer>
                {emptyState}
            </HomeContainer>
        )
    }
}

export default Home