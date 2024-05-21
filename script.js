
document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');

    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
                if (page === 'buscar.html') {
                    setupBuscarForm();
                } else if (page === 'registro.html') {
                    setupRegistroForms();
                }
            })
            .catch(error => console.log(error));
    }

    document.getElementById('inicio-link').addEventListener('click', () => loadContent('inicio.html'));
    document.getElementById('buscar-link').addEventListener('click', () => loadContent('buscar.html'));
    document.getElementById('registro-link').addEventListener('click', () => loadContent('registro.html'));
    document.getElementById('iniciar-sesion-link').addEventListener('click', () => loadContent('iniciar_sesion.html'));

    loadContent('inicio.html');

    function setupBuscarForm() {
        const buscarForm = document.getElementById('buscar-form');
        if (buscarForm) {
            buscarForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const especialidad = document.getElementById('especialidad').value;
                const ciudad = document.getElementById('ciudad').value;
                console.log('Especialidad:', especialidad);
                console.log('Ciudad:', ciudad);
            });
        }
    }

    function setupRegistroForms() {
        document.getElementById('cliente-registro').addEventListener('click', function() {
            document.getElementById('registro-form-container').innerHTML = `
                <form id="registro-cliente-form">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>
                    <label for="apellidos">Apellidos:</label>
                    <input type="text" id="apellidos" name="apellidos" required>
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="ciudad">Ciudad:</label>
                    <input type="text" id="ciudad" name="ciudad" required>
                    <button type="submit">Registrar</button>
                </form>
            `;
        });

        document.getElementById('abogado-registro').addEventListener('click', function() {
            document.getElementById('registro-form-container').innerHTML = `
                <form id="registro-abogado-form">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>
                    <label for="apellidos">Apellidos:</label>
                    <input type="text" id="apellidos" name="apellidos" required>
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="direccion">Dirección de despacho:</label>
                    <input type="text" id="direccion" name="direccion" required>
                    <label for="titulos">Títulos:</label>
                    <input type="file" id="titulos" name="titulos" multiple required>
                    <label for="curriculum">Currículum:</label>
                    <input type="file" id="curriculum" name="curriculum" required>
                    <button type="submit">Registrar</button>
                </form>
            `;
        });
    }
});
