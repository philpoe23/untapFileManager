import Styled from 'styled-components';

const ItemWraper = Styled.div`
    display: flex;
    flex-direction: column;
    .rdrDateDisplay, .rdrMonthAndYearPickers{
        display: none;
    }
    .rdrMonth {
        position: relative;
    }
    .rdrMonthName {
        text-align: center;
        font-size: 18px;
        position: absolute;
        top: -50px;
        left: 100px;
        font-weight: 400;
    }
`;

const ButtonGroup = Styled.div`
    border-top: 1px solid #ddd;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    margin: -10px;
    p{
        margin: 10px
    }
    button {
        margin: 10px;
    }
`;

export { ItemWraper, ButtonGroup };
