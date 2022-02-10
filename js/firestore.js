function add(collection, doc) {
    return new Promise((resolve, reject) => {
        collection.add(doc)
        .then((doc) => {
            resolve(doc);
        })
        .catch(() => {
            reject();
        });
    });
}

function deleteById(collection, id) {
    return new Promise((resolve, reject) => {
        collection.doc(id).delete()
        .then((doc) => {
            resolve(doc);
        })
        .catch(() => {
            reject();
        });
    });
}

function selectAll(collection, orderByField = null) {
    if (orderByField != null) {
        return new Promise((resolve, reject) => {
            collection.orderBy(orderByField).get()
            .then((querySnapshot) => {
                let docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push(doc);
                });
                resolve(docs);
            })
            .catch(() => {
                reject();
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            collection.get()
            .then((querySnapshot) => {
                let docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push(doc);
                });
                resolve(docs);
            })
            .catch(() => {
                reject();
            });
        });
    }
}

function selectById(collection, id) {
    return new Promise((resolve, reject) => {
        collection.doc(id).get()
        .then((doc) => {
            resolve(doc);
        })
        .catch(() => {
            reject();
        });
    });
}

function selectWhere(collection, field, operator, value) {
    return new Promise((resolve, reject) => {
        collection.where(field, operator, value).get()
        .then((querySnapshot) => {
            let docs = [];
            querySnapshot.forEach((doc) => {
                docs.push(doc);
            });
            resolve(docs);
        })
        .catch(() => {
            reject();
        });
    });
}

function updateById(collection, id, doc) {
    return new Promise((resolve, reject) => {
        collection.doc(id).update(doc)
        .then((doc) => {
            resolve(doc);
        })
        .catch(() => {
            reject();
        });
    });
}