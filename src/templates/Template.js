// import getData from '@utils/getData.js';
import productsJson from '@utils/products.json';
import Navbar from '@templates/Navbar';

const Template = () => {
    // const data = await getData();
    const View = Handlebars.compile(`
    <div>
        ${Navbar()}
        <div class="content">
            <div class="content-title text-center">
                <h1>Cervezas</h1>
            </div>
            <div class="container mb-4">
                <div class="row row-cols-2 justify-content-between">
                    {{#each products}}
                    <div class="col mt-3 filter-{{filterId}}" id="filter-{{filterId}}">
                        <div class="card">
                            <img src="assets/images/{{img}}" class="content-card__img card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="content-card__title">{{name}}</h5>
                                <p class="content-card__descrip">{{description}}</p>
                                <h5 class="content-card__price">{{price}}</h5>
                            </div>
                            <div class="card-action d-grid gap-2">
                                <button class="btn btn-lg btn-outline-primary">AGREGAR</button>
                            </div>
                        </div>
                    </div>
                    {{/each}}
                </div>
              </div>
              <button type="button" class="btn btn-primary handle-modal" data-bs-toggle="modal" data-bs-target="#filterModal">
                FILTRAR <object data="assets/svg/filters.svg" width="15" height="15"></object>
              </button>
            </div>

            <div class="modal" tabindex="-1" id="filterModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Filtros</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ul class="modal-body__ul">
                                <li id="option-1">
                                    <div class="modal-body__filter ">Rubia <input class="form-check-input" type="checkbox" value="" id="checkbox-1"></div>
                                </li>
                                <li id="option-2">
                                    <div class="modal-body__filter">Morena <input class="form-check-input" type="checkbox" value="" id="checkbox-2"></div>
                                </li>
                                <li id="option-3">
                                    <div class="modal-body__filter">Roja <input class="form-check-input" type="checkbox" value="" id="checkbox-3"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <div class="row justify-content-around modal-footer__row">
                                <div class="col-6 d-grid gap-2">
                                    <button id="modal-footer__clear" type="button" class="btn btn-secondary" data-bs-dismiss="modal"  >Limpiar</button>
                                </div>
                                <div class="col-6 d-grid gap-2 modal-footer__filter">
                                    <button id="modal-footer__filter" type="button" class="btn btn-primary">FILTRAR <object data="assets/svg/filters.svg" width="15" height="15"></object></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    `);
    return View(productsJson);
}

export default Template;