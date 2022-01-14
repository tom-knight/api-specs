const flattener = require('./flattener');

const toc = {
    storefront: require('../toc-1-storefront-apis.json'),
    graphql: require('../toc-2-graphql.json'),
    management: require('../toc-3-management-apis.json'),
    provider: require('../toc-4-provider-apis.json')
}


const transform = (muscle) => {

    const exercise = Object.keys(muscle).reduce((all, curr) => {
        let flat = flattener(muscle[curr])
        return all.concat(flat);
    }, [])

    console.log(exercise);
    return exercise;

}

module.exports = transform(toc);
