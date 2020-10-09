import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

const TitleBar = ({ basket }) => {
  const nbItemsInBasket = basket ? basket.length : 0
  return (
  <div>
    <div className="titlebar">
      <table className="titletable">
        <tbody>
          <tr>
            <td>
              <h1>Mini démo e-commerce</h1>
            </td>
            <td className="rightinfos">
              <ul className='linklist'>
                <li>
                  <Link to='../articles' className='rightLink'>Articles</Link>
                </li>
                <li>
                  <Link to='../panier' className='rightLink'>Panier {nbItemsInBasket > 0 ? '(' + nbItemsInBasket + ')' : null}</Link>
                </li>
                <li>
                <Link to='../infospratiques' className='rightLink'>Infos pratiques</Link>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="maindescriptionbar">
      <Link to='../'>Accueil</Link>
      {' - '}
      <Link to='../articles/Guitare'>Guitares</Link>
      {' - '}
      <Link to='../articles/Piano'>Pianos</Link> 
      {' - '} 
      <Link to='../articles/Accordeon'>Accordéons</Link> - Banjos - Clarinettes - Archives (articles non disponibles)
    </div>
  </div>);
}

const mapStateToProps = ({ basket }) => {
  return {
    basket
  }
}

//export default TitleBar;
export default connect(mapStateToProps)(TitleBar);