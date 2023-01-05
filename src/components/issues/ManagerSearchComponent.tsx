import React, { useState } from "react";
import MANAGERS from "../../constants/managers";
import { Option, OptionsList, OptionsSection } from "../../styles/styles";
import * as S from "../styled-saveIssues";

function ManagerSearchComponent({
  managerInputRef,
  defaultValue,
}: {
  managerInputRef: React.RefObject<HTMLInputElement>;
  defaultValue: string | undefined;
}) {
  const [searchedManagers, setSearchedManagers] = useState<string[]>([]);
  const handleOnManagerInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = e.currentTarget.value;
    const searchedArray = Object.keys(MANAGERS).filter((name) => {
      if (!inputValue) return false;
      return name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
    });
    setSearchedManagers(searchedArray);
  };
  const handleOnManagerOptionClick = (
    e: React.MouseEvent<HTMLOptionElement>,
  ) => {
    const clickedManagerName = e.currentTarget.innerText;
    if (managerInputRef.current)
      managerInputRef.current.value = clickedManagerName;
    setSearchedManagers([]);
  };
  return (
    <OptionsSection>
      <S.Input
        onChange={handleOnManagerInputChange}
        ref={managerInputRef}
        defaultValue={defaultValue}
      />
      <OptionsList>
        {searchedManagers.map((manager) => (
          <Option key={manager} onClick={handleOnManagerOptionClick}>
            {manager}
          </Option>
        ))}
      </OptionsList>
    </OptionsSection>
  );
}

export default ManagerSearchComponent;
