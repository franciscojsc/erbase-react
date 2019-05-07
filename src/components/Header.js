import React from 'react';

function Header({title, subtitle}) {
    return (
      <div className="header">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
    )
  }

export default Header;