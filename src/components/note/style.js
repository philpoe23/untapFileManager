import Styled from 'styled-components';

const Card = Styled.div`
    .ant-card .ant-card-body{        
        border-radius: 10px;
        color: #ffffff;        
        h4{
            color: #ffffff;
        }
        .actions{
            display: flex;
            justify-content: space-between;
        }        
    } 
    &.personal .ant-card .ant-card-body{
        background: #5F63F2;
        &:hover{
            background: #5F63F290;
        }
    }
    &.work .ant-card .ant-card-body{
        background: #20C997;
        &:hover{
            background: #20C99790;
        }
    }
    &.social .ant-card .ant-card-body{
        background: #FA8B0C;
        &:hover{
            background: #FA8B0C90;
        }
    }
    &.important .ant-card .ant-card-body{
        background: #2C99FF;
        &:hover{
            background: #2C99FF90;
        }
    }  
`;

export { Card };
