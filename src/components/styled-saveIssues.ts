import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1600px;
  margin: 0px auto;
  padding: 20px 0;
  @media screen and (max-width: 1600px) {
    width: 400px;
  }
`;

export const SaveIssues = styled.form`
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px 30px;
  background-color: aliceblue;
  border-radius: 3px;
`;

export const Title = styled.h4`
  margin: 10px 0 30px;
  font-size: 41px;
  font-weight: 500;
  text-align: center;
`;

export const InputBlock = styled.div<{ isEntered?: boolean }>`
  width: 100%;
  background-color: ${({ isEntered }) => (isEntered ? "aliceblue" : "tomato")};
`;

export const TitleH5 = styled.h5`
  padding: 10px 10px;
  font-size: 25px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  margin: 5px 10px 20px;
  padding: 5px 5px;
  font-size: 15px;
  line-height: 1.2;
`;

export const Textarea = styled.textarea`
  width: calc(100% - 20px);
  margin: 5px 10px 20px;
  padding: 5px 5px;
  font-size: 15px;
  line-height: 1.2;
`;

export const Select = styled.select`
  width: 50%;
  margin: 5px 10px 20px;
  padding: 5px 5px;
  font-size: 15px;
  line-height: 1.2;
`;

export const BtnWrap = styled.div`
  height: 100%;
  text-align: right;
`;

export const SaveBtn = styled.button`
  all: unset;
  padding: 10px 15px;
  font-size: 19px;
  font-weight: 500;
  color: #111;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: #e9e9e9;
  cursor: pointer;
`;
