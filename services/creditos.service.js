export default class CreditosService {
  constructor() {
    this.mockSoftwaresData = [
      {archive: 'clientes_credito_01.xml', expedition: '02/02/01', information_quality: '90%', ending: '03/03/01', user: '@krsrk_', status: {text:'Finalizado', color: 'green--text'} },
      {archive: 'clientes_credito_02.xml', expedition: '02/02/01', information_quality: '980%', ending: '03/03/01', user: '@krsrk_', status: {text:'En Proceso', color: 'yellow--text'} },
      {archive: 'clientes_credito_03.xml', expedition: '02/02/01', information_quality: '70%', ending: '03/03/01', user: '@krsrk_', status: {text:'Rechazado', color: 'red--text'} },
      {archive: 'clientes_credito_04.xml', expedition: '02/02/01', information_quality: '60%', ending: '03/03/01', user: '@krsrk_', status: {text:'Finalizado', color: 'green--text'} },
      {archive: 'clientes_credito_05.xml', expedition: '02/02/01', information_quality: '50%', ending: '03/03/01', user: '@krsrk_', status: {text:'En Proceso', color: 'yellow--text'} },
    ]
  }

  fetch() {
    return this.mockSoftwaresData
  }
}
