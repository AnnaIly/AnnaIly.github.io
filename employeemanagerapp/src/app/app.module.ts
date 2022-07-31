import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [], //add [EmployeeService] here in case not specified as @Injectable({ providedIn: 'root'}) in employee.service.ts
  bootstrap: [AppComponent]
})
export class AppModule { }
