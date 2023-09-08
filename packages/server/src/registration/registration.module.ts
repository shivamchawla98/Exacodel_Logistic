// src/company/registration.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from './entities/registration.entity';
import { RegistrationService } from './registration.service';
import { RegistrationResolver } from './registration.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Registration])],
  providers: [RegistrationService, RegistrationResolver],
  exports: [RegistrationService], // Export the service for use in other modules if needed
})
export class RegistrationModule {}
