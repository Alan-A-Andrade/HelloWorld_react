import ReactDOM from "react-dom";

const root = document.querySelector(".root")



function List(){
    return (
        <div>
        <h1>Hello World in React</h1>
        <ul>
            <li>Pão</li>
            <li>Banana</li>
            <li>Milk Shake de Doce de Leite</li>
            <li>Nutella</li>
            <li>Sorvete</li>
        </ul>
        </div>
    );
}

const listReact = List()

ReactDOM.render(listReact,root)


