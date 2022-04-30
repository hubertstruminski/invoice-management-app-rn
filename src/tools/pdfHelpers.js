import moment from 'moment';

import { languages } from "../internationalization/languages";

export function generateHTML(invoice, companies) {

    const { 
        number,
        date,
        deadline,
        customer,
        products,
    } = invoice;

    const {
        name,
        street,
        postalCode,
        city,
        country,
    } = companies?.[0];

    let result = 0;
    products.forEach(item => result += item.price);
    result = Math.round(result * 100) / 100;

    return `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">

                <style>
                    @page {
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    .wrapper {
                        display: flex;
                        flex: 1;
                        flex-direction: column;
                    }
                    .header {
                        margin-top: 7.5%;  
                    }
                    .columnContainer {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;
                        margin-top: 7.5%;
                        flex: 1;
                    }
                    .appName {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .appLabel {
                        font-size: 3.85vw; 
                        color: #45465A;
                    }
                    .dataContainer {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        flex-direction: row;
                    }
                    .fullWidth {
                        width: 100%;
                    }
                    .rightDataContainer {
                        margin-left: 3.5em;
                    }
                    .dataLabel {
                        font-size: 2.05vw;
                        color: #45465A;
                    }
                    .bold {
                        font-weight: 700;
                        font-size: 2.4vw;
                    }
                    .smallDataSpace {
                        margin-top: 1.7em;
                    }
                    th {
                        text-align: left;
                        border: 1px solid #45465A;
                        padding: 1.75%;
                        color: #45465A;
                    }
                    td {
                        padding: 1.75%;
                        color: #45465A;
                    }
                    table {
                        margin-top: 13%;
                        border: 1px solid #45465A;
                        border-collapse: collapse;
                    }
                    tr:last-child {
                        border-top: 1px solid #45465A;
                        font-weight: 700;
                    }
                    .dataBackground {
                        background-color: #f0f0f0;
                        padding-left: 3.5%;
                        padding-right: 3.5%;
                    }
                    .tableSpace {
                        margin-left: 3.5%;
                        margin-right: 3.5%;
                    }
                </style>

            </head>
            <body>
                <div class="wrapper">
                    <div class="header appName appLabel">
                        <p>${languages.appTitle}</p>
                    </div>
                    <div class="fullWidth">
                        <div class="columnContainer dataLabel dataBackground">
                            <div>
                                <p class="bold">${name}</p>
                                <p class="smallDataSpace">${street}</p>
                                <p>${postalCode} ${city}</p>
                                <p>${country}</p>
                            </div>
                            <div class="dataContainer">
                                <div class="leftDataContainer">
                                    <p class="bold">${languages.labels.invoice?.toUpperCase()}</p>
                                    <p class="smallDataSpace">${languages.labels.date}:</p>
                                    <p>${languages.labels.deadline}:</p>
                                    <p class="smallDataSpace">${languages.pdf.customerName}:</p>
                                    <p>${languages.pdf.customerEmail}:</p>
                                    <p class="smallDataSpace">${languages.labels.nip}:</p>
                                </div>
                                <div class="rightDataContainer">
                                    <p class="bold">${number}</p>
                                    <p class="smallDataSpace">${moment(new Date(date)).format("DD.MM.YYYY")}</p>
                                    <p>${moment(new Date(deadline)).format("DD.MM.YYYY")}</p>
                                    <p class="smallDataSpace">${customer?.fullName}</p>
                                    <p>${customer?.email}</p>
                                    <p class="smallDataSpace">${customer?.nip}</p>
                                </div>
                            </div>
                        </div>
                        <div class="header tableSpace">
                            <table class="fullWidth">
                                <tr>
                                    <th>${languages.pdf.productName}</th>
                                    <th>${languages.labels.amount}</th>
                                    <th>${languages.labels.unit}</th>
                                    <th>${languages.labels.discount}</th>
                                    <th>${languages.pdf.taxAmount}</th>
                                    <th>${languages.labels.price}</th>
                                </tr>
                                ${products.map(item => {
                                    return `
                                        <tr>
                                            <td>${item.name}</td>
                                            <td>${item.amount}</td>
                                            <td>${item.unit}</td>
                                            <td>${item.discount}%</td>
                                            <td>${item.tax?.amount}%</td>
                                            <td>${item.price} $</td>
                                        </tr>
                                    `;
                                })}                    
                                <tr>
                                    <td>${languages.pdf.total}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>${result} $</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
}