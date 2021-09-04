import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Sobre} from "./pages/Sobre";
import {Home} from './pages/Home';
import {Contato} from './pages/Contato';
import {Projetos} from './pages/Portfolio';
import {Footer, Header} from './components/Main';


export const Router = () => {
    return(
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route path={["/","/home"]} exact component={Home}></Route> 
                <Route path="/portfolio" component={Projetos}></Route> 
                <Route path="/sobre" component={Sobre}></Route> 
                <Route path="/contato" component={Contato}></Route> 
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}