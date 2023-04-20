export default class Counter {
  constructor(selector) {
    this._input = document.querySelector(selector);
    this._textarea = this._input.querySelector(".input_type_textarea");
    this._result = this._input.querySelector(".input-case__result");
    this._onInput = this._onInput.bind(this);
  }
  _onInput(evt) {
    const target = evt.target;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;
    this._result.textContent = `${currentLength}/${maxLength}`;
  }
  counter() {
    this._textarea.addEventListener("input", this._onInput);
  }
}
