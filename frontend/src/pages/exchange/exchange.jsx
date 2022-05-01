import React from 'react';
import PrimarySearchAppBar from '../../components/navbar';
import TokensList from "../../components/tokens-list";
import Orders from "../../components/orders/orders";
import OrdersBook from "../../components/order-book/order-book";

import "./exchange.scss";

const Exchange = () => {
  return (

    <div>
        <PrimarySearchAppBar className="navbar" />
        <div className="exchange">
            <TokensList/>
            <OrdersBook/>
            <Orders/>
        </div>
    {/*  Navbar(PrimarySearchAppBar)*/}
    {/*  Order Book Right side(Orders)*/}
    {/*  Order book neeche waala(OrdersBook)*/}
    {/*  Exchange Pairs (left side waala)(TokensList)*/}
    {/*  graphPLot*/}
    </div>
  );
};

export default Exchange;