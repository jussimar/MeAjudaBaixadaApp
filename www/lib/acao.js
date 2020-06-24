$(function(){
	// Ações mostrar tabela opção Quero ajudar
	$("#cardComInfos").hide();
	$("#listagem").change(function(){
		if($("#listagem").val() != "EUC"){
			$("#cardComInfos").show();
		} else {
			$("#cardComInfos").hide();
		}
	})

	// Ações botão cadastrar opção Preciso de ajuda
	$("#cadastrar").click(function(){
		alert("Cadastro feito com sucesso! Faça seu login e cadastre seus dependentes (caso tiver)")
		window.location.href = "../www/index.html"
	})

	//ações adicionar dependentes
	let d = $("[id^='dd']").length;
	$("#mais").click(function(){
		d++;
		$("#dependentespedido").append(`<div id="dd${d}"><input class="form-control border-purple" placeholder="Nome do dependente" type="text" name="nm_dependente"><br><input class="form-control border-purple" type="date" name="dt_nascimento"><br><input placeholder="CPF do dependente" class="form-control border-purple" type="number" name="cd_cpf"><br></div>`)
	})
	$("#menos").click(function(){
		$("[id^='dd']:last-child").remove()
  	})
		

	//ações de mudança de tela cadastro amigo
	$(document).on("click","#parceiro.html", function(){
	$(location).attr("href", "cadastroamigo.html");
	});

	//ações de mudança de tela cadastro amigo
	$(document).on("click","#parceiropag", function(){
	$(location).attr("href", "desejoserparceiro.html");
	});
})