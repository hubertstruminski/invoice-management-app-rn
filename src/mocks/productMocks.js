import React from 'react';

import { 
    CUSTOMERS, 
    INVOICES, 
    TAXES, 
} from '.';
import { 
    CalendarPreviewIcon, 
    CreditCardIcon, 
    MobileIcon, 
    PenIcon,
} from "../../assets";

export const PRODUCTS = [
    { 
        id: 1,
        name: 'Strawberry', 
        price: 0.76, 
        amount: 4, 
        discount: 3,
        unit: 'PIECES',
        // invoice: INVOICES[0],
        // customer: CUSTOMERS[1],
        tax: TAXES[0],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis auctor lorem ut suscipit. Integer eu tortor vestibulum, suscipit mauris non, posuere libero. ',
    },
    { 
        id: 2,
        name: 'Raspberry', 
        price: 1.12, 
        amount: 11, 
        discount: 0,
        unit: 'PIECES',
        // invoice: INVOICES[0],
        // customer: CUSTOMERS[1],
        tax: TAXES[0],
        description: 'Pellentesque erat erat, ultricies vitae tortor mattis, aliquam auctor leo. Sed purus tellus, convallis vel lobortis vitae, elementum in nulla.',
    },
    { 
        id: 3,
        name: 'Tomato', 
        price: 0.24, 
        amount: 13, 
        discount: 0,
        unit: 'PIECES',
        // invoice: INVOICES[1],
        // customer: CUSTOMERS[1],
        tax: TAXES[0],
        description: 'Sed a rutrum eros.',
    },
    { 
        id: 4,
        name: 'Orange', 
        price: 0.68, 
        amount: 21, 
        discount: 0,
        unit: 'PIECES',
        // invoice: INVOICES[2],
        // customer: CUSTOMERS[1],
        tax: TAXES[0],
        description: 'Pellentesque id tristique lorem, nec dignissim magna. Fusce nec odio vitae turpis cursus volutpat. Quisque sit amet mattis justo. Sed lectus dolor, pretium a enim vitae, fermentum mattis nisi. Mauris dapibus egestas eros ac tristique.',
    },
    { 
        id: 5,
        name: 'Watermelon', 
        price: 0.92, 
        amount: 7, 
        discount: 0,
        unit: 'PIECES',
        // invoice: INVOICES[3],
        // customer: CUSTOMERS[1],
        tax: TAXES[0],
        description: 'Donec ultrices quam eget euismod pretium. Integer bibendum convallis volutpat. Nullam et est nec magna dignissim auctor. Curabitur pharetra velit at quam maximus rhoncus. Integer eget lacus mi. Suspendisse tellus sem, sollicitudin non maximus at, eleifend ut leo. Sed eu posuere enim.',
    },
    { 
        id: 6,
        name: 'Cucumber', 
        price: 0.49, 
        amount: 56, 
        discount: 0,
        unit: 'PIECES',
        // invoice: INVOICES[4],
        // customer: CUSTOMERS[1],
        tax: TAXES[0],
        description: 'Suspendisse sed sollicitudin erat. Ut non posuere purus. Maecenas consequat tortor ac eleifend interdum. Vivamus elementum et felis quis condimentum. Aenean aliquam vel ipsum eu gravida.',
    },
    { 
        id: 7,
        name: 'Computer service', 
        price: 120, 
        amount: 5, 
        discount: 2,
        unit: 'PIECES',
        // invoice: INVOICES[5],
        // customer: CUSTOMERS[3],
        tax: TAXES[0],
        description: 'Phasellus elementum pellentesque enim sit amet ultricies. Praesent consequat felis nisl, mollis consectetur urna tempus id. ',
    },
    { 
        id: 8,
        name: 'Mobile App - Invoice App', 
        price: 56000, 
        amount: 1, 
        discount: 3,
        unit: 'TIME',
        // invoice: INVOICES[5],
        // customer: CUSTOMERS[3],
        tax: TAXES[0],
        description: 'Proin feugiat, mi non pellentesque tincidunt, mauris diam mollis erat, vel commodo magna elit vitae risus.',
    },
    { 
        id: 9,
        name: 'Coaching #1', 
        price: 70, 
        amount: 3, 
        discount: 1,
        unit: 'TIMES',
        // invoice: INVOICES[6],
        // customer: CUSTOMERS[0],
        tax: TAXES[1],
        description: 'Sed iaculis vestibulum magna, non imperdiet quam dictum eget. Aenean vehicula mauris nec nulla fringilla ultricies. Pellentesque fermentum dolor leo, nec sagittis dolor tempor non. ',
    },
    { 
        id: 10,
        name: 'Coaching #2', 
        price: 70, 
        amount: 1, 
        discount: 0,
        unit: 'TIMES',
        // invoice: INVOICES[6],
        // customer: CUSTOMERS[0],
        tax: TAXES[2],
        description: 'Vestibulum interdum, lectus nec dapibus placerat, lectus dui interdum metus, id cursus lectus massa varius ligula. Duis tincidunt ultrices ullamcorper.',
    },
    { 
        id: 11,
        name: 'HR Recruitment process', 
        price: 1200, 
        amount: 1, 
        discount: 0,
        unit: 'TIMES',
        // invoice: INVOICES[7],
        // customer: INVOICES[0],
        tax: TAXES[1],
        description: 'Aliquam tincidunt et leo quis semper. Mauris nisl lacus, lacinia nec ligula quis, viverra varius ipsum. Curabitur vel laoreet quam, quis posuere ligula.',
    },
    { 
        id: 12,
        name: 'Lego toys', 
        price: 160, 
        amount:7, 
        discount: 4,
        unit: 'PIECES',
        // invoice: INVOICES[8],
        // customer: CUSTOMERS[2],
        tax: TAXES[0],
        description: 'Aenean lacinia sed leo sed vulputate. Vestibulum ultrices lectus eu commodo mattis. Suspendisse lectus augue, imperdiet eget tellus non, euismod elementum felis.',
    },
    { 
        id: 13,
        name: 'Castle toys', 
        price: 89.99, 
        amount: 1, 
        discount: 3,
        unit: 'PIECES',
        // invoice: INVOICES[8],
        // customer: CUSTOMERS[2],
        tax: TAXES[2],
        description: 'Fusce orci diam, dignissim id tincidunt id, maximus sit amet magna.',
    },
    { 
        id: 14,
        name: 'IT Mentoring #1', 
        price: 250, 
        amount: 3, 
        discount: 0,
        unit: 'TIMES',
        // invoice: INVOICES[9],
        // customer: CUSTOMERS[3],
        tax: TAXES[0],
        description: 'Donec tristique nulla sit amet porttitor porttitor. Fusce tempus elementum luctus. Cras ultricies eros ut magna hendrerit laoreet. Phasellus vehicula vehicula malesuada.',
    },
    { 
        id: 15,
        name: 'IT Mentoring #2', 
        price: 250, 
        amount: 1, 
        discount: 0,
        unit: 'TIMES',
        // invoice: INVOICES[9],
        // customer: CUSTOMERS[3],
        tax: TAXES[2],
        description: 'Mauris tempor, magna id tristique sodales, neque felis ultrices ligula, ac porta dolor risus vehicula justo.',
    },
]; 

export const PRODUCT_PREVIEW_ICONS = [
    <CalendarPreviewIcon />,
    <PenIcon />,
    <MobileIcon />,
    <CreditCardIcon />,
];