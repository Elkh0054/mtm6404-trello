function serialNumber (length) {
  const numbers = []

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (92 - 65)) + 65
    numbers.push(String.fromCharCode(randomNumber))
  }

  return numbers.join('')
}

const app = Vue.createApp({
  data: function () {
    return {
      lists: ['To Do', 'Doing', 'Done'],
      cards: [
        {
          id: 'VZQUSU',
          list: 'To Do',
          text: 'An item that I need to do'
        },
        {
          id: 'GXRRMI',
          list: 'Doing',
          text: 'An item that I am doing'
        },
        {
          id: 'QLDJYB',
          list: 'Done',
          text: 'An item that is done'
        }
      ]
    }
  },
  methods: {
    getCards: function (list) {
      return this.cards.filter(card => card.list === list)
    },
    createCard: function (list) {
      this.cards.push({
        id: serialNumber(6),
        list: list,
        text: ''
      })
    },
    deleteCard: function (id) {
      const card = this.cards.findIndex(card => card.id === id)
      this.cards.splice(card, 1)
    }
  }
})

app.component('trello-card', {
  template: ` <div class="card-action">
  <select class="card-action-select">
    <optgroup label="Move to:">
      <option>To Do</option>
      <option>Doing</option>
      <option>Done</option>
    </optgroup>
  </select>
  <button class="card-action-button">&times;</button>
</div>
<textarea class="card-text"></textarea>
</div>
</div>`
})
const vm = app.mount('#app')
