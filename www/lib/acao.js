//ações de mudança de tela
$(document).on("click","#Pedir", function(){
$(location).attr("href", "pedirajuda.html");
});

//ações de mudança de tela pedir ajuda
$(document).on("click","#Preciso", function(){
$(location).attr("href", "precisodeajuda.html");
});

//ações de mudança de tela dependentes
$(document).on("click","#PedirAjuda", function(){
$(location).attr("href", "dependentes.html");
});

//ações de mudança de tela adicionando dependente
$(document).on("click","#addepe", function(){
$(location).attr("href", "adicionadependentes.html");
});

//ações de mudança de tela adicionando mais dependentes
$(document).on("click","#Cadastrardepe", function(){
$(location).attr("href", "dependentes.html");
});

//ações de mudança de tela continuar pedido
$(document).on("click","#continuar", function(){
$(location).attr("href", "pedido.html");
});
