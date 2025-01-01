import { enviarDadosParaConsultaPonto, fetchApiData } from './apiServices';
import { cleanString, extractUniqueKeys, findMatchingIds } from '../utils/regexUtils';
import { formatDate } from '../utils/dateUtils';

interface ConsultaParams {
  usuarios: string[];
  data_inicial?: string;
  data_final?: string;
  guarnicao: string[];
}

export async function processarConsulta(params: ConsultaParams): Promise<any> {
  const { usuarios, data_inicial, data_final, guarnicao } = params;

  const cleanedList = usuarios.map(cleanString);

  try {
    // busca dados da api
    const apiData = await fetchApiData();

    // filtra os usuários que batem com os dados da api
    const uniqueKeys = extractUniqueKeys(cleanedList);
    const matches = findMatchingIds(uniqueKeys, apiData);

    if (matches.length === 0) {
      throw new Error('Nenhum usuário encontrado na API.');
    }

    const usuariosIds = matches.map((match) => match.id_usuario);

    // envia os dados para a api de consulta de ponto
    const result = await enviarDadosParaConsultaPonto(
      usuariosIds,
      data_inicial ? formatDate(data_inicial) : '',
      data_final ? formatDate(data_final) : '',
      guarnicao 
    );

    return result;
  } catch (error) {
    console.error('Erro ao processar consulta:', error);
    throw error;
  }
}
