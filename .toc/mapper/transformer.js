// >>>>>>>>>>>> FLATTEN THEM OUT

const flattener = require('./flattener');

const oldMenu = {
    storefront: require('../toc-1-storefront-apis.json'),
    graphql: require('../toc-2-graphql.json'),
    management: require('../toc-3-management-apis.json'),
    provider: require('../toc-4-provider-apis.json')
}

const keepers = {
    seriously: 'href',
    juicy: ['title']
}

const newMenu = {
    apiSpecs: require('../stoplight-api-response.json')
}

const essential = {
    seriously: 'slug',
    juicy: ['id', 'title']
}

// >>>>>>>>>>> ZIP THEM TOGETHER

const zipper = require('./zipper');


const exercise = (muscle, goal) => {
    // console.log(muscle);
    // console.log(goal);
    return Object.keys(muscle).reduce((all, curr) => {
        let flat = flattener(muscle[curr], goal)
        return all.concat(flat);
    }, [])
}

const transform = () => {
    const past = exercise(oldMenu, keepers);
    const future = exercise(newMenu, essential);
    console.log(past);
    console.log(future);

    // zip together the ones that match
    // find leftovers from each one
    return {past, future};
}

module.exports = transform();
