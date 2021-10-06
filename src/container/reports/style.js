import Styled from 'styled-components';

const RecordViewWrapper = Styled.div`
    .btn-add_new{
        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        a{
            display: flex;
            align-items: center;
            svg,
            img,
            i{
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
            }
        }
    }
    .search-box{
        position: relative;
        box-shadow: 0 5px 5px rgba(#9299B8,.3);
        .search-icon{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 18px;
            top: 50%;
            transform: translateY(-50%);
            svg,
            img{
                margin-top: 6px;
                min-width: 16px;
                color: #9299B8;
            }
        }
        input{
            border: 0 none;
            height: 40px;
            min-width: 280px;
            padding: ${({ theme }) => (theme.rtl ? '0 45px 0 20px' : '0 20px 0 45px')};
            border-radius: 6px;
            &::placeholder{
                color: #ADB4D2;
            }
            &:focus{
                outline: none;
            }
        }
    }
`;

const RecordFormWrapper = Styled.div`
    .pro-image{
        position: relative;
        margin-bottom: 30px;
        .ant-spin.ant-spin-spinning{
            position: absolute;
            top: 0;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            width: 120px;
            height: 120px;
            background: #ffffff90;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            z-index: 10;
            &:after{
                position: absolute;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #272B4120;
                content: '';
                z-index: -1;
            }
            .ant-spin-dot {
                position: relative;
                z-index: 10;
            }
        }
        img{
            max-width: 120px;
            border-radius: 50%;
        }
        .ant-spin{
            height: 120px;
            width: 120px;
            display: flex;
            align-items: center;
        }
        .ant-upload-select{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 80px;
            bottom: -5px;
            height: 40px;
            width: 40px;
            background: #fff;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            z-index: 222;
            span{
                display: inline-flex;
                height: 32px;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                width: 32px;
                background: #083643;
            }
        }
        .upload-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
        }
        .info{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
            h1{
                font-size: 15px;
                font-weight: 500;
                margin-bottom: 0;
            }
        }
        .ant-upload-list-item{
            margin-top: 0;
            &:hover{
                .ant-upload-list-item-info{
                    background-color: transparent;
                }
            }
            .ant-upload-list-item-info{
                >span{
                    display: flex;
                    align-items: center;
                    ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 14px;
                    ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 10px;
                }
                .ant-upload-list-item-card-actions {
                    /* // top: -8px; */
                }
            }
        }
    }

    .record-spin{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const AddEventWrap = Styled.div`
    label{
        font-weight: 400 !important;
        color: ${({ theme }) => theme['light-color']} !important;
        margin-bottom: 0 !important;
    }
    .ant-form-item{
        span.label{
            @media only screen and (max-width: 575px){
                display: inline-block;
                margin-bottom: 10px;
            }
        }
    }
    .ant-form-item-control-input{
        min-height: 46px;
        textarea{
            min-height: 104px;
            resize: none;
        }
        .ant-input{
            border: 1px solid ${({ theme }) => theme['border-color-light']};
            &::placeholder{
                color: ${({ theme }) => theme['gray-color']};
            }
        }
    }
    .ant-row{
        flex-flow: row !important;
        align-items: center;
        @media only screen and (max-width: 575px){
            flex-flow: column !important;
            align-items: flex-start;
        }
        &.event-desc{
            align-items: flex-start;
        }
        .ant-form-item-control{
            @media only screen and (max-width: 575px){
                width: 100%;
            }
        }
    }
    
    .date-time-picker {
        .ant-picker{
            min-width: auto;
            width: 100%;
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
            }
        }
        .ant-picker-input{
            padding: 0 30px;
            position: relative;
            @media only screen and (max-width: 575px){
                padding: 0 20px 0 25px;
            }
            .ant-picker-suffix{
                position: absolute;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                top: 50%;
                transform: translateY(-50%);
                @media only screen and (max-width: 575px){
                    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                }
                svg{
                    color: ${({ theme }) => theme['light-color']};
                }
            }
        }
    }
    .add-event-footer{
        .ant-btn-white{
            color: ${({ theme }) => theme['light-color']} !important;
        }
        .btn-save{
            height: 38px;
            padding: 0 25px;
        }
    }

    .newChecklist {
        .ant-form-item-control-input-content {
            position: absolute;
            right: 0;
        }
    }

    .ant-form-item {
        
        .ant-form-item-label label {
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
            margin-bottom: 6px;
            color: #000000 !important;
        }
    }

    .ant-form-item:last-child {
        margin-Bottom: 24px;
    }

    .vertical-label {
        
    }


    .vertical-label .ant-form-item-label label {
        width: 90px;
        white-space: pre-wrap;
        text-align: center;
    }
`;

export { RecordViewWrapper, RecordFormWrapper, AddEventWrap };
