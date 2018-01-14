import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router-dom'

import BackIcon from './BackIcon.png'
import { sanitiseLocation } from '../Utils'

const Header = styled.div`
    z-index: 1;
    width: 100%;
    height: 40px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    font-weight: 600;
    border-bottom: 1px solid #f0f0f2;
`

const Title = styled.div`
    text-align: center;
    position: absolute;
    margin: auto;
`

const Back = styled.div`
    display: inline-block;
    margin-left: 10px;
    opacity: 0.6;
`

const Action = styled.div`
    padding-right: 15px;
    flex: 1;
    text-align: right;
    opacity: 0.6;
`

class AppHeader extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        back: PropTypes.object,
        action: PropTypes.object,
    }
    render () {
        return (
            <Header>
                <Back>{this.props.back}</Back>
                <Title>
                    {this.props.text || 'คิดตังค์'}
                </Title>
                <Action>{this.props.action}</Action>
            </Header>
        )
    }
}

export default withRouter(AppHeader)