import mysql.connector

mydb = mysql.connector.connect(host="localhost", 
user="root",
password="Ghost!12",
database="ecommerceassignment")
  
cur = mydb.cursor()

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




mydb.commit()
mydb.close()

