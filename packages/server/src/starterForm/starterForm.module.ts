import { Module } from '@nestjs/common';
import { UserStarterInfoService } from './starterForm.service';
import { UserStarterInfoResolver } from './starterForm.resolver';
import { UserStarterInfo } from './entities/starter-form.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserStarterInfo])],
  providers: [UserStarterInfoResolver , UserStarterInfoService],
  exports: [UserStarterInfoResolver],
})
export class StarterFormModule {}
