import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PetComponent } from './pet/pet.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BoostrapComponent } from './boostrap/boostrap.component';
import { ColorPickerAppComponent } from './color-picker-app/color-picker-app.component';
import { NewCalculatorComponent } from './new-calculator/new-calculator.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { TodoComponent } from './todo/todo.component';
import { OneWayBinddingComponent } from './one-way-bindding/one-way-bindding.component';
import { TwoWayBinddingComponent } from './two-way-bindding/two-way-bindding.component';
import { CustomerComponent } from './customer/customer.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CountdownTimerAppComponent } from './countdown-timer-app/countdown-timer-app.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    CalculatorComponent,
    BoostrapComponent,
    ColorPickerAppComponent,
    NewCalculatorComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    TodoComponent,
    OneWayBinddingComponent,
    TwoWayBinddingComponent,
    CustomerComponent,
    NgforComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    CountdownTimerAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
