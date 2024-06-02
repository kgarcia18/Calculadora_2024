let calculadora = document.querySelector(".container");

calculadora.innerHTML = `
    <div class="calculadora">
        <div class="display">
            <div id="valor-anterior"></div>
            <div id="valor-actual"></div>
        </div>
        <button class="col-2">C</button>
        <button>&larr;</button>
        <button class="numero">%</button>
        <button class="numero">7</button>
        <button class="numero">8</button>
        <button class="numero">9</button>
        <button class="operador">X</button>
        <button class="numero">4</button>
        <button class="numero">5</button>
        <button class="numero">6</button>
        <button class="operador">-</button>
        <button class="numero">1</button>
        <button class="numero">2</button>
        <button class="numero">3</button>
        <button class="operador">+</button>
        <button class="numero col-2">0</button>
        <button class="numero">.</button>
        <button class="operador">=</button>
    </div>
`;
