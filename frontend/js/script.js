document.getElementById("filterForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Mensagem de carregamento
    document.getElementById("statusMessage").innerHTML = '<b>Realizando consulta... por favor aguarde!</b><br><br><img src="images/loading.gif" alt="Realizando consulta... por favor aguarde!"width="120" height="16">';
    document.getElementById("recordCount").innerHTML = "";

    let formData = new FormData(this);
    let params = new URLSearchParams(formData).toString();

    fetch("php/fetch_data.php?" + params)
        .then(response => response.json())
        .then(data => {
            let table = document.getElementById("resultsTable");
            table.innerHTML = "<tr><th>CNPJ</th><th>Razão Social</th><th>Nome Fantasia</th><th>Capital Social</th><th>Situação Cadastral</th><th>Dt Abertura</th><th>CNAE Principal</th><th>CNAE Principal</th><th>Matriz/Filial</th><th>Tipo de Logradouro</th><th>Logradouro</th><th>Número</th><th>Complemento</th><th>Bairro</th><th>CEP</th><th>Cidade</th><th>Estado</th><th>DDD</th><th>Telefone1</th><th>Telefone2</th><th>E-mail</th><th>Cód. Cliente SAP/SF</th><th>Razão Cliente SAP/SF</th><th>Filial Cliente SAP/SF</th>";

            data.data.forEach(row => {
                let tr = document.createElement("tr");
                Object.values(row).forEach(value => {
                    let td = document.createElement("td");
                    td.textContent = value;
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });

            // Exibindo a quantidade de registros
            document.getElementById("recordCount").innerHTML = `Total de empresas encontradas: <b>${data.count}</b> | Máximo de <b>1000</b> resultados por página, clique em <b>Baixar Resultados em Excel</b> para obter todos. <br><br> <a id="exportExcel" href="php/export_excel.php">Baixar Resultados em Excel</a>`;

            // Mensagem de sucesso
            document.getElementById("statusMessage").innerHTML = "<b>Consulta concluída com sucesso!</b>";
        })
        .catch(error => {
            // Mensagem de erro
            document.getElementById("statusMessage").innerHTML = "<b>Ocorreu um erro na consulta. Tente novamente.</b>";
        });

    document.getElementById("exportExcel").addEventListener("click", function (e) {
        e.preventDefault();
        let formData = new FormData(document.getElementById("filterForm"));
        let params = new URLSearchParams(formData).toString();
        window.location.href = "php/export_excel.php?" + params;
    });

});

document.getElementById("clearFilters").addEventListener("click", function () {
    document.getElementById("filterForm").reset();
    document.getElementById("resultsTable").innerHTML = "";
    document.getElementById("statusMessage").innerHTML = "";
    document.getElementById("recordCount").innerHTML = "";

});