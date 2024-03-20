import logo from "../assets/images/dgu-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__inner">
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <div className="logo__text">Дагестанский государственный университет</div>
          </div>
          <div className="footer__text">Репозитории студенческих работ</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
