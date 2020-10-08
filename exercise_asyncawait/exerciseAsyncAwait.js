// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

  async function fetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
   }
// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};
const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    }),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
const getData = async function(){
  try {
  const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
  ))
  console.log('user', users)
  console.log('posts', posts)
  console.log('albums', albums)
} catch (err){
  console.log('opps', err)
}
};


async function fetchUsers(){
 const resp = await fetch('https://jsonplaceholder.typicode.com/users')
 const data = await resp.json();
 console.log(data);
}

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
  ]
  Promise.all(urls.map(url => {
      return fetch(url).then(resp=> resp.json())
  })).then(results => {
      console.log(results[0])
      console.log(results[1])
      console.log(results[2])
  }).catch(() => console.log('error'))

  const getData = async function(){
    try {
    const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
    ))
    console.log('user', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch (err){
    console.log('opps', err)
  }
};