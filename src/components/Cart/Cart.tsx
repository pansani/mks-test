/** @format */

import { CartStyled } from "@/styles/CartStyles/CartStyled";
import { CartTitle } from "@/styles/CartStyles/CartTitle";
import { CloseCartButton } from "@/styles/CartStyles/CloseCartButton";
import { ProductCartCard } from "./Product";
import { ProductsWrapper } from "@/styles/CartStyles/ProductsWrapper";
import { FC, useState } from "react";
import { Product } from "@/models/product";
import { TotalPrice } from "@/styles/CartStyles/TotalPrice";
import { FinalizePurchase } from "@/styles/CartStyles/FinalizePurchase";

interface CartProps {
  cart?: { quantity: number; items: Product[] };
  setCart: (cart: { quantity: number; items: Product[] }) => void;
  hideCart: () => void;
}

const Cart: FC<CartProps> = ({ cart, setCart, hideCart }) => {
  const [productQuantities, setProductQuantities] = useState<{
    [productId: number]: number;
  }>({});

  const handleProductDelete = (productId: number) => {
    if (!cart) {
      return;
    }

    const updatedCartItems = cart.items.filter((item) => item.id !== productId);

    setProductQuantities((prevQuantities) => {
      const { [productId]: deletedProduct, ...rest } = prevQuantities;
      return rest;
    });

    setCart({
      ...cart,
      quantity: updatedCartItems.length,
      items: updatedCartItems,
    });
  };

  const handleChangeQuantity = (productId: number, newQuantity: number) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const calculateTotal = () => {
    if (!cart) {
      return 0;
    }

    return cart.items.reduce(
      (total, item) =>
        total + parseFloat(item.price) * (productQuantities[item.id] || 1),
      0
    );
  };

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
          <div key={item.id}>
            <ProductCartCard
              key={item.id}
              selectedCartUrl={item.photo}
              selectedCartName={`${item.brand} ${item.name}`}
              selectedCartPrice={`R$${(
                parseFloat(item.price) * (productQuantities[item.id] || 1)
              ).toFixed(0)}`}
              productQuantity={productQuantities[item.id] || 1}
              increaseQuantity={() =>
                handleChangeQuantity(
                  item.id,
                  (productQuantities[item.id] || 1) + 1
                )
              }
              decreaseQuantity={() =>
                handleChangeQuantity(
                  item.id,
                  Math.max((productQuantities[item.id] || 0) - 1, 0)
                )
              }
              onDelete={() => handleProductDelete(item.id)}
            />
          </div>
        ))}
      </ProductsWrapper>
      <TotalPrice>
        <p>Total:</p>
        <p> R${calculateTotal().toFixed(2)}</p>
      </TotalPrice>
      <FinalizePurchase>Finalizar Compra</FinalizePurchase>
    </CartStyled>
  );
};

export default Cart;
