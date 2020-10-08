import React from 'react';
import TitleBar from '../components/titlebar';
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import imageGuitare from '../images/guitare_classique.png';
import imagePiano from '../images/piano.png';

const categories = [
  {id:'1', name:'Guitare', displayName:'Guitares', imageLink:imageGuitare},
  {id:'2', name:'Piano', displayName:'Pianos', imageLink:imagePiano}
];

const Categories = ({categories}) => {
  return (
    categories.map(element => 
      <div key={element.id} className='categorycontainer'>
        <Link to={`./articles/${element.name}`}>
          <Image src={element.imageLink} verticalAlign='middle' className='articleimage' fluid />
          <span>
            <h4>{element.displayName}</h4>
          </span>
        </Link>
        <a href={`/articles/${element.name}`} className='testLink'>Lien test</a>
      </div>
    ));
}

const Index = () => {
  return ( 
  <div>
    <TitleBar />
    <div>
      <h4>Catégories</h4>
    </div>
    <div className='categories'>
      <Categories categories={categories}/>
    </div>
  </div>);
}

export default Index;