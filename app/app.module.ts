import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ApplicationComponent from './components/application/application';
import NavbarComponent from './components/navbar/navbar';
import FooterComponent from './components/footer/footer';
import SearchComponent from './components/search/search';
import CarouselComponent from './components/carousel/carousel';
import ProductItemComponent from './components/product-item/product-item';
import StarsComponent from './components/stars/stars';
import { ProductService } from './services/product-service';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ ApplicationComponent,
                    NavbarComponent,
                    SearchComponent,
                    CarouselComponent,
                    ProductItemComponent,
                    StarsComponent,
                    FooterComponent ],
    providers:    [ProductService],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }
