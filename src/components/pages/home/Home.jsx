import React from "react";
import Owldemo1 from "../../Owldemo1";
import img5 from "../../../img/img5.png";
import img6 from "../../../img/img6.jpg";
import img7 from "../../../img/img7.jpg";
import img8 from "../../../img/img8.jpg";
import img4 from "../../../img/img4.jpeg";
// import img2 from '../../../img/img2.jpg'
import img3 from "../../../img/img3.jpg";
import img9 from "../../../img/img9.jpg";
import img2020 from "../../../img/img2020.jpg";
import Footer from "../../Footer/Footer"

import "./home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-8">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="false"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={img5} class="d-block w-100" alt="..." />
                  <h3 className="mt-2">
                    Boletim Informativo da AMOG - Edicao 4
                  </h3>
                  <h4 className="primary mt-2">Abril/Maio/Junho</h4>
                </div>
                <div class="carousel-item">
                  <img src={img6} class="d-block w-100" alt="..." />
                  <h3 className="mt-2">Homenageados Membros da AMOG</h3>
                  <h4 className="primary mt-2">
                    Em cerim??nia alusiva ao 46?? anivers??rio do HCM
                  </h4>
                </div>
                <div class="carousel-item">
                  <img src={img7} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>
                      AMOG lan??a Plano Estrat??gico para os pr??ximos 5 anos
                    </h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={img8} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <div id="carousel" class="carousel slide" data-bs-ride="false">
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={img4} class="d-block w-100" alt="..." />
                      <p>Novo Corpo Directivo da AMOG Eleito</p>
                    </div>
                    <div class="carousel-item">
                      <img src={img3} class="d-block w-100 " alt="..." />
                      <p>Novo Corpo Directivo da AMOG Eleito</p>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carousel"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carousel"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div id="carousel" class="carousel slide" data-bs-ride="false">
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={img4} class="d-block w-100" alt="..." />
                      <p>Novo Corpo Directivo da AMOG Eleito</p>
                    </div>
                    <div class="carousel-item">
                      <img src={img3} class="d-block w-100 " alt="..." />
                      <p>Novo Corpo Directivo da AMOG Eleito</p>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carousel"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carousel"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-light">
        <h1 className="pt-5">Amog</h1>
        <p className="paragraph pt-5">
          A Associa????o Mo??ambicana de Obstetras e Ginecologistas, e uma<br></br>{" "}
          organiza????o s??cio profissional de caracter cient??fico sem fins
          lucrativos, que<br></br> tem como finalidade representar e congregar
          profissionais de sa??de que se<br></br> dedicam na sa??de sexual e
          reprodutiva
        </p>
        <br />
        <br />
        <a href="/" className="link pb-3">
          Ler Mais . . .
        </a>
        <br />
        <br />
      </div>
      <br />
      <br />

      <div className="container clearfix">
        <div className="col-12">
          <center>
            <iframe
              width="853"
              height="350"
              src="https://www.youtube.com/embed/aMw-Bp8zS64"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </center>
        </div>
      </div>

      <div className="container clearfix ">
        <div className="row">
          <div className="col-md-12">
            <div className="fancy-title title-border-color title-center">
              <h3 className="text-center information">Mais informa????es</h3>
            </div>{" "}
            <br />
            <br />
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-12">
                <div className="posts-md">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="entry-image">
                        <img className="d-block w-100" src={img9} alt="" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="title title-lg">
                        <h3>
                          Publicado Glossario Tipificado dos Termos Relacionados
                          com o Aborto Seguro
                        </h3>
                        <h4 style={{ color: "darkorange" }}>
                          Uma homenagem ao Dr. Momade Ust??
                        </h4>
                      </div>
                      <div className="entry-content">
                        <span class="title_tree_line">
                          Desenhado pelos nossos parceiros, a PathFinder
                          Mo??ambique.
                        </span>
                        <p className="mb-0 mt-3">
                          <span
                            style={{
                              fontsize: "10px",
                              marginright: "5px",
                              padding: "5px",
                              texttransform: "uppercase",
                              background: "#787878",
                              color: "#FFFFFF",
                            }}
                          >
                            Saiba mais
                          </span>
                          <span
                            style={{ marginright: "10px", fontsize: "12px" }}
                          >
                            {" "}
                            &nbsp; &nbsp; <i class="fa-solid fa-pencil"></i>{" "}
                            05-05-2022
                          </span>
                          <span
                            style={{ marginright: "10px", fontsize: "12px" }}
                          >
                            {" "}
                            &nbsp; &nbsp; <i class="fa-solid fa-eye"></i> 400
                          </span>
                          <span
                            style={{ marginright: "10px", fontsize: "12px" }}
                          >
                            {" "}
                            &nbsp; &nbsp; <i class="fa-solid fa-heart"></i> 100
                          </span>
                          <span
                            style={{ marginright: "10px", fontsize: "12px" }}
                          >
                            {" "}
                            &nbsp; &nbsp;{" "}
                            <i class="fa-solid fa-share-from-square"></i> 0
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <Owldemo1 />
          </div>
        </div>
      </div>

      <div className="clearfix mt-5" style={{ background: "#dddd" }}>
        <div className="container" data-animate="fadeInLeftBig">
          <div className="row">
            <div className="col-lg-4 mt-5 mb-5 text-lg-left">
              <img className="img2020" src={img2020} alt="" />
            </div>
            <div className="col-lg-8 col-md-8 ">
              <div className="row pt-5 topmargin-lg">
                <div className="col-lg-6 col-md-6 topmargin">
                  <div className="w-100 mb-5 mt-5">
                    <div className="feature-box fbox-plain fbox-sm fbox-dark">
                      <div className="fbox-icon">
                        <i className="fa-regular fa-newspaper"></i>
                      </div>
                      <div className="fbox-content">
                        <h3>Noticias</h3>
                        <p>
                          Encontre aqui informa????es ??teis que acontecem no mundo
                          da medicina
                        </p>
                      </div>
                    </div>
                    <div className="w-100 mb-5">
                      <div className="feature-box fbox-plain fbox-sm fbox-dark">
                        <div className="fbox-icon">
                          <i class="fa-solid fa-layer-group"></i>
                        </div>
                        <div className="fbox-content">
                          <h3>Publica????es</h3>
                          <p>Encontre aqui publica????es importantes da AMOG</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 topmargin">
                  <div className="w-100 mb-5 mt-5">
                    <div className="feature-box fbox-plain fbox-sm fbox-dark">
                      <div className="fbox-icon">
                        <i class="fa-solid fa-question"></i>  
                      </div>
                      <div className="fbox-content">
                        <h3>Perguntas e Respostas</h3>
                        <p>Um espa??o reservado para a intera????o com os profissionais de medicina</p>
                      </div>
                    </div>
                   
                  <div className="w-100 mb-5">
                    <div className="feature-box fbox-plain fbox-sm fbox-dark">
                      <div className="fbox-icon">
                        <i class="fa-solid fa-notes-medical"></i>
                      </div>
                      <div className="fbox-content">
                        <h3>Perguntas e Respostas</h3>
                        <p>Um espa??o reservado para a intera????o com os profissionais de medicina</p>
                      </div>
                    </div>
                  </div>
                
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
