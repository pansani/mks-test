/** @format */

import { useEffect } from "react";
import Header from "@/components/Header";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useState } from "react";
import { Product } from "../models/product";
import Cart from "@/components/Cart/Cart";
import styled from "styled-components";
import { Footer } from "@/styles/Footer/Footer";

const HomeContainer = styled.div`
  position: relative;
`;

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useState<{ quantity: number; items: Product[] }>({
    quantity: 0,
    items: [],
  });
  const [addedToCart, setAddedToCart] = useState<number[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("api/getProducts", {
        method: "GET",
      });

      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    };

    getProducts();
  }, []);

  const handleVisibleCart = () => {
    setCartVisible(true);
  };

  const handleHideCart = () => {
    setCartVisible(false);
  };

  const handleSetQuantity = (productId: number) => {
    const clickedProduct = products.find((product) => product.id === productId);

    if (clickedProduct) {
      setCart((prevCart) => ({
        quantity: prevCart.quantity + 1,
        items: [...prevCart.items, clickedProduct],
      }));
      setAddedToCart((prevAdded) => [...prevAdded, productId]);
    }
  };

  return (
    <HomeContainer>
      <Header productQuantity={cart.quantity} showCart={handleVisibleCart} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductCard
          products={products}
          addProduct={handleSetQuantity}
          addedToCart={addedToCart}
        />
      )}

      {cartVisible && (
        <Cart cart={cart} setCart={setCart} hideCart={handleHideCart} />
      )}
      <Footer>MKS sistemas © Todos os direitos reservados</Footer>
    </HomeContainer>
  );
}
