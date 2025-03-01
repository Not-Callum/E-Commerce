# E-Commerce

This is my first proper start of a full project to get an idea of Full Stack Development. Planning to use HTML, CSS, Javascript, Python and SQL. I was heavily inspired by multiple other webpages, including [www.pokerand.net](https://pokerand.net/) 

Below shows the use of a darkmode button.
 
![image](https://github.com/user-attachments/assets/a2288b8c-91ab-4a32-a902-4ede92e8c4e6)
![image](https://github.com/user-attachments/assets/2cffc28f-67f7-4d75-9fbb-98e583e909c7)

I have a MySQL database set up to mimic partially what a database for this website would look like. It misses key features such as handling cancelled orders, handling "Guest" users and containing delivery locations for users. But it was a great experiment for myself and I learnt a whole bunch. (if you're seeing this before I upload images of the database, I do apologise, I had to head to work before I could finish this README :( )

For creating new accounts:

![image](https://github.com/user-attachments/assets/4bca58a0-faee-47a8-8713-919b6132c0e4)
![image](https://github.com/user-attachments/assets/d10a81db-e14b-44ad-a752-9e6d629b5a52)


For creating new categories:

![image](https://github.com/user-attachments/assets/936b953d-2440-42bd-9e34-f29bf27adc3e)
![image](https://github.com/user-attachments/assets/b9fdf455-c887-4713-8519-9507b9464621)


For creating new products:

![image](https://github.com/user-attachments/assets/67464a25-a0db-4924-aa42-18dbb6c65265)
![image](https://github.com/user-attachments/assets/59b7dc01-8c5e-4f79-8c2b-4758cc92a9ae)
There is multiple procedures for each category for future ease.


For updating the quantity of a product. This could be supplemented with an "addition" based procedure for when new stock arrives, you could just import how much has arrived and it would automatically add to what currently exists, but this demonstration it was not necessary:

![image](https://github.com/user-attachments/assets/900da57b-4e95-4da9-8a8b-88c60014880e)


For finding the product ID of products using a text query:

![image](https://github.com/user-attachments/assets/d7b31763-0016-4981-b170-078e22107221)
![image](https://github.com/user-attachments/assets/91379817-c8be-4e34-a8a0-108692ff5901)


For finding low stock products:

![image](https://github.com/user-attachments/assets/6223dd6a-5791-4fca-9a0c-b73ae3622063)
![image](https://github.com/user-attachments/assets/f9f424c3-5cc9-42aa-9909-d1ce05e7e968)


For finding top 3 highest selling products:

![image](https://github.com/user-attachments/assets/9f288889-916e-4da6-9bae-e23166941d00)
![image](https://github.com/user-attachments/assets/14676d36-360c-4eb7-a015-74d999b389b5)


For creating new orders, this will create an order, totalling the amount spent and when it happened, it creates an ID for the ordered items using the account ID and order ID and tracks how much of what product was bought and at what price, and also takes away from the stock in the products table. This would have to be run per item. So if a person purchases two products, this would run twice:

![image](https://github.com/user-attachments/assets/3c858ffb-8ba7-4835-9891-8e9a9da0f80a)
![image](https://github.com/user-attachments/assets/84f49ffd-6e95-4190-8fb9-e12df5a6649e)
![image](https://github.com/user-attachments/assets/a8573447-2304-4f3e-af5c-fb5b76cebe8a)


For finding all of a customer's orders:

![image](https://github.com/user-attachments/assets/0b2c0a1c-687b-4d7d-a2c5-892cdc8a89fe)
![image](https://github.com/user-attachments/assets/73a054de-0ecd-43db-91a8-10ac7e3aae2e)


For finding the products sold per category:

![image](https://github.com/user-attachments/assets/c626c09c-cb41-48c0-a9ea-4be0f02b2920)
![image](https://github.com/user-attachments/assets/a5722fbb-c7c1-4f1b-828f-2d00f68bef62)


There also are smaller scale queries:

![image](https://github.com/user-attachments/assets/799260ec-81b0-45f9-8f9d-910a597055ef)



