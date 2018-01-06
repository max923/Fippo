const graphql = require('graphql');
const request = require('superagent');
const axios = require('axios');
const URL = `https://api.yelp.com/v3/businesses/search?term=food&location=Taiwan`
const token = ''

const { 
    GraphQLSchema,
    GraphQLObjectType, 
    GraphQLString,
    GraphQLList, 
    GraphQLID, 
    GraphQLNonNull ,
    GraphQLInt
} = graphql;

const Usertype = new GraphQLObjectType({
    name: 'Usertype',
    fields: {
        userImg: { type: GraphQLString },
        userName: { type: GraphQLString }
    }
})
const ArticleType = new GraphQLObjectType({
    name: 'Article',
    fields: {
        articleId: { type: GraphQLString },
        articleTitle: { type: GraphQLString },
        articleImg: { type: GraphQLString },
        articleContent: { type: GraphQLString },
        rating:{ type: GraphQLInt },
        user : {
            type:  Usertype,
            resolve(parentValue) {
                return axios.get(`https://api.yelp.com/v3/businesses/${parentValue.articleId}/reviews`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(({data}) => {
                    return {
                        userImg: data.reviews[0].user.image_url,
                        userName: data.reviews[0].user.name,
                    }
                })
            }
        }
    }
 
})
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        articles: {
            type: new GraphQLList(ArticleType),
            args: { location: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`https://api.yelp.com/v3/businesses/search?term=food&location=${args.location}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('has fetch')
                    return response.data.businesses.map((business)=> (
                        {
                            articleId: business.id,
                            articleTitle: business.name,
                            articleImg: business.image_url,
                            rating: business.rating
                        }
                    ))
                })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});
// request
// .get('https://api.yelp.com/v3/businesses/search?term=food&location=Taiwan')
// // .query({ term: 'food', location: 'Taiwan' })
// .set('Content-Type', 'application/json')
// .set('Accept', 'application/json')
// .set('Authorization','Bearer'+ token)
// .set('User-Agent','Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0')
// .then((res)=>{
//     console.log(res)
// })