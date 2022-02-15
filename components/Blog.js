import Image from 'next/image';

const Post = ({ title, image }) => (
  <article>
    <h1>{title}</h1>
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
    />
  </article>
);

export default Post;
