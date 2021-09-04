import { Link } from "react-router-dom"

export const Header = props => {
    return(
        <>


    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
		<div class="container">
			<a href="#" class="navbar-brand">Dev-ThiAlves</a>
			
			<button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
				<span class="menu-icon-bar"></span>
				<span class="menu-icon-bar"></span>
				<span class="menu-icon-bar"></span>
			</button>
			
			<div id="main-nav" class="collapse navbar-collapse">
				<ul class="navbar-nav ml-auto p-5">
				    <li className="nav-item">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
					<li><Link to={'/portfolio'} className="nav-link">Portfólio</Link></li>
					<li><Link to={'/sobre'} className="nav-link">Sobre</Link></li>
					<li><Link to={'/contato'} className="nav-link">Contato</Link></li>
				</ul>
			</div>
		</div>
	</nav>

        </>
    )
}


export const Footer = () => {
    return(
        <>
            <footer className="text-center bg-black text-light">
                <p>Desenvolvido por Thiago Matteus Alves</p>
            </footer>




        </>
    )
}

export const Banner = props => {
    return(
        <>
            <header class="header-area overlay">
	
	<div class="banner">
		<div class="container">
			<h1>{props.titulo}</h1>
		</div>
	</div>
</header>

        </>
    )
}

export const Projeto = props => {
    return(
        <>
				<div class="col-md-4 p-5">
                    <a href={props.link} target="_blank">
                <div class="card" style={{width: '30rem'}}>
                  <img class="card-img-top" src={props.imagem} alt={props.nome}></img>
                    <div class="card-body">

                    <h2 class="card-text text-center"><b>{props.nome}</b></h2>
                    <hr></hr>
                    <ul></ul>
                    <h5>- {props.sobre}</h5>
                    <h5>- {props.linguagem1}</h5>
                    <h5>- {props.linguagem2}</h5>
                    <h5>- {props.linguagem3}</h5>
                    <hr></hr>
                    <p class="text-center">{props.ano}</p>

                    </div>
                    </div>
                   </a>
				</div>








        </>
    )
}