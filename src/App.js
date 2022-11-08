import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Detail } from "./Detail";

const App = () => {
  const [showDetails, setShowDetails] = useState(false);
  document.title = "GorillaCoffee";

  return (
    <div>
      {/* header */}
      <header className="header p-3 position-absolute start-0 top-0 end-0 text-white bg-dark">
        <div className="d-flex justify-content-between align-items-center">
          <a href="/" className="text-decoration-none text-white fs-5 fw-bold">
            GorillaCoffee
          </a>

          <div className="header-btn">
            <button onClick={() => setShowDetails(true)}>
              <a
                href="#scroll-end"
                className=" navbar-toggler text-white btn "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar"
                aria-controls="navbar"
                aria-expanded="true"
                aria-label="Toggle navigation"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* header end */}
      {/* flyout */}
      {showDetails && <Detail />}

      {/* flyout end */}
      {/* NAV */}
      <nav
        className="accordion-item navbar-collapse dropdown-nav collapse"
        aria-labelledby="clickbutton"
        data-bs-parent="#accordion"
        id="navbar"
      >
        <div className=" container-xxl d-flex align-items-start align-items-md-center">
          <div className="row align-items-start">
            <div className="col-12 col-sm-4 mt-4">
              <a href="#" className="row text-decoration-none">
                <div className="col-2 col-sm-12 mb-4">
                  <img
                    src="img-1.jpg"
                    alt="Coffe Flavour"
                    className="img-fluid"
                    width="553"
                    height="746"
                    loading="lazy"
                  />
                </div>
                <div className="col-10 text-black ">
                  <h3>Amazing Flavour</h3>
                  <p>Find out more about our aAmazing Flavour</p>
                  <p>
                    Learn More{" "}
                    <i className="bi bi-arrow-right-short">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </i>
                  </p>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-4 mt-4">
              <a href="#" className="row ">
                <div className="col-2 col-sm-12 mb-4">
                  <img
                    src="img-2.jpg"
                    alt="Coffe Flavour"
                    className="img-fluid"
                    width="553"
                    height="746"
                    loading="lazy"
                  />
                </div>
                <div className="col-10 text-black">
                  <h3>Surprising Benefits</h3>
                  <p>Find out more about our Surprising Benefits</p>
                  <p>
                    Learn More{" "}
                    <i className="bi bi-arrow-right-short">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </i>
                  </p>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-4 mt-4">
              <a href="#" className="row text-decoration-none">
                <div className="col-2 col-sm-12 mb-4">
                  <img
                    src="img-3.jpg"
                    alt="Coffe Flavour"
                    className="img-fluid"
                    width="553"
                    height="746"
                    loading="lazy"
                  />
                </div>
                <div className="col-10 text-black">
                  <h3>Essential Nutrients</h3>
                  <p>Find out more about our Essential Nutrients</p>
                  <p>
                    Learn More{" "}
                    <i className="bi bi-arrow-right-short">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </i>
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* CLOSE ICON */}
          <button
            className="navbar-toggler dropdown-nav"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          </button>
        </div>
      </nav>
      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
        loading="lazy"
        width="100%"
        height="auto"
      >
        <source src="bg-video.mp4" type="video/mp4" />
      </video>
      <section>
        <div className=" container-custom ">
          <div className="d-flex  align-items-center ">
            <div className="text-white ml-auto info ">
              <h1 className="d-flex mr-auto align-items-left fw-bold mb-4">
                Discover The Taste Of Real
                <br /> Coffee.
              </h1>
              <p className="lead mb-4">
                Lorem Ipsum is simply dummy text of the printing
                <br /> and typesetting industry.
              </p>
              <a
                href="#"
                className="mt-2 btn btn-lg btn-outline-light"
                role="button"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="container-custom2 row ">
          <div>
            <a
              href="#scroll-down"
              className=" scroll-btn btn text-white fw-bold"
            >
              Explore
            </a>
          </div>
          <div className="col text-white fw-bold">
            <i className="bi bi-arrow-down-short "></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="mt-5 ">
        <a id="scroll-down"></a>
      </section>
      {/* section two paer 1 end */}

      {/* section 2 part1 */}
      <section className=" container-fluid custom-class ">
        <div className="row ">
          <div className="col-12 col-sm-6 d-md-flex justify-content-md-center">
            <img
              src="img-1.jpg"
              alt="Coffee"
              className="pb-4 "
              width="600"
              height="706"
              loading="lazy"
            />
          </div>

          <div className="col-12  col-sm-5  align-self-center justify-content-md-left  ">
            <div className="w-content-width">
              <span className="h4">01</span>
              <h1 className="h2 mb-4 fw-light">Amazing Coffee Flavour</h1>
              <p className="  mb-4 fw-ligher ">
                consectetur adipisicing elit. Officia totam dolorem quasi! Quis
                fugiat totam id fuga non distinctio incidunt amet nesciunt
                itaque, tempore repellat eos natus quo mollitia laborum.
              </p>
              <a href="#" className="text-secondary">
                Read More <i className="bi bi-arrow-right-short"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* section twwo part 2 */}

      <section className="mt-10  container-fluid ">
        <div className="container-fluid">
          <div className="row  ">
            <div className="col-12 col-sm-5 d-md-flex justify-content-md-center order-sm-1 ">
              <img
                src="img-2.jpg"
                alt="Health Benefits"
                className="pb-4"
                width="600"
                height="706"
                loading="lazy"
              />
            </div>

            <div className="col-12 col-sm-6 align-self-center justify-content-md-center ">
              <div className="w-content-width">
                <span className="h4">02</span>
                <h1 className="h2 mb-4 fw-light">Surprising Health Benefits</h1>
                <p className="mb-4 fw-ligher">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia totam dolorem quasi! Quis fugiat totam id fuga non
                  distinctio incidunt amet nesciunt itaque, tempore repellat eos
                  natus quo mollitia laborum.
                </p>
                <a href="#" className="text-secondary">
                  Read More <i className="bi bi-arrow-right-short"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 part 2 */}
      {/* section 2 part3 */}
      <section className=" mt-10 container-fluid custom-class">
        <div className="row">
          <div className="col-12 col-sm-6 d-md-flex justify-content-md-center">
            <img
              src="img-3.jpg"
              alt="Essential Nutrients"
              className="pb-4"
              width="600"
              height="706"
            />
          </div>

          <div className="col-12 col-sm-4 align-self-center justify-content-md-center">
            <div className="w-content-width">
              <span className="h4">03</span>
              <h1 className="h2 mb-4 fw-light">Essential Nutrients</h1>
              <p className="mb-4 fw-ligher">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia totam dolorem quasi! Quis fugiat totam id fuga non
                distinctio incidunt amet nesciunt itaque, tempore repellat eos
                natus quo mollitia laborum.
              </p>
              <a href="#" className="text-secondary">
                Read More <i className="bi bi-arrow-right-short"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 part3 */}
      {/* section 3 start */}

      <section className="mt-5  ">
        <a id="scroll-end"></a>
      </section>
      <section className="bg-dark text-white py-4 mt-40 collapse show">
        <div className="container-fluid my-4 ">
          <div className="row">
            <div className="col-12 col-sm-4 mb-4">
              <img
                src="img-1.jpg"
                className="mb-4"
                alt="Coffe"
                width="350"
                height="350"
              />
              <h3>Amazing Coffee Flavour</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                quidem nostrum nobis sit beatae consequuntur quisquam iusto
                reprehenderit voluptatibus officia? Natus.
              </p>
            </div>

            <div className="col-12 col-sm-4 mb-4">
              <img
                src="img-2.jpg"
                className="mb-4"
                alt="Health"
                width="350"
                height="350"
              />
              <h3>Health Benefits</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                quidem nostrum nobis sit beatae consequuntur quisquam iusto
                reprehenderit voluptatibus officia? Natus.
              </p>
            </div>

            <div className="col-12 col-sm-4 mb-4">
              <img
                src="img-3.jpg"
                className="mb-4 "
                alt="Essential"
                width="350"
                height="350"
              />
              <h3>Essential Nutrients</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                quidem nostrum nobis sit beatae consequuntur quisquam iusto
                reprehenderit voluptatibus officia? Natus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 end */}
      {/* footer */}
      <footer className="footer bg-dark text-white">
        <div className="container-fluid d-flex justify-content-between align-items-center py-3 border-highlight">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="me-2 text-muted text-decoration-none">
              <i className="bi bi-cup">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cup"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9ZM1.124 4l1.516 6.825A1.5 1.5 0 0 0 4.104 12h5.792a1.5 1.5 0 0 0 1.464-1.175L12.877 4H1.123Z"
                  />
                </svg>
              </i>
              <span>© 2022 GorillaCoffee</span>
            </a>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex text-white">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="bi bi-twitter"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="bi bi-instagram"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="bi bi-meta"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-meta"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>

      {/* footer end */}
    </div>
  );
};

export default App;
