export default class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._nameDefault = document.querySelector(nameSelector);
    this._jobDefault = document.querySelector(jobSelector);
    this._avatarDefault = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameDefault.textContent,
      job: this._jobDefault.textContent
    };
  }

  setUserInfo({name, about, avatar, id}) {
    this._nameDefault.textContent = name;
    this._jobDefault.textContent = about;
    this._avatarDefault.src = avatar;
    this._id = id;
  }

  getUserId(data) {
    this._data = data;
    return data._id;
  }

}
