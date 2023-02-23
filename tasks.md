### Main tasks:
 - [x] Realise randomRoomID server communication
 - [x] Implement socket connection with server
 
### To Ask:
 - 

### To refactor:
 - [x] useState() instead of makeActive.js
 - [] Connect socket to room


-------------------------------------------


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
