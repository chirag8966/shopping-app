import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST') ?? 'localhost',
        port: +(configService.get<string>('DB_PORT') ?? '5432'),
        username: configService.get('DB_USERNAME') ?? 'postgres',
        password: configService.get('DB_PASSWORD') ?? 'secret',
        database: configService.get('DB_NAME') ?? 'shopping_app',
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true, // TODO: turn off in production
      })
    }),
    ProductsModule,
    OffersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
