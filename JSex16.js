function Calcular()
{
    var txtN1 = document.getElementById('txtN1');
    var txtN2 = document.getElementById('txtN2');
    var operacao = document.getElementsByName('radOperacao');
    var result = document.getElementById('result');
    if (txtN1.value != '' && txtN2.value != '')
    {
        if (operacao[0].checked)
        {
            result.innerHTML = `Resultado: ${Number(txtN1.value) + Number(txtN2.value)}`;
        }
        else if (operacao[1].checked)
        {
            result.innerHTML = `Resultado: ${txtN1.value - txtN2.value}`;
        }
        else if (operacao[2].checked)
        {
            result.innerHTML = `Resultado: ${txtN1.value / txtN2.value}`;
        }
        else if (operacao[3].checked)
        {
            result.innerHTML = `Resultado: ${txtN1.value * txtN2.value}`;
        }
        else
        {
            alert(`[ERRO] Selecione uma operação!`);
        }
    }
    else
    {
        alert('[ERRO] Verifique os dados e tende novamente!');
    }
}

function Limpa()
{
    var txtN1 = document.getElementById('txtN1');
    var txtN2 = document.getElementById('txtN2');
    var operacao = document.getElementsByName('radOperacao');
    var result = document.getElementById('result');
    txtN1.value = '';
    txtN2.value = ` `;
    operacao[0].checked;
    result.innerHTML = `Resultado: `;
}