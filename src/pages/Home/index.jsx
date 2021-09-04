import {Banner, Projeto} from '../../components/Main';

export const Home = () => {
    return(
        <>
            <Banner titulo="Home"></Banner>
            <div className="container pt-5">
                <div className="row pt-5">
                <h1 className="text-center">Principais Projetos</h1>
                    <Projeto nome="Instituto AST" link="https://sistemaast.000webhostapp.com/index.html" imagem="images/institutoast.jpg" 
                    sobre="Projeto de conclusão de curso IFPR" linguagem1="PHP"
                    linguagem2="MySql" linguagem3="Bootstrap" ano="2019"></Projeto>

                    <Projeto nome="Crud Dev" link="https://github.com/ThiaAlves/crudDev" imagem="images/crudDev.png" 
                    sobre="Teste de conhecimentos" linguagem1="Laravel"
                    linguagem2="React" linguagem3="MySql" ano="2021"></Projeto>

                    <Projeto nome="Ilife" imagem="images/ilife.jpg" 
                    sobre="Projeto de conclusão de curso UNIALFA" linguagem1="Laravel"
                    linguagem2="react" linguagem3="Flutter" ano="Início em 2021"></Projeto>

            </div>
            </div>
            
        </>
    )
}