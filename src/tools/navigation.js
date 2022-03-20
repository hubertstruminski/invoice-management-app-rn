export const navigateFromTile = (label, navigate) => {
    switch(label) {
        case "myCompanies":
            navigate('MyCompaniesScreen');
            break;
        case "customers":
            break;
        case "invoices":
            break;
        case "products":
            break;
        case "taxes":
            break;
        default: 
            break;
    }
}