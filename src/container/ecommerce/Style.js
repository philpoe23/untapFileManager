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
        figure{
            margin-right: 15px;
        }
        .product-single-description{
            p{
                color: ${({theme})=>theme['gray-color']};
                font-size: 15px;
            }
        }
        .product-single-title{
            font-size: 18px;
            margin: 25px 0 16px;
        }
        .product-single-info{
            margin-top: 25px;
        }
        .product-single-price__new{
            font-size: 16px;
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
        font-size: 12px;
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

const TopToolBox = Styled.div`
    margin-bottom: 20px;
    // Toolbox Common Styles
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
    .ant-radio-group-outline{
        margin-left: 20px;
        padding: 0 10px;
        border-radius: 5px;
        background: #fff;
        border: 1px solid ${({theme})=>theme['border-color-normal']};
    }
    .ant-radio-button-wrapper{
        height: 40px;
        line-height: 42px;
        padding: 0 12px;
        border-color: ${({theme})=>theme['border-color-normal']};
        border: 0 none !important;
        &.ant-radio-button-wrapper-checked{
            &:focus-within{
                box-shadow: 0 0;
            }
        }
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

    // Product Toolbox Styles
    .product-list-action__tab{
        color: ${({theme})=>theme['gray-color']};
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

    .table-search-box{
        .ant-select-selection-search{
            .ant-select-selection-search-input {
                border-radius: 20px;
                border: 0 none;
                background: ${({theme})=>theme['bg-color-light']};
                height: 40px;
                input{
                    background: ${({theme})=>theme['bg-color-light']};
                    height: 40px !important;
                }
            }
        }
    }
    .table-toolbox-actions{
        text-align: right;
        button{
            padding: 0px 13.4px;
            height: 38px;
            font-size: 13px;
            font-weight: 500;
            border-radius: 6px;
            &{
                +button{
                    margin-left: 8px;
                }
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
            img{
                border-radius: 10px;
            }
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
    .product-details-box__right{
        p{
            margin-bottom: 8px;
            color: ${({theme})=>theme['gray-color']};
        }
        .ant-rate{
            margin-bottom: 6px;
        }
    }
    .pdbr__title{
        margin-bottom: 10px;
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

    .pdbr__quantity{
        font-weight: 500;
        margin: 30px 0 30px !important;
        color: ${({theme})=>theme['dark-color']};
        button{
            background-color: ${({theme})=>theme['bg-color-normal']};
            &.btn-inc{
                margin-right: 15px;
            }
            &.btn-dec{
                margin-left: 15px;
            }
        }
        .pdbr__availability{
            font-size: 13px;
            font-weight: 400;
            margin-left: 15px;
            color: ${({theme})=>theme['light-color']};
        }
    }
    .pdbr__Actions{
        border-bottom: 1px solid ${({theme})=>theme['border-color-normal']};
        padding-bottom: 30px;
        margin-bottom: 28px;
        .pdbr__product-action{
            display: flex;
            align-items: center;
            button,
            a{
                margin-right: 10px;
            }
            .btn-icon{
                height: 44px;
                padding: 0 13px;
                box-shadow: 0 5px 15px ${({theme})=>theme['light-color']}15;
                i,
                svg{
                    color: #707070;
                }
            }
        }
        .pdbr__socials{
            margin-left: 5px;
            a{
                color: #707070;
                &:not(:last-child){
                    margin-right: 12px;
                }
            }
        }
    }

    .pdbr__list{
        &:not(:last-child){
            margin-bottom: 10px;
        }
        li{
            span{
                &:first-child{
                    display: inline-block;
                    min-width: 66px;
                    font-weight: 500;
                    margin-right: 25px;
                    color: ${({theme})=>theme['dark-color']};
                }
            }
        }
    }
`;


const ProductTable = Styled.div`
    .table-cart{
        .ant-table-tbody{
            .cart-single{
                figure{
                    align-items: center;
                    margin-bottom: 0;
                    img{
                        max-width: 80px;
                        min-height: 80px;
                        border-radius: 10px;
                        margin-right: 25px;
                    }
                }
                .cart-single__info{
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6{
                        font-size: 15px;
                        font-weight: 500;
                    }
                    p{
                        margin-bottom: 0;
                    }
                }
            }
            .ant-table-row{
                &:hover{
                    box-shadow: 0 10px 15px ${({theme})=>theme['light-color']}15;
                    td{
                        background: #fff !important;
                    }
                    .table-action{
                        button{
                            background: #FF4D4F15;
                            i,
                            svg{
                                color: ${({theme})=>theme['danger-color']};
                            }
                        }
                    }
                }
            }
        }
    }
    .table-invoice{
        table{
            thead{
                >tr{
                    th{
                        border-top: 1px solid ${({theme})=>theme['border-color-light']};
                        border-bottom: 1px solid ${({theme})=>theme['border-color-light']};
                        &:first-child{
                            border-left: 1px solid ${({theme})=>theme['border-color-light']};
                        }
                        &:last-child{
                            border-right: 1px solid ${({theme})=>theme['border-color-light']};
                            text-align: right;
                        }
                    }
                }
            }
            tbody{
                >tr{
                    &.ant-table-row{
                        &:hover{
                            >td{
                                background: #fff;
                            }
                        }
                    }
                    td{
                        border-bottom: 1px solid ${({theme})=>theme['border-color-light']};
                        color: ${({theme})=>theme['gray-color']};
                        border-radius: 0 !important;
                        &:last-child{
                            text-align: right;
                        }
                        .product-unit{
                            padding-left: 40px;
                        }
                        .product-quantity{
                            padding-left: 50px;
                        }
                    }
                }
            }
        }
        .product-info{
            min-width: 300px;
            .product-info{
                margin-bottom: 8px;
            }
        }
    }
    table{
        thead{
            tr{
                border-radius: 10px;
                th{
                    border-bottom: 0 none;
                    background:  ${({theme})=>theme['bg-color-light']};
                    &:first-child{
                        border-radius: 10px 0 0 10px;
                    }
                    &:last-child{
                        border-radius: 0 10px 10px 0;
                    }
                }
            }
        }
        tbody{
            tr{
                border-radius: 10px;
                td{
                    border-bottom: 0 none;
                    &:first-child{
                        border-radius: 10px 0 0 10px;
                    }
                    &:last-child{
                        border-radius: 0 10px 10px 0;
                    }
                }
            }
        }
        
        .info-list{
            li{
                display: inline-block;
                &:not(:last-child){
                    margin-right: 20px;
                }
                span{
                    font-size: 14px;
                    &.info-title{
                        margin-right: 5px;
                        font-weight: 500;
                        color: ${({theme})=>theme['dark-color']};
                    }
                }
            }
        }
        .cart-single-price{
            font-size: 15px;
        }
        .cart-single-t-price{
            font-size: 15px;
            font-weight: 500;
            color: ${({theme})=>theme['primary-color']};
        }
        .cart-single-quantity{
            button{
                background-color: ${({theme})=>theme['bg-color-normal']};
                i,
                img,
                svg{
                    width: 12px;
                    height: 12px;
                }
                &.btn-inc{
                    margin-left: 16px;
                }
                &.btn-dec{
                    margin-right: 16px;
                }
            }
        }
        .table-action{
            text-align: right;
            button{
                padding: 0 11px;
                height: 38px;
                background: #fff;
                i,
                svg{
                    color: #707070;
                }
            }
        }
    }
`;


const CouponForm = Styled.div`
    margin-top: 20px;
    #submitcoupon{
        .ant-form-item-control-input-content{
            input{
                max-width: 180px;
                height: 44px;
                background:  ${({theme})=>theme['bg-color-light']};
                border-color:  ${({theme})=>theme['border-color-light']};
            }
        }
        button{
            height: 44px;
            box-shadow: 0 3px 5px ${({theme})=>theme['success-color']}15;
        }
    }
`;


const OrderSummary = Styled.div`
    .ant-card{
        margin-bottom: 0 !important;
    }
    .ant-form-item{
        margin-bottom: 0;
    }
    
    .summary-table-title{
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 25px;
    }
    .order-summary-inner{
        padding-bottom: 5px;
    }
    .invoice-summary-inner{
        .summary-list{
            margin: 22px 0;
        }
        .summary-total-amount{
            color: ${({theme})=>theme['primary-color']} !important;
        }
    }

    .summary-list{
        li{
            display: flex;
            justify-content: space-between;
            &:not(:last-child){
                margin-bottom: 18px;
            }
            span{
                font-weight: 500;
            }
            .summary-list-title{
                color: ${({theme})=>theme['gray-color']};
            }
            .summary-list-text{
                color: ${({theme})=>theme['dark-color']};
            }
        }
    }
    .ant-select-focused.ant-select-single{
        .ant-select-selector{
            box-shadow: 0 0 !important;
        }
    }
    .ant-select-single{
        margin-top: 18px;
        .ant-select-selection-search-input{
            height: fit-content;
        }
        .ant-select-selector{
            padding: 0 !important;
            border: 0 none !important;
            color: ${({theme})=>theme['success-color']};
        }
        .ant-select-arrow{
            right: 0;
        }
    }
    .promo-apply-form{
        margin: 5px 0 32px;
        .ant-form-item{
            margin-bottom: 0;
        }
        .ant-row{
            flex-flow: column;
        }
        .ant-form-item-label{
            text-align: left;
            label{
                margin-bottom: 2px;
                height: fit-content;
                color: ${({theme})=>theme['gray-color']};
            }
        }
        .ant-form-item-control-input-content{
            input{
                margin-right: 6px;
                height: 40px;
            }
            button{
                height: 40px;
            }
        }
    }
    .summary-total{
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 22px;
        .summary-total-label{
            font-size: 16px;
            font-weight: 500;
            color: ${({theme})=>theme['dark-color']};
        }
        .summary-total-amount{
            font-size: 18px;
            font-weight: 600;
            color: ${({theme})=>theme['success-color']};
        }
    }
    .btn-proceed{
        font-size: 15px;
        font-weight: 500;
        width: 100%;
        height: 50px;
        border-radius: 8px;
        i,
        svg{
            margin-left: 6px;
        }
    }
`;

const AddProductForm = Styled.div`
    .add-product-block{
        background: ${({theme})=>theme['bg-color-light']};
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 10px 30px ${({theme})=>theme['light-color']}10;
        border: 1px solid ${({theme})=>theme['bg-color-light']};
        &:not(:last-child){
            margin-bottom: 30px;
        }
        .ant-card{
            margin-bottom: 0 !important;
        }
        .add-product-content{
            .ant-card-head{
                padding: 0 40px !important;
            }
            .ant-card-head-title{
                padding: 26px 0 25px;
            }
            .ant-card-body{
                padding: 30px 40px 40px !important;
            }
        }
        .ant-upload{
            border-spacing: 6px;
            border-width: 2px;
            border-radius: 10px;
            background: ${({theme})=>theme['bg-color-light']};
            border-color: ${({theme})=>theme['border-color-deep']};
            padding: 50px;
            .ant-upload-drag-icon{
                i,
                svg{
                    color: ${({theme})=>theme['extra-light-color']};
                }
            }
            .ant-upload-text{
                font-weight: 500;
                margin-bottom: 8px;
            }
            .ant-upload-hint{
                font-size: 15px;
                font-weight: 500;
                color: ${({theme})=>theme['gray-color']};
                span{
                    color: ${({theme})=>theme['secondary-color']};
                }
            }
        }
        .ant-upload-list-item{
            height: 100%
            padding: 0;
            border: 0 none;margin-top: 25px;
        }
        .ant-upload-list-item-info{
            height: 100%;
            >span{
                display: flex;
                align-items: center;
            }
            .ant-upload-list-item-name{
                padding: 0 10px;
            }
            .ant-upload-list-item-card-actions{
                position: relative;
                top: 0;
                i,
                svg{
                    color: ${({theme})=>theme['danger-color']};
                }
            }
            .ant-upload-list-item-thumbnail{
                position: relative;
                top: 0;
                min-width: 100px;
                width: auto;
                height: 100%;
                img{
                    max-width: 100px;
                    width: 100%;
                    height: 100%;
                    border-radius: 6px;
                }
            }
        }
    }
    .add-form-action{
        text-align: right;
        button{
            font-size: 15px;
            font-weight: 400;
            height: 50px;
        }
        .btn-cancel{
            border: 1px solid ${({theme})=>theme['border-color-light']};
            margin-right: 20px;
            background: ${({theme})=>theme['bg-color-light']};
        }
    }
`;


const InvoiceHeader = Styled.div`
    .invoice-info{
        font-weight: 500;
        line-height: 1.5;
    }
`;

const InvoiceLetterBox = Styled.div`
    .invoice-author{
        .invoice-author__title{
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 16px;
        }
        p{
            font-size: 15px;
            margin-bottom: 4px;
        }
    }
    .invoice-barcode{
        max-width: 310px;
        max-width: 0 auto;
        text-align: center;
        .ant-card{
            margin-bottom: 0 !important;
        }
        .ant-card-body{
            padding: 20px 20px 16px !important;
        }
        p{
            margin-bottom: 0;
        }
    }
    .invoice-customer{
        float: right;
        .invoice-customer__title{
            font-size: 15px;
            font-weight: 500;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        p{
            font-size: 15px;
            color: ${({theme})=>theme['gray-color']};
        }
    }
`;

const InvoiceAction = Styled.div`
    text-align: right;
    margin-top: 95px;
    .ant-btn-default{
        background: ${({theme})=>theme['bg-color-light']};
        border-color: ${({theme})=>theme['border-color-light']};
    }
    button{
        padding: 0 25px !important;
        &:not(:last-child){
            margin-right: 10px;
        }
    }
`;

export { 
    FigureCart,
    Sidebar,
    SidebarSingle,
    ProductCard,
    TopToolBox,
    PaginationWrapper,
    ProductDetailsWrapper,
    ProductTable,
    CouponForm,
    OrderSummary,
    AddProductForm,
    InvoiceHeader,
    InvoiceLetterBox,
    InvoiceAction
};
