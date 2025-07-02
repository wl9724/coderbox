import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonToolComponent } from './json-tool/json-tool.component';
import { TimestampToolComponent } from './timestamp-tool/timestamp-tool.component';

const routes: Routes = [
  { path: 'json', component: JsonToolComponent },
  { path: 'timestamp', component: TimestampToolComponent },
  { path: '**', redirectTo: 'json' }, // 默认跳转到 JSON 页面
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
