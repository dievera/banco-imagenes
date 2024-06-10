import Img1 from "./imagenes/imagen1.jpg";
import Img2 from "./imagenes/imagen2.jpg";

function Imagen() {
  return (
    <>
      <div class="container">
        <form action="">
          <div class="row">
            <div class="col">
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col">
              <button type="submit" class="btn btn-primary">
                Descargar
              </button>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col">
            <img src={Img1} class="img-fluid" alt="..." />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>Licencia - </p>
            <p>Detalles</p>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-xs-2 col-2">
            <a href="/Autor">
              <img src={Img2} alt="" class="img-user" />
            </a>
          </div>
          <div class="col-xl-11 col-lg-11 col-md-10 col-sm-10 col-xs-10 col-10">
            <h3>Nombre Apellido</h3>
            <p>Detalles</p>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 ">
            <img src={Img1} class="img-fluid" alt="..." />
          </div>
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 ">
            <img src={Img1} class="img-fluid" alt="..." />
          </div>
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 ">
            <img src={Img1} class="img-fluid" alt="..." />
          </div>
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 ">
            <img src={Img1} class="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Imagen;
