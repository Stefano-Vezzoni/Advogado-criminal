import { animateScroll } from 'react-scroll';
import vIcon from '../assets/v-icon.svg';
import './Footer.modules.css';


export function Footer() {
    function handleScroll(home: string) {
        const element = document.getElementById(home);
        if (element) {
            const elementPosition = element.offsetTop;
            animateScroll.scrollTo(elementPosition, {
                duration: 500,
                smooth: 'easeInOutQuint',
            });
        }
    }

    return (
        <div className='footerContainer'>
            <img src={vIcon} alt="" />
            <p>Victor Augusto Coutinho Duarte</p>
            <p>Advogado OAB/SP 487.264</p>
            <nav className='navBar'>
                <a onClick={() => handleScroll("home")}>
                    Home
                </a>

                <a onClick={() => handleScroll("my-work")}>
                    Sobre
                </a>

                <a onClick={() => handleScroll("experience")}>
                    Areas de Atuação
                </a>
            </nav>
            <hr />
            <p className='copyright'>Copyright @ 2023 Victor Augusto Coutinho Duarte - Desenvolvido por Stefano Vezzoni Santos</p>
        </div>
    );
}