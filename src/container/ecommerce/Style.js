import Styled from 'styled-components';

const FigureCart = Styled.figure`
    display: inline-flex;
    img {
        margin-right: 15px;
    }
`;

const Sidebar = Styled.div`
    .ant-card-head-title{
        padding: 14px 0 !important;
        span{
            margin-left: 0;
            font-size: 16px;
            font-weight: 500;
            color: ${({theme})=>theme['dark-color']};
            svg{
                margin-right: 12px;
            }
        }
    }
`;

const SidebarSingle = Styled.div`
    h1{
        font-size: 15px;
        margin-bottom: 20px;
        color: ${({theme})=>theme['dark-color']};
    }
    .ant-slider{
        margin-bottom: 15px;
    }
    .atbd-category-list{
        li{
            &:not(:last-child){
                margin-bottom: 10px;
            }
            a{
                width: 100%
                display: inline-flex;
                align-items: center;
                justify-content: space-between;
                color: ${({theme})=>theme['gray-color']};
                .category-count{
                    color: ${({theme})=>theme['light-color']};
                }
            }
        }
    }
    .btn-seeMore{
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-top: 8px;
    }
    .ant-checkbox-group{
        .ant-checkbox-group-item{
            display: block;
            color: ${({theme})=>theme['gray-color']};
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
    }
    .ant-checkbox-group{
        width: 100%;
    }
`;

const ProductCard = Styled.div`
    border-radius: 10px;
    background-color: #fff;
    position: relative;
    .product-list{
        background-color: #fff;
        padding: 18px 20px;
        border-radius: 10px;
        .product-single-title{
            margin: 25px 0 16px;
        }
        .product-single-info{
            margin-top: 25px;
        }
        .product-single-action{
            flex-flow: column;
            align-items: flex-start;
            button{
                min-width: 132px;
            }
            .btn-cart{
                margin: 0 0 10px;
            }
            .ant-btn-sm{
                height: 38px;
            }
        }
    }
    figure{
        margin-bottom: 0;
        img{
            width: 100%;
        }
    }
    figcaption{
        padding: 20px 20px 24px;
    }
    .btn-heart{
        position: absolute;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        right: 20px;
        top: 15px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 5px 10px ${({theme})=>theme['light-color']}15;
    }
    .product-single-title{
        margin-bottom: 8px;
        font-size: 15px;
        font-weight: 500;
        a{
            color: ${({theme})=>theme['dark-color']};
            &:hover{
                color: ${({theme})=>theme['primary-color']};
            }
        }
    }
    .product-single-price{
        margin-bottom: 5px;
        del{
            margin: 0 5px;
        }
    }
    .product-single-price__new{
        font-weight: 600;
        color: ${({theme})=>theme['primary-color']};
    }
    .product-single-price__offer{
        font-size: 13px;
        color: ${({theme})=>theme['secondary-color']};
    }
    .product-single-rating{
        font-size: 12px;
        font-weight: 500;
        .ant-rate{
            margin-right: 5px;
        }
        .total-reviews{
            font-weight: 400;
            margin-left: 6px;
            color: ${({theme})=>theme['light-color']};
        }
    }
    .product-single-action{
        display: flex;
        align-items: center;
        margin-top: 26px;
        .ant-btn-default{
            border-color: ${({theme})=>theme['border-color-normal']};
            &:hover{
                border-color: ${({theme})=>theme['primary-color']};
            }
        }
        .ant-btn-sm{
            font-size: 12px;
            padding: 0px 18px;
            height: 34px;
        }
        .btn-cart{
            margin-right: 10px;
        }
    }
`;

const ProductListToolbox = Styled.div`
    margin-bottom: 20px;
    .ant-row{
        align-items: center;
    }
    .search-result{
        margin-bottom: 0;
        color: ${({theme})=>theme['gray-color']};
    }
    .ant-select-selector{
        height: 46px !important;
        .ant-select-selection-search-input{
            box-shadow: 0 5px 20px ${({theme})=>theme['light-color']}3;
            border-radius: 23px;
            border: 0 none;
            input{
                height: 46px !important;
            }
        }
    }
    .product-list-action__tab{
        color: ${({theme})=>theme['gray-color']};
        .ant-radio-group-outline{
            margin-left: 20px;
            border-radius: 5px;
            border: 1px solid ${({theme})=>theme['border-color-normal']};
        }
        .ant-radio-button-wrapper{
            height: 40px;
            line-height: 42px;
            border-color: ${({theme})=>theme['border-color-normal']};
            border: 0 none !important;
            &:not(:first-child){
                &:before{
                    display: none;
                }
            }
            &:not(:last-child){
                &:after{
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 0px;
                    display: block;
                    box-sizing: content-box;
                    width: 1px;
                    height: 50%;
                    padding: 1px 0;
                    background-color: #F1F2F6;
                    transition: background-color 0.3s;
                    content: '';
                    z-index: 1;
                }
            }
            span{
                color: ${({theme})=>theme['light-color']};
            }
            &.ant-radio-button-wrapper-checked{
                span{
                    color: ${({theme})=>theme['primary-color']};
                }
            }
        }
    }

    .product-list-action__viewmode{
        display: flex;
        align-items: center;
        a{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: ${({theme})=>theme['light-color']};
            box-shadow: 0 5px 20px ${({theme})=>theme['light-color']}10;
            &.active{
                background-color: #fff;
                color: ${({theme})=>theme['primary-color']};
            }
        }
    }
`;

const PaginationWrapper = Styled.div`
    display: flex;
    justify-content: flex-end;
`;

const ProductDetailsWrapper = Styled.div`
    .product-details-box__left{
        figure{
            margin-bottom: 0;
        }
    }
    .product-details-box__right{
        p{
            color: ${({theme})=>theme['gray-color']};
        }
    }
    .pdbl__slider{
        margin-top: 15px;
    }
    .pdbl__image{
        img{
            border-radius: 10px;
            max-width: 90px;
            min-height: 80px;
        }
    }
    .pdbr__rating{
        display: inline-block;
        margin: 0 4px 0 8px;
        font-size: 12px;
        font-weight: 500;
        color: ${({theme})=>theme['dark-color']};
    }
    .pdbr__review-count{
        font-size: 12px;
        font-weight: 400;
        color: ${({theme})=>theme['light-color']};
    }
    .pdbr__brand-text{
        display: inline-block;
        margin-bottom: 8px;
        color: ${({theme})=>theme['light-color']};
    }
    .pdbr__brand-name{
        font-weight: 500;
        color: ${({theme})=>theme['dark-color']};
    }
    .pdbr__new-price{
        font-size: 22px;
        font-weight: 500;
        color: ${({theme})=>theme['primary-color']};
        .pdbr__currancy{
            font-size: 14px;
            color: ${({theme})=>theme['light-color']};
        }
    }
    .pdbr__old-price{
        display: inline-flex;
        align-items: center;
        margin-bottom: 25px;
        del{
            font-size: 16px;
            font-weight: 400;
            color: ${({theme})=>theme['extra-light-color']};
        }
        .pdbr__offer-price{
            display: inline-block;
            margin-left: 8px;
            font-size: 12px;
            color: ${({theme})=>theme['secondary-color']};
        }
    }

    .pdbr__current-status{
        .current-status-title{
            font-weight: 500;
            margin-right: 30px;
            color: ${({theme})=>theme['dark-color']};
        }
        .stock-status{
            &.in-stock{
                color: ${({theme})=>theme['secondary-color']};
            }
        }
        .shipping-cost{
            color: ${({theme})=>theme['gray-color']};
        }
    }

    pdbr__quantity{
        button{
            height: 38px;
            width: 38px;
            background-color: ${({theme})=>theme['bg-color-normal']};
        }
    }
`;

export { 
    FigureCart,
    Sidebar,
    SidebarSingle,
    ProductCard,
    ProductListToolbox,
    PaginationWrapper,
    ProductDetailsWrapper
};
