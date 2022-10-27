import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title='Angular Pipes';   
  sortoption: string = ''; 
  today=new Date(); 
  productsList: any = [
    { productName: 'Samsung A21', price: 18000 },
    { productName: 'Apple iPhone 9S', price: 60000 },
    { productName: 'Lava s9', price: 10000 },
    { productName: 'Nokia 5.4', price: 15000 },
    { productName: 'Vivo V11 pro', price: 26000 },
  ];  
}   
