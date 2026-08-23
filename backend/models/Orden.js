// models/Orden.js

const mongoose = require("mongoose");

const ordenSchema = new mongoose.Schema(
  {
    buyer: {
      nombre: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      telefono: { type: String, required: true, trim: true },
    },
    items: { type: Array, required: true },
    total: { type: Number, required: true, min: 0 },
    paymentMethod: { type: String, required: true },
    status: { type: String, default: "pendiente" },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Orden", ordenSchema);