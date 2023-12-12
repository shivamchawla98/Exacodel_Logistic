import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthGuard } from './auth.guard';
import { JwtGuard } from './jwt.guard';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [AuthGuard, JwtGuard],
  exports: [],
})
export class authModule {}
