import axios from 'axios';

export async function fetchApiData(): Promise<any[]> {
    try{
        const response = await axios.get('https://api-cpx-b555.onrender.com/api/data');
        return response.data.data.dados;
    }catch(error: any){
        console.error('Erro ao buscar dados da API: ', error.message);
        throw new Error('Não foi possivel buscar os dados da API');
    }
}

export async function enviarDadosParaConsultaPonto(
    usuarios: string[],
    dataInicio: string,
    dataFinal: string,
    guarnicao: string = '',
    registroDeletado: string = '0'
): Promise<any> {
    const apiUrl = 'https://api-cpx-b555.onrender.com/api/consulta-ponto';

    const dados = {
        data_inicio: dataInicio,
        data_final: dataFinal,
        usuarios,
        guarnicao,
        registro_deletado: registroDeletado,
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Dados recebidos da API externa:', responseData);
            return responseData;
        } else {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
    } catch (error: any) {
        console.error('Erro ao enviar dados:', error.message);
        throw error;
    }


}