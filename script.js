
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

<script>
    const provincias = {
        "A Coruña": ["A Coruña", "Ferrol", "Santiago de Compostela", "Lugo", "Pontevedra"],
        "Álava": ["Vitoria-Gasteiz", "Amurrio", "Laudio/Llodio", "Salvatierra/Agurain", "Ayala/Aiara"],
        // Otras provincias y sus localidades correspondientes
    };

    const provinciaSelect = document.getElementById("provincia");
    const localidadSelect = document.getElementById("localidad");

    provinciaSelect.addEventListener("change", () => {
        const provinciaSeleccionada = provinciaSelect.value;
        const localidades = provincias[provinciaSeleccionada];

        // Limpiar opciones existentes
        localidadSelect.innerHTML = "";

        // Llenar el select de localidades con las localidades de la provincia seleccionada
        localidades.forEach(localidad => {
            const option = document.createElement("option");
            option.text = localidad;
            option.value = localidad;
            localidadSelect.add(option);
        });
    });
</script>


<script>
    const provincias = {
        "Álava": ["Vitoria-Gasteiz", "Amurrio", "Laudio/Llodio", "Salvatierra/Agurain", "Ayala/Aiara"],
        "Albacete": ["Albacete", "Hellín", "Villarrobledo", "Almansa", "La Roda"],
        "Alicante": ["Alicante/Alacant", "Elche/Elx", "Torrevieja", "Orihuela", "Benidorm"],
        "Almería": ["Almería", "Roquetas de Mar", "El Ejido", "Níjar", "Adra"],
        "Asturias": ["Oviedo", "Gijón", "Avilés", "Siero", "Langreo"],
        "Ávila": ["Ávila", "Arévalo", "El Tiemblo", "Cebreros", "Las Navas del Marqués"],
        "Badajoz": ["Badajoz", "Mérida", "Don Benito", "Almendralejo", "Villanueva de la Serena"],
        "Barcelona": ["Barcelona", "L'Hospitalet de Llobregat", "Badalona", "Terrassa", "Sabadell"],
        "Burgos": ["Burgos", "Miranda de Ebro", "Aranda de Duero", "Briviesca", "Lerma"],
        "Cáceres": ["Cáceres", "Plasencia", "Navalmoral de la Mata", "Coria", "Trujillo"],
        "Cádiz": ["Cádiz", "Jerez de la Frontera", "Algeciras", "San Fernando", "El Puerto de Santa María"],
        "Cantabria": ["Santander", "Torrelavega", "Camargo", "Santoña", "Laredo"],
        "Castellón": ["Castellón de la Plana/Castelló de la Plana", "Villarreal/Vila-real", "Burriana/Borriana", "Onda", "Almassora"],
        "Ciudad Real": ["Ciudad Real", "Puertollano", "Tomelloso", "Alcázar de San Juan", "Valdepeñas"],
        "Córdoba": ["Córdoba", "Lucena", "Puente Genil", "Montilla", "Priego de Córdoba"],
        "La Coruña": ["La Coruña/A Coruña", "Ferrol", "Santiago de Compostela", "Lugo", "Pontevedra"],
        "Cuenca": ["Cuenca", "Tarancón", "Motilla del Palancar", "San Clemente", "Las Pedroñeras"],
        "Gerona": ["Gerona/Girona", "Figueras/Figueres", "Blanes", "Lloret de Mar", "Olot"],
        "Granada": ["Granada", "Motril", "Almuñécar", "Armilla", "Maracena"],
        "Guadalajara": ["Guadalajara", "Azpeitia", "Guernica y Luno", "Eibar", "Elgoibar"],
        "Guipúzcoa": ["San Sebastián/Donostia", "Irun", "Rentería/Errenteria", "Hernani", "Lasarte-Oria"],
        "Huelva": ["Huelva", "Lepe", "Isla Cristina", "Ayamonte", "Moguer"],
        "Huesca": ["Huesca", "Jaca", "Monzón", "Barbastro", "Sabiñánigo"],
        "Islas Baleares": ["Palma", "Ibiza", "Manacor", "Mallorca", "Menorca"],
        "Jaén": ["Jaén", "Linares", "Úbeda", "Andújar", "Alcalá la Real"],
        "León": ["León", "Ponferrada", "San Andrés del Rabanedo", "Villaquilambre", "Astorga"],
        "Lérida": ["Lérida/Lleida", "Tárrega", "Balaguer", "Solsona", "Cervera"],
        "Lugo": ["Lugo", "Vilalba", "Monforte de Lemos", "Sarria", "Foz"],
        "Madrid": ["Madrid", "Móstoles", "Alcalá de Henares", "Fuenlabrada", "Leganés"],
        "Málaga": ["Málaga", "Marbella", "Mijas", "Torremolinos", "Benalmádena", "Fuengirola"],
        "Murcia": ["Murcia", "Cartagena", "Lorca", "Molina de Segura", "Alcantarilla"],
        "Navarra": ["Pamplona/Iruña", "Tudela", "Barañáin", "Burlada/Burlata", "Estella/Lizarra"],
        "Orense": ["Orense/Ourense", "Carballino", "Verín", "Barco de Valdeorras (O)", "O Barco de Valdeorras"],
        "Palencia": ["Palencia", "Aguilar de Campoo", "Guardo", "Saldaña", "Dueñas"],
        "Las Palmas": ["Las Palmas de Gran Canaria", "Telde", "Santa Lucía de Tirajana", "Arrecife", "Arucas"],
        "Pontevedra": ["Pontevedra", "Vigo", "Vilagarcía de Arousa", "Redondela", "Marín"],
        "La Rioja": ["Logroño", "Calahorra", "Arnedo", "Haro", "Santo Domingo de la Calzada"],
        "Salamanca": ["Salamanca", "Béjar", "Ciudad Rodrigo", "Villamayor", "Santa Marta de Tormes"],
        "Santa Cruz de Tenerife": ["Santa Cruz de Tenerife", "San Cristóbal de La Laguna", "Adeje", "Arona", "La Orotava"],
        "Segovia": ["Segovia", "Cuéllar", "El Espinar", "San Ildefonso", "Sepúlveda"],
        "Sevilla": ["Sevilla", "Dos Hermanas", "Alcalá de Guadaíra", "Utrera", "Mairena del Aljarafe"],
        "Soria": ["Soria", "Almazán", "El Burgo de Osma", "San Esteban de Gormaz", "Ólvega"],
        "Tarragona": ["Tarragona", "Reus", "El Vendrell", "Cambrils", "Salou"],
        "Teruel": ["Teruel", "Alcañiz", "Calamocha", "Andorra", "Montalbán"],
        "Toledo": ["Toledo", "Talavera de la Reina", "Illescas", "Torrijos", "Sonseca"],
        "Valencia": ["Valencia", "Torrente", "Gandía", "Paterna", "Sagunto/Sagunt"],
        "Valladolid": ["Valladolid", "Medina del Campo", "Laguna de Duero", "Tordesillas", "Peñafiel"],
        "Vizcaya": ["Bilbao", "Barakaldo", "Getxo", "Portugalete", "Santurtzi"],
        "Zamora": ["Zamora", "Benavente", "Toro", "Puebla de Sanabria", "Moraleja del Vino"],
        "Zaragoza": ["Zaragoza", "Calatayud", "Utebo", "Ejea de los Caballeros", "Tarazona"]
    };

    const provinciaSelect = document.getElementById("provincia");
    const localidadSelect = document.getElementById("localidad");

    provinciaSelect.addEventListener("change", () => {
        const provinciaSeleccionada = provinciaSelect.value;
        const localidades = provincias[provinciaSeleccionada];

        // Limpiar opciones existentes
        localidadSelect.innerHTML = "";

        // Llenar el select de localidades con las localidades de la provincia seleccionada
        localidades.forEach(localidad => {
            const option = document.createElement("option");
            option.text = localidad;
            option.value = localidad;
            localidadSelect.add(option);
        });
    });
</script>


