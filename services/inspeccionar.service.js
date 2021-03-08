export default class InspeccionarService {
  constructor() {
    this.mockInspeccionarData = [
      {id: '55E9175FA87D49C7AE6ED4BDAB065E6A', client: {photo: 'https://reqres.in/img/faces/11-image.jpg', name: 'Bruce Wayne'}, name: 'Bruce Wayne', rfc: 'XEXX010101000'},
      {id: 'E3B6DBD376064626B6927FEB786E8F5C', client: {photo: 'https://reqres.in/img/faces/12-image.jpg', name: 'Selina Kyle'}, name: 'Selina Kyle', rfc: 'XEXX010101000'},
      {id: 'B646C6BA02DF427ABF4D9F471AE096EB', client: {photo: 'https://reqres.in/img/faces/10-image.jpg', name: 'Oswald Cobblepot'}, name: 'Oswald Cobblepot', rfc: 'XEXX010101000'},
      {id: 'FF43030F90F843D1BAFA0750493FA94C', client: {photo: 'https://reqres.in/img/faces/9-image.jpg', name: 'Alfred Pennyworth'}, name: 'Alfred Pennyworth',  rfc: 'XEXX010101000'},
      {id: 'C60AD119D0E74098BDE64AC0D6C07762', client: {photo: 'https://reqres.in/img/faces/2-image.jpg', name: 'Harleen Quincel'}, name: 'Harleen Quincel', rfc: 'XEXX010101000'},
      {id: 'DCA8DB8405BB4721BE9D53ED1FFC2534', client: {photo: 'https://reqres.in/img/faces/8-image.jpg', name: 'Edward Nygma'}, name: 'Edward Nygma', rfc: 'XEXX010101000'},
      {id: '09AD5531BE32408A9DA9A70645544A8B', client: {photo: 'https://reqres.in/img/faces/7-image.jpg', name: 'Harvey Dent'}, name: 'Harvey Dent', rfc: 'XEXX010101000'},
      {id: 'ADC1514A0355424D983B691290F01CA5', client: {photo: 'https://reqres.in/img/faces/6-image.jpg', name: 'Dick Grayson'}, name: 'Dick Grayson', rfc: 'XEXX010101000'},
      {id: '218B511EE561490BBE22BA1ABAE811EE', client: {photo: 'https://reqres.in/img/faces/5-image.jpg', name: 'Jason Todd'}, name: 'Jason Todd', rfc: 'XEXX010101000'},
      {id: '06D95B0F349048B1A04E1EE7C31799E6', client: {photo: 'https://reqres.in/img/faces/1-image.jpg', name: 'Barbara Gordon'}, name: 'Barbara Gordon', rfc: 'XEXX010101000'},
    ]
  }

  fetch() {
    return this.mockInspeccionarData
  }
}
