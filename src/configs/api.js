export const api = {
  dev : {
    baseUrl: 'http://localhost:8080/kpi/'
  },
  stagging : {
    baseUrl: 'http://#/'
  },
  prod:{
    baseUrl: 'https://#/'
  },
  get authToken (){
    return document.cookie.replace(/(?:(?:^|.*;\s*)webapi_token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  },
  token: ''
};
