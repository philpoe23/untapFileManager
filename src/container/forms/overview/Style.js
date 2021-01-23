import Styled from 'styled-components';

const HorizontalFormStyleWrap = Styled.div`
    .ant-card{
        margin-bottom: 25px
    }
    .ant-form-horizontal{
        label{
            display: inline-block;
            font-weight: 500;
            margin-bottom: 24px;
        }
        .ant-form-item{
            margin-bottom: 25px !important;
        }
        .ant-input-affix-wrapper > input.ant-input{
            padding-top: 12px;
            padding-bottom: 12px;
        }
        .ant-input-affix-wrapper .ant-input-prefix svg{
            color: ${({ theme }) => theme['gray-color']};
        }
        .sDash_form-action{
            margin: -7.5px;
            button{
                font-size: 14px;
                font-weight: 500;
                border-radius: 6px;
                margin: 7.5px;
                padding: 6.4px 19px;
                &.ant-btn-light{
                    height: 44px;
                    background-color: #F1F2F6;
                    border-color: #F1F2F6;
                }
            }
            .ant-btn-light{
                background-color: #F8F9FB;
            }
        }
    }
    &.sDash_input-form{
        .ant-picker{
            width: 100%;
            &:focus{
                outline: none;
                box-shadow: 0 0;
            }
        }
    }
`;

const VerticalFormStyleWrap = Styled.div`
    .ant-card{
        margin-bottom: 25px
    }
    .ant-input-affix-wrapper > input.ant-input{
        padding-top: 12px;
        padding-bottom: 12px;
    }
    .ant-input-affix-wrapper .ant-input-prefix svg{
        color: ${({ theme }) => theme['gray-color']};
    }
    .sDash_form-action{
        margin: -7.5px;
        button{
            font-size: 14px;
            font-weight: 500;
            border-radius: 6px;
            margin: 7.5px;
            padding: 6.4px 19px;
            &.ant-btn-light{
                height: 44px;
                background-color: #F1F2F6;
                border-color: #F1F2F6;
            }
        }
        .ant-form-item{
            margin-bottom: 25px !important;
        }
        .ant-btn-light{
            background-color: #F8F9FB;
        }
    }
`;

const CheckListWrap = Styled.div`
    .sDash_check-list-wrap{
        display: flex;
        justify-content: space-between;
        .sDash_check-list{
            li{
                &:not(:last-child){
                    margin-bottom: 20px;
                }
            }
        }
    }
`;

export { HorizontalFormStyleWrap, VerticalFormStyleWrap, CheckListWrap };
