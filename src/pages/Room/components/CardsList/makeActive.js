export const makeActive = (allElems, elem) => {
  allElems.classList.remove('active');
  elem.classList.add('active');
};
