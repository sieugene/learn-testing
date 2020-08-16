import React from 'react';

const Link = ({
  className,
  href,
  children
}) => {
  return (
    <a
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}

export default Link;