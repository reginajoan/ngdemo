import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { BookCartComponent } from './book-cart/book-cart.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { AuthorComponent } from './pages/author/author.component';
import { AuthorListComponent } from './pages/author-list/author-list.component';
import { CategoryComponent } from './pages/category/category.component';

export const AppRoutes: any =[
  {path: "", component: AppComponent},
  {path: "home", component: HomeComponent, canActivate:[AuthGuard]},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "author", component: AuthorComponent, canActivate:[AuthGuard]},
  {path: "author-list", component: AuthorListComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BookCartComponent,
    HomeComponent,
    AuthorComponent,
    AuthorListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {useHash: true})
  ],
  providers: [UsersService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
