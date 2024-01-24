// THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }
// THE PROMISE VERSION 
// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }


// /*My code*/
// fakeRequestCallback("www.34.com", (response) => {
//     console.log("This is success");
//     console.log(response);
// }, (err) => {
//     console.log("This is failure");
//     console.log(err);
// })


// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })







// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })

// function fakeRequest(url) {
//     return new Promise((resolve, reject) => {
//         const rand = Math.floor(Math.random() * 10) + 1;
//         setTimeout(() => {
//             if (rand <= 7) {
//                 resolve("go go go win!!");
//             } else {
//                 reject("oh no you loose");
//             }
//         }, 2000)
//     })
// }
//
// fakeRequest('google.com')
//     .then((data) => {
//         console.log("done with request");
//         console.log(data);
//     })
//     .catch((data) => {
//         console.log("request timeout :(");
//         console.log(data);
//     })
//
// function colorChange(colorName, delay, ) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = colorName;
//             resolve();
//         }, delay);
//     })
// }
// colorChange('red', 2000)
//     .then(()=>{
//         return colorChange("blue",1000);
//     })
//     .then(()=> {
//         return colorChange('violate',1000)
//     })

/*Make me dumbass*/
// const jkLogin = async (username, password) => {
//     if (!username || !password) throw 'error'
//     if (username === 'rafiq') return 'welcome';
//     return 'noo!'
// }
//
// jkLogin('rafiq','bubble')
//     .then(msg => {
//         console.log("Looged in");
//     })
//     .catch(() => {
//         console.log('Error!!');
//     })



/*
* res response object that we get back
* .json() is added to fetch response object => it also
* returns a promise
* */
/*I am not understanding the .then flows.
* where to where data flows, what return is doing here,
* what value we're taking inside the then,
* */
// fetch('https://swapi.dev/api/people/77')
//     .then( (res)=> {
//         console.log('----resolved!',res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return res.json();
//     })
//     .then((data)=> {
//         console.log(data);
//     })
//     .catch(()=> {
//         return console.log('Problem!!!!!');
//     })

// const promise = new Promise((resolve, reject) => {
//         resolve("success!");
// })
//     .then(value => { console.log(value); return "we";
//     })
//     .then(value => { console.log(value); return "can";
//     })
//     .then(value => { console.log(value); return "chain";
//     })
//     .then(value => { console.log(value); return "promises";
//     })
//     .then(value => { console.log(value);
//     })
//     .catch(value => { console.log(value);
//     })






// const counter = new Promise((res, rej) => {
//     res('Start counting');
// })
//     .then((res)=> {
//         console.log(res);
//         return 'One';
//     })
//     .then((res)=> {
//         console.log(res);
//         return 'Two';
//     })
//     .then((res)=> {
//         console.log(res);
//         return 'Three';
//     })
//     .then((res)=> {
//         console.log(res);
//     })
//     .catch(()=>{
//         console.log('Error!!!');
//     })

// fetch('https://swapi.dev/api/people/1/')
//     .then((data)=> {
//         // console.log('resolved!', data);
//         return data.json();
//     })
//     .then((data)=> {
//         console.log(data);
//     })
//     .catch((e)=>{
//         console.log('error', e);
//     })



const button = document.querySelector(".clickBtn");
const jokes = document.querySelector(".listClass");

const getDadJoke = async (apiLink) => {
    try {
        const config = {
            headers: {Accept: 'application/json'}
        }
        const isFetchLink = await fetch(apiLink, config);
        const data = await isFetchLink.json();
        return data.joke;
        // console.log(data.joke);
    } catch (e) {
        return "no joke";
    }
};

button.addEventListener("click", async () => {
    const jokeText = await getDadJoke("https://icanhazdadjoke.com/");
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
});
















