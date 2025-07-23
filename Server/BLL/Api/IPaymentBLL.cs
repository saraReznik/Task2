namespace BLL.Api
{
    public interface IPaymentBLL
    {
        Task<string> GetPercentageChangeLastMonthAsync();
        Task<decimal> GetTotalPaymentsByMonthAsync(DateTime date);
    }
}