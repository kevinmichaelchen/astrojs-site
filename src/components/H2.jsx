// https://tomekdev.com/posts/anchors-for-headings-in-mdx

function getAnchor(text) {
  return text

    .toLowerCase()

    .replace(/[^a-z0-9 ]/g, "")

    .replace(/[ ]/g, "-");
}

export default function H2({ children }) {
  const anchor = getAnchor(children.props.value);
  const link = `#${anchor}`;
  return (
    <h2 id={anchor}>
      <a href={link} class="anchor-link" aria-hidden="true">
        §
      </a>
      {children}
    </h2>
  );
}
