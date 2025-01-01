export async function formatarResultado(
    dados: { 
        usuarioId: number; 
        nomeUsuario: string;
        guarnicaoNome: string;
        totalTempo: string;}[]) {
    return dados
      .map((item) => {
        if (item.totalTempo === "Nenhum dado encontrado") {
          return `não foram encontradas horas do ${item.nomeUsuario || `usuário com ID ${item.usuarioId} em ${item.guarnicaoNome}`}`;
        } else {
          return `${item.nomeUsuario} possui: ${item.totalTempo} em ${item.guarnicaoNome}`;
        }
      })
      .join('\n');
      
  }
  
