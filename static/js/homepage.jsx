"use strict";

function Homepage() {
  return (
    <div>
      Welcome to the Homepage!
      <p><a href = "/cards">Cards</a></p> 
      <img src="static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
