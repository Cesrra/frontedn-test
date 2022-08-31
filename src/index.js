import '@styles/main.scss'
import Template from '@templates/Template.js';
import Filter from '@templates/Filter';

(function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = Template();
})();


document.addEventListener("DOMContentLoaded", function(event) {
   
    const originalFilters = [
        {id: 1},
        {id: 2},
        {id: 3}
    ]
    const filter = new Filter();
    const btnClear = document.getElementById('modal-footer__clear');
    const btnFilter = document.getElementById('modal-footer__filter');
    const check1 = document.getElementById('checkbox-1');
    const check2 = document.getElementById('checkbox-2');
    const check3 = document.getElementById('checkbox-3');

    btnClear.addEventListener("click", () => deleteAllFilters(), false);
    btnFilter.addEventListener("click", () => filterAction(), false);

    check1.addEventListener('change', (e) => handleChecbox(1, check1.checked))
    check2.addEventListener('change', (e) => handleChecbox(2, check2.checked))
    check3.addEventListener('change', (e) => handleChecbox(3, check3.checked))

    const hideCartsElements = (selectedFilters) => {
        selectedFilters.map((filt) => {
            const elements = (document.getElementsByClassName(`filter-${filt.id}`))
            for (let i = 0; i < elements.length; i++) {
                elements[i].setAttribute("style", "display:none;")
            }
        })
    }
    const showCartsElements = (selectedFilters) => {
        selectedFilters.map((filt) => {
            const elements = (document.getElementsByClassName(`filter-${filt.id}`))
            for (let i = 0; i < elements.length; i++) {
                elements[i].removeAttribute(`style`)
            }
        })
    }
    
    const filterAction = () => {
        showCartsElements(originalFilters)
        const selectedFilters = filter.getFilters()
        hideCartsElements(selectedFilters)
    }
    
    const handleDisabledBtns = () => {
        const countSelected = filter.countSelected();
        if(countSelected < 1){
            btnFilter.setAttribute("disabled", "");
            btnClear.setAttribute("disabled", "");
        }
        if(countSelected > 0){
            btnFilter.removeAttribute("disabled");
            btnClear.removeAttribute("disabled");
        }
    }

    const deleteAllFilters = () => {
        check1.checked = false;
        check2.checked = false;
        check3.checked = false;
        filter.clearFilters()
        handleDisabledBtns()
    }

    const handleChecbox = (id, status) => {
        filter.selectFilter(id, status)
        handleDisabledBtns()
    }

    handleDisabledBtns()
});