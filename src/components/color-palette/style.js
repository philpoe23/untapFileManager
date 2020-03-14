import Styled from 'styled-components';

const ColorPalette = Styled.div`
    width: 100%;
    height: 44px;
    background: ${({ type }) => type}
    border-radius: 5px;
    color: #fff;
    display: flex;
    align-items: center
    justify-content: center;
`;

export { ColorPalette };
