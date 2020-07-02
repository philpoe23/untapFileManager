import Styled from 'styled-components';
const Main = Styled.div`
    padding: 0px 30px;
    min-height: 750px;
    background-color: rgb(244, 245, 247);
    @media only screen and (max-width: 1199px){
        padding: 0px 15px;
    }
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
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

    /* Column Cards Wrapper */
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

    /* Ant Collapse */
    .ant-collapse{
        border-color: #E3E6EF;
        border-radius: 5px;
    }
    .ant-collapse .ant-collapse-header{
        color: #5A5F7D !important;
        background-color: #F8F9FB;
        padding: 12px 16px 10px 45px !important;
    }
    .ant-collapse-content p{
        color: #9299B8;
        margin-bottom: 0;
    }
    .ant-collapse-content > .ant-collapse-content-box {
        padding: 20px 20px 12px;
    }
    .ant-collapse-content > .ant-collapse-content-box .ant-collapse-content-box{
        padding: 10.5px 20px;
    }
    .ant-collapse.ant-collapse-borderless{
        background-color: #F8F9FB;
    }
    .ant-collapse > .ant-collapse-item,
    .ant-collapse .ant-collapse-content{
        border-color: #E3E6EF;
    }
    .ant-collapse > .ant-collapse-item.ant-collapse-item-disabled .ant-collapse-header{
        color: #ADB4D2 !important;
    }

    .ant-collapse > .ant-collapse-item .ant-collapse-header .ant-collapse-arrow{

        font-size: 8px;
    }

    .ant-collapse .ant-collapse {
        border: 0 none;
        background: #fff;
    }

    .ant-collapse .ant-collapse > .ant-collapse-item {
        border-bottom: 0;
    }
    .ant-collapse .ant-collapse .ant-collapse-header{
        border: 1px solid #E3E6EF;
        background: #F8F9FB;
    }
    .ant-collapse .ant-collapse .ant-collapse-content{
        margin: 20px 0 10px 0;
        border: 1px solid #E3E6EF;
        border-radius: 0;
    }

    /* Ant Comment */
    .ant-comment-inner{
        padding: 0;
    }
    .ant-comment-content-detail p{
        color: #9299B8;
    }
    .ant-list-items{
        padding-top: 22px;
    }
    .ant-list-items li:not(:last-child){
        margin-bottom: 22px;
    }
    .ant-comment:not(:last-child){
        margin-bottom: 22px;
    }
    .ant-comment-nested{
        margin-top: 22px;
    }
    .ant-comment-actions li span{
        color: #ADB4D2;
    }
    .ant-comment-content-detail textarea{
        resize: none;
        min-height: 170px;
        border-radius: 5px;
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
        background: #fff;
        border-right-width: 0px;
        &:last-child{
            border-right-width: 1px;
        }
        &:hover{
            background: ${({ theme }) => theme['bg-color-normal']} !important;
        }
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
    .auto-complete-input{
        .ant-select{
            width: 200px !important;
        }
    }
`;

const CalendarWrapper = Styled.div`
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
        height: 30px !important;
    }
    .ant-select-single .ant-select-selector .ant-select-selection-item,
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
        line-height: 28px !important;
    }
    .ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content{
        height: 105px;
    }
    .ant-radio-button-wrapper{
        height: 30px;
        line-height: 28px;
    }
`;

const DatePickerWrapper = Styled.div`
    .ant-picker{
        padding: 6px 11px 6px;
        width: 100%;
        border-color: #E3E6EF;
        border-radius: 5px;
    }
    .ant-picker:not(:last-child){
        margin-bottom: 20px;
    }
    .ant-picker-input > input{
        color: #5A5F7D;
    }
    .ant-picker-range .ant-picker-input > input{
        text-align: center;
        font-weight: 500;
    }
`;

const NotificationListWrapper = Styled.div`
    margin-left: -4px;
    button{
        margin: 0 4px;
    }
`;

const TagInput = Styled.div`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${({theme})=>theme['border-color-normal']};
    .ant-tag{
        font-size: 11px;
        padding: 0 4px;
        border: 0 none;
        height: 24px;
        display: inline-flex;
        align-items: center;
    }
`;

const PageHeaderWrapper = Styled.div`
    .ant-page-header{
        border: 1px solid ${({theme})=>theme['border-color-normal']};
        border-radius: 5px;
    }
    .ant-page-header .ant-page-header-heading-left{
        margin: 2px 0;
    }
`;

const MessageStyleWrapper = Styled.div`
    .ant-btn-lg{
        font-size: 14px;
    }
`;

const BasicFormWrapper = Styled.div`
    .ant-form-item{
        flex-flow: column;
        &:not(:last-child){
            margin-bottom: 26px;
        }
        &:last-child{
            margin-bottom: 0;
        }
        .ant-form-item-label{
            text-align: left;
            label{
                height: fit-content;
                margin-bottom: 6px;
            }
        }
        .ant-form-item-control-input{
            input,
            textarea{
                padding: 12px 20px;
                color: ${({theme})=>theme['gray-color']};
                &:placeholder{
                    color: ${({theme})=>theme['light-color']};
                }
            }
            button{
                height: 44px;
            }
            .ant-input-affix-wrapper{
                padding: 0 11px;
            }
        }
        .ant-select-single{
            .ant-select-selector{
                padding: 0 20px;
                height: 48px !important;
                .ant-select-selection-item{
                    line-height: 46px !important;
                }
            }
        }
    }
    .setting-form-actions{
        margin: 48px 0 14px;
        button{
            margin-bottom: 14px;
        }
    }
`;

const CardToolbox = Styled.div`
    .ant-page-header-heading{
        @media only screen and (max-width: 991px){
            flex-flow: column;
            align-items: center;
        }
    }

    .ant-page-header-heading-left{
        @media only screen and (max-width: 575px){
            flex-flow: column;
        }
        .ant-page-header-back{
            @media only screen and (max-width: 575px){
                margin: 0;
                padding: 0;
            }
        }
        .ant-page-header-heading-title{
            @media only screen and (max-width: 575px){
                margin: 10px 0 8px;
                padding: 0;
            }
            &:after{
                @media only screen and (max-width: 575px){
                    display: none;
                }
            }
        }
        .ant-page-header-heading-sub-title{
            @media only screen and (max-width: 575px){
                margin: 0;
                padding: 0;
                flex-flow: column;
            }
            .title-counter{
                @media only screen and (max-width: 575px){
                    margin-bottom: 16px;
                }
            }
        }
    }

    .ant-page-header-heading-title{
        position: relative;
        padding-right: 24px;
        margin-right: 24px;
        &:after{
            position: absolute;
            right: 0px;
            top: 0;
            height: 100%;
            width: 1px;
            content: '';
            background: ${({theme})=>theme['border-color-normal']}
        }
    }
    .ant-page-header-heading-sub-title{
        font-weight: 500;
        display: flex;
        align-items: center;
    }
    .ant-select{
        margin-left: 25px;
        @media only screen and (max-width: 575px){
            margin-left: 0;
        }
        .ant-select-selector{
            height: 46px !important;
            min-width: 350px;
            @media only screen and (max-width: 991px){
                min-width: 100%;
            }
        }
        .ant-select-selection-search-input{
            height: 46px;
            border-radius: 23px;
            border: 0 none;
            box-shadow: 0 5px 20px #9299B803;
            input{
                height: 46px !important;
                font-size: 14px;
            }
        }
    }
    .btn-add_new{
        height: 40px;
        @media only screen and (max-width: 991px){
            margin-top: 10px;
        }
    }
`;

const FormGroupWrapper = Styled.div`
    .ant-card-body{
        @media only screen and (max-width: 767px){
            padding: 0 !important;
        }
    }
`;


const TableWrapper = Styled.div`
    table{
        thead{
            tr{
                border-radius: 10px;
                th{
                    &:last-child{
                        text-align: right;
                    }
                    color: ${({theme})=>theme['gray-color']};
                    background: ${({theme})=>theme['bg-color-light']};
                    border-top: 1px solid ${({theme})=>theme['border-color-light']};
                    border-bottom: 1px solid ${({theme})=>theme['border-color-light']};
                    &:first-child{
                        border-left: 1px solid ${({theme})=>theme['border-color-light']};
                        border-radius: 10px 0 0 10px !important;
                    }
                    &:last-child{
                        border-right: 1px solid ${({theme})=>theme['border-color-light']};
                        border-radius: 0 10px 10px 0 !important;
                    }
                }
            }
        }

        tbody{
            >tr{
                &:hover{
                    >td{
                        background: ${({theme})=>theme['bg-color-light']};
                    }
                }
                &.ant-table-row-selected{
                    &:hover{
                        >td{
                            background: ${({theme})=>theme['bg-color-light']};
                        }
                    }
                    >td{
                        background: ${({theme})=>theme['bg-color-light']};
                    }
                }
                >td{
                    border: 0 none;
                    font-weight: 500;
                    color: ${({theme})=>theme['dark-color']};
                    &:first-child{
                        border-radius: 10px 0 0 10px !important;
                    }
                    &:last-child{
                        border-radius: 0 10px 10px 0 !important;
                    }
                    span{
                        display: block;
                    }
                    .order-id{
                        min-width: 128px;
                    }
                    .customer-name{
                        min-width: 174px;
                    }
                    .status{
                        min-width: 175px;
                    }
                    .ordered-amount{
                        min-width: 175px;
                    }
                    .ordered-date{
                        min-width: 165px;
                    }
                    .table-actions{
                        min-width: 60px;
                    }
                }
            }
        }
        .table-actions{
            text-align: right;
            min-width: 150px !important;
            button{
                height: 40px;
                padding: 0 11px;
                background: transparent;
                border: 0 none;
                color: ${({theme})=>theme['extra-light-color']};
                &:hover{
                    &.ant-btn-primary{
                        color: ${({theme})=>theme['primary-color']};
                        background: ${({theme})=>theme['primary-color']}10;
                    }
                    &.ant-btn-info{
                        color: ${({theme})=>theme['info-color']};
                        background: ${({theme})=>theme['info-color']}10;
                    }
                    &.ant-btn-danger{
                        color: ${({theme})=>theme['danger-color']};
                        background: ${({theme})=>theme['danger-color']}10;
                    }
                }
            }
        }
        .seller-info{
            img{
                margin-right: 12px;
            }
        }
        .user-info{
            display: flex;
            align-items: center;
            figure{
                margin: 0 8px 0;
            }
            .user-name{
                margin-bottom: 4px;
                font-weight: 500;
            }
            .user-designation{
                font-size: 12px;
                font-weight: 400;
                color: ${({theme})=>theme['light-color']};
            }
        }
    }
`;


export {
    Main,
    ButtonsGroupWrapper,
    BlockButtonsWrapper,
    ButtonSizeWrapper,
    BtnWithIcon,
    AlertList,
    AutoCompleteWrapper,
    CalendarWrapper,
    DatePickerWrapper,
    NotificationListWrapper,
    TagInput,
    PageHeaderWrapper,
    MessageStyleWrapper,
    BasicFormWrapper,
    CardToolbox,
    FormGroupWrapper,
    TableWrapper
};
