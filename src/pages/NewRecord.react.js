import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import CardEmptyState from '../components/CardsEmptyState.react'
import InputWithTitle from '../components/InputWithTitle.react'

const Row = styled.div`
    margin-bottom: -1px;
`
const Summary = styled.div`
    margin-top: 20px;
`
const NewRecordContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 70px;
    width: 100%;
    position: absolute;
`

class NewRecord extends React.Component {
    state = {
        name: '',
        amount: '',
        numberOfPeople: '',
    }

    getSanitisedNumber = (string) => isNaN(parseInt(string)) ? null : parseInt(string)

    onNameChange = (name) => this.setState({ name: name })

    onAmountChange = (amount) => {
        const parsedAmount = this.getSanitisedNumber(amount)
        if (parsedAmount) {
            this.setState({ amount: parsedAmount })
        }
    }

    onNumberOfPeopleChange = (number) => {
        const numberOfPeople = this.getSanitisedNumber(number)
        if (numberOfPeople) {
            this.setState({ numberOfPeople: numberOfPeople })
        }
    }

    renderNameInput = () => (
        <InputWithTitle
            title='ชื่อ'
            changedValue={this.onNameChange}
            value={this.state.name}
            type='text'
        />
    )

    renderAmountInput = () => (
        <InputWithTitle
            title='จำนวนเงิน'
            changedValue={this.onAmountChange}
            value={this.state.amount}
            type='number'
        />
    )

    renderNumberOfPeopleInput = () => (
        <InputWithTitle
            title='จำนวนคน'
            changedValue={this.onNumberOfPeopleChange}
            value={this.state.numberOfPeople}
            type='number'
        />
    )

    renderSummary = () => {
        const perPerson = this.state.amount / this.state.numberOfPeople
        return (
            <InputWithTitle
                title='ชำระคนละ'
                value={perPerson}
                type='number'
                disabled
            />
        )
    }

    render () {
        return (
            <NewRecordContainer>
                <Row>
                    {this.renderNameInput()}
                </Row>
                <Row>
                    {this.renderAmountInput()}
                </Row>
                <Row>
                    {this.renderNumberOfPeopleInput()}
                </Row>
                <Summary>
                    {this.renderSummary()}
                </Summary>
            </NewRecordContainer>
        )
    }
}

export default NewRecord