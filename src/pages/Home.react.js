import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import CardEmptyState from '../components/CardsEmptyState.react'

class Home extends React.Component {
    getSavedRecord = () => {
        return []
    }
    render () {
        const Home = styled.div`
            top: 55px;
            width: 100%;
            position: absolute;
        `
        const records = this.getSavedRecord()
        const emptyState = _.isEmpty(records) ? <CardEmptyState /> : null
        return (
            <Home>
                {emptyState}
            </Home>
        )
    }
}

export default Home