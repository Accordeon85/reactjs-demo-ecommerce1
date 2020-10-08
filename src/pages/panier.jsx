import React from 'react';
import TitleBar from '../components/titlebar';
import ListeArticlesPanier from '../components/liste-articles-panier';
import data from '../articles-data'

const Panier = () => {
  const articles = Object.values(data)
  const addedArticles = articles.filter(a => localStorage.getItem(a.id))
  const content = addedArticles.length > 0 ? 
    <ListeArticlesPanier articles={addedArticles} /> : 
    <h4>Aucun élément ajouté au panier.</h4>
  return ( 
    <div>
      <TitleBar />
      <h2>Votre panier</h2>
      {content}
    </div>
  );
}

export default Panier;