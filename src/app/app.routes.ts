import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatelogComponent } from './catelog/catelog.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    // { path: '', component:  }, 
    { path: 'catalog', component: CatelogComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'cart', component: CartComponent },
    // Add more routes as needed
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
