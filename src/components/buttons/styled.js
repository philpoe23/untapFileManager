import Styled from 'styled-components';
import { Button } from 'antd';
const ButtonGroup = Button.Group;

const ButtonStyled = Styled(Button)`
    background: ${({ type, theme }) => type !== 'default' && theme[type + '-color']};
    border: 1px solid ${({ type, theme }) => (type !== 'default' ? theme[type + '-color'] : theme['disabled-color'])};
    color: ${({ type, theme }) => type !== 'default' && '#ffffff'};
    margin: 4px;
    border-radius: ${({ shape }) => (!shape ? '4px' : '40px')};
    padding: 0px 15px;

    &:hover, &:focus {
        background: ${({ type, theme }) => type !== 'default' && theme[type + '-color']}90;
        border: 1px solid ${({ type, theme }) => type !== 'default' && theme[type + '-color']}90;
        color: ${({ type }) => type !== 'default' && '#ffffff'};        
    }
`;

const ButtonStyledOutline = Styled(Button)`
    background: transparent;
    border: 1px solid ${({ type, theme }) => (type !== 'default' ? theme[type + '-color'] : theme['disabled-color'])};
    color: ${({ type, theme }) => type !== 'default' && theme[type + '-color']};
    margin: 4px;
    border-radius: ${({ shape }) => (!shape ? '4px' : '40px')};
    padding: 0px 15px;

    &:hover, &:focus {
        background: ${({ type, theme }) => type !== 'default' && theme[type + '-color']};
        border: 1px solid ${({ type, theme }) => type !== 'default' && theme[type + '-color']};
        color: ${({ type }) => type !== 'default' && '#ffffff'};        
    }
`;

const ButtonStyledSquare = Styled(Button)`
    background: ${({ type, theme }) => type !== 'default' && theme[type + '-color']};
    border: 1px solid ${({ type, theme }) => (type !== 'default' ? theme[type + '-color'] : theme['disabled-color'])};
    color: ${({ type }) => type !== 'default' && '#ffffff'};
    margin: 4px;
    border-radius: 0px;
    padding: 0px 15px;

    &:hover, &:focus {
        background: ${({ type, theme }) => type !== 'default' && theme[type + '-color']}90;
        border: 1px solid ${({ type, theme }) => type !== 'default' && theme[type + '-color']}90;
        color: ${({ type }) => type !== 'default' && '#ffffff'};        
    }
`;

const ButtonStyledSquareOutline = Styled(Button)`
    background: transparent;
    border: 1px solid ${({ type, theme }) => (type !== 'default' ? theme[type + '-color'] : theme['disabled-color'])};
    color: ${({ type, theme }) => type !== 'default' && theme[type + '-color']};
    margin: 4px;
    border-radius: 0px;
    padding: 0px 15px;

    &:hover, &:focus {
        background: ${({ type, theme }) => type !== 'default' && theme[type + '-color']};
        border: 1px solid ${({ type, theme }) => type !== 'default' && theme[type + '-color']};
        color: ${({ type }) => type !== 'default' && '#ffffff'};        
    }
`;
const ButtonStyledSocial = Styled(Button)`
    background: ${({ color }) => color};
    border: 1px solid ${({ color }) => color};
    color: #ffffff;
    margin: 4px;
    border-radius: ${({ shape }) => (!shape ? '4px' : '40px')};
    padding: 0px 15px;
    display: inline-flex;
    align-items: center;
    span {
        padding-left: 5px;
    }

    &:hover, &:focus {
        background: ${({ color }) => color}90;
        border: 1px solid ${({ color }) => color}90;
        color: #ffffff;        
    }
`;

const ButtonStyledGroup = Styled(ButtonGroup)`
    margin: 4px;  
    button {
        margin: 0px;
    }
`;

export { ButtonStyled, ButtonStyledOutline, ButtonStyledSquare, ButtonStyledSquareOutline, ButtonStyledSocial, ButtonStyledGroup };
