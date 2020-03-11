import { html, render } from "lit-html";
import { LitElement } from "lit-element";

const myTemplate = name => html`
  <h1>Hello ${name}</h1>
  <label for="${name}">Name</label>
  <input type="text" value="${name}" />
  <button type="submit">Submit</button>
`;

render(myTemplate("Gyan"), document.querySelector("#root"));

class MyElement extends LitElement {
  render() {
    return html`
      <h2>My Second Title</h2>
    `;
  }
}

customElements.define("my-element", MyElement);

class MyButtonElement extends LitElement {
  clickHandler() {
    alert("Clicked me");
  }

  render() {
    return html`
      <button type="button" @click="${this.clickHandler}">Click Me</button>
    `;
  }
}

customElements.define("my-button-element", MyButtonElement);

class MyArrayElement extends LitElement {
    static get properties() {
        return {
            myString: { type: String},
            myArray: { type: Array },
            myBool: { type: Boolean}
        };
    };

    constructor(){
        super();
        this.myString = 'Hello world!';
        this.myArray = ['an', 'array', 'of', 'test', 'data'];
        this.myBool = false;
    }

    render() {
        return html`
            <p>${this.myString}</p>
            <ul>
                ${this.myArray.map(i => html`<li>${i}</li>`)}
            </ul>
            ${ this.myBool ? 
                html`<p>Render if I am <b>True</b></p>`:
                html`<p>Render if I am <b>False</b></p>`
            }
        `;
    }
}

customElements.define('my-array-element', MyArrayElement);