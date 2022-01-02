import styled from '@emotion/styled';

export const SectionBox = styled.section`
  display: block;
  margin: 40px auto;
  text-align: center;
  width: 20%;
  background-color: darkkhaki;
`;

export const Caption = styled.h2`
  text-transform: uppercase;
  color: dimgrey;
  background-color: azure;
  font-size: 16px;
  padding: 15px 0;
  margin-bottom: 0;
  margin-top: 0;
`;

export const BoxMenu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 15px 0;
`;

export const ItemLi = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const LabelItem = styled.span`
  font-size: 10px;
`;
