# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?
I used

* `react` to build the UI 🙂
* `react-test-renderer` to test react components
* `redux` and `react-redux` for state management
* `redux-logic` and `redux-logic-test` to manage side effects (like network requests) and write tests for them
* various skyscanner's `backpack` components / styles avoiding reinventing the wheel and making the development process faster
  * `bpk-component-button`
  * `bpk-component-card`
  * `bpk-component-icon`
  * `bpk-component-infinite-scroll`
  * `bpk-component-spinner`
  * `bpk-component-text`
  * `bpk-mixins`
  * `bpk-stylesheets`
* `classnames` to dynamically concat class names

### Q) What is the command to start the server?
From the root folder

 * `npm run client` to run client
 * `APIKEY=<key> npm run server` to run server
 * `APIKEY=<key> npm run server:watch` to run server using nodemon
 * `npm run server:mock` to run server with mock data
 * `npm run server:mock:watch` to run server with mock data using nodemon

---

# General:

### Q) How long, in hours, did you spend on the test?
I spent around 30 hours
* 12 hours on Saturday 14/09/2019
* 12 hours on Sunday 15/09/2019
* around 6 hours on tuesday 17/09/2019

### Q) If you had more time, what further improvements or new features would you add?
##### A) Additional Features
Having more time I'd have liked to add
* filtering / sorting functionality
* adding a drawer to show itinerary details

##### A) Improvements
* Use re-reselect to improve performances (after analyzing if actually needed)
* In some cases the implementation doesn’t match 100% the design in terms of
  * Spacing
  * Font size
  * This is because I tried to use BPK style / components as much as possible without customizing them too much
* Split selectors in multiple files - one for each part of the data (itinerary, legs, query, etc)
* Add `env` management for URLs and API key
* Add more tests for the UI and e2e tests
* Expose 3rd party components (BPKs) to the application through custom components, so that migrating to a different library would be easier (but this make more sense for a long term large application 🙂)
* Use typescript all across the project instead of just Proptypes in components



### Q) Which parts are you most proud of? And why?
I'm quite proud about the redux implementation / tests,
even if I didn't have enough time to
* write a exhaustive set of tests for the selectors
* use re-reselect to improve performances

I'm quite proud about the UI also, that I think is quite close to the design given;


### Q) Which parts did you spend the most time with? What did you find most difficult?
##### A) Most Difficult
About difficulty, maybe the main challenge was understanding the data structure coming from the API and thinking
about how to organize data on the front-end;

the goal was to keep it as simple as possible;

at the end I decided to use a front-end application state quite similar to the API data structure,
putting the complexity of aggregating data for the UI components into `Redux Selectors`.

This way I avoided duplicating several times the same chunks of data in the application state.

##### A) Spending more time
I think that implementing all the redux part

* reducers (including tests)
* actions (including tests)
* redux logics (including tests)
* selectors (including tests)
* connectors

was the most time consuming part


### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.
I'm a great Skyscanner user, so interacting with the real APIs and rebuilding a small part of it was really fun;
furthermore, the instructions are really well detailed.

Maybe the only thing that is not 100% clear to me is how important it is to be as fast as possible to finish the challenge.

I know that instructions say 'Feel free to spend as much or as little time as you’d like', but I've also been told that you consider how fast the solution comes,
so it was not easy to find the perfect balance between quality and fast pace.
