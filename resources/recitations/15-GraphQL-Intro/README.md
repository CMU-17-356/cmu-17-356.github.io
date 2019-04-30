## GraphQL

Why? Example^1.

Have a view. Need artists and tracks:

`GET /api/artists` and `GET /api/tracks`

*But*, with GraphQL, a request looks like

```graphql
// the query request

artists(id: "1") {
  id
  name
  avatarUrl
  tracks(limit: 2) {
    name
    urlSlug
  }
}

// and the result

// the query result
{
  "data": {
    "artists": {
      "id": "1",
      "name": "REM",
      "avatarUrl": "https://artistsdb.com/artist/1",
      "tracks": [
        {
          "name": "Orange Crush",
          "urlSlug": "orange-crush"
        },
        {
          "name": "Losing My Religion",
          "urlSlug": "losing-my-religion"
        }
      ]
    }
  }
}
```

---

[Interactive Example](https://graphql.github.io/swapi-graphql/?query=%7B%0A%20%20allFilms%20%7B%0A%20%20%20%20films%20%7B%0A%20%20%20%20%20%20releaseDate%0A%20%20%20%20%20%20producers%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20allPeople%20%7B%0A%20%20%20%20totalCount%0A%20%20%7D%0A%7D%0A) with [GraphiQL](https://github.com/graphql/graphiql)

### Details

#### Arguments and Aliases

```graphql
{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}
```

```json
{
  "data": {
    "empireHero": {
      "name": "Luke Skywalker"
    },
    "jediHero": {
      "name": "R2-D2"
    }
  }
}
```

#### Fragments

```graphql
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```

#### Variables

![Variable Example](https://github.com/CMU-17-356/cmu-17-356.github.io/blob/master/resources/recitations/15-GraphQL-Intro/images/var.png)

#### Mutation

```graphql
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
```

**Variables**

```json
{
  "ep": "JEDI",
  "review": {
    "stars": 5,
    "commentary": "This is a great movie!"
  }
}
```

**Response**

```json
{
  "data": {
    "createReview": {
      "stars": 5,
      "commentary": "This is a great movie!"
    }
  }
}
```

### Core Components

* **Schemas** ~ model of data

Example^2:

```graphql
type Author {
  id: Int
  name: String
  posts: [Post]
}

type Post {
  id: Int
  title: String
  text: String
  author: Author
}

type Query {
  getAuthor(id: Int): Author
  getPostsByTitle(titleContains: String): [Post]
}

schema {
  query: Query
}
```

* **Resolvers** ~ how types and fields in schema connect to various backends


Example^2:

```graphql
getAuthor(_, args){
  return sql.raw('SELECT * FROM authors WHERE id = %s', args.id);
}

posts(author){
  return request(`https://api.blog.io/by_author/${author.id}`);
}
```

### Tooling

* [GraphiQL IDE](https://github.com/graphql/graphiql)
* [Apollo CodeGen](https://github.com/apollographql/apollo-tooling)

CodeGen turns

```graphql
query Characters {
  characters(episode: NEW_HOPE) {
    name

    ... on Human {
      homePlanet
    }

    ... on Droid {
      primaryFunction
    }
  }
}
```

into

```typescript
export type CharactersQuery = {
  characters: Array<
    | {
        __typename: "Human",
        name: string,
        homePlanet: ?string
      }
    | {
        __typename: "Droid",
        name: string,
        primaryFunction: ?string
      }
  >
};
```

Execution:

![Execution Flow](https://github.com/CMU-17-356/cmu-17-356.github.io/blob/master/resources/recitations/15-GraphQL-Intro/images/execution.png)

### References/Tutorials

* [How to GraphQL](https://www.howtographql.com/)
* [GraphQL-Tutorial](https://github.com/rse/graphql-tutorial) and linked within
this repository as an example to work through.
* [Awesome GraphQL](https://github.com/chentsulin/awesome-graphql)

^1: Taken from https://scotch.io/tutorials/graphql-the-good-and-the-bad

^2: Borrowed from https://blog.apollographql.com/graphql-explained-5844742f195e
