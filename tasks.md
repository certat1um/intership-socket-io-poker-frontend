### Main tasks:
 - [x] Realise randomRoomID server communication
 - [x] Implement socket connection with server
 - [] Implement socket events & communication with DB
 

### Implement socket events & communication with DB
 - [x] getAllCards from server and render them in CardsList by useState
 - [x] getResults from server and render it in ResultsTable by useState
 - [] click event on card emits 'handlePointCardToServer'
 - [] Server listens to event 'handlePointCardToServer'
 - [] Client listens to event 'handlePointCardClient' and render Results table by useState
 - [] Client makes fetch UPDATE/POST request to change 'value' in 'participants' table


### Creating new user
 - [] Creating user via NewUserForm
 - [] Getting user from fetch GET to render on front


### Event by clicking the card
 - [] POST/PUT fetch to server to update/create cardPoints in participant table


### Event by entering the room
 - [] fetch to server to verify if user exist in table
 - [] if not - POST fetch to server to create a participant in table
 - [] if yes - nothing


### (Фронтенд) Логіка роботи з картами:
 1. При заході на сторінку клієнт посилає запит на отримання карт та рендерить їх
 2. На клієнті, при кліці на карту відбувається сокет подія (emit) на яку підписані інші клієнти
 3. Ця подія викликає функцію яка ререндерить таблицю результатів
 4. 


### To Ask:
 - 


### To refactor:
 - [] 


### To learn:
 - 