let index = 0;

const computerResponceUpdater = () => {
  let responce = computer.computerResponces[index];
  index++;
  console.log(responce);
  COMPUTERRESPONCE.innerHTML = responce;
  return responce;
};
