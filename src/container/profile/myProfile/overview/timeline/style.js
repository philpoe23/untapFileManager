import Styled from 'styled-components';

const CreatePost = Styled.div`
    position: relative;
    z-index: 21;
    .ant-card-body{
        
        .postBody{
            img{
                width: 46px;
                height: 46px;
                border-radius: 50%;
            }
        }
        .postFooter{
            margin-top: 10px;
            padding: 10px 0;
            border-top: 1px solid #ddd;
        }
    }    
`;

const BackShadow = Styled.div`
    width: 100%;
    height: 100%;
    background: #11121760;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -0;
`;

const AllPosts = Styled.div`
    position: relative;
    z-index: 21;
    .ant-card-body{
        
        .postBody{
            img{
                width: 46px;
                height: 46px;
                border-radius: 50%;
            }
        }
        .postFooter{
            margin-top: 10px;
            padding: 10px 0;
            border-top: 1px solid #ddd;
        }
    }    
`;

const Title = Styled.div`
    display: flex;
    align-items: center;
    img {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
    }
    p {
        margin: 0;
        span {
            display: block;
            margin: 0;
        }
    }
`;

export { CreatePost, BackShadow, AllPosts, Title };
