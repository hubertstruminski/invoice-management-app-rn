export const navigateFromTile = (label, navigate) => {
    switch(label) {
        case "myCompanies":
            navigate('MyCompaniesScreen');
            break;
        case "customers":
            navigate('CustomersScreen');
            break;
        case "invoices":
            navigate('InvoicesScreen');
            break;
        case "products":
            navigate('ProductsScreen');
            break;
        case "taxes":
            break;
        default: 
            break;
    }
}