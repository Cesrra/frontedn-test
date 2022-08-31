import getData from '../utils/getData.js';

const Template = async () => {
    const data = await getData();
    const View = `
    <div>
        <div>
            
            Counts to Character ${data.info.count}
        </div>
    </div>
    `;
}

export default Template;