  # Express: GoGreen Pagination
 
The request to the route `/vehicles` returns all the paginated vehicles with default values of page and limit, you can also filter your vehicles data by using brand or model names.

The query parameters that can be used to set the pagination and filtering criteria are:
- `page:` The page of the resource to be fetched. Defaults to 1. [NUMBER]
- `limit:` The number of items to be returned in a single page. Defaults to 7. [NUMBER]
- `filter:` Is an *optional* parameter to filter data. [STRING]


## Service URL: (deployed to Heroku)
https://calm-coast-45845.herokuapp.com/vehicles

## How to run locally:
- Clone the repo / download it.
- run `yarn start`

### You can test the following routes
- `/vehicles`
- `/vehicles?limit=1`
- `/vehicles?page=1`
- `/vehicles?limit=1&page=1`
- `/vehicles?limit=1&page=1&filter=BMW`

## How to run tests locally
- Run `yarn test`
