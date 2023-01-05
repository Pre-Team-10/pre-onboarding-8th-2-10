import styled from "styled-components";

export const IssueBoard = styled.div`
  width: 31.33%;
  min-height: 100px;
  margin: 20px 1%;
  padding: 15px;
  border: 1px solid #999;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(3px 3px 3px 3px #999);
  @media screen and (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;

export const KanbanHeader = styled.header`
  margin-bottom: 10px;
  padding: 8px;
  text-align: center;
  background-color: aliceblue;
  font-weight: bolder;
  border-radius: 3px;
`;

export const Card = styled.li`
  margin: 20px 0px;
  padding: 20px;
  font-size: 21px;
  color: #111;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 5px 5px 15px 3px rgba(150, 150, 150, 0.6);
  border-radius: 12px;
`;

export const Subject = styled.h3`
display; block;
padding: 5px 0;
font-size: 31px;
line-height: 1.5;
`;

export const DetailBtn = styled.button`
  all: unset;
  padding: 5px 10px;
  font-size: 19px;
  color: #111;
  cursor: pointer;
`;

export const ModifyBtn = styled.button`
  all: unset;
  padding: 5px 10px;
  font-size: 19px;
  color: #111;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  all: unset;
  padding: 5px 10px;
  font-size: 19px;
  color: #111;
  cursor: pointer;
`;
