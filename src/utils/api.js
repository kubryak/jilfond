class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkApi(res) {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        return Promise.reject(`${data.message}`);
      })
    }
  }

  getUsers(search) {
    let arr = search.replaceAll(' ', '').split(',');
    let query = '';

    query = arr.map((item) => {
      if (!isNaN(Number(item))) {
        return `id=${item}`
      } else {
        return `username=${item}`
      }
    }).join('&')

    return fetch(`${this._baseUrl}/users?${query}`, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => this._checkApi(res))
  }
}

export const api = new Api({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  }
})