import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import QRCode from 'qrcode'
import generatePayload from 'promptpay-qr'
import moment from 'moment'
import ToonAvatar from 'cartoon-avatar'
import propTypes from 'prop-types'

import CardEmptyState from '../components/CardsEmptyState.react'
import InputWithTitle from '../components/InputWithTitle.react'
import AppHeader from '../components/AppHeader.react'
import { getPPID } from '../data'

const Row = styled.div`
    margin-bottom: -1px;
`
const Summary = styled.div`
    margin-top: 20px;
    background: white;
`
const NewRecordPage = styled.div`

`
const Action = styled.div`
    display: inline;
`

const NewRecordContainer = styled.div`
    width: 100%;
    padding-top: 60px;
    width: 100%;
    position: absolute;
`

const Avatars = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px 5px 0 5px;
    border-bottom: 1px solid #f0f0f2;
`

const Avatar = styled.div`
    width: 40px;
    height: 40px;
    background: gray;
    margin-bottom: 5px;
    &:not(:last-child) {
        margin-right: 5px;
    }
`

class NewRecord extends React.PureComponent {
    static propTypes = {
        history: propTypes.object,
    }

    state = {
        name: '',
        amount: '',
        numberOfPerson: '1',
        qr: '',
    }

    componentDidMount () {
        this.setState({ 
            createTime: new Date(),
        })
    }

    getSanitisedNumber = (string) => isNaN(parseInt(string)) ? null : parseInt(string)

    getAmountPerPerson = () => this.state.amount / (this.state.numberOfPerson || 1)

    generateQRCode = () => {
        const PPID = getPPID()
        const options = { type: 'svg', errorCorrectionLevel: 'L', margin: 2 }
        const payload = generatePayload(PPID, { amount: this.getAmountPerPerson() })
        QRCode.toString(payload, options, (err, svg) => {
            const encodedSVG = encodeURIComponent(svg)
            if (this.state.qr !== encodedSVG) {
                this.setState({ qr: encodeURIComponent(svg) })
            }
        })
    }

    onNameChange = (name) => this.setState({ name: name })

    onAmountChange = (amount) => {
        const parsedAmount = this.getSanitisedNumber(amount)
        this.setState({ amount: parsedAmount })
    }

    onNumberOfPersonChange = (number) => {
        const numberOfPerson = this.getSanitisedNumber(number)
        this.setState({ numberOfPerson: numberOfPerson })
    }

    onSave = () => {

    } 

    renderNameInput = () => (
        <InputWithTitle
            title=''
            changedValue={this.onNameChange}
            placeholder={moment(this.state.createTime).format('dddd, hA')}
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

    renderNumberOfPersonInput = () => (
        <InputWithTitle
            title='จำนวนคน'
            changedValue={this.onNumberOfPersonChange}
            value={this.state.numberOfPerson}
            type='number'
        />
    )

    renderSummary = () => {
        return (
            <InputWithTitle
                title='ชำระคนละ'
                value={this.getAmountPerPerson()}
                type='number'
                disabled
            />
        )
    }

    renderAvatar = (i) => {
        const cartoonAvatar = ToonAvatar.generate_avatar()
        return <Avatar key={i}><img src={cartoonAvatar} /></Avatar>
    }

    renderAvatars = () => {
        let avatars = []
        for (let i = 0; i < this.state.numberOfPerson; i++) { 
            avatars.push(this.renderAvatar(i))
        }
        return <Avatars>{avatars}</Avatars>
    }

    render () {
        this.generateQRCode()
        const qrCode = this.state.amount
            ? <img src={'data:image/svg+xml,' + this.state.qr} />
            : null
        const action = <Action onClick={this.onSave}>บันทึก</Action>
        const back = <div onClick={this.props.history.goBack}>กลับ</div>

        return (
            <NewRecordPage>
                <AppHeader action={action} back={back} />
                <NewRecordContainer>
                    <Row>
                        {this.renderNameInput()}
                    </Row>
                    <Row>
                        {this.renderAmountInput()}
                    </Row>
                    <Row>
                        {this.renderNumberOfPersonInput()}
                    </Row>
                    <Summary>
                        {this.renderSummary()}
                        {this.renderAvatars()}
                        {qrCode}
                    </Summary>
                </NewRecordContainer>
            </NewRecordPage>
        )
    }
}

export default NewRecord