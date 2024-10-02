## Welcome to the power of ten exercise!

(https://www.thepowerof10.info/)

This is an exercise to test you knowledge of implementing table-based sorting and paging. It will help you develop the following skills:

- using useReducer to amalgamate complex, multi field state into a single state
- implementing tri-state user sort patterns
- understanding how paging works and relates to sorting/filtering

## Getting started

1. All data is from one endpoint which is in the `power-of-ten` repository (which can be run with `npm start`)
2. This repo has been properly written to be more like a real API, and the entire endpoint can be explored/understood/queried through http://localhost:4000/api

## Rules

1. The main display table must be a MUI table (**NOT** a MUI data grid)
2. Use the pagination that is designed to go with the MUI table (https://mui.com/material-ui/react-table/#custom-pagination-options)
3. It is highly recommended that you use this pattern to assist with the sorting (https://mui.com/material-ui/react-table/#sorting-amp-selecting)
4. The following state items control what data is passed to the endpoint:
   - gender
   - distance
   - sort details (sort field, order - asc | desc)
   - page
   - rowsPerPage
5. I want all of the data in 4. in one piece of state (not 5 seperate state variables) and use a `useReducer` to manage the update of them (https://react.dev/reference/react/useReducer)
6. TIP - Go slowly on the sorting aspect of the Table, that is easily the hardest bit of this exercise
7. When you use useReducer you **should** use discriminated union actions (https://medium.com/@km87/typescript-discriminated-unions-d3b54bf14399)
8. I don't want any testing (for now)
9. I have included video of my solution

## Part 2 - Testing

1. Hopefully you haven't gone off piste and that by the end you have

- A reducer with the action/state logic
- A hook that does the Axios interactiomn
- A table that allows the user to click on the header to sort

2. Please unit test in the following order (difficulty ASC)

- The reducer (easy)
- The axios interaction hook (medium)
- The table with the sorting algorithm (medium)
