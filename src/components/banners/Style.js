import Styled from 'styled-components';

const Figure2 = Styled.figure`
    position: relative;
    padding: 10px 0px;
    img {
        position: absolute;
        bottom : -15px;
        right : 0;
    }
`;

const Figure3 = Styled.figure`
    position: relative;    
    min-height: 150px;
    img {
        position: absolute;
        bottom: -38px;
        right: -25px;
    }
`;

const Figure6 = Styled.figure`
    position: relative;    
    min-height: 150px;
    /* img {
        position: absolute;
        bottom: -38px;
        right: -25px;
    } */
`;

const Figure7 = Styled.figure`
    display: flex;  
    min-height: 150px;
    /* img {
        position: absolute;
        bottom: -38px;
        right: -25px;
    } */
`;

export { Figure2, Figure3, Figure6, Figure7 };
