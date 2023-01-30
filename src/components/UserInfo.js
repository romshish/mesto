export default class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._nameDefault = document.querySelector(nameSelector);
    this._jobDefault = document.querySelector(jobSelector);
    this.avatarDefault = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameDefault.textContent,
      job: this._jobDefault.textContent
    };
  }


  setAvatar() {
    return this.avatar;
  }

  setUserInfo({name, about, avatar, id}) {
    this._nameDefault.textContent = name;
    this._jobDefault.textContent = about;
    this.avatarDefault = avatar;
    this._id = id;
  }

  getUserId(data) {
    this._data = data;
    return data._id;
  }

}
