class SearchBar extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({mode : 'open'})
  }

  connectedCallback() {
    this.render()
  }

  set clickEvent(event) {
    this._clickEvent = event
    this.render()
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .search-container {
      max-width: 100%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 16px;
      border-radius: 5px;
      display: flex;
      position: sticky;
      top: 10px;
      background-color: white;
    }
    
    .search-container > input {
      width: 75%;
      padding: 16px;
      border: 0;
      border-bottom: 1px solid #AD8E70;
      font-weight: bold;
      color: brown;
    }
    
    .search-container > input:focus {
      outline: 0;
      border-bottom: 2px solid #AD8E70;
    }
    
    .search-container > input:focus::placeholder {
      font-weight: bold;
    }
    
    .search-container > input::placeholder {
        font-family: 'Anybody', cursive;
      color: brown;
      font-weight: normal;
    }
    
    .search-container > button {
      font-family: 'Anybody', cursive;
      font-weight: bold;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
      width: 23%;
      cursor: pointer;
      margin-left: auto;
      padding: 16px;
      background-color: #AD8E70;
      color: brown;
      border: 0;
      text-transform: uppercase;
      transition: 0.4s;
    }
  
    .search-container > button:hover {
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8);
    }
  
    .search-container > button:active {
      box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.8);
    }
    
    @media screen and (max-width: 550px) {
      .search-container {
        flex-direction: column;
        position: static;
      }
    
      .search-container > input {
        width: 100%;
        margin-bottom: 12px;
      }
    
      .search-container > button {
        width: 100%;
      }
    }
    </style>
    <div id="search-container" class="search-container">
        <input placeholder="Search Movie" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>`

      this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar)
