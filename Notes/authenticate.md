# Bcrypt library
- convert passwords into a secure unreadable form (hash)   
- Form irreversible strings  
- Passwords cannot be formed from these strings going backward.     
- Salt = random data added before hashing

## Installation
- npm install bcrypt   
- import bcrypt from "bcrypt";   

## Usage
operations are asynchronous , so use async await  
1. Hashing
```
const storedHash = await bcrypt.hash(password, 10);
```
here 10 is salts.      

2. Comparing  
```
const isMatch = await bcrypt.compare(inputPassword, storedHash);
```  
it return true or false.  
inputPassword is the given input.  
storedHash is the hash fetched from db.

## Using middlewares
```
// hashing
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

// comparing
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}
```
schema.methods is used to define custom fucntions that we can call on a document(object)  
This method will be available on every user document

>  Document -> one row of data (one object) inside MongoDB collection
```
// data in database  
// This whole object = user document
{
  _id: "abc123",
  name: "Himanshu",
  email: "himanshu@gmail.com",
  password: "$2b$10$xyz..."
}
```

In code
```
const user = await User.findOne({ email: "himanshu@gmail.com" });
```
user is a mongoose document  
Mongoose document has  
- Data 
- Built in methods
- custom methods 
- middleware support