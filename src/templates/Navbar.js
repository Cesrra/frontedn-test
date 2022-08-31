const Navbar = () => {
  return `
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid navbar-container">
        <div class="navbar-container__left">
            <button class="navbar-toggler btn-large" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">            
                <object data="assets/svg/menu.svg" width="15" height="15"></object>
            </button>
            <object data="assets/svg/logo.svg" width="30" height="30"></object>
        </div>
        <div class="navbar-container__right">
            <object data="assets/svg/search.svg" width="30" height="30"></object>
            <object data="assets/svg/cart.svg" width="30" height="30"></object>
        </div>        
    </div>
  </nav>
    `;
};

export default Navbar;