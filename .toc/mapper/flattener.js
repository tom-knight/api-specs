

// take an array and filter the ones that contain hrefs

const hasHref = (obj) => {
    if(obj.href) {
        let {title, href} = obj;
        return [{title, href}];
    } else {
        return [];
    }
}


// loop through objects and look for arrays at item

const hasItems = (obj) => {
    if(obj.items) {
        return obj.items; // will be an array
    } else {
        return null;
    }
}


const getThe411 = (obj) => {
    let tea = hasItems(obj);
    let theGoods = hasHref(obj);
    return {tea, theGoods};
}

const spillTheTea = (arr) => {
    return arr.reduce((all, node) => {
        let the411 = getThe411(node);
        let {theGoods} = the411;
        if(the411.tea) {
            let theTea = spillTheTea(the411.tea);
            return all.concat(theGoods.concat(theTea));
        } else {
            return all.concat(theGoods);
        }
    }, []);
}

const flatten = (obj) => {
    let theGoods = hasHref(obj);
    let theTea = spillTheTea(obj.items);
    let washboard = theGoods.concat(theTea);
    // console.log(washboard);
    return washboard;
}

module.exports = flatten;

//input is an object with an array called items
//output is an array of objects with no items

