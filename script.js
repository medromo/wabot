function leerTel () {
    let codigoPais = document.getElementById('codigo_pais').value;
    let telNum = document.getElementById('tel').value;
    let telString = telNum.replace(/\s+/g, '');
    console.log(telString);
    let telCompleto = codigoPais + telString;
    window.open(`https://api.whatsapp.com/send?phone=${telCompleto}`);
}

let boton = document.getElementById('ir_chat');

boton.addEventListener('click', leerTel);