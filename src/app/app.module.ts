import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from '@modules/auth/guards';
import { UserService } from '@modules/auth/services';
import { ChartsAreaComponent } from '@modules/charts/components';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';

@NgModule({
    declarations: [AppComponent, ListsComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule ,FormsModule],
    providers: [UserService,AuthGuard,ChartsAreaComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
