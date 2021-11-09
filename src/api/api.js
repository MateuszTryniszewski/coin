import * as db from '../firebase';
import store from '../store';

class ExpensesService {
  constructor(endpoint, id, item) {
    this.endpoint = endpoint;
    this.id = id;
    this.item = item;
  }

  getSingle() {
    return db.db.collection(`${this.endpoint}/${store.state.user.uid}/docs`).doc(this.id);
  }

  getAll() {
    return db.db.collection(`${this.endpoint}/${store.state.user.uid}/docs`)
      .orderBy('date', 'desc').get();
  }

  create() {
    return db.db.collection(`${this.endpoint}/${store.state.user.uid}/docs`).add(this.item);
  }

  update() {
    return db.db.doc(this.id).update(this.item);
  }

  delete() {
    console.log('this.id', this.id);
    return this.getSingle().delete();
  }
}

export default ExpensesService;
