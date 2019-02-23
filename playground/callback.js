let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'VD'
    }

    setTimeout(() => {
        callback(user);
    }, 3000)
};

getUser(31, (userResponse) => {
    console.log(userResponse);
})