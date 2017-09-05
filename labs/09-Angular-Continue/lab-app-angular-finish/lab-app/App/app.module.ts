import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
    { path: '', component: UserComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,
        RouterModule.forRoot(appRoutes)],
    providers: [DataService],
    declarations: [AppComponent, UserComponent, AboutComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
