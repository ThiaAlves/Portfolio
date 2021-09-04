import {Banner} from '../../components/Main';

export const Contato = () => {
    return(
        <>
            <Banner titulo="Contato"></Banner>


            <div className="container p-5">
            <h1 className="text-left">Contato</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>
                          <ul>
                              <li><p>Github: <a href="https://github.com/ThiaAlves"><b>ThiAlves</b></a></p></li>
                              <li><p>LinkedIn: <a href="https://www.linkedin.com/in/thiago-alves-900a681aa"><b>Thiago Alves</b></a> </p></li>
                              <li><p>E-mail: Thiaguinho2308@gmail.com </p></li>
                              <li><p>WhatsApp: (44) 9 9734-0742</p></li>                              
                          </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}