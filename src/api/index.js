import { firebase } from '@firebase/app';
import '@firebase/database';

const HN_VERSION = '/v0/';
const HN_DATABASE_URL = 'https://hacker-news.firebaseio.com';

export const config = {
  databaseURL: HN_DATABASE_URL,
};

export const firebaseInit = () => {
  const app = firebase.initializeApp(config);
  return app.database().ref(HN_VERSION);
};

