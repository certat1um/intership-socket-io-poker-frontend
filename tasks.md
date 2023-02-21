### Main tasks:
 - [x] Make UI (EnterRoom page, Login page, Room page with list of cards)
 - [x] Refactor Filestructure
 - [] Start developing Server

### Make UI:
 - [x] EnterRoom page
 - [x] Login page
 - [x] Room page with list of cards
 
### Not authorizated:
 - Create My New Room.
    We make GET req to /new-user.
    We make POST req to /new-user to create new user.
    Server returns {roomID}.
    We save it in LocalStorage.
    We make GET req to /room/:id using LocalStorage

 - Enter External Room.
    We make GET req to /new-user
    We make POST req to /new-user to create new user.
    Server returns {userID, roomID}.
    We save it in LocalStorage.
    We make GET req to connect to another room
 
### Authorizated:
 - Enter my room.
    We make GET req to /room/:id using LocalStorage

 - Connect to external room.
    We make GET req to connect to another room

### To Ask:
 - 

### To refactor:
 - [] Use States
 - [] Use BrowserRouter to redirect
 - [] 
