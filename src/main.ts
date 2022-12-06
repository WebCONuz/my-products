import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    // Create Project
    const app = await NestFactory.create(AppModule);

    // Use Validate
    app.useGlobalPipes(new ValidationPipe());

    // Run Project
    const PORT = process.env.PORT || 3001;
    await app.listen(PORT, () => {
      console.log(`Loyiha ${PORT}-portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
