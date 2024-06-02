let container = document.querySelector(".container");
    
container.innerHTML = `
<div class="calculadora">
    <div class="display">
        <div id="valor-anterior"></div>
        <div id="valor-actual"></div>
    </div>
    <button class="col-2" onclick="display.borrarTodo()"> C </button>
    <button class="operador" onclick="display.borrar()">&larr;</button>
    <button class="operador" value="dividir">/</button>   
    <button class="numero">7</button>
    <button class="numero">8</button>
    <button class="numero">9</button>
    <button class="operador" value="multiplicar">x</button>
    <button class="numero">4</button>
    <button class="numero">5</button>
    <button class="numero">6</button>
    <button class="operador" value="restar">-</button>
    <button class="numero">1</button>
    <button class="numero">2</button>
    <button class="numero">3</button>
    <button class="operador" value="sumar">+</button>
    <button class="numero col-2">0</button>
    <button class="numero">.</button>
    <button class="operador" value="igual">=</button>
</div>
`;