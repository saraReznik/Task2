using DAL.Enums;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Models
{
    public class InvoiceDTO
    {
        public int InvoiceId { get; set; }
        public string? InvoiceNumber { get; set; }
        public DateTime IssueDate { get; set; }
        public DateTime? DueDate { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal PaidAmount { get; set; }
        public InvoiceStatus Status { get; set; }
        public string? ClientName { get; set; }
        public string? ClientEmail { get; set; }
        public string? Description { get; set; }
        public List<Payment> Payments { get; set; } = new();
        public DateTime CreatedAt { get; set; }
    }
}
