using DAL.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Api
{
    public interface ICurrencyConversionService
    {
        Task<decimal> ConvertToUSD(Currency currency, decimal amount);
    }
}
