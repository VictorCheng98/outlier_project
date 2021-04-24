# Overview
The idea behind this project is to build the interaction between a listener user and a broadcaster user.

My app consists of 2 main views for the listener and the broadcaster, managed through the routes `/listener` and `/broadcaster`, respectively.

## Usage
Navigate to `/listener` in the browser to view the listener screen. Pressing the green microphone icon indicates that the user has requested to join and navigates to `/broadcaster`, showing the broadcaster screen. Here, the broadcaster can toggle the requests icon to view the list of requests. Pressing either the approve or deny icons will navigate back to `/listener`, and the listener screen will now display either the listener or broadcaster screen, depending on if the request was approved or denied.

## State Management
The app manages two main contexts using **Context API**: one for the user, and one for the broacast. The idea behind 2 contexts is that the user context manages the state for the user, and the broadcast context manages the state for the broadcast.

### User Context
The user context manages a single user with the main state information:
- id
- name
- time since request was sent
- current stage:
    - idle
    - requested
    - approved
    - denied
- previous stage
- type: 
    - listener
    - broadcaster

This user state is initialized as a listener who has just opened the app. The state information can be updated dynamically and is reflected throughout the entire app.

### Broadcast Context
The broadcast context manages the broacast with the main state information:
- list of requested users
- list of broadcasters

The broadcast state updates the list of requested users as well as the list of broadcasters depending on if the requested user has been approved to join. This functionality is not reflected and only displays hardcoded data.

## Future Work
- Due to time constraints and lack of front-end experience, a lot of the UI components are not fully flushed out and implemented. For example, upon a listener being approved or denied, the app shows an `alert()` message, which is a bit invasive and should instead should be something more intuitive such as a popup with a friendly message indicating the response.

- Information and updates to the list of requested users and the list of broadcasters is displayed with hardcoded data and not currently implemented.

- Refactor the code to make it more readable and functional, such as extracting elemennt styles and storing the code seperately elsewhere.

## Time Spent
This project took me around 24 hours, with a majority of the time spent familiarizing myself with React and front-end development.
