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


  setUserAvatar(userData) {
    this.avatar = userData.avatar;
    this._avatarDefault.scr = this.avatar;
  }

  setAvatar() {
    return this.avatar;
  }

  setUserInfo(userData) {
    this._nameDefault.textContent = userData.name;;
    this._jobDefault.textContent = userData.about;
  }

  getUserId(data) {
    this._data = data;
    return data._id;
  }

}
