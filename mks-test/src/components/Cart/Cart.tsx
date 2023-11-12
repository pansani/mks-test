/** @format */

import { CartStyled } from "@/styles/CartStyles/CartStyled";
import { CartTitle } from "@/styles/CartStyles/CartTitle";
import { CloseCartButton } from "@/styles/CartStyles/CloseCartButton";
import { ProductCartCard } from "./Product";
import { ProductsWrapper } from "@/styles/CartStyles/ProductsWrapper";
import { FC, useState } from "react";
import { Product } from "@/models/product";

interface CartProps {
  cart?: { quantity: number; items: Product[] };
  hideCart: () => void;
}

const Cart: FC<CartProps> = ({ cart, hideCart }) => {
  if (!cart) {
    return (
      <CartStyled>
        <CartTitle>Carrinho de compras</CartTitle>
        <CloseCartButton onClick={hideCart}>X</CloseCartButton>
        <ProductsWrapper>
          <p>No items in the cart</p>
        </ProductsWrapper>
      </CartStyled>
    );
  }

  return (
    <CartStyled>
      <CartTitle>Carrinho de compras</CartTitle>
      <CloseCartButton onClick={hideCart}>X</CloseCartButton>
      <ProductsWrapper>
        {cart.items.map((item) => (
          <ProductCartCard
            key={item.id}
            selectedCartUrl={item.photo}
            selectedCartName={`${item.brand} ${item.name}`}
            selectedCartPrice={`R$${parseFloat(item.price).toFixed(0)}`}
          />
        ))}
      </ProductsWrapper>
    </CartStyled>
  );
};

export default Cart;
