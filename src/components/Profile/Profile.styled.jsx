import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: burlywood;
  width: 20%;
`;

export const DescriptionBox = styled.div`
  padding: 20px;
`;

export const Depiction = styled.img`
  width: 30%;
  border-radius: 100%;
`;

export const NameSize = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TagSize = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background-color: darkgoldenrod;
  list-style: none;
  padding-left: 0;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ItemSpan = styled.span`
  font-weight: bold;
`;
