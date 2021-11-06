// import { Connection, QueryRunner, Repository } from 'typeorm';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Test, TestingModule } from '@nestjs/testing';
//
// import { UserService } from './user.service';
// import { User } from '../entities/user.entity';
//
// const mockRepository = {
//   save: jest.fn(),
//   findOne: jest.fn(),
// };
//
// type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
//
// describe('UserService', () => {
//   let service: UserService;
//   let connection: Connection;
//   let userRepository: MockRepository<User>;
//
//   const qr = {
//     manager: {},
//   } as QueryRunner;
//
//   class ConnectionMock {
//     createQueryRunner(mode?: 'master' | 'slave'): QueryRunner {
//       return qr;
//     }
//   }
//
//   beforeEach(async () => {
//     Object.assign(qr.manager, {
//       save: jest.fn(),
//       getRepository: jest.fn,
//     });
//     qr.connect = jest.fn();
//     qr.startTransaction = jest.fn();
//     qr.commitTransaction = jest.fn();
//     qr.rollbackTransaction = jest.fn();
//     qr.release = jest.fn();
//
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         UserService,
//         { provide: Connection, useClass: ConnectionMock },
//         { provide: getRepositoryToken(User), useValue: mockRepository },
//       ],
//     }).compile();
//
//     service = module.get<UserService>(UserService);
//     connection = module.get<Connection>(Connection);
//     userRepository = module.get<MockRepository<User>>(getRepositoryToken(User));
//   });
//
//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
//
//   describe('createUser', () => {
//     const createUserArguments = {
//       email: 'test@test.co.kr',
//       password: 'rhrlrkr1234',
//       name: 'tester',
//       phoneNumber: '010-1234-1234',
//     };
//
//     const newUser = {
//       id: 1,
//       email: 'test@test.co.kr',
//       password: 'rhrlrkr1234',
//       name: 'tester',
//       phoneNumber: '010-1234-1234',
//     };
//
//     it('should create user', async () => {
//       jest.spyOn(userRepository, 'findOne').mockResolvedValue(true);
//       await service;
//       userRepository.findOne.mockResolvedValue(true);
//       userRepository.save.mockResolvedValue(createUserArguments);
//
//       const result = await service.createUser(createUserArguments);
//
//       expect(userRepository.save).toHaveBeenCalledTimes(1);
//       expect(userRepository.save).toHaveBeenCalledWith(createUserArguments);
//
//       expect(result).toEqual({ success: true });
//     });
//   });
// });
