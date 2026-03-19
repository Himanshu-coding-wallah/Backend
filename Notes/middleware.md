# Middlewares
- Functions that run automatically before or after certain database operation.
- PRE -> run before operation
- POST -> run after operation

```
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})
```  
- This is a pre-save middleware , It runs before a user document is saved   
- Runs before .save() or .create()  
- async → because hashing takes time  
- next → Tells Mongoose: “I’m done, move to next middleware or save the document”  
> this keyword refers to the current document (user)
 
- next() is used to tell that the middleware is executed , continue the process

## Types
1. Document middleware ->    
Runs on individual document(data).  
This refers to document  
Used with save, init, validate, updateOne, deleteOne

2. Query middleware->   
Runs on query object  
This refers to query object  
Used with find, findOne

3. Model middlewares ->   
Runs on model function  
This refers to model
Used with inserMany

4. Aggregate middlewares ->   
Runs on aggregate pipeline  
This refers to aggregate object