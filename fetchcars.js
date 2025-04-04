import { JSDOM } from 'jsdom';
import { writeFileSync } from 'fs';
import path from 'path';
import Car from './car.js';

const PAGES = 15;

async function fetchPage(pageNumber) {
    const website = `https://www.otomoto.pl/osobowe?page=${pageNumber}`;
    const html = await fetch(website).then((response) => response.text());
    return html;
}

export default async function fetchCars() {
    let allCars = [];
    for (let i = 1; i <= PAGES; i++) {
        let html = await fetchPage(i);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let adverts = document.getElementsByClassName('ooa-16cop2i e1x04pl90');
        let cars = [];
        Array.from(adverts).forEach((advert) => {
            let title = advert.getElementsByClassName('ei3upbu0 ooa-1jjzghu')[0].querySelector('a').innerHTML;
            let splitTitle = title.split(' ');
            let brand = splitTitle[0];
            let model = splitTitle[1];
            let price = Number(advert.getElementsByClassName('e149hmnd1 ooa-1n2paoq')[0].innerHTML.replaceAll(' ', ''));
            let mileage = Number(advert.getElementsByClassName('ooa-1cl0af6 e1i4zr1y2')[0].innerHTML.split('</svg>')[1].replace('km', '').replaceAll(' ', ''));
            let fuel = advert.getElementsByClassName('ooa-1cl0af6 e1i4zr1y2')[1].innerHTML.split('</svg>')[1].replaceAll(' ', '');
            let transmission = advert.getElementsByClassName('ooa-1cl0af6 e1i4zr1y2')[2].innerHTML.split('</svg>')[1].replaceAll(' ', '');
            let year = Number(advert.getElementsByClassName('ooa-1cl0af6 e1i4zr1y2')[3].innerHTML.split('</svg>')[1].replaceAll(' ', ''));
            let car = new Car(brand, model, price, mileage, fuel, transmission, year);
            cars.push(car);
        });
        allCars = [...allCars, ...cars];
        console.log(`Page ${i} fetched!`);
    }
    return allCars;
}