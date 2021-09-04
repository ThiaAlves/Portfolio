import {Banner} from '../../components/Main';

export const Sobre = () => {
    return(
        <>
            <Banner titulo="Sobre"></Banner>


            <div className="container p-5">
            <h1 className="text-left">Sobre mim</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>
                          <ul>
                              <li><p>Nome: Thiago Matteus Alves</p></li>
                              <li><p>Idade: 20 </p></li>
                              <li><p>Naturalidade: Curitiba/PR </p></li>
                              <li><p>Formação: Ensino médio integrado com Técnico em informática - IFPR (Concluido em 2019) </p></li>
                              <li><p>Cursando: Sistemas para Internet - UNIALFA Umuarama</p></li>
                              <li><p>Atualmente: Analista de Monitoramento de Redes em Qnet Telecom</p></li>
                              <li><p>Hobbies: Programar e Tocar Guitarra</p></li>
                              
                          </ul>
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3>Skils:</h3>
                    <p>
                          <ul>
                              <li><p>Linux: Ubuntu, CentOS, Debian</p></li>
                              <li><p>Linguagens: PHP, MySql, Java, JavaScript. </p></li>
                              <li><p>Monitoramento: Zabbix, Grafana, Prometheus, Cacti, LibreNMS. </p></li>
                              <li><p>Aprendendo: Firebase, Laravel, React, Fluter, Java (Mobile)</p></li>                              
                          </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}