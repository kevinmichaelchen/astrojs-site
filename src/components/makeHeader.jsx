// https://tomekdev.com/posts/anchors-for-headings-in-mdx

function getAnchor(text) {
  return text

    .toLowerCase()

    .replace(/[^a-z0-9 ]/g, "")

    .replace(/[ ]/g, "-");
}

const makeHeader =
  (level) =>
  ({ children }) => {
    const anchor = getAnchor(children.props.value);
    const link = `#${anchor}`;
    let Wrapper;
    switch (level) {
      case 1:
        Wrapper = ({ children, ...restProps }) => (
          <h1 {...restProps}>{children}</h1>
        );
        break;
      case 2:
        Wrapper = ({ children, ...restProps }) => (
          <h2 {...restProps}>{children}</h2>
        );
        break;
      case 3:
        Wrapper = ({ children, ...restProps }) => (
          <h3 {...restProps}>{children}</h3>
        );
        break;
      case 4:
        Wrapper = ({ children, ...restProps }) => (
          <h4 {...restProps}>{children}</h4>
        );
        break;
      case 5:
        Wrapper = ({ children, ...restProps }) => (
          <h5 {...restProps}>{children}</h5>
        );
        break;
      case 6:
        Wrapper = ({ children, ...restProps }) => (
          <h6 {...restProps}>{children}</h6>
        );
        break;
      default:
        Wrapper = ({ children, ...restProps }) => (
          <h1 {...restProps}>{children}</h1>
        );
        break;
    }
    return (
      <Wrapper id={anchor} class="relative group hover:text-zinc-600">
        <a
          href={link}
          class="absolute text-gray-500 opacity-0 group-hover:opacity-100 w-4 translate-x-[-1em] translate-y-[-2px]"
          aria-hidden="true"
        >
          §
        </a>
        {children}
      </Wrapper>
    );
  };

export default makeHeader;

export const headers = {
  h1: makeHeader(1),
  h2: makeHeader(2),
  h3: makeHeader(3),
  h4: makeHeader(4),
  h5: makeHeader(5),
  h6: makeHeader(6),
};
