export const getThrottlingEater = () => {
  let isClicked = false;
  return (callback: () => void) => {
    if (isClicked) return;
    isClicked = true;
    callback();
    setTimeout(() => {
      isClicked = false;
    }, 500);
  };
};
