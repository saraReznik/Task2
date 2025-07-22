using DAL.Models;

namespace DAL.Api
{
    public interface IPaymentsDAL
    {
        Task<List<Payment>> GetAllPaymentsAsync();
        Task<List<Payment>> GetCompletedPaymentsAsync();
    }
}