export async function formatarResultado(
    dados: { 
        usuarioId: number; 
        nomeUsuario: string; 
        totalTempo: string }[]) {
    return dados
      .map((item) => {
        if (item.totalTempo === "Nenhum dado encontrado") {
          return `não foram encontradas horas do ${item.nomeUsuario || `usuário com ID ${item.usuarioId}`}`;
        } else {
          return `${item.nomeUsuario}: ${item.totalTempo}`;
        }
      })
      .join(' | '); 
  }
  
