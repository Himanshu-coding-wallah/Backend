### data modelling with mongoose
npm install mongoose

import mongoose from "mongoose"

it has two steps --- 
create schema ,
create model

### creating schema
const userSchema  = new mongoose.Schema(
    {
        user: {
            type: String,           // properties
            required: true,
            lowercase: true     //convert automatically to lowecase
        },
        email : {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
)

schema accepts objects
timestamp add two fields to every document
createdAt -- when user was created
updatedAt -- when user was last updated

### creating model
defualt const User = mongoose.model("User", userSchema)

this creates a model,
it accepts the model name that is "User"
( in mongodb the name User turns to users )
and it accepts a schema that is userSchema

it must be exported

### refering to other model
const subTodoSchema = new mongoose.Schema({
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
})

export const SubTodo= mongoose.model("SubTodo", subTodoSchema )

in the field createdBy , we are refering to the model User

this is the procedure
type: mongoose.Schema.Types.ObjectId,
ref: "User",



### enum
enum means: The field can only contain one of the allowed values.
example

status:{
  type: String,
  enum: ["Pending", "Cancelled", "Delivered"],
  default: "Pending",
}


### multiple schemas 
const orderItemSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  }
})

const orderSchema = new mongoose.Schema({
  orderItems: {
    type: [orderItemSchema]
  },
})

orderItems is an array of orderItemSchema objects.
So one order can contain multiple products.

example
{
  "orderItems": [
    {
      "productId": "65a12...",
      "quantity": 2
    },
    {
      "productId": "65b98...",
      "quantity": 1
    }
  ]
}