using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DAL.Models;
using DAL.Api;

namespace DAL.Services
{
    public class InvoicesDAL : IInvoicesDAL
    {
        private readonly AppDbContext _context;

        public InvoicesDAL(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Invoice>> GetAllInvoicesAsync()
        {
            return await _context.Invoices.ToListAsync();
        }
    }
}
