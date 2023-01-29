export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        return this._checkState(res)
      }
  )};

  getCardsFromApi() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        return this._checkState(res)
      }
  )};

  getAllNeededData() {
    return Promise.all([this.getUserInfo(), this.getCardsFromApi()])
  }

  updateProfile(data) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then((res) => {
        return this._checkState(res)
      }
  )};

  addCards(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then((res) => {
        return this._checkState(res)
      }
  )};

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        return this._checkState(res)
      }
  )};

  addLikeCard(cardId) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then((res) => {
        return this._checkState(res)
      }
  )};

  deleteLikeCard(cardId) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        return this._checkState(res)
      }
  )};

  updateProfileAvatar(data) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then((res) => {
        return this._checkState(res)
      }
  )};

  _checkState(result) {
    if (result.ok) {
      return result.json();
    }
  };
}






