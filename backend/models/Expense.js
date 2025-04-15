const mongoose = require("mongoose");

// Define the schema
const expenseSchema = new mongoose.Schema({
  category: {
      type: String,
      enum: ["food", "travel", "transportation", "entertainment", "utilities", "other"],
      required: true,
    },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  location: { type: String },
  description: { type: String },
  paymentMethod: { type: String, enum: ["cash", "card", "other"], default: "cash" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;