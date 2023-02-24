### Main tasks:
 - [x] Realise randomRoomID server communication
 - [x] Implement socket connection with server
 - [] Implement socket events & communication with DB
 

### Implement socket events & communication with DB
 - [] GetAllCards from client and render them in CardsList by useState
 - [] PointCard clickListener emits 'handlePointCardToServer'
 - [] Server listens to event 'handlePointCardToServer'
 - [] Client listens to event 'handlePointCardClient' and render Results table by useState
 - [] Client makes fetch UPDATE/POST request to change 'value' in 'participants' table


### (Фронтенд) Логіка роботи з картами:
 1. При заході на сторінку клієнт посилає запит на отримання карт та рендерить їх
 2. На клієнті, при кліці на карту відбувається сокет подія (emit) на яку підписані інші клієнти
 3. Ця подія викликає функцію яка ререндерить таблицю результатів
 4. 


### To Ask:
 - multiple renders of component


### To refactor:
 - [] 

### To learn:
 - about basic hooks
 - about dynamic rendering
 - about listeners