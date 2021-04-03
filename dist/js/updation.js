let index = 0;

const computerResponceUpdater = () => {
  let responce = computer.computerResponces[index];
  index++;
  COMPUTERRESPONCE.innerHTML = responce;
  tableComputerResponce.innerHTML = responce.toUpperCase();
  return responce;
};
const playerResponceUpdater = (passed) => {
  tablePlayerResponce.innerHTML = passed.toUpperCase();
  return passed;
};
const currentRoundWinnerUpdater = (winner) => {
  ROUNDWINNERDISPLAYER.textContent = winner;
};
