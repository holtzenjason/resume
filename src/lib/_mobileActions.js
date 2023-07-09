export const slashBreak = (node) => {
  let text = node.innerHTML;
  if (document.body.clientWidth < 650) {
    text = text.replace("@", "<wbr>@");
    node.innerHTML = text.replace("/", "<wbr>/");
  }
  return node;
};
