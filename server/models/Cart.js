import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: String,
  },
  items: [
    {
      productId: {
        type: String,
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity cannot be less than 1."],
        default: 1,
      },
      price: Number,
    }
  ],
  bill: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default Cart = mongoose.model("cart", CartSchema);
