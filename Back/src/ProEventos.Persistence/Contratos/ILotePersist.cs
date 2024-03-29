using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface ILotePersist
    {
        /// <summary>
        /// Método Get que retornará uma lista de lotes por eventoId.
        /// </summary>
        /// <param name="eventoId">Código chave da tabela Evento</param>
        /// <returns>Array de Lotes</returns>
        Task<Lote[]> GetLotesByEventoIdAsync(int eventoId);

        /// <summary>
        /// Método Get que retornará apenas 1 Lote.
        /// </summary>
        /// <param name="eventoId">Código chave da tabela Evento</param>
        /// <param name="includePalestrantes">Código chave da tabela Lote</param>
        /// <returns>Apenas 1 Lote</returns>
        Task<Lote> GetLoteByEventoIdsAsync(int eventoId, int id);
    }
}