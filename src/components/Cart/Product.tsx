/** @format */

import { ProductCartImage } from "@/styles/CartStyles/ProductCartImage";
import { ProductCartName } from "@/styles/CartStyles/ProductCartName";
import { ProductCartPrice } from "@/styles/CartStyles/ProductCartPrice";
import { ProductCartQuantity } from "@/styles/CartStyles/ProductInfo/ProductCartQuantity";
import { ProductCardNameQuantity } from "@/styles/CartStyles/ProductInfo/ProductCardNameQuantity";
import { ProductQuantityContainer } from "@/styles/CartStyles/ProductInfo/ProductQuantityContainer";
import { ProductQuantityButton } from "@/styles/CartStyles/ProductInfo/ProductQuantityButton";
import { ProductWrapperStyled } from "@/styles/CartStyles/ProductWrapperStyled";
import { FC } from "react";
import { ProductChangeQuantity } from "@/styles/CartStyles/ProductInfo/ProductChangeQuantity";
import { ProductExcludeButton } from "@/styles/CartStyles/ProductExcludeButton";

interface CardCartProps {
  selectedCartUrl: string;
  selectedCartName: string;
  selectedCartPrice: string;
  productQuantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  onDelete: () => void;
}

export const ProductCartCard: FC<CardCartProps> = ({
  selectedCartUrl,
  selectedCartName,
  selectedCartPrice,
  productQuantity,
  increaseQuantity,
  decreaseQuantity,
  onDelete,
}) => {
  return (
    <ProductWrapperStyled>
      <ProductCartImage src={selectedCartUrl}></ProductCartImage>
      <ProductCartName>{selectedCartName}</ProductCartName>
      <ProductQuantityContainer>
        <ProductCardNameQuantity>Qtd:</ProductCardNameQuantity>
        <ProductChangeQuantity>
          <ProductQuantityButton onClick={decreaseQuantity}>
            -
          </ProductQuantityButton>
          <ProductCartQuantity>{productQuantity}</ProductCartQuantity>
          <ProductQuantityButton onClick={increaseQuantity}>
            +
          </ProductQuantityButton>
        </ProductChangeQuantity>
      </ProductQuantityContainer>
      <ProductExcludeButton onClick={onDelete}>X</ProductExcludeButton>
      <ProductCartPrice>{selectedCartPrice}</ProductCartPrice>
    </ProductWrapperStyled>
  );
};
