namespace BLL.Api
{
    public interface IInvoiceBLL
    {
        Task<int> GetInvoiceCountByMonthAsync(DateTime date);
        Task<string> GetPercentageChangeLastMonthAsync();
    }
}