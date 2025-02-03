import React, { useState, useMemo } from "react";

export default function ProductPage() {
  const [priceLimit, setPriceLimit] = useState("");

  const products = [
    { id: 1, name: "Product A", price: 30 },
    { id: 2, name: "Product B", price: 50 },
    { id: 3, name: "Product C", price: 70 },
  ];

  // useMemo로 필터링된 상품 계산 최적화
  const filteredProducts = useMemo(() => {
    if (priceLimit === "") return products; // 가격 제한이 없을 경우 전체 상품 반환
    return products.filter((product) => product.price < Number(priceLimit));
  }, [priceLimit, products]);

  return (
    <div>
      <h2>상품 필터링</h2>
      <input
        type="number"
        value={priceLimit}
        onChange={(e) => setPriceLimit(e.target.value)}
        placeholder="가격 제한을 입력하세요"
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "200px",
        }}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
