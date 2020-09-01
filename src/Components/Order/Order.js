import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';

const OrderStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  background-color: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0,0,0,0.25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin: 0 35px 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;
const TotalPrice = styled.span`
  text-align: left;
  min-width: 65px;
  margin-left: 20px;
`;

const Total = styled.div`
  display: flex;
  margin-bottom: 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;
const EmptyList = styled.p`
  text-align: center;
`;

export const Order = ({ orders }) => {

  const total = orders.reduce((result, order) => totalPriceItems(order) + result , 0);

  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      <OrderContent>
        {orders.length ? 
        <OrderList>
          {orders.map(order => <OrderListItem order={order}></OrderListItem>)}
        </OrderList> : 
        <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      <Total>
        <span>Итого:</span>
        <span>5</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <Button>Оформить</Button>
    </OrderStyled>
  )
};