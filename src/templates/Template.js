import getData from '@utils/getData.js';

const Template = async () => {
    const data = await getData();
    const View = `
    <div>
        <div>
            From Template
            Counts to Character ${data.results[0].name}
            <object data="assets/svg/cart.svg" width="300" height="300"> </object>
        </div>
        <section>
            <img src="assets/images/cascade.png" alt="Cascade Bear">
            <img src="${data.results[0].image}" alt="Cascade Bear">
        </section>
    </div>
    `;
    return View;
}

export default Template;