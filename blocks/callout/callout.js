export default function decorate(block) {
  const [titleRow, textRow] = [...block.children];
  const title = titleRow?.textContent.trim();
  const text = textRow?.textContent.trim();

  block.textContent = '';
  const heading = document.createElement('h3');
  heading.textContent = title;
  const body = document.createElement('p');
  body.textContent = text;
  block.append(heading, body);
}