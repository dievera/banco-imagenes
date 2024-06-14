import Img1 from "./imagenes/imagen1.jpg";
import Img2 from "./imagenes/imagen2.jpg";

function Autor() {
  return (
    <>
      <div class="container">
      <img src={Img1} alt="" class="img-fondo2" />
      <div class="row px-0">
      <img src={Img1} alt="" class="img-fondo" />
      <div class="row box-a">
          <div class="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-xs-2 col-4">
            <a href="/Autor">
              <img src={Img2} alt="" class="img-user" />
            </a>
          </div>
          <div class="col-xl-11 col-lg-11 col-md-10 col-sm-10 col-xs-10 col-8">
            <h3>Nombre Apellido</h3>
            <p>Detalles</p>
          </div>
        </div></div>
        <div class="row">
          <div class="col">
            <p>Licencia - </p>
            <p>Detalles</p>
          </div>
        </div>
        <div class="row">
          <div class="col pb-2">
            <div>
              <form action="tag">
                <a class="btn btn-primary m-1" href="/" role="button">
                  Link
                </a>
                <a class="btn btn-primary m-1" href="/" role="button">
                  Link
                </a>
                <a class="btn btn-primary m-1" href="/" role="button">
                  Link
                </a>
                <a class="btn btn-primary m-1" href="/" role="button">
                  Link
                </a>
              </form>
            </div>
          </div>
        </div>
        <div class="row py-2">
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <a href="/Imagen">
              <img src={Img1} class="img-fluid" alt="..." />
            </a>
          </div>
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <a href="/Imagen">
              <img src={Img1} class="img-fluid" alt="..." />
            </a>
          </div>
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <a href="/Imagen">
              <img src={Img1} class="img-fluid" alt="..." />
            </a>
          </div>
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <a href="/Imagen">
              <img src={Img1} class="img-fluid" alt="..." />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Autor;
