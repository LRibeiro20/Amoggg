import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <>
    <div className="container pt-5 pb-5">
      <div className="form">
        <div className="row">
          <div className="col-8">
            <form action="submit" className="row">
              <div className="col-4">
                <input type="name" className="newsletter" placeholder="Digite seu Nome" />
              </div>
              <div className="col-5">
                <input type="name" className="newsletter" placeholder="Digite seu Nome" />
              </div>
              <div className="col-3">
                <button className="btn btn-warning w-100">Subscrever</button>
              </div>
            </form>
          </div>
          <div className="col-4 text-right">
           <div className="form-group">
             <a href="#" className="btn btn-dark">
             <i className="fa-brands fa-facebook"></i>&nbsp;Facebook</a>&nbsp;&nbsp; 
             <a href="#" className="btn btn-dark">
             <i className="fa-brands fa-instagram"></i>&nbsp;Instagram</a> 
           </div>
           </div>

        </div>
      </div>
    </div>
    <footer className="p-2">
        <div className="text-center">
        <span>2022 &#169; Amog Todos direitos reservados</span>

        </div>
    </footer>
    </>
  );
};

export default footer;
