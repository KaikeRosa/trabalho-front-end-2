
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './tasks/task.component';
import { HistoryComponent } from './pages/history/history.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'history', component: HistoryComponent }
];


@NgModule({
  declarations: [
  TaskComponent,
  HistoryComponent,
  AppComponent,
  HomeComponent,
  AboutComponent
],
  imports: [
    FormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
