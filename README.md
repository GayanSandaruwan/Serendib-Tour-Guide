# Serendib-Tour-Guide


Make sure You have install Following tools.
*Mongo db
*Node Package Manager
*Fire Fox and Http requester extension (For testing Purpose Only)


Download the repository.
Linux environment is preffered for the development.
Move to the downloaded repository directory and run following commands
  1. "mongod" - to start the mongo server
  2. open another terminal and hit "npm install" (You need internet Connection to install the required Packages)
  3. Find the mail.js in the Routes directory under the repository 
  4. Open it and change email and password to your own credentials.
  5. in the terminal under repository directory hit "node server" (this will Start the server)
  6. Use Http-Requester to test the Server function
      you may try "http://localhost:3001/data/cars/register" with following content
       {
        "Cost" : "1000",
        "Owner" : "Gayan",
        "Model" : "ACE ",
        "Reg_no" : "qwe123",
        "Manu_fac" : "Jaguar"
        }
  
  
