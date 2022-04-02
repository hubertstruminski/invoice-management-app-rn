import { closeAllDropdowns } from './dropdownActions';
import { 
    setCompanyDetails, 
    removeCompany,
    addCompany,
    updateCompany,
} from './companyActions';
import { 
    setTaxDetails, 
    removeTax,
    addTax,
    updateTax, 
} from './taxActions';
import { 
    setProductDetails, 
    removeProduct, 
    addProduct,
    updateProduct,
} from './productActions';
import { 
    setInvoiceDetails, 
    removeInvoice, 
} from './invoiceActions';
import { 
    setCustomerDetails, 
    removeCustomer, 
    addCustomer,
    updateCustomer,
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
};