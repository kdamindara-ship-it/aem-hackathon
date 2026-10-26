export default function decorate(block) {
  const picture = block.querySelector('picture');
  if (picture) {
    picture.classList.add('hero-image');
    block.prepend(picture);
  }
}