import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

/*
* cuando creas un nuevo modulo, 
* se crea la calse con la carpeta
* adeas de de que se importa en esta misma clase
*/
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
