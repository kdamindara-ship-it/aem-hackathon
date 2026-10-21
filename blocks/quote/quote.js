export default function decorate(block) {
  const rows = [...block.children];
  const quoteText = rows[0]?.textContent.trim() || '';
  const author = rows[1]?.textContent.trim() || '';

  block.textContent = '';

  const blockquote = document.createElement('blockquote');
  const p = document.createElement('p');
  p.textContent = quoteText;
  blockquote.append(p);

  if (author) {
    const cite = document.createElement('cite');
    cite.textContent = `— ${author}`;
    blockquote.append(cite);
  }

  block.append(blockquote);
}