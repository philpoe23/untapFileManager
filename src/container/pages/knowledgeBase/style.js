import Styled from 'styled-components';

const KnowledgebaseTopWrap = Styled.div`
    .sDash_knowledgetop{
        text-align: center;
        padding: 65px;
        background-color: ${({ theme }) => theme['bg-color-light']};
        box-shadow: 0 5px 20px ${({ theme }) => theme['light-color']}10;
        .sDash_knowledgetop__title{
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 25px;
            color: ${({ theme }) => theme['dark-color']};
        }
        .sDash_knowledgetop__formInner{
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 690px;
            margin: 0 auto;
            background-color: #fff;
            box-shadow: 0 10px 10px ${({ theme }) => theme['light-color']}10;
            .ant-form-item{
                margin-bottom: 0;
            }
            .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
                height: 54px !important;
                border: 0 none;
            }
            .ant-select{
                min-width: 160px;
                .ant-select-arrow{
                    right: 30px;
                }
            }
            .ant-select-selector{
                .ant-select-selection-search{
                    .ant-select-selection-search-input{
                        height: 54px;
                    }
                }
                .ant-select-selection-item{
                    font-size: 15px;
                    color: ${({ theme }) => theme['gray-color']};
                    text-align: left;
                    line-height: 54px !important;
                    border-right: 1px solid ${({ theme }) => theme['border-color-normal']};
                }
            }
            .sDash_search-input{
                width: 100%;
                .ant-form-item-control-input{
                    font-size: 15px;
                    color: #868EAE;
                    height: 54px;
                }
                .ant-input{
                    line-height: 2;
                    border: 0 none;
                }
            }
            .btn-search{
                font-size: 15px;
                height: 54px;
                border-radius: 0 4px 4px 0;
                padding: 6.4px 27.7px;
            }
        }
    }
    .sDash_knowledgetop__popular--topics{
        margin-top: 22px;
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        li{
            &:first-child{
                margin-right: 25px !important;
            }
            &:not(:last-child){
                margin-right: 20px;
            }
            a,
            span{
                font-size: 14px;
                color: ${({ theme }) => theme['gray-color']};
            }
            a{
                color: ${({ theme }) => theme['light-gray-color']};
                transition: .35s;
                &:hover{
                    color: ${({ theme }) => theme['dark-color']};
                    text-decoration: underline;
                }
            }
        }
    }
`;

const KnowledgebaseArticleWrap = Styled.div`
    background-color: #fff;
    padding: 6px 50px 50px 50px;
    border-radius: 10px;
    margin-top: 50px;
    .knowledgebase-article-container{
        max-width: 1110px;
        margin: 0 auto;
    }
`;

const ArticleTabWrap = Styled.div`
    margin-bottom: 10px
    &.sDash_article-tab{
        .sDash_article-tab__menu{
            margin-bottom: 35px;
            ul{
                display: flex;
                align-items: center;
                border-bottom: 1px solid ${({ theme }) => theme['border-color-normal']};
                li{
                    &:not(:last-child){
                        margin-right: 36px;
                    }
                    a{
                        position: relative
                        display: block;
                        font-size: 16px;
                        font-weight: 500;
                        padding: 18px 0;
                        transition: .35s;
                        color: ${({ theme }) => theme['gray-color']};
                        &.active{
                            color: ${({ theme }) => theme['dark-color']};
                            &:after{
                                opacity: 1;
                                visibility: visible;
                            }
                        }
                        &:after{
                            position: absolute;
                            left: 0;
                            bottom: -.5px;
                            width: 100%;
                            height: 1px;
                            content: "";
                            opacity: 0;
                            visibility: hidden;
                            background-color: ${({ theme }) => theme['dark-color']};
                        }
                    }
                }
            }
        }
    }
`;

const ArticleTabContentWrap = Styled.div`
    .sDash_article-tab-signle{
        margin-bottom: 70px;
        .sDash_article-tab-signle__title{
            font-size: 22px;
            font-weight: 600;
            color: ${({ theme }) => theme['dark-color']};
        }
        .sDash_article-tab-signle__list{
            li{
                a{
                    display: block;
                    font-size: 15px;
                    font-weight: 400;
                    margin-bottom: 12px;
                    color: ${({ theme }) => theme['gray-color']};
                    &:hover{
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
        .btn-link{
            position: relative;
            margin-top: 16px;
            color: ${({ theme }) => theme['primary-color']};
            &:hover{
                &:after{
                    width: 100%;
                    opacity: 1;
                    visibility: visible;
                }
            }
            &:after{
                position: absolute;
                left: 0
                bottom: -6.5px;
                width: 0%;
                height: 1px;
                content: "";
                opacity: 0;
                visibility: visible;
                transition: .35s;
                z-index: 2;
                background-color: ${({ theme }) => theme['primary-color']};
            }
            i,
            span{
                margin-left: 10px;
            }
        }
    }
`;

const PopularArticleWrap = Styled.div`
    padding-top: 65px;
    border-top: 1px solid ${({ theme }) => theme['border-color-normal']};
    .sDash_popular-article{
        .sDash_popular-article__title{
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 30px;
            color: ${({ theme }) => theme['dark-color']};
        }
        .sDash_popular-article__single{
            border-radius: 10px;
            padding: 28px 30px 30px 30px;
            margin-bottom: 30px;
            &:hover{
                .single-article-title,
                p{
                    opacity: 1;
                }
            }
            &.theme-primary{
                color: #fff;
                background-color: ${({ theme }) => theme['primary-color']};
            }
            .single-article-title{
                font-size: 15px;
                font-weight: 400;
                color: #fff;
                opacity: .6;
                transition:.3s;
                margin-bottom: 15px;
            }
            p{
                font-size: 22px;
                line-height: 1.36;
                opacity: .9;
                transition:.3s;
                font-weight: 600;
                margin-bottom: 24px;
            }
            .btn-link{
                font-size: 15px;
                font-weight: 500;
                color: #fff;
                opacity: .9;
                &:hover{
                    opacity: 1;
                }
                i,
                span{
                    margin-left: 10px;
                }
            }
        }
    }
`;

const CtaWrap = Styled.div`
    margin-top: 15px;
    .sDash_knowledgebase-cta{
        text-align: center;
        .sDash_knowledgebase-cta__title{
            font-size: 22px;
            font-weight: 600;
            color: ${({ theme }) => theme['dark-color']};
        }
        p{
            font-size: 15px;
            margin-bottom: 30px;
            color: ${({ theme }) => theme['gray-color']};
        }
        .btn-rqSubmit{
            font-size: 14px;
            font-weight: 500;
            padding: 0px 30.71px;
        }
    }
`;

export {
  KnowledgebaseTopWrap,
  KnowledgebaseArticleWrap,
  PopularArticleWrap,
  ArticleTabWrap,
  ArticleTabContentWrap,
  CtaWrap,
};
