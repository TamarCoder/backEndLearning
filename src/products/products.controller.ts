import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  // ქრიეით მეთოდი გაეშვას მაშინ როცა პოსტ მეთოდით მოგვმართავს,
  create(@Body() data: CreateProductDto){
    return data;
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
  update(@Param('id') id: string, @Body() data: UpdateProductDto)
  {
    // return `განახლებულია ${id} პროდუქტი ,   პარამეტრებით: ${color} , ${size}, ${brand} , ${category}, ${price} , ${title}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return  `წაშლილია პროდუქცი id - ით ${id}`
  }
}
