// >>>>>>>>>>>> FLATTEN THEM OUT

const flatten = require('./flattener');

const oldMenu = {
    storefront: require('../toc-1-storefront-apis.json'),
    graphql: require('../toc-2-graphql.json'),
    management: require('../toc-3-management-apis.json'),
    provider: require('../toc-4-provider-apis.json')
}

const keepers = {
    seriously: 'href',
    juicy: ['title'],
    spill: 'items'
}

const newMenu = {
    apiSpecs: require('../stoplight-api-response.json')
}

const essential = {
    seriously: 'slug',
    juicy: ['id', 'title'],
    spill: 'items'
}

// >>>>>>>>>>> ZIP THEM TOGETHER

const zip = require('./zipper');


const massage = (muscle, goal) => {
    return Object.keys(muscle).reduce((all, group) => {
        let flat = flatten(muscle[group], goal);
        return all.concat(flat);
    }, [])
}

const transform = () => {
    const past = massage(oldMenu, keepers);
    const future = massage(newMenu, essential);
    console.log(past);
    console.log(future);

    // zip together the ones that match
    // find leftovers from each one
    return {past, future};
}

module.exports = transform();
