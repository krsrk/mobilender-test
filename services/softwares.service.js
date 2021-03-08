export default class SoftwaresService {
  constructor() {
    this.mockSoftwaresData = [
      {name: 'Siebel', credit: 'Credito Grupal'},
      {name: 'Bantotal', credit: 'Credito Grupal'},
      {name: 'Mobilender', credit: 'Credito Grupal'},
      {name: 'Alivio', credit: 'Credito Grupal'},
      {name: 'Itaca Capital', credit: 'Credito Grupal'},
      {name: 'Wayne Enterprises', credit: 'Credito Grupal'},
    ]
  }

  fetch() {
    return this.mockSoftwaresData
  }
}
