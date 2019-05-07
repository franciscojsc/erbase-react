import React from 'react';

function Info({ login, html_url, name, public_repos}) {
    return (
      <div className="info-card">
        <span>Nome: {name}</span>
        <span>Nº Repos: {public_repos}</span>
        <span>Usuário: {login}</span>
        <span>URL: {html_url}</span>
      </div>
    )
  }

export default Info;