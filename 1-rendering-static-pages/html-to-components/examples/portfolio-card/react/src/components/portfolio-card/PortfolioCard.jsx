import './styles.css';

import { Face } from '../face/Face.jsx';
import { Description } from '../description/Description';
import { Footer } from '../footer/Footer';

export const PortfolioCard = () => {
  return (
    <div className="card-container">
      <br/>
      <div className="img-container">
        <Face />
       <Description/>
        <Footer/>      
        <br/>
        <br/>
      </div>
    </div>
  );
};
