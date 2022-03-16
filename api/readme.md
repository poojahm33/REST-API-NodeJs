Nodejs REST API 

GET method
------------------------------------------------------

Lists all the documents in the specified collection
POSTMAN- localhost:4000/api/users/

POST method
-------------------------------------------------------

adding new document to the collection

POSTMAN- localhost:4000/api/users/
body - {
    "username" : "pooja",
    "password" : "222",
    "email": "pooja@gmail.com"
} 

PUT method
-----------------------------------------------------------
updates existing document, id is required

POSTMAN- localhost:4000/api/users/62318231a7fdcfd97e80e4aa3b
body- {
    "username" : "pooja",
    "password" : "222",
    "email": "pooja@gmail.com"
} 

DELETE method
-----------------------------------------------------------
deletes the document, id is required

POSTMAN- localhost:4000/api/users/62318231a7fdcfd97e80e4aa3b
