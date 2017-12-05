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
    renderBackButton = () => {
        if (this.props.location.pathname === '/add-record') {
            return <div onClick={this.props.history.goBack}>Back</div>
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
        return (
            <Header>
                {this.renderBackButton()}
                Kid-Trang
            </Header>
        )
    }
}

export default withRouter(AppHeader)