var localApi = (function () {
    return {
        // getAllPosts: function (successCB, errorCB) {
        //     fetch('https://jsonplaceholder.typicode.com/posts').then(function (res) {
        //         res.json().then((data) => {
        //             successCB(data);
        //         }, (err) => {
        //             errorCB("JSON Parse Error...");
        //         });
        //     }).catch((err) => {
        //         errorCB("Communication Error...");
        //     });
        // },

        // getAllPostsUsingPromise: function () {
        //     // var p = new Promise((resolve, reject) => {
        //     //     fetch('https://jsonplaceholder.typicode.com/posts').then(function (res) {
        //     //         res.json().then((data) => {
        //     //             resolve(data);
        //     //         }, (err) => {
        //     //             reject("JSON Parse Error...");
        //     //         });
        //     //     }).catch((err) => {
        //     //         reject("Communication Error...");
        //     //     });
        //     // });
        //     // return p;

        //     var p = new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             resolve("Some Result");
        //         }, 4000);
        //     });
        //     return p;
        // }

        getAllPosts: async function () {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let data = await response.json();
            return data;
        }
    };
})()