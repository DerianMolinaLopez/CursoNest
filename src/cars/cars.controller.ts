import { Controller,Get,Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    private cars: string[] = ['car1', 'car2', 'car3'];
    @Get()
    getAlCars(){
        return this.cars;
    }
    @Get(':id')
    getCarById(@Param('id') id: string){
        console.log(id)
        return id
    }
    @Get('/position/:position')
    getCarByPosition(@Param('position') position:string){
       
        if(+position>=this.cars.length) return 'Posicion fuera de rango'
        return this.cars[position]
    }
}
