import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(
     @Body('color') color: string,
     @Body('size') size : string,
     @Body('brand') brand: string,
     @Body('category')category:string,
     @Body('price') price:number,
     @Body('title') title:string
     ){
    return `დამატებულია ყველა პროდუქტი პარამეტრებით: ${color} , ${size}, ${brand} , ${category}, ${price} , ${title}`;

  }

  @Get()
  findAll(
    @Query('category' ) category? : string,
    @Query('color') color?: string,
    @Query('size') size?: string,
    @Query('brand') brand?: string,
  ){
    return  'თქვენ მოითხოვეთ ყველა წითელი მაისურის სია, რომლის ზომაც არის მედიუმი და ბრენდია ზარა'
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `თქვენ მოითხოვეთ პროდუქტის ინფორმაცია, რომლის id არის ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string,
         @Body('color') color: string,
         @Body('size') size : string,
         @Body('brand') brand: string,
         @Body('category')category:string,
         @Body('price') price:number,
         @Body('title') title:string)
  {
    return `განახლებულია ${id} პროდუქტი ,   პარამეტრებით: ${color} , ${size}, ${brand} , ${category}, ${price} , ${title}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return  `წაშლილია პროდუქცი id - ით ${id}`
  }
}
