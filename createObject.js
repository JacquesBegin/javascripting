var facebookProfile = {
  name: "Bob",
  friends: 3,
  messages: ["Hi", "Bye", "YAY!"],
  postMessage: function post(message) {
    if (message) this.messages.push(message);
  },
  deleteMessage: function deleteMes(index) {
    if (index >= 0) this.messages.splice(index, 1);
  },
  addFriend: function increaseFriend() {
    this.friends++;
  },
  removeFriend: function decreaseFriend() {
    this.friends--;
  }
}