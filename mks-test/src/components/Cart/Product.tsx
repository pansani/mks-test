/** @format */

import { ProductCartImage } from "@/styles/CartStyles/ProductCartImage";
import { ProductCartName } from "@/styles/CartStyles/ProductCartName";
import { ProductCartPrice } from "@/styles/CartStyles/ProductCartPrice";
import {
  ProductCardNameQuantity,
  ProductCartQuantity,
  ProductQuantityButton,
  ProductQuantityContainer,
} from "@/styles/CartStyles/ProductCartQuantity";
import { ProductWrapperStyled } from "@/styles/CartStyles/ProductWrapperStyled";
import { FC } from "react";

interface CardCartProps {
  selectedCartUrl: string;
  selectedCartName: string;
  selectedCartPrice: string;
  productQuantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

export const ProductCartCard: FC<CardCartProps> = ({
  selectedCartUrl,
  selectedCartName,
  selectedCartPrice,
  productQuantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <ProductWrapperStyled>
      <ProductCartImage src={selectedCartUrl}></ProductCartImage>
      <ProductCartName>{selectedCartName}</ProductCartName>
      <ProductCardNameQuantity>Qtd:</ProductCardNameQuantity>
      <ProductQuantityContainer>
        <ProductQuantityButton onClick={decreaseQuantity}>
          -
        </ProductQuantityButton>
        <ProductCartQuantity>{productQuantity}</ProductCartQuantity>
        <ProductQuantityButton onClick={increaseQuantity}>
          +
        </ProductQuantityButton>
      </ProductQuantityContainer>
      <ProductCartPrice>{selectedCartPrice}</ProductCartPrice>
    </ProductWrapperStyled>
  );
};
