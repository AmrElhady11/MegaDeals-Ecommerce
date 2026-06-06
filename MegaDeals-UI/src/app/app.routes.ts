import { Routes } from '@angular/router';
import { Products } from './components/pages/products/products';
import { MyWishlist } from './components/pages/my-wishlist/my-wishlist';

export const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'products',},
  {path:'products',component:Products},
  {path:'wishlist',component:MyWishlist},
];
