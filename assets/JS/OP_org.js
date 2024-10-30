$(document).ready(function() {
    $.ajax({
        url: "organizaciones.json",
        method: "GET",
        dataType: "json",
        success: function(data) {
            if (data && data.organizations) {
                renderOrg(data.organizations);
            } else {
                console.error("Datos en formato incorrecto.");
            }
        },
        error: function() {
            console.error("No se pudo cargar el archivo JSON.");
        }
    });


    function renderOrg(organizations) {
        const container = $('.container .row');
        container.empty();
        organizations.forEach(org => {
            const orgHTML = `
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${org.name}</h5>
                            <p class="card-text">${org.description}</p>
                            <a href="${org.website}" class="btn btn-primary" target="_blank">Visitar sitio web</a>
                        </div>
                    </div>
                </div>
            `;
            container.append(orgHTML);
        });
    }
});
