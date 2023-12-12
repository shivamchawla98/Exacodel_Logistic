// user-starter-info.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserStarterInfo } from './entities/starter-form.entity';
import { CreateStarterFormInput } from './dto/create-registration.input';
// import { UpdateRegistrationInput } from './dto/update-registration.input';

@Injectable()
export class UserStarterInfoService {
  constructor(
    @InjectRepository(UserStarterInfo)
    private readonly userStarterInfoRepository: Repository<UserStarterInfo>,
  ) {}

  async findAll(): Promise<UserStarterInfo[]> {
    return await this.userStarterInfoRepository.find();
  }

  async create(input: CreateStarterFormInput): Promise<UserStarterInfo> {
    const userStarterInfo = this.userStarterInfoRepository.create(input);
    return await this.userStarterInfoRepository.save(userStarterInfo);
  }


  async findById(id: number): Promise<UserStarterInfo | null> {
    const userStarterInfo = await this.userStarterInfoRepository.findOne({
      where: { id },
    });
    if (!userStarterInfo) {
      throw new NotFoundException(`UserStarterInfo with ID ${id} not found`);
    }
    return userStarterInfo;
  }

  // async update(): Promise<UserStarterInfo> {
  //   // Implement the update logic here, using input.id to identify the record to update
  //   // You can use this.userStarterInfoRepository.update() or other methods as needed
  // }
}
