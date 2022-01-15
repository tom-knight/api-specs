

const hasTheGoods = (obj, gossip) => {
    //gossip is an object with a string of the most important key (seriously) and an array of the keys we want to return (juicy)
    let {juicy, seriously} = gossip;
    if(obj[seriously]) {
        let juice = juicy.reduce((pitcher, squeeze) => {
            let squirt = obj[squeeze] ? obj[squeeze] : "";
            return {
                [squeeze]: squirt,
                ...pitcher
            }
        }, {});
        return [{
            [seriously]: obj[seriously],
            ...juice
        }]
    } else {
        return [];
    }
}

const hasItems = (obj) => {
    if(obj.items) {
        return obj.items; // will be an array
    } else {
        return null;
    }
}

const getThe411 = (obj, what) => {
    let tea = hasItems(obj);
    let theGoods = hasTheGoods(obj, what);
    return {tea, theGoods};
}

const spillTheTea = (arr, what) => {
    // console.log(arr);
    return arr.reduce((all, node) => {
        let the411 = getThe411(node, what);
        let {theGoods} = the411;
        if(the411.tea) {
            let theTea = spillTheTea(the411.tea, what);
            return all.concat(theGoods.concat(theTea));
        } else {
            return all.concat(theGoods);
        }
    }, []);
}

const flatten = (obj, what) => {
    let theGoods = hasTheGoods(obj, what);
    let theTea = spillTheTea(obj.items, what);
    let theSkinny = theGoods.concat(theTea);
    // console.log(theSkinny);
    return theSkinny;
}

module.exports = flatten;
