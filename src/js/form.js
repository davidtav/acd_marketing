const form =document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    emailjs.init({
        publicKey: "iPiXFtzeJH7SHu0Cp",
      });
    emailjs.sendForm('service_eg0d4nh', 'template_wam8ski', form)  
        .then ((response) => alert("Mensagem enviada com sucesso!"))
        .catch((error) => {
            console.log(error);
            alert("Erro ao enviar mensagem!");
        });
    form.reset();
});