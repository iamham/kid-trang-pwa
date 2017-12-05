import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router-dom'

import { sanitiseLocation } from '../Utils'

class AppHeader extends React.Component {
    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
    }
    renderActionButton = () => {
        const Action = styled.div`
            padding-right: 15px;
            flex: 1;
        `
        if (this.props.location.pathname === '/add-record') {
            return <Action />
        }
    }
    renderBackButton = () => {
        const Back = styled.div`
            padding-left: 15px;
            flex: 1;
        `
        if (this.props.location.pathname === '/add-record') {
            return <Back onClick={this.props.history.goBack}>Back</Back>
        }
    }
    render () {
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
            flex: 1;
        `
        return (
            <Header>
                {this.renderBackButton()}
                <Title>
                    Kid-Trang
                </Title>
                {this.renderActionButton()}
            </Header>
        )
    }
}

export default withRouter(AppHeader)