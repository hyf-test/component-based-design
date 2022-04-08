import { PortfolioCard } from './portfolio-card/PortfolioCard.jsx';
import './app.css';
 import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'

  library.add(fab)

export const App = () => {
  return <PortfolioCard />;
};
