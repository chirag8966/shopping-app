import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from '../products/entities/product.entity';
import { Offer } from '../offers/entities/offer.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    // Get repositories
    const productRepository = app.get(getRepositoryToken(Product));
    const offerRepository = app.get(getRepositoryToken(Offer));

    // Clear existing data
    await productRepository.clear();
    await offerRepository.clear();

    // Seed products
    const products = [
      {
        id: 'apple',
        title: 'Apple',
        price: 0.35,
        image: 'https://plus.unsplash.com/premium_photo-1668772704261-b11d89a92bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBwbGV8ZW58MHx8MHx8fDA%3D'
      },
      {
        id: 'banana',
        title: 'Banana',
        price: 0.20,
        image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fHww'
      },
      {
        id: 'melons',
        title: 'Melons',
        price: 0.50,
        image: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVsb258ZW58MHx8MHx8fDA%3D'
      },
      {
        id: 'limes',
        title: 'Limes',
        price: 0.15,
        image: 'https://plus.unsplash.com/premium_photo-1664551734393-190cfd788276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGltZXxlbnwwfHwwfHx8MA%3D%3D'
      }
    ];

    // Seed offers
    const offers = [
      {
        id: 'Melons',
        offer: '1+1',
        offerDescription: 'buy one get one free'
      },
      {
        id: 'Limes',
        offer: '3for2',
        offerDescription: 'three for the price of two'
      }
    ];

    // Insert data
    for (const product of products) {
      await productRepository.save(product);
    }
    
    for (const offer of offers) {
      await offerRepository.save(offer);
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await app.close();
  }
}

bootstrap();
