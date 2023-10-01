import whatsappIcon from "../assets/whatsapp-icon-hero.svg";
import './Hero.modules.css';

export function Hero() {
    return (
        <div className="heroContainer" id='home'>
            <span className='textContainer'>
                <p>Victor Augusto</p>
                <p>Advogado Criminalista</p>
            </span>

            <div className='contactButton'>
                <button>
                    <img src={whatsappIcon} />
                    <p>Entrar em contato</p>
                </button>
            </div>
        </div>
    )
}