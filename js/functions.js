function getUsername(id) {
    return new Promise((resolve,reject)=>{
        db.collection("users").doc(id)
            .get()
            .then((userobj) => {resolve(userobj.data().username);})
            .catch((error) => {reject(error);})
    });}

function getURL(directory) {
    return new Promise((resolve,reject)=>{
        storageRef.child(directory).getDownloadURL()
            .then((url) => {resolve(url);})
            .catch((error) => {reject(error);})
    })}

function addPost(postobject, post_table) {
    return new Promise((resolve)=>{
        getUsername(postobject.data().user.id)
            .then(user => {
                getURL(postobject.data().image)
                    .then(image_url => {
                        getURL(postobject.data().design)
                            .then(design_url => {
                                let username = user;
                                let title = postobject.data().title;
                                let description = postobject.data().description;
                                let image = image_url;
                                let design = design_url;
                                document.getElementById(post_table).innerHTML += `<tr><td><div class="post"><h2 class="usuario">${username}</h2><div class="caja"><div class="fotos"><img src="${image}" width="100%" height="100%" alt="${title}"/><div class="titulo">${title} <button class="descargar"><a href="${design}" download="${title}">Descargar</a></button></div><div class="descripcion">${description}</div></div></div></div></div></div></td></tr>`
                                resolve();
                            })
                    })
            })
    })
}