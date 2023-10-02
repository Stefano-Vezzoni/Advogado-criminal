import whatsappIcon from "../assets/whatsapp-icon-hero.svg";
import './Hero.modules.css';

export function Hero() {

    function whatsappButton() {
        window.open("http://web.whatsapp.com/send?phone=5511947704363", '_blank');
    }

    return (
        <div className="heroContainer" id='home'>
            <span className='textContainer'>
                <p>Victor Augusto</p>
                <p>Advogado Criminalista</p>
            </span>

            <div className='contactButton'>
                <button onClick={whatsappButton}>
                    <img src={whatsappIcon} />
                    <p>Entrar em contato</p>
                </button>
            </div>
        </div>
    )
}