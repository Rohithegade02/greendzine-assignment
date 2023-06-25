in the app.js file,
fetched the data using axios and stored that data to the data state and passed it to search component
in Search.js file,
Filtered the data stored it to renderItem state and also created textfield where user can search using their first name
In CardList.js file,
Just mapped the data coming from search component(renderItem as props)
In the CardItem.js file,
just add styling using material-ui and also wrap each item in a Card(material-ui component). Also add one more functionality i.e if item is not there then added a skeleton
