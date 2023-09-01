let totalValue = 0;

// Obtener el elemento del DOM por su ID
const contenedor = document.getElementById("contenedor");

// Establecer una imagen como fondo
contenedor.style.backgroundImage = "url('fondoya.jpg')";

const horaInput = document.getElementById("hora");

function actualizarHora() {
    const fechaActual = new Date();
    const formattedHora = `${fechaActual.getHours().toString().padStart(2, '0')}:${fechaActual.getMinutes().toString().padStart(2, '0')}`;
    horaInput.value = formattedHora;
  }
  // Actualizar la hora en vivo
  actualizarHora(); // Actualizar inmediatamente al cargar la página
  setInterval(actualizarHora, 1000);



// Obtener el elemento de entrada de fecha por su ID
const fechaInput = document.getElementById("fecha");

// Crear un objeto de fecha para la fecha actual
const fechaActual = new Date();

// Restar un día a la fecha actual para obtener la fecha de ayer
fechaActual.setDate(fechaActual.getDate() - 1);

// Formatear la fecha en el formato YYYY-MM-DD
const formattedFecha = fechaActual.toISOString().substr(0, 10);

// Establecer el valor por defecto en el campo de fecha
fechaInput.value = formattedFecha;

function registrarCupo() {
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const recibe = document.getElementById("recibe").value;
    const pagoPor = document.getElementById("pagoPor").value;
    const pagoD = document.getElementById("pagoPor");

    


    // registro de cupo

    if (fecha == "") {
        alert("Es necesario llenar todos los campos antes de continuar");
        return;
    }
    if (hora == "") {
        alert("Es necesario llenar todos los campos antes de continuar");
        return;
    }
    if (recibe == "") {
        alert("Es necesario llenar todos los campos antes de continuar");
        return;
    }
    if (valor == "") {
        alert("Es necesario llenar todos los campos antes de continuar");
        return;
    }
    if (pagoPor == "") {
        alert("Es necesario llenar todos los campos antes de continuar");
        return;
    }
    totalValue += valor;
    document.getElementById("totalValue").textContent = totalValue;
    const newRow = transaccionesTableBody.insertRow();
    newRow.insertCell().textContent = fecha;
    newRow.insertCell().textContent = hora;
    newRow.insertCell().textContent = valor;
    newRow.insertCell().textContent = recibe;
    newRow.insertCell().textContent = pagoPor;

    
    var newClient = pagoD.value;
            if (newClient !== '') {
                var option = document.createElement('option');
                option.value = newClient;
                option.textContent = newClient;
                clientSelect.appendChild(option);
                pagoD.value = '';
            }
    

            const valorInput = document.getElementById("valor");
            const recibeInput = document.getElementById("recibe");
            const pagoPorInput = document.getElementById("pagoPor");
        
            // Realizar las operaciones necesarias para registrar el cupo
        
            // Limpiar los campos después del ingreso

            valorInput.value = "";
            recibeInput.value = "";
            pagoPorInput.value = "";
    
}

const transaccionesTableBody = document.getElementById("transaccionesTableBody");
const emprendimientosList = document.getElementById("emprendimientosList");
const fundacionList = document.getElementById("fundacionList");

clientSelect.addEventListener('change', function() {
        var selectedClient = clientSelect.value;
     })

    function actualizarCupo() { 
   
    
    const fecha = document.getElementById("fechaActualizacion").value;
    const hora = document.getElementById("horaActualizacion").value;
    const valorAnterior = parseFloat(document.getElementById("valorAnterior").value);
    const valorActual = parseFloat(document.getElementById("valorActual").value);
    const empleado = document.getElementById("empleado").value;
    const cliente = document.getElementById("clientSelect").value;
    
    if (cliente == "op1") {
        alert("Por favor, seleccione un cliente válido.");
        return; // Detiene la ejecución si el cliente no es válido
    }
    if (fecha == "") {
        alert("Es necesario llenar todos los campos antes de continuar");
        return;
    }
    if (hora == "") {
        alert("Es necesario llenar todos los campos antes de continuar");
        return;
    }
    if (empleado == "") {
        alert("Es necesario llenar todos los campos antes de continuar");
        return;
    }
    if (valorAnterior == "") {
        alert("Es necesario llenar todos los campos antes de continuar");
        return;
    }
    if (valorActual == "") {
        alert("Es necesario llenar todos los campos antes de continuar");
        return;
    }
    
    // actualización de cupo 
    totalValue -= valorAnterior; // Resta el valor anterior
    totalValue += valorActual;    // Suma el valor actual
    document.getElementById("totalValue").textContent = totalValue;

    // tabla de versionamiento
    const newRow = transaccionesTableBody.insertRow();
    newRow.insertCell().textContent = fecha;
    newRow.insertCell().textContent = hora;
    newRow.insertCell().textContent = valorAnterior + " --> " + valorActual;
    newRow.insertCell().textContent = empleado;
    newRow.insertCell().textContent = cliente + "(Actualizado)";
    
    }
    
    

// 

function listarValoresEmprendimientos() {
    const emprendimientos = [
        { nombre: "Emprendimiento 1", valor: 500 },
        { nombre: "Emprendimiento 2", valor: 800 },
    ];

    emprendimientosList.innerHTML = ""; // Limpia la lista antes de actualizar

    emprendimientos.forEach(emprendimiento => {
        const li = document.createElement("li");
        li.textContent = `${emprendimiento.nombre}: $${emprendimiento.valor}`;
        emprendimientosList.appendChild(li);
    });
}

function listarValoresFundacion() {
    const donacionesFundacion = [
        { motivo: "Donación 1", valor: 200 },
        { motivo: "Donación 2", valor: 300 },
    ];

    fundacionList.innerHTML = ""; // Limpia la lista antes de actualizar

    donacionesFundacion.forEach(donacion => {
        const li = document.createElement("li");
        li.textContent = `${donacion.motivo}: $${donacion.valor}`;
        fundacionList.appendChild(li);
    });
}



