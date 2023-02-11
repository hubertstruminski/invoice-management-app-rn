import { closeAllDropdowns } from './dropdownActions';
import { 
    setCompanyDetails, 
    removeCompany,
    addCompany,
    updateCompany,
    fetchCompanies,
} from './companyActions';
import { 
    setTaxDetails, 
    removeTax,
    addTax,
    updateTax, 
    fetchTaxes,
} from './taxActions';
import { 
    setProductDetails, 
    removeProduct, 
    addProduct,
    updateProduct,
    fetchProducts,
    setChosenUnit,
    setIsUnitModalVisible,
} from './productActions';
import { 
    setInvoiceDetails, 
    removeInvoice, 
    addInvoice,
    updateInvoice,
    fetchInvoices,
} from './invoiceActions';
import { 
    setCustomerDetails, 
    removeCustomer, 
    addCustomer,
    updateCustomer,
    fetchCustomers,
} from './customerActions';

export {
    closeAllDropdowns,
    setCompanyDetails,
    setTaxDetails,
    setProductDetails,
    setInvoiceDetails,
    setCustomerDetails,
    removeCompany,
    removeTax,
    removeCustomer,
    removeProduct,
    removeInvoice,
    addCompany,
    updateCompany,
    addCustomer,
    updateCustomer,
    addTax,
    updateTax,
    addProduct,
    updateProduct,
    addInvoice,
    updateInvoice,
    fetchTaxes,
    fetchCompanies,
    fetchProducts,
    fetchInvoices,
    fetchCustomers,
    setChosenUnit,
    setIsUnitModalVisible,
};