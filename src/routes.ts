import { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { DetailsComponent } from "./app/details/details.component";
import { LoginComponent } from "./app/login/login.component";

const routeConfig: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'HomeDetails'
    }
];

export default routeConfig