$(function(){
	$("#cardComInfos").hide();
	$("#listagem").change(function(){
		if($("#listagem").val() != "EUC"){
			$("#cardComInfos").show();
		} else {
			$("#cardComInfos").hide();
		}
	})

	$("#cadastrar").click(function(){
		alert("Cadastro feito com sucesso! Faça seu login e cadastre seus dependentes (caso tiver)")
		window.location.href = "../www/index.html"
	})
})