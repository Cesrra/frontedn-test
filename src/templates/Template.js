// import getData from '@utils/getData.js';
import productsJson from '@utils/products.json';

const Template = () => {
    // const data = await getData();
    const View = Handlebars.compile(`
    <div>
        <div>
            From Template 
            <ul>
            {{#each products}}
                <li>{{name}}
            {{/each}}
            </ul>
        </div>
    </div>
    `);
    return View(productsJson);
}

export default Template;