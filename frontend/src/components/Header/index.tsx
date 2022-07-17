import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return(
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMETA"/>
            <h1>DSMeta</h1>
            <p>Desenvolvido por <a href="https://www.linkedin.com/in/guilhermep-silva/">@Dev-GuilhermeS</a></p>   
        </div>  
    </header>
    )
    }
    
    export default Header