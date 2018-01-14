import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import QRCode from 'qrcode'
import generatePayload from 'promptpay-qr'
import moment from 'moment'
import ToonAvatar from 'cartoon-avatar'

import CardEmptyState from '../components/CardsEmptyState.react'
import InputWithTitle from '../components/InputWithTitle.react'
import AppHeader from '../components/AppHeader.react'
import { getPPID, savePPID } from '../data'

const Row = styled.div`
    margin-bottom: -1px;
`

const SettingPage = styled.div`

`
const Action = styled.div`
    display: inline;
`
const Description = styled.div`
    font-size: 12px;
    color: gray;
    padding: 10px;
`

const SettingContainer = styled.div`
    width: 100%;
    padding-top: 60px;
    width: 100%;
    position: absolute;
`

class Setting extends React.PureComponent {

    state = {
        ID: ''
    }

    componentDidMount () {
        this.setState({ ID: getPPID() })
    }

    onSave = () => {
        savePPID(this.state.ID)
        this.props.history.goBack()
    }

    onIDChange = (id) => {
        this.setState({ ID: id })
    }

    render () {
        const action = <Action onClick={this.onSave}>เสร็จสิ้น</Action>
        const back = <div onClick={this.props.history.goBack}>กลับ</div>
        return (
            <SettingPage>
                <AppHeader text='ตั้งค่า' back={back} action={action} />
                <SettingContainer>
                    <Row>
                        <InputWithTitle
                            title='หมายเลข PromptPay'
                            changedValue={this.onIDChange}
                            placeholder='XXX-XXX-XXXX'
                            value={this.state.ID}
                            type='text'
                        />
                        <Description>หมายเลข PrompPay ใช้สำหรับสร้าง QR-Code เพื่อให้คุณรับเงินคืนได้ง่ายยิ่งขึ้น</Description>
                    </Row>
                </SettingContainer>
            </SettingPage>
        )
    }
}

export default Setting