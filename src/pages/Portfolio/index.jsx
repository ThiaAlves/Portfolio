import {Projeto, Banner} from '../../components/Main';

export const Projetos = () => {
    return(
        <>
            <Banner titulo="Portfólio"></Banner>
            <div className="container pt-5">
                <div className="row pt-5">
                    <Projeto nome="Instituto AST" link="https://sistemaast.000webhostapp.com/index.html" imagem="images/institutoast.jpg" 
                    sobre="Projeto de conclusão de curso IFPR" linguagem1="PHP"
                    linguagem2="MySql" linguagem3="Bootstrap" ano="2019"></Projeto>

                    <Projeto nome="Crud Dev" link="https://github.com/ThiaAlves/crudDev" imagem="images/crudDev.png" 
                    sobre="Teste de conhecimentos" linguagem1="Laravel"
                    linguagem2="React" linguagem3="MySql" ano="2021"></Projeto>

                    <Projeto nome="Ilife" imagem="images/ilife.jpg" 
                    sobre="Projeto de conclusão de curso UNIALFA" linguagem1="Laravel"
                    linguagem2="react" linguagem3="Flutter" ano="Início em 2021"></Projeto>

                    <Projeto nome="Youtube - Flutter" link="https://github.com/ThiaAlves/Youtube-Flutter" imagem="images/default.jpg" 
                    sobre="Projeto de curso Flutter" linguagem1="Flutter"
                    linguagem2="API Youtube" ano="2021"></Projeto>

                    <Projeto nome="Os Carrinho - Veículos" link="https://github.com/ThiaAlves/Oscarrinho-Veiculos" imagem="images/default.jpg" 
                    sobre="Hackaton Unialfa" linguagem1="Java (Admin)"
                    linguagem2="PHP (Web-Site)" ano="2021"></Projeto>

                    <Projeto nome="Grafana Dashboards" link="https://github.com/ThiaAlves/Grafana" imagem="images/default.jpg" 
                    sobre="Dashboards para monitoramento interno" linguagem1="Prometheus"
                    linguagem2="Zabbix" ano="2021"></Projeto>

                    <Projeto nome="Zabbix Templates" link="https://github.com/ThiaAlves/Zabbix-Templates" imagem="images/default.jpg" 
                    sobre="Templates para monitoramento de recursos de rede" linguagem1="Zabbix versão: 5.0"
                    linguagem2="Zabbix versão 5.4" ano="2021"></Projeto>

                    <Projeto nome="SubSubmarino" link="https://github.com/ThiaAlves/Subsubmarino" imagem="images/default.jpg" 
                    sobre="E-commerce desenvolvido em aula" linguagem1="PHP"
                    linguagem2="MySql" ano="2021"></Projeto>

                    <Projeto nome="Lista Tarefas" link="https://github.com/ThiaAlves/listasTarefa-Flutter" imagem="images/default.jpg" 
                    sobre="Lista de tarefas desenvolvido em curso" linguagem1="Flutter"
                    ano="2021"></Projeto>
                </div>
            </div>
        </>
    )
}