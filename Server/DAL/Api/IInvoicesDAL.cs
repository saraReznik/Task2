using DAL.Models;

namespace DAL.Api
{
    public interface IInvoicesDAL
    {
        Task<List<Invoice>> GetAllInvoicesAsync();
    }
}