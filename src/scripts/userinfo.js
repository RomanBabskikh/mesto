export class UserInfo {
    constructor(data) {
        this._titleElement = document.querySelector(data.nameSelector);
        this._subTitleElement = document.querySelector(data.descriptionSelector);
    }
    getUserInfo() {
        let user = {
            title: this._titleElement.textContent,
            subTitle: this._subTitleElement.textContent
        };
        return user;
    }
    setUserInfo(name, description) {
        this._titleElement.textContent = name;
        this._subTitleElement.textContent = description;
    }
}