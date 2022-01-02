import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  width: 200px;
  background-color: aliceblue;
  box-shadow: 0px 5px 5px darkslategrey;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const FriendImg = styled.img`
  padding-left: 10px;
`;

export const FriendName = styled.p`
  padding-left: 10px;
  font-weight: bold;
`;
