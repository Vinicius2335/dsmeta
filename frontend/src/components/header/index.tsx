import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido durante a Semana Spring React do canal <br />
        </p>
        <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
      </div>
    </header>
  )
}

export default Header;
