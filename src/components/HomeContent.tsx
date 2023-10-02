import './HomeContent.modules.css';

import gmailIcon from '../assets/gmail-icon.svg';
import whatsappIcon from '../assets/whatsapp-Icon.svg';

export function HomeContent() {

    function whatsappButton() {
        window.open("http://web.whatsapp.com/send?phone=5511947704363", '_blank');
    }

    function gmailButton() {
        window.location.href = "mailto:stefanov.santos@gmail.com";
    }
    return (
        <div className='contentContainer' id='my-work'>
            <div className='myWork'>
                <h3>Meu Trabalho</h3>
                <p>
                    Como Advogado com um profundo compromisso e paixão no campo do direito criminal, compreendo a
                    complexidade inerente aos casos criminais e estou empenhado em oferecer um apoio altamente
                    qualificado aos meus clientes.
                    <br />
                    <br />
                    <br />

                    Estou empenhado em garantir que meus clientes se sintam informados e capacitados no decorrer de todo
                    processo, qualquer duvida, será eu pessoalmente que irei trata-la com você, com a maior paciência e
                    simplicidade.

                    <br />
                    <br />
                    <br />

                    Eu irei analisar e repassar para você, todos os detalhes do processo e a estratégia ideal que eu
                    acredito que seja o certo a seguir. Se você está enfrentando acusações criminais e busca um advogado
                    que se empenhará em defender seus direitos, estou aqui para ajudar e fornecer a representação
                    comprometida que você merece.
                </p>
            </div>

            <div className='contactContainer' id='contact'>
                <span>
                    <p>Contato</p>
                    <p>Disponível 24 hrs</p>
                </span>
                <p>
                    Envie uma mensagem contando como posso lhe ajudar e assim que conseguir, eu irei tirar todas suas
                    dúvidas pessoalmente
                </p>

                <div className='contactInformation'>
                    <button className='whatsappButton' onClick={whatsappButton}>
                        <img src={whatsappIcon} alt="" />
                        (11) 94770-4363
                    </button>

                    <button className='emailButton' onClick={gmailButton}>
                        <img src={gmailIcon} alt="" />
                        victor.ac.duarte@gmail.com
                    </button>
                </div>
            </div>
        </div>
    );
}