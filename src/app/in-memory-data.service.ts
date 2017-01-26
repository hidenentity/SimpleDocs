import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let docs = [
      {id: 11, date: '2016-12-12', number: '0001', description: 'opa'},
      {id: 12, date: '2016-12-12', number: '0002', description: 'opa'}
    ];
    return {docs};
  }
}
