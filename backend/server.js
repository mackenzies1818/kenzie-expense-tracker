const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./auth");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cors({
  origin: "http://localhost:3000",
}));
app.options('*', cors());

mongoose.connect("mongodb://localhost:27017/expense-tracker", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
//TODO: should payment method and category be defined as enum?
const ExpenseSchema = new mongoose.Schema({
  category: String,
  amount: Number,
  date: String,
  location: String,
  description: String,
  paymentMethod: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

const Expense = mongoose.model("Expense", ExpenseSchema);

app.get("/expenses", async (req, res) => {
  try {
    const { location, category, userId } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (location) filter.location = location;
    if (userId && mongoose.Types.ObjectId.isValid(userId)) {
      filter.userId = new mongoose.Types.ObjectId(userId);
    }

    const expenses = await Expense.find(filter);
    res.status(200).send(expenses);
  } catch (error) {
    res.status(500).send("Error fetching expenses");
  }
});


app.post("/expenses", async (req, res) => {
  try {
    const newExpense = new Expense({
      category: req.body.category,
      amount: req.body.amount,
      location: req.body.location,
      date: req.body.date,
      paymentMethod: req.body.paymentMethod,
      description: req.body.description,
      userId: new mongoose.Types.ObjectId(req.body.userId)
    });
    const addedExpense = await newExpense.save();
    res.status(201).send(newExpense);
  } catch (error) {
      console.log(error);
    res.status(400).send('Error saving the item');
  }
});

app.delete('/expenses/:id', async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) {
      return res.status(404).send('Expense not found');
    }
    res.status(200).send('Expense deleted');
  } catch (error) {
    res.status(500).send('Error deleting the expense');
  }
});
app.use("/api/auth", authRoutes);


app.listen(5001, () => console.log("Server running on port 5001"));