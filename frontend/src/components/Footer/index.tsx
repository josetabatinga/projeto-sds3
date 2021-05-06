const Footer = () => {
    const name = " José Tabatinga";
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">
                    App desenvolvido por
                    <a href="https://github.com/josetabatinga" 
                        target="_blank" rel="noreferrer">
                             {name}
                    </a>
                </p>
                <p className="text-light"><small><strong>Semana Spring React</strong><br />
      Evento promovido pela Escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
            </div>
        </footer>
    );
}

export default Footer;
