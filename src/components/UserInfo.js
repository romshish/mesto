export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameDefault = document.querySelector(nameSelector);
    this._jobDefault = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      name: this._nameDefault.textContent,
      job: this._jobDefault.textContent
    };
  }

  setUserInfo({ name, job }) {
    this._name = name;
    this._job = job;
    this._nameDefault.textContent = this._name;
    this._jobDefault.textContent = this._job;
  }
}
