import React, { useState, useCallback, useEffect } from "react";

const products = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  // 장바구니에 상품 추가
  const addToCart = useCallback(
    (product) => {
      setCart((prevCart) => {
        if (prevCart.find((item) => item.id === product.id)) {
          return prevCart; // 이미 장바구니에 있으면 추가하지 않음
        }
        return [...prevCart, product];
      });
    },
    [] // 의존성 배열이 비어 있음
  );

  // 장바구니에서 상품 제거
  const removeFromCart = useCallback(
    (productId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    },
    [] // 의존성 배열이 비어 있음
  );

  // addToCart 참조값 변경 여부 확인
  useEffect(() => {
    console.log("addToCart 함수가 변경되었습니다.");
  }, [addToCart]);

  // removeFromCart 참조값 변경 여부 확인
  useEffect(() => {
    console.log("removeFromCart 함수가 변경되었습니다.");
  }, [removeFromCart]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}{" "}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name}{" "}
            <button onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
