const HN_DATABASE_URL = 'https://hacker-news.firebaseio.com';
const HN_VERSION = '/v0/';


function* updateNewStories() {
  while (true) {
    yield fetch(`${HN_DATABASE_URL}${HN_VERSION}/newstories.json`, {
      method: 'get',
    }).then(d => d.json());
  }
}

function* updateTopStories() {
  while (true) {
    yield fetch(`${HN_DATABASE_URL}${HN_VERSION}/topstories.json`, {
      method: 'get',
    }).then(d => d.json());
  }
}

function* updateBestStories() {
  while (true) {
    yield fetch(`${HN_DATABASE_URL}${HN_VERSION}/beststories.json`, {
      method: 'get',
    }).then(d => d.json());
  }
}

function* updateAskStories() {
  while (true) {
    yield fetch(`${HN_DATABASE_URL}${HN_VERSION}/askstories.json`, {
      method: 'get',
    }).then(d => d.json());
  }
}

function* updateShowStories() {
  while (true) {
    yield fetch(`${HN_DATABASE_URL}${HN_VERSION}/showstories.json`, {
      method: 'get',
    }).then(d => d.json());
  }
}

function* updateJobStories() {
  while (true) {
    yield fetch(`${HN_DATABASE_URL}${HN_VERSION}/jobstories.json`, {
      method: 'get',
    }).then(d => d.json());
  }
}

function* showStory(story, comments) {

}

export default {
  updateBestStories,
  updateNewStories,
  updateTopStories,
  updateAskStories,
  updateJobStories,
  updateShowStories,
};
