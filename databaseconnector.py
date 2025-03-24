import mysql.connector
from website import CreateApp

if __name__ == "__main__":
  app = CreateApp()
  app.run(debug=True, port=8080)


mydb = mysql.connector.connect(host="localhost", 
user="root",
password="Ghost!12",
database="ecommerceassignment")
  
cur = mydb.cursor()

def returnUser(user):
  mydb = mysql.connector.connect(host="localhost", 
  user="root",
  password="Ghost!12",
  database="ecommerceassignment")
  
  cur = mydb.cursor()
  cur.execute("CALL FindAccount(%s);", (user,))
  try:
    cur.fetchall()[0][0]
    mydb.commit()
    mydb.close()
    return True
  except:

    print("No user matched")
    mydb.commit()
    mydb.close()
    return False
  

def AddProductSingle(product, price):
  if product == "":
    print("product is none")
    return
  elif price == "":
    print("price is none")
    return
  elif type(price) != float:
    print("price is not float")
    return
  else:
    cur.execute("CALL `AddProductSingle`(%s, %s);", (product, price))

if returnUser("Callum"):
  print("oogily boogily")




