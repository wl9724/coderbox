import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'json', pathMatch: 'full' },
      { path: 'json', loadComponent: () => import('./app/json-tool/json-tool.component').then(m => m.JsonToolComponent) },
      { path: 'timestamp', loadComponent: () => import('./app/timestamp-tool/timestamp-tool.component').then(m => m.TimestampToolComponent) }
    ])
  ]
})
  .catch(err => console.error(err));