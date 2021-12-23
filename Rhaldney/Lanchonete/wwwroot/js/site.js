function Consultar(id) {
    if (document.getElementById("codigo").value == "") {
        document.getElementById("codigo").focus();
        alert("Campo código não pode ficar em branco!");
        return;
    }
}
function Salvar(id) {
    if (document.getElementById("produto").value == "") {
        document.getElementById("produto").focus();
        alert("Campo produto não pode ficar em branco!");
        return;
    }
    if (document.getElementById("preco").value == "") {
        document.getElementById("preco").focus();
        alert("Campo preço não pode ficar em branco!");
        return;
    }
    if (document.getElementById("quantidade").value == "") {
        document.getElementById("quantidade").focus();
        alert("Campo quantidade não pode ficar em branco!");
        return;
    }
    if (document.getElementById("descricao").value == "") {
        document.getElementById("descricao").focus();
        alert("Campo descrição não pode ficar em branco!");
        return;
    }
    if (document.getElementById("imagem").value == "") {
        document.getElementById("imagem").focus();
        alert("Campo imagem não pode ficar em branco!");
        return;
    }
    console.log(document.getElementById("imagem").value)
}