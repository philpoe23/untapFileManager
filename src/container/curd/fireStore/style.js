import Styled from 'styled-components';

const RecordViewWrapper = Styled.div`
    .search-box{
        position: relative;
        box-shadow: 0 5px 5px rgba(#9299B8,.3);
        .search-icon{
            position: absolute;
            left: 18px;
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
            padding: 0 20px 0 45px;
            border-radius: 6px;
            &::placeholder{
                color: #ADB4D2;
            }
        }
    }
`;

const RecordFormWrapper = Styled.div`
    .pro-image{
        margin-bottom: 30px;
        figcaption{
            position: relative;
        }
        .ant-upload-select{
            position: absolute;
            left: -40px;
            bottom: -40px;
            height: 40px;
            width: 40px;
            background: #fff;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            span{
                display: inline-flex;
                height: 32px;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                width: 32px;
                background: #5F63F2;
            }
        }
        .upload-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
        }
        .info{
            margin-left: 20px;
            h1{
                font-size: 15px;
                font-weight: 500;
            }
        }
    }
`;
export { RecordViewWrapper, RecordFormWrapper };
