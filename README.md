# search-box
WIP

## User Story
As a user, I can search into my data sources by filtering its name, legal entity, sort order and archive status.

## Acceptance Criteria
GIVEN a user is viewing the Search Box component
WHEN a user writes 3 or more characters into the query input
THEN show data sources that match with the query

GIVEN a user has performed a search with the Search Box
WHEN a user changes the ‘Legal Entity’ field
THEN change the search results to match with the new Legal Entity

GIVEN a user has performed a search with the Search Box
WHEN a user changes the ‘Sort by’ field
THEN sort the result fields according to the new option

GIVEN a user has performed a search with the Search Box
WHEN a user turns on the “Show Archived” radio button
THEN change the search results to display only archived data sources

## API
Using a mock API from mockapi.io that brings always the same data.

## Icons
Icons are FontAwesome's free version (v5.2.0).


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
