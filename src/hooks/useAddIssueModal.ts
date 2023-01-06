import { useCallback, useState } from "react";

const useAddIssueModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const toggleModal = useCallback(() => {
    setIsModalOpened((prevState) => !prevState);
  }, [setIsModalOpened]);
  return { isModalOpened, toggleModal };
};

export default useAddIssueModal;
