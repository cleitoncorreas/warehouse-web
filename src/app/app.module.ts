import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./guards/auth.guard";
import { NotAuthenticatedGuard } from "./guards/not-authenticated.guard";
//import { InMemoryTaskDataService } from "./in-memory-task-data.service";
import { NavbarComponent } from './navbar/navbar.component';
import { ProductSearchComponent } from "./navbar/product-search/product-search.component";
import { TaskSearchComponent } from "./navbar/task-search/task-search.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductsComponent } from "./products/products.component";
import { ProductService } from "./products/shared/product.service";
import { AuthService } from "./shared/auth.service";
//import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { TokenService } from "./shared/token.service";
import { SignInFormComponent } from "./sign-in-form/sign-in-form.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";
import { TaskService } from "./tasks/shared/task.service";
import { TaskDetailComponent } from "./tasks/task-detail/task-detail.component";
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ProductsComponent,
    SignInFormComponent,
    SignUpFormComponent,
    TaskSearchComponent,
    TasksComponent,
    TaskDetailComponent,
    ProductSearchComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
    //InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
  ],
  providers: [
    AuthGuard,
    AuthService,
    NotAuthenticatedGuard,
    TokenService,
    TaskService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule{

}
