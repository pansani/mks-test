/** @format */

import { Product } from "@/models/product";
import { CenteredContainer } from "@/styles/ProductCardStyles/CenteredContainer";
import { ProductsGrid } from "@/styles/ProductCardStyles/ProductsGrid";
import { ProductCardStyled } from "@/styles/ProductCardStyles/ProductCardStyle";
import { ProductImage } from "@/styles/ProductCardStyles/ProductImage";
import { ProductInfo } from "@/styles/ProductCardStyles/ProductInfo";
import { ProductName } from "@/styles/ProductCardStyles/ProductName";
import { ProductPrice } from "@/styles/ProductCardStyles/ProductPrice";
import { ProductDescription } from "@/styles/ProductCardStyles/ProductDescription";
import { BuyButton } from "@/styles/ProductCardStyles/BuyButton";
import Image from "next/image";
import buyImage from "../../assets/buy.svg";

export const ProductCard = ({
  products,
  addProduct,
}: {
  products: Product[];
  addProduct: (productId: number) => void;
}) => {
  return (
    <CenteredContainer>
      <ProductsGrid>
        {products.map((product: Product) => (
          <ProductCardStyled key={product.id}>
            <ProductImage src={product.photo} alt={product.name} />
            <ProductInfo>
              <ProductName>
                {product.brand} {product.name}
              </ProductName>
              <ProductPrice>
                R${parseFloat(product.price).toFixed(0)}
              </ProductPrice>
            </ProductInfo>
            <ProductDescription>{product.description}</ProductDescription>
            <BuyButton onClick={() => addProduct(product.id)}>
              <Image src={buyImage} alt="Buy" />
            </BuyButton>
          </ProductCardStyled>
        ))}
      </ProductsGrid>
    </CenteredContainer>
  );
};
