import Styled from 'styled-components';
const Main = Styled.div`
    padding: 0px 30px;
    min-height: 750px;
    background-color: rgb(244, 245, 247);
    .ant-skeleton-paragraph{
        margin-bottom: 0;
    }

    /* spinner */
    .ant-spin{
        margin-right: 20px;
        &:last-child{
            margin-right: 0;
        }
    }
    .columnCardsWrapper{
        background: #F4F5F7;
        border-radius: 4px;
        padding: 50px 30px 25px;
    }
    .columnCardsWrapper .ant-card{
        background: #fff;
    }
    .columnCardsWrapper .ant-card-head{
        background: #fff;
    }

`;

const ButtonsGroupWrapper = Styled.div`
    margin-bottom: -25px;
    .button-group-single{
        margin-bottom: 25px;
        h4{
            font-size: 15px;
            margin-bottom: 8px;
        }
    }
    .button-group-single .ant-btn-light{
        border: 1px solid #E3E6EF;
    }
    .ant-btn-group:not(:last-child){
        margin-right: 20px;
    }
`;

const BlockButtonsWrapper = Styled.div`
    .ant-btn-block{
        margin-bottom: 10px;
    }
`;

const ButtonSizeWrapper = Styled.div`
    display: flex;
    align-items: flex-end;
`;

const BtnWithIcon = Styled.div`
    display: inline;
    .anticon i,
    .anticon svg,
    .anticon img{
        width: 10px;
        height: 10px;
    }
    .ant-btn-group button.active{
        border-right: 0px;
    }
`;

const AlertList = Styled.div`
    margin-top: -15px;
`;

const AutoCompleteWrapper = Styled.div`
    .ant-select:not(:last-child){
        margin-bottom: 20px;
    }
`;

export { Main , ButtonsGroupWrapper, BlockButtonsWrapper, ButtonSizeWrapper, BtnWithIcon, AlertList , AutoCompleteWrapper };
