export const addRootElement = (id: string) => {
  const exist = document.getElementById(id);
  if (exist) return;
  const element = document.createElement('div');
  element.setAttribute('id', id);
  document.body.appendChild(element);
};
