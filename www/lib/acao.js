$(function(){ 

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

//ações de mudança de tela ajudar
$(document).on("click","#Ajudar", function(){
$(location).attr("href", "ajudar.html");
});

//ações de mudança de tela lista de pessoas
$(document).on("click","#Listadepessoas", function(){
$(location).attr("href", "listapessoas.html");
});
//ações de mudança de tela lista de criar pedido
$(document).on("click","#criarpedido.html", function(){
$(location).attr("href", "criarpedido.html");
});



//ações adicionar dependentes

let d = $("[id^='dd']").length;
	$("#mais").click(function(){
		d++;
		$("#dependentespedido").append(`<div id="dd${d}"><input class="form-control border-purple" placeholder="Nome do dependente" type="text" name="nm_dependente"><br><input class="form-control border-purple" type="date" name="dt_nascimento"><br><input placeholder="CPF do dependente" class="form-control border-purple" type="number" name="cd_cpf"><br></div>`)
	})
	$("#menos").click(function(){
		$("[id^='dd']:last-child").remove()
  })
	})

//ações de mudança de tela cadastro amigo
$(document).on("click","#parceiro.html", function(){
$(location).attr("href", "cadastroamigo.html");
});

//ações de mudança de tela cadastro amigo
$(document).on("click","#parceiropag", function(){
$(location).attr("href", "desejoserparceiro.html");
});


