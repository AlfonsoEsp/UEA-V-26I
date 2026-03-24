
fetch('json.json')
    .then(response => response.json())  
    .then(json => {
        document.getElementById('nombre').textContent = json.nombre;
        document.getElementById('edad').textContent = json.edad;
        document.getElementById('ciudad').textContent = json.ciudad;    
        console.log(json);
    })
