import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";
import img10 from "../img/img10.jpg";
import img11 from "../img/img11.jpg";
import img12 from "../img/img12.jpg";
import img13 from "../img/img13.jpg";
import img14 from "../img/img14.png";
import img15 from "../img/img15.jpg";

export class Owldemo1 extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div class="col-sm-12 btn "></div>
          </div>
        </div>
        <div class="container-fluid">
          <OwlCarousel items={3} margin={30} className="owl-theme" loop nav>
            <div>
              <img className="img" src={img10} alt="" />
              <div className="title title-sm">
                <h4 className="mt-3">
                <strong>Nampula encerrou o ano de 2021 com Clarificação de Valores</strong>
                </h4>
                <h4 className="mt-3" style={{ color: "darkorange" }}>
                Coordenada pela AMOG
                </h4>
              </div>
              <div className="entry-content">
                <p className="title_tree_line mt-3">
                Equipa liderada pelo Dr. Cachimo e em actividade orientada pelo Dr.Dinis, ambos membros da AMOG, recebeu refrescamento de Clarificação de Valores e Mudança de Atitudes, no passado dia 21 de Dezembro, em Nampula.
                </p>
              </div>
              <p className="mb-0">
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-pencil"></i> 05-05-2022
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-eye"></i> 400
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-heart"></i> 100
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-share-from-square"></i> 0
                </span>
              </p>
            
            </div>

            <div>
              <img className="img" src={img11} alt="" />
              <div className="title title-sm">
                <h4 className="mt-3">
                  <strong>Cabo Delgado destaca insuficiência de material de trabalho para garantir serviços de qualidade</strong>
                </h4>
                <h4 className="mt-3" style={{ color: "darkorange" }}>
                Segundo profissionais de 4 unidades sanitárias
                </h4>
              </div>
              <div className="entry-content">
                <p className="title_tree_line mt-3">
                No âmbito da implementação do Projecto Advocacia Pelo Aborto Seguro, a AMOG organizou, nos dias 20 a 23 de Dezembro de 2021, workshops com os provedores de saúde nos Centros de Saúde Eduardo Mondlane, Natite, Paquite e Hospital Central de Pemba, na província de Cabo Delgado. A actividade alcançou 78 profissionais de saúde, dos quais médicos, enfermeiras de Saúde Materno-Infantil, pessoal administrativo, agentes de serviço, técnicos de medicina preventiva, de laboratório e de farmácia.
                </p>
              </div>
              <p className="mb-0">
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-pencil"></i> 05-05-2022
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-eye"></i> 400
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-heart"></i> 100
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-share-from-square"></i> 0
                </span>
              </p>
            </div>
            <div>
              <img className="img" src={img12} alt="" />
              <div className="title title-sm">
                <h4 className="mt-3">
                  <strong>Boletim Informativo da AMOG - Edicao 3</strong>
                </h4>
                <h4 className="mt-3" style={{ color: "darkorange" }}>
                Outubro/Novembro de 2021
                </h4>
              </div>
              <div className="entry-content">
                <p className="title_tree_line mt-3" style={{color:"transparent"}}>
                  Material compilado e traduzido por Prof. Doutor António
                  Bugalho, com autorização de David Grimes, Kenneth Schulz e
                  Robert Jaffe, editores do Obstetrical and Gynecological
                  Survey.
                  <br></br>
                </p>
              </div>
              <p className="mb-0">
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-pencil"></i> 05-05-2022
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-eye"></i> 400
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-heart"></i> 100
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-share-from-square"></i> 0
                </span>
              </p>
            </div>
            <div>
              <img className="img" src={img13} alt=""/>
              <div className="title title-sm">
                <h4 className="mt-3">
                  <strong>KaMaxaquene palco de palestra sobre violência baseada no género</strong>
                </h4>
                <h4 className="mt-3" style={{ color: "darkorange" }}>
                Segundo mulheres empreendedoras do distrito
                </h4>
              </div>
              <div className="entry-content">
                <p className="title_tree_line mt-3">
                Mulheres do distrito municipal KaMaxaquene, na cidade de Maputo, beneficiaram recentemente de uma palestra no quadro da Campanha dos 16 dias de Activismo pelo fim da Violência baseada no Género. O evento, organizado pela Associação Kulani, beneficiou membros da Associação para o Desenvolvimento de Maxaquene (ASSODEMO) e decorreu sob lema “Pinte o mundo de laranja: pare com a violência contra as mulheres e raparigas”..
                </p>
              </div>
              <p className="mb-0">
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-pencil"></i> 05-05-2022
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-eye"></i> 400
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-heart"></i> 100
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-share-from-square"></i> 0
                </span>
              </p>
            </div>
            <div>
              <img className="img" src={img14} alt=""/>
              <div className="title title-sm">
                <h4 className="mt-3">
                  <strong>Pesquisa Clínica: Refinar o diagnóstico clínico com as razões de verosimilhança</strong>
                </h4>
                <h4 className="mt-3" style={{ color: "darkorange" }}>
                Cadernos de apoio à Metodologia de Investigação
                </h4>
              </div>
              <div className="entry-content">
                <p className="title_tree_line mt-3">
                Material compilado e traduzido por Prof. Doutor António Bugalho, com autorização de David Grimes, Kenneth Schulz e Robert Jaffe, editores do Obstetrical and Gynecological Survey.                </p>
              </div>
              <p className="mb-0">
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-pencil"></i> 05-05-2022
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-eye"></i> 400
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-heart"></i> 100
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-share-from-square"></i> 0
                </span>
              </p>
            </div>
            
            <div>
              <img className="img" src={img15} alt="" />
              <div className="title title-sm">
                <h4 className="mt-3">
                  <strong>AMOG realiza a Décima Reunião da Assembleia Geral</strong>
                </h4>
                <h4 className="mt-3" style={{ color: "darkorange" }}>
                Parte 1 – Sumário do 1º Dia – 25 de Fevereiro de 2022
                </h4>
              </div>
              <div className="entry-content">
                <p className="title_tree_line mt-3">
                A Associação Moçambicana de Obstetras e Ginecologistas realizou nos passados dias 25 e 26 de Fevereiro a sua 10ª reunião da Assembleia Geral, evento este que teve lugar numa das salas de conferência do Hotel Avenida, na cidade de Maputo, e que foi presidido pelo Presidente da Mesa da Assembleia Geral, o Dr. Cachimo Mulina. O evento contou com a presença física de 40 membros da associação e a participação remota, através da plataforma Zoom, de cerca de outros 20 membros.
                </p>
              </div>
              <p className="mb-0">
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-pencil"></i> 05-05-2022
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-eye"></i> 400
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-heart"></i> 100
                </span>
                <span style={{ marginright: "10px", fontsize: "12px" }}>
                  {" "}
                  &nbsp; &nbsp; <i class="fa-solid fa-share-from-square"></i> 0
                </span>
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo1;
