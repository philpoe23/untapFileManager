import Styled from 'styled-components';

const Icon = Styled.div`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    span {
        padding-left: 10px;
    }
`;

const AnIcon = Styled.div`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    span {
        padding-left: 10px;
    }
`;

const IconWrapper = Styled.div`
    .ant-card{
        .ant-card-body{
            padding: 15px 10px 10px 10px !important;
        }
    }

    .icon-single{
        span{
            padding-left: 0;
        }
        span.fa,
        svg,
        i{
            font-size: 18px;
            min-width: 20px;
            margin-right: 10px;
        }
    }
`;

export { Icon, AnIcon, IconWrapper };
