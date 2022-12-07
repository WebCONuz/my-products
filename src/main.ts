import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const start = async () => {
  try {
    // Create Project
    const app = await NestFactory.create(AppModule);

    // Use Validate
    app.useGlobalPipes(new ValidationPipe());

    // Add Swagger to Project
    const config = new DocumentBuilder()
      .setTitle('My Products')
      .setDescription('The first task from peractice lessons')
      .setVersion('1.0.0')
      .addTag('Node.js, Nest.js, Postgres, sequelize')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

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
