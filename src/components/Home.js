import Img1 from "./imagenes/imagen1.jpg";

function Home() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="display-1">Titulo</h1>
            <form action="">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Buscar imagenes"
                  aria-label="Buscar imagenes"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div>
              <form action="tag">
                <a class="btn btn-primary" href="#" role="button">
                  Link
                </a>
                <a class="btn btn-primary" href="#" role="button">
                  Link
                </a>
                <a class="btn btn-primary" href="#" role="button">
                  Link
                </a>
                <a class="btn btn-primary" href="#" role="button">
                  Link
                </a>
              </form>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <form action="filtros">
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </form>
          </div>
          <div class="col">
            <form action="filtros">
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </form>
          </div>
          <div class="col">
            <button type="submit">Descargar</button>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 ">
            <a href="/Imagen">
              <img src={Img1} class="img-fluid" alt="..." />
            </a>
          </div>
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 ">
            <a href="/Imagen">
              <img src={Img1} class="img-fluid" alt="..." />
            </a>
          </div>
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 ">
            <a href="/Imagen">
              <img src={Img1} class="img-fluid" alt="..." />
            </a>
          </div>
          <div class="col-xl-3 col-md-4 col-sm-6 col-xs-6 ">
            <a href="/Imagen">
              <img src={Img1} class="img-fluid" alt="..." />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
