const Link = ({
  children,
  class: className,
  product,
  external,
  ...restProps
}) => {
  const c = `${className || ""} ${product ? "after:content-['_↗']" : ""}`;
  return (
    <a class={c} target={external ? "_blank" : "_self"} {...restProps}>
      {children}
    </a>
  );
};

export default Link;
