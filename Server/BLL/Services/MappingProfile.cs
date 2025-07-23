using AutoMapper;
using BLL.Models;
using DAL.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace BLL.Services
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Payment, PaymentDTO>().ReverseMap();
            CreateMap<Invoice, InvoiceDTO>().ReverseMap();
        }
    }
}