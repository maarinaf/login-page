document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Senha:', password);
    
    // Exemplo de validação simples
    if (email && password) {
        alert('Login realizado com sucesso!');
        // Aqui você pode redirecionar o usuário ou fazer outras ações
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
