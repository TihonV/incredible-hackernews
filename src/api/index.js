export const HN_DATABASE_URL = 'https://hacker-news.firebaseio.com';
export const HN_VERSION = '/v0/';


export const getStoriesIndex = storyType => fetch(
  `${HN_DATABASE_URL}${HN_VERSION}${storyType}.json`,
  { method: 'get' },
).then(d => d.json());

export const getStory = postId => fetch(
  `${HN_DATABASE_URL}${HN_VERSION}item/${postId}.json`,
  { method: 'get' },
).then(d => d.json());
