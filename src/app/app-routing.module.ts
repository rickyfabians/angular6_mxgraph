import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RickygantengComponent } from './rickyganteng/rickyganteng.component';
import { NameComponentComponent } from './name-component/name-component.component';

const routes: Routes = [
      // {
      //     path: '',
      //     //redirectTo: 'login', 
      //     redirectTo: 'rickyganteng',
      //     pathMatch: 'full'
      // },
      {   path: '',
          component:RickygantengComponent 
      },
    
];

@NgModule({
  	imports: [
    	RouterModule.forRoot(routes)
  	],
  	exports: [RouterModule],
  	declarations: []
})
export class AppRoutingModule {
 }

