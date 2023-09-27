import './Experience.modules.css';

export function Experience() {
    return (
        <div id='experience'>
            <div className='experienceContainer'>
                <p>EXPERIÊNCIA</p>
            </div>

            <div className='areas'>
                <span className='areasRow1'>
                    <div className='tribunalDoJuri'>
                        <p>Tribunal do júri</p>
                    </div>

                    <div className='juizadoEspecial'>
                        <p>Juizado Especial</p>
                    </div>
                </span>

                <span className='areasRow2'>
                    <div className='execucaoPenal'>
                        <p>Execução Penal</p>
                    </div>

                    <div className='demaisCrimes'>
                        <p>
                            Demais crimes do
                            <br />
                            Código Penal</p>
                    </div>
                </span>
            </div>

        </div>

    );
}