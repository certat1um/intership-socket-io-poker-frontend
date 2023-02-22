### Main tasks:
 - [x] makes UI (EnterRoom page, Login page, Room page with list of cards)
 - [x] Refactor Filestructure
 - [x] Start developing Server
 
### Not authorizated:
 - Create My New Room.
    Client makes GET req to /new-user.
    Client makes POST req to /new-user to create new user.
    Req to server to create room, returns {roomID}.
    Client saves it in LocalStorage.
    Client makes GET req to /room/:id using LocalStorage

 - Enter External Room.
    Client makes GET req to /new-user
    Client makes POST req to /new-user to create new user.
    Req to server to find room, returns {roomID}.
    Client saves it in LocalStorage.
    Client makes GET req to connect to another room
 
### Authorizated:
 - Enter my room.
    Client makes GET req to /room/:id using LocalStorage

 - Connect to external room.
    Client makes GET req to connect to another room
    Client makes GET req to connect to another room
 
### Authorizated, but don't have my room:
 - Enter my room.
    Req to server to create room, returns {roomID}.
    Client saves it in LocalStorage.
    Client makes GET req to /room/:id using LocalStorage

 - Connect to external room.
    Client makes GET req to connect to another room

### To Ask:
 - 

### To refactor:
 - [x] Use States to inputs
 - [x] Figure out what components to render in due to data in LocalStorage
 - [x] Move components and figure more out about filestructure
