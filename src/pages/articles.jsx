import React from 'react';
import TitleBar from '../components/titlebar';
import ListeArticles from '../components/liste-articles';
import data from '../articles-data'
import { useParams } from "react-router-dom";

const Articles = () => {
  const articles = Object.values(data)
  const { category } = useParams()
  const subtitle = category ? <h2>Catégorie : {category}</h2> : null
  return ( 
    <div>
      <TitleBar />
      {subtitle}
      <ListeArticles articles={articles}/>
    </div>
  );
}

export default Articles;