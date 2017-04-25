import { User } from '../_models/user';

export const Users: User[] = [
  { id: 1,
    username: 'test1',
    password: '1234',
    firstName: 'TestFirst1',
    lastName: 'TestLast1',
    role: 'Admin',
    token: 'JWTToken'},
  { id: 2,
    username: 'test2',
    password: '1234',
    firstName: 'TestFirst2',
    lastName: 'TestLast2',
    role: 'Applicant',
    token: 'JWTToken'}
];
