import axios from "axios";

export const getPayments = () => axios.get("/api/payments");
export const getInvoices = () => axios.get("/api/invoices");
