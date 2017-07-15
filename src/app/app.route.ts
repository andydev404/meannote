import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewnoteComponent } from './components/newnote/newnote.component';
import { ViewnoteComponent } from './components/viewnote/viewnote.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'note/new', component: NewnoteComponent },
    { path: 'note/:id', component: ViewnoteComponent },
    { path: 'note/update/:id', component: UpdatenoteComponent },
    { path: '**', redirectTo:'' },
];

export const ROUTES = RouterModule.forRoot(routes);