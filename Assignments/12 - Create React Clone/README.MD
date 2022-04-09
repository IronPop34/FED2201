List of Improvements

    1) Tried to figure out how to display the start menu, after trying to follow the work flow learned in class. Menu was present before, I was HTML a ref.

    2) I wanted to the button to be at the bottom of the start menu and its not functional.

    3) Importing CSS files to effect specific components is still a little confusing.

*All research was from the point of view of each component being a separate app

Routing using Redux and Axios

    Play Selection

        Redux: 

            Using react-router, data is stored in its entirety. The benefit is that the data become impossible to pass down to the component, making it easier to connect router data to any component; and route params can be accessed directly. e.g. redux(game.router) <-> redux-router <-> react-router(viaRouterContext).

            There are three limitations:

                1) Not all the data has its own serial version ID and can cause issues with 
                   devTools and libraries; however, if the libraries can mitigate this, it can be over come.
            
                2) If I take advantage of ReactContext, I must use features that        
                   react-router does on its own and can cause delays in upgrade paths.

                3) Due to limitation 2, top APIs must be different, even if the logic is 
                   identical.

        Axios:

            By taking the following Axios advantages:

                1) It defaults to work with JSON Data.

                2) Function names match any HTTP methods.

                3) Can do more with less code.

                4) Better error handling.

                5) Can be used on the server as well as the client.

            Online game play would be better, easy to maintain and code, and quicker error handling.

    Options Selection

        Redux: 
            
            Using react-route-redux, react router would do most of the work and sync data to a specific location, offering an array of documentation and examples. e.g redux(game.routing) <-> react-router-redux <-> history(history.location) <-> react-router 

            However, this doesn't include react router params and must be passed down to the react router component. This is not recommended because the data may update after the react router prop change.

        Axios:

            Using the GET to Retrieve Data, POST to Create Data, PUT to Update Data, and Delete Data, data concerning volume control, button reaction sensitivity, and other game features can be created and adjusted to suit the gamer on their server.