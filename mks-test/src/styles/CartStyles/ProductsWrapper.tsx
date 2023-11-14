/** @format */

import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 55%;
  margin-top: 64px;
  overflow-y: auto;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
