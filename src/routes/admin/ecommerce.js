import React, { lazy } from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';

const Product = lazy(() => import('../../container/ecommerce/product/Products'));
const ProductAdd = lazy(() => import('../../container/ecommerce/product/AddProduct'));
const ProductEdit = lazy(() => import('../../container/ecommerce/product/EditProduct'));
const ProductDetails = lazy(() => import('../../container/ecommerce/product/ProductDetails'));
const Invoice = lazy(() => import('../../container/ecommerce/Invoice'));
const Orders = lazy(() => import('../../container/ecommerce/Orders'));
const Sellers = lazy(() => import('../../container/ecommerce/Sellers'));
const Cart = lazy(() => import('../../container/ecommerce/Cart'));

const EcommerceRoute = () => {
  return (
    <Switch>
      <Route path="/ecommerce/products" component={Product} />
      <Route path="/ecommerce/add-product" component={ProductAdd} />
      <Route path="/ecommerce/edit-product" component={ProductEdit} />
      <Route path="/ecommerce/productDetails/:id" component={ProductDetails} />
      <Route path="/ecommerce/Invoice" component={Invoice} />
      <Route path="/ecommerce/orders" component={Orders} />
      <Route path="/ecommerce/sellers" component={Sellers} />
      <Route path="/ecommerce/cart" component={Cart} />
    </Switch>
  );
};

export default EcommerceRoute;
