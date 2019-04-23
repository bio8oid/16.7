

// Card Class \\

function Card(id, name) {
  var self = this;
  this.id = id;
  this.name = name;
  this.element = generateTemplate('card-template', { description: this.name }, 'li');
  if(self.name.length > 25) {
         this.element.querySelector('.card').classList.add("green");
      }
    if(self.name.length > 35) {
     this.element.querySelector('.card').classList.add("blue");
  }
  this.element.querySelector('.card').addEventListener('click', function (event) {
    event.stopPropagation();

    if (event.target.classList.contains('btn-delete')) {
      self.removeCard();
    }
  });
}

Card.prototype = {
  removeCard: function() {
  var prefix = "https://cors-anywhere.herokuapp.com/";
  var self = this;

  fetch(prefix + baseUrl + '/card/' + self.id, { method: 'DELETE', headers: myHeaders })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(resp) {
      self.element.parentNode.removeChild(self.element);
    })
}
}

