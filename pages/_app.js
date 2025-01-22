import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return  (

    <div className="container">
  <div className="sidebar">
        <input
          type="checkbox"
          name="toggle"
          id="sidebar-toggle"
          className="sidebar__input"
        />
        <label htmlFor="sidebar-toggle" className="sidebar__label">
          <div className="sidebar__btn"></div>
        </label>

        <div className="sidebar__bg"></div>
        <ul className="list">
          <li className="list__item">
            <a href="index.html" className="list__link">
              صفحه اصلی
            </a>
          </li>
          <li className="list__item">
            <a href="#" className="list__link">
              ویژگی ها
            </a>
          </li>
          <li className="list__item">
            <a href="" className="list__link">
              نظرات
            </a>
          </li>
          <li className="list__item">
            <a href="houses.html" className="list__link">
              خانه ها
            </a>
          </li>
          <li className="list__item">
            <a href="#" className="list__link">
              گالری
            </a>
          </li>
        </ul>
      </div>

      <header className="header">
        <img src="img/logo.png" alt="Nexter Logo" className="header__logo" />
        <h3 className="u-heading-3 u-heading--light">خانه خودتان:</h3>
        <h1 className="u-heading-1">با خرید خانه نهایت آزادی را احساس کنید</h1>
        <button className="btn header__btn btn-brown">
          املاک ما را مشاهده کنید
        </button>

        <p className="seeon__text">دیده می شود در</p>
        <figure className="seeon__box-img">
          <img src="img/logo-bbc.png" alt="BBC" className="seeon__img" />
          <img src="img/logo-bi.png" alt="BBC" className="seeon__img" />
          <img src="img/logo-forbes.png" alt="BBC" className="seeon__img" />
          <img src="img/logo-techcrunch.png" alt="BBC" className="seeon__img" />
        </figure>
      </header>

      <div className="real-tors">
        <p className="real-tors__tittle">
        Top three owners
          </p>
        <div className="real-tors__list">
          <img
            src="img/realtor-1.jpeg"
            alt="real-tors top 1"
            className="real-tors__img"
          />
          <div className="real-tors__details">
            <h3 className="u-heading-3 u-heading--white">David Reyes  </h3>
            <p className="real-tors__text">869  House Sales </p>
          </div>

          <img
            src="img/realtor-2.jpeg"
            alt="real-tors top 2"
            className="real-tors__img"
          />
          <div className="real-tors__details">
            <h3 className="u-heading-3 u-heading--white">Diana Rossito </h3>
            <p className="real-tors__text">243 House Sales  </p>
          </div>

          <img
            src="img/realtor-3.jpeg"
            alt="real-tors top 3"
            className="real-tors__img"
          />
          <div className="real-tors__details">
            <h3 className="u-heading-3 u-heading--white"> Benyamin Defrai</h3>
            <p className="real-tors__text">
            130 House Sales
              </p>
          </div>
        </div>
      </div>
  <Component {...pageProps} />
  <footer className="footer">
        <ul className="nav">
          <li className="nav__item">
            <a href="#" className="nav__link">
            Find your dream home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
            Request for Proposal
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
            House rental program
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
            Contact us
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
            Submit your property
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
            Work with us
            </a>
          </li>
        </ul>

        <p className="copyright">
          &copy; The intellectual property rights of this site are for
          <strong className="copyright__name">Mohsen Deilami  </strong>
          It is reserved.
        </p>
      </footer>
  </div>
  )

}
