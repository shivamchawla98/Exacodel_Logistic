import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationResolver } from './starterForm.resolver';
import { RegistrationService } from './starterForm.service';

describe('RegistrationResolver', () => {
  let resolver: RegistrationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrationResolver, RegistrationService],
    }).compile();

    resolver = module.get<RegistrationResolver>(RegistrationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
