// src/company/company.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registration } from './entities/registration.entity';
import {
  CreateRegistrationInput,
  UpdateRegistrationInput,
} from './dto/registration.dto';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration)
    private readonly companyRepository: Repository<Registration>,
  ) {}

  async createRegistration(
    input: CreateRegistrationInput,
  ): Promise<Registration> {
    const registrationData = this.companyRepository.create(input);
    return await this.companyRepository.save(registrationData);
  }

  async updateRegistration(
    id: number,
    input: UpdateRegistrationInput,
  ): Promise<Registration> {
    const registrationData = await this.companyRepository.findOne({
      where: { id },
    });
    if (!registrationData) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }

    Object.assign(registrationData, input);
    return await this.companyRepository.save(registrationData);
  }

  async deleteRegistration(id: number): Promise<boolean> {
    const registrationData = await this.companyRepository.findOne({
      where: { id },
    });
    if (!registrationData) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }

    const result = await this.companyRepository.delete(id);
    return result.affected > 0;
  }

  async getRegistration(id: number): Promise<Registration> {
    const registrationData = await this.companyRepository.findOne({
      where: { id },
    });
    if (!registrationData) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return registrationData;
  }

  async getAllRegistration(): Promise<Registration[]> {
    return this.companyRepository.find();
  }
}
