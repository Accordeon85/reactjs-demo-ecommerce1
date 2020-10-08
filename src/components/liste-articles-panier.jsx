import React, { useState } from 'react';
import '../style/articles.css';
import ArticleContainer from '../components/article-container';
import { removeFromBasket } from "../store/action";
import { connect } from 'react-redux'

const InternalArticles = (props) => {
  return (
    props.articles.map(element => 
      <div key={element.id}>
        <ArticleContainer article={element} isInBasket={true} updateBasket={() => props.onUpdateBasket(element.id)} />
      </div>
  ));
}

const ListeArticlesPanier = ({articles, basket, removeFromBasket}) => {
  const [articlesB, updateArticles] = useState(articles)

  const removeArticle = articleId => {
    removeFromBasket(articleId)
    updateArticles([...articles.filter(a => localStorage.getItem(a.id))])
  }

  return (
    <div className='articles'>
      <InternalArticles articles={articlesB} onUpdateBasket={removeArticle} />
    </div>
  );
}

const mapStateToProps = ({ basket }) => {
  return {
    basket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromBasket: id => dispatch(removeFromBasket(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListeArticlesPanier);