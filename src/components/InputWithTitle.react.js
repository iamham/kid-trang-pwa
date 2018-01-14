import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
    position: absolute;
    right: 15px;
    outline: none;
    text-align: right;
    height: 30px;
    font-size: 16px;
    border: 0;
`
const InputWithTitleContainer = styled.div`
    width: 100%;
    align-items: center;
    font-size: 16px;
    padding: 0 10px;
    box-sizing: border-box;
    display: inline-flex;
    height: 40px;
    background: white;
    border-top: 1px solid #f0f0f2;
    border-bottom: 1px solid #f0f0f2;
`

const Title = styled.div``

class InputWithTitle extends React.PureComponent {
    static propTypes = {
        changedValue: PropTypes.func,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string,
        placeholder: PropTypes.string,
        type: PropTypes.string,
        disabled: PropTypes.bool,
    }

    onChange = (e) => this.props.changedValue(e.target.value)

    renderAmountInput = () => {
        return <Input
            type={this.props.type}
            onChange={this.onChange}
            placeholder={this.props.placeholder}
            value={this.props.value}
            disabled={this.props.disabled}
        />
    }

    render() {
        return (
            <InputWithTitleContainer>
                <Title>{this.props.title}</Title>
                {this.renderAmountInput()}
            </InputWithTitleContainer>
        )
    }
}

export default InputWithTitle