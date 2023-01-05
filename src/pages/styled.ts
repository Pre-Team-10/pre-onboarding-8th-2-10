import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
`;

export const Wrap = styled.section`
  display: flex;
  flex-dirction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 1800px;
  min-width: 1800px;
  margin: 0;
  padding: 40px;
`;

export const Section = styled.div`
  width: 420px;
  height: auto;
  max-height: 1200px;
  min-height: 230px;
  margin: 20px auto;
  padding: 40px 0 20px;
  justify-content: space-between;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 5px 5px 15px 3px rgba(150, 150, 150, 0.6);
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 41px;
  font-weight: bold;
  text-align: center;
`;

export const List = styled.ul`
  margin: 0px 20px 10px;
  padding: 20px;
`;

export const InputWrap = styled.form`
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 10px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 5px 5px 15px 3px rgba(150, 150, 150, 0.6);
`;

export const SubjectInput = styled.input`
  width: calc(100% - 50px);
  height: 30px;
  padding: 0 10px;
  font-size: 19px;
  border: none;
  background-color: rgba(255, 255, 255, 0);
`;

export const SubjectAddBtn = styled.button`
  all: unset;
  width: 50px;
  font-size: 19px;
  text-align: center;
  line-height: 1.5;
  cursor: pointer;
`;
