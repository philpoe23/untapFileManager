import Styled from 'styled-components';
import { Button } from 'antd';
const ButtonGroup = Button.Group;

const ButtonStyled = Styled(Button)`
background: ${({ type, theme }) => type !== 'default' && theme[type + '-color']};
border: 1px solid ${({ type, theme }) => (type !== 'default' ? theme[type + '-color'] : theme['disabled-color'])};

color: ${({ type }) => type !== 'default' && '#ffffff'};
margin: 4px;
border-radius: ${({ shape }) => (!shape ? '4px' : '40px')};
padding: 0px 15px;
&:hover, &:focus {
    background: ${({ type, theme }) => type !== 'default' && theme[type + '-color']}90;
    border: 1px solid ${({ type, theme }) => type !== 'default' && theme[type + '-color']}90;
    color: ${({ type }) => type !== 'default' && '#ffffff'};        
}

${({ outlined, theme, type }) => outlined && outline(theme, type)}
${({ squared, theme, type }) => squared && square(theme, type)}
${({ squared, outlined, theme, type }) => squared && outlined && squareOutline(theme, type)}
${({ social, color, shape }) => social && socialButton(color, shape)}
`;

const outline = (theme, type) => {
  return `
      background: transparent;
      border: 1px solid ${type !== 'default' ? theme[type + '-color'] : theme['disabled-color']};
      color: ${type !== 'default' && theme[type + '-color']};
     
      &:hover, &:focus {
          background: ${type !== 'default' && theme[type + '-color']};
          border: 1px solid ${type !== 'default' && theme[type + '-color']};
          color: ${type !== 'default' && '#ffffff'};        
      }
  `;
};

const square = (theme, type) => `
    background: ${type !== 'default' && theme[type + '-color']};
    border: 1px solid ${type !== 'default' ? theme[type + '-color'] : theme['disabled-color']};
    color: ${type !== 'default' && '#ffffff'};
    margin: 4px;
    border-radius: 0px;
    padding: 0px 15px;

    &:hover, &:focus {
        background: ${type !== 'default' && theme[type + '-color']}90;
        border: 1px solid ${type !== 'default' && theme[type + '-color']}90;
        color: ${type !== 'default' && '#ffffff'};        
    }
`;

const squareOutline = (theme, type) => `
    background: transparent;
    border: 1px solid ${type !== 'default' ? theme[type + '-color'] : theme['disabled-color']};
    color: ${type !== 'default' && theme[type + '-color']};
    margin: 4px;
    border-radius: 0px;
    padding: 0px 15px;
    &:hover, &:focus {
        background: ${type !== 'default' && theme[type + '-color']};
        border: 1px solid ${type !== 'default' && theme[type + '-color']};
        color: ${type !== 'default' && '#ffffff'};        
    }
`;

const socialButton = (color, shape) => `
    background: ${color};
    background: ${color};
    border: 1px solid ${color};
    color: #ffffff;
    margin: 4px;
    border-radius: ${!shape ? '4px' : '40px'};
    padding: 0px 15px;
    display: inline-flex;
    align-items: center;
    span {
        padding-left: 5px;
    }
    &:hover, &:focus {
        background: ${color}90;       
        border: 1px solid ${color}90;
        color: #ffffff;        
    }
`;

const ButtonStyledGroup = Styled(ButtonGroup)`
    margin: 4px;  
    button {
        margin: 0px;
    }
`;

export { ButtonStyled, ButtonStyledGroup };
