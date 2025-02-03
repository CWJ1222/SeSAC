import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 스타일 정의
const Nav = styled.nav`
  width: 100%;
  background-color: #f0f8ff; /* AliceBlue */
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${(props) =>
      props.$isOpen ? "flex" : "none"}; /* $isOpen으로 변경 */
    gap: 10px;
  }
`;

const MenuItem = styled.li`
  font-size: clamp(14px, 1.5vw, 18px); /* 글자 크기를 화면 크기에 따라 조정 */
  font-weight: bold;

  @media (max-width: 1063px) {
    font-size: clamp(12px, 1.2vw, 16px); /* 1063px 이하에서 크기 조정 */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff; /* 링크 색상 */
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff; /* 배경색 변경 */
    color: #fff; /* 텍스트 색상 변경 */
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Nav>
      <h2 style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>MyApp</h2>
      <MenuToggle onClick={toggleMenu}>{menuOpen ? "✖" : "☰"}</MenuToggle>
      <MenuList $isOpen={menuOpen}>
        <MenuItem>
          <StyledLink to="/">메인</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/student/sean">학생</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/student/codingon">코딩온</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/student/new?name=jisu">searchParams</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/products">상품 목록</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/shoppingcart">쇼핑카트</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/todo">todo</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/displayname">displayname</StyledLink>
        </MenuItem>
      </MenuList>
    </Nav>
  );
}
