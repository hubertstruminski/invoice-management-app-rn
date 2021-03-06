import { CUSTOMERS, PRODUCTS } from '.';

export const INVOICES = [
    { 
        id: 1,
        number: '876865', 
        date: '2022-02-08T17:30:00',
        deadline: '2022-03-01T10:30:00', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo turpis diam feugiat quis euismod id neque a eleifend. In massa pretium sit odio amet. Ullamcorper ut convallis sit sed urna. Dictum mi adipiscing at turpis cras hac urna, commodo.',
        sentStatus: false,
        customer: CUSTOMERS[0],
        products: [
            PRODUCTS[0],
            PRODUCTS[1],
        ]
    },
    { 
        id: 2,
        number: '156932', 
        date: '2022-01-17T10:56:00',
        deadline: '2022-03-27T11:25:45', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo turpis diam feugiat quis euismod id neque a eleifend. In massa pretium sit odio amet.',
        sentStatus: true,
        customer: CUSTOMERS[0],
        products: [
            PRODUCTS[2],
        ],
    },
    { 
        id: 3,
        number: '641702', 
        date: '2021-12-30T07:12:38',
        deadline: '2022-03-15T09:12:20', 
        description: 'Ullamcorper ut convallis sit sed urna. Dictum mi adipiscing at turpis cras hac urna, commodo.',
        sentStatus: false,
        customer: CUSTOMERS[1],
        products: [
            PRODUCTS[3],
        ],
    },
    { 
        id: 4,
        number: '815002', 
        date: '2022-01-14T11:32:00',
        deadline: '2022-03-19T07:00:32', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sentStatus: true,
        customer: CUSTOMERS[1],
        products: [
            PRODUCTS[4]
        ],
    }, 
    {
        id: 5,
        number: '812672', 
        date: '2022-01-26T14:37:12',
        deadline: '2022-02-17T00:32:14', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo turpis diam feugiat quis euismod id neque a eleifend.',
        sentStatus: true,
        customer: CUSTOMERS[2],
        products: [
            PRODUCTS[5],
        ],
    },
    {
        id: 6,
        number: '345112',  
        date: '2022-03-01T10:30:00',
        deadline: '2022-02-28T12:34:04', 
        description: 'In massa pretium sit odio amet. Ullamcorper ut convallis sit sed urna. Dictum mi adipiscing at turpis cras hac urna, commodo.',
        sentStatus: false,
        customer: CUSTOMERS[2],
        products: [
            PRODUCTS[6],
            PRODUCTS[7],
        ],
    },
    { 
        id: 7,
        number: '171358', 
        date: '2021-12-27T11:34:10',
        deadline: '2022-03-01T10:30:00', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo turpis diam feugiat quis euismod id neque a eleifend. In massa pretium sit odio amet. Ullamcorper ut convallis sit sed urna. Dictum mi adipiscing at turpis cras hac urna, commodo.',
        sentStatus: false,
        customer: CUSTOMERS[3],
        products: [
            PRODUCTS[8],
            PRODUCTS[9],
        ],
    },
    { 
        id: 8,
        number: '101602', 
        date: '2021-11-17T11:01:18',
        deadline: '2022-03-27T11:25:45', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo turpis diam feugiat quis euismod id neque a eleifend. In massa pretium sit odio amet.',
        sentStatus: true,
        customer: CUSTOMERS[3],
        products: [
            PRODUCTS[10]
        ],
    },
    { 
        id: 9,
        number: '101262', 
        date: '2021-12-28T07:09:57',
        deadline: '2022-03-15T09:12:20', 
        description: 'Ullamcorper ut convallis sit sed urna. Dictum mi adipiscing at turpis cras hac urna, commodo.',
        sentStatus: false,
        customer: CUSTOMERS[2],
        products: [
            PRODUCTS[11],
            PRODUCTS[12],
        ],
    },
    { 
        id: 10,
        number: '815002', 
        date: '2022-01-14T21:11:49',
        deadline: '2022-03-19T07:00:32', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sentStatus: true,
        customer: CUSTOMERS[0],
        products: [
            PRODUCTS[13],
            PRODUCTS[14],
        ],
    }, 
];