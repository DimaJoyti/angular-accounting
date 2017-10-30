import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillComponent } from './pages/bill/bill.component';
import { HistoryComponent } from './pages/history/history.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { RecordsComponent } from './pages/records/records.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
    {path: 'system', component: SystemComponent, children: [
        {path: 'bill', component: BillComponent},
        {path: 'history', component: HistoryComponent},
        {path: 'planning', component: PlanningComponent},
        {path: 'records', component: RecordsComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SystemRoutingModule { }