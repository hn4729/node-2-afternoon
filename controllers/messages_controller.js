let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    if (!req.body.text || !req.body.time) {
      return res.status(429).send("Please provide text and a time.");
    }
    messages.push({ id: id, text: req.body.text, time: req.body.time });
    id++;
    res.status(200).send(messages);
  },

  read: (req, res) => {
    return res.status(200).send(messages);
  },

  update: (req, res) => {
    let msgIndex = messages.findIndex(message => message.id == req.params.id);
    let message = messages[msgIndex];

    messages[msgIndex] = {
      id: message.id,
      text: req.body.text || message.text,
      time: message.time
    };

    res.status(200).send(messages);
  },

  delete: (req, res) => {
    let msgIndex = messages.findIndex(message => message.id == req.params.id);
    messages.splice(msgIndex, 1);
    return res.status(200).send(messages);
  }
};
