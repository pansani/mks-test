/** @format */

import { HeaderWrapper } from "@/styles/HeaderStyles/HeaderWrapper";
import { TitleWrapper } from "@/styles/HeaderStyles/TitleWrapper";
import { HeaderTitle } from "@/styles/HeaderStyles/HeaderTitle";
import { HeaderSubtitle } from "@/styles/HeaderStyles/HeaderSubtitle";
import { CartWrapper } from "@/styles/HeaderStyles/HeaderCart/CartWrapper";
import { CartImage } from "@/styles/HeaderStyles/HeaderCart/CartImage";
import { CartQuantity } from "@/styles/HeaderStyles/HeaderCart/CartQuantity";
import cartImage from "../../public/assets/cart-image.svg";
import { FC } from "react";

interface Props {
  productQuantity: number;
  showCart: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: FC<Props> = ({ productQuantity, showCart }) => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <HeaderTitle>MKS</HeaderTitle>
        <HeaderSubtitle>Sistemas</HeaderSubtitle>
      </TitleWrapper>
      <CartWrapper onClick={showCart}>
        <CartImage src={cartImage.src.toString()} />
        <CartQuantity>{productQuantity}</CartQuantity>
      </CartWrapper>
    </HeaderWrapper>
  );
};

export default Header;
