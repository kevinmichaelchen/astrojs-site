const Link = ({ children, external, ...restProps }) => {
  return (
    <a target={external ? "_blank" : "_self"} {...restProps}>
      {children}
    </a>
  );
};
export default Link;
