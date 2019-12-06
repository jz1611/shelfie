module.exports = {
  getInventory: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_inventory()
      .then(products => {
        res.status(200).send(products)
      })
      .catch(err => {
        res.status(500).send(err);
      })
  },

  postProduct: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, price, imgurl } = req.body;

    dbInstance.create_product([name, price, imgurl])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send(err);
      })
  },

  deleteProduct: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send(err);
      })
  }
}