import './styles/main.css';
import './styles/index.scss'
import Template from './templates/Template.js';

console.log(sum(5, 78));
(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template
})