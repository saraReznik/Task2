using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Enums
{
    public enum InvoiceStatus
    {
        Draft = 0,         
        Sent = 1,         
        Paid = 2,         
        Overdue = 3,     
        Canceled = 4       
    }
}
