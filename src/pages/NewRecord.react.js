import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import CardEmptyState from '../components/CardsEmptyState.react'

class NewRecord extends React.Component {
    getSavedRecord = () => {
        return []
    }
    render () {
        const NewRecord = styled.div`
            background: white;
            width: 100%;
            height: 100%;
            padding-top: 40px;
            width: 100%;
            position: absolute;
        `
        const records = this.getSavedRecord()
        const emptyState = _.isEmpty(records) ? <CardEmptyState /> : null
        return (
            <NewRecord>
            </NewRecord>
        )
    }
}

export default NewRecord