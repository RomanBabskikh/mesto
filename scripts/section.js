export class Section {
    constructor(obj, containerSelecot) {
        this._items = obj.items;
        this._rendererFn = obj.renderer;
        this._containerElement = document.querySelector(containerSelecot);
    }
    drawElements() {
        this._items.forEach(element => {
            const card = this._rendererFn(element);
            this.addItem(card);
        });
    }
    addItem(domElement) {
        this._containerElement.prepend(domElement);
    }
}