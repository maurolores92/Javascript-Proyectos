const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        // esta variable es para que cuando se pulse una tecla me la muestre en pantalla
        const botonApretado = boton.textContent;
        // Si pulsan la letra C vuelve todo 0 y finaliza la funcion
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
        // si pulsan la flecha con el slice accedemos al ultimo numero marcado y lo borra
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return
        }
        // uso de eval que evalua conjunto de strings de operaciones matematicas
        if(boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent ="Error!"
            }
            return;
        }

        // sino colocan C ir agregando un numero al lado del otro
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})