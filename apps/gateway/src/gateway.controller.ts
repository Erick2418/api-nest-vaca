import { Controller, Get } from '@nestjs/common';

@Controller('gateway')
export class GatewayController {


    @Get('/getusuariosxd')
    getUsers(): string {
        return 'Lista de usuarios'; // Aquí puedes devolver la lista de usuarios desde tu base de datos
    }


}
