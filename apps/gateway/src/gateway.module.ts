import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatewayController } from  './gateway.controller';
 
@Module({
  imports: [
    // conectarte a postgres
    TypeOrmModule.forRoot({ 

      type: 'postgres',
      host: 'xxxxxx',
      port: 5432,
      username: 'admin',
      password: 'xxxxxxxx',
      database: 'asoservices',
      entities: [],
      synchronize: true,
      
      
    }),
    

  ],
  controllers: [ GatewayController],
  providers: [],
})
export class GatewayModule {



}
