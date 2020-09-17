export default class EtherscanService {
  gas = "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=KZ96PTWPK1NBK9TP8CNGSKAKENDAUYPIPC";
  token = "https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xa145ac099e3d2e9781c9c848249e2e6b256b030d&apikey=KZ96PTWPK1NBK9TP8CNGSKAKENDAUYPIPC"

  getGas = async () => {
    const res = await fetch(`${this.gas}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this.gas}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getToken = async () => {
    const res = await fetch(`${this.token}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this.token}` + `, received ${res.status}`);
    }
    return await res.json();
  };
}