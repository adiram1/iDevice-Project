<<<<<<< HEAD
import { Product } from "./product";
import { User } from "./user";

export class Cart {
    user: User;
    products: Product[];
    totalAmount: number;
  
    constructor(user: User) {
      this.user = user;
      this.products = [];
      this.totalAmount = 0;
    }
=======
import { Product } from "./product";
import { User } from "./user";

export class Cart {
    user: User;
    products: Product[];
    totalAmount: number;
  
    constructor(user: User) {
      this.user = user;
      this.products = [];
      this.totalAmount = 0;
    }
>>>>>>> be96b3614cab7aadb259689a616faf125233c34a
  }