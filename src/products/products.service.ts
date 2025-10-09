import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  products: Product[] = [];


  create(data: any) {
    const newProduct = new Product();
    newProduct.id = this.products?.[this.products.length - 1]?.id + 1 || 1;
    newProduct.name = data.name;
    newProduct.size = data.size;
    newProduct.price = data.price;
    newProduct.brand = data.brand;

    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
     return this.products.find(product => product.id === id);

    // for(let i = 0; i < this.products.length; i++ ) {
    //   if( id == this.products[i].id ) {
    //      return this.products[i];
    //   }
    // }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number,  data : any) {
     const product = this.findOne(id);
     // @ts-ignore
     product.name = data.name;
     return product;
  }

  remove(id: number) {
    this.products =  this.products.filter(product => product.id !== id);
  }
}
