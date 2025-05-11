import express from 'express';

const products ={
  "users": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "isActive": true,
      "address": {
        "street": "123 Main St",
        "city": "Springfield",
        "zip": "62704"
      },
      "orders": [
        {
          "orderId": "A1001",
          "date": "2024-12-01",
          "amount": 250.75,
          "items": ["Laptop", "Mouse"]
        },
        {
          "orderId": "A1002",
          "date": "2025-01-15",
          "amount": 35.5,
          "items": ["Book"]
        }
      ]
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "bob@example.com",
      "isActive": false,
      "address": {
        "street": "456 Elm St",
        "city": "Riverside",
        "zip": "92501"
      },
      "orders": []
    },
    {
      "id": 3,
      "name": "Clara Davis",
      "email": "clara@example.com",
      "isActive": true,
      "address": {
        "street": "789 Oak St",
        "city": "Greenville",
        "zip": "29601"
      },
      "orders": [
        {
          "orderId": "C2001",
          "date": "2025-03-10",
          "amount": 120.0,
          "items": ["Desk Lamp", "Notebook"]
        }
      ]
    }
  ]
}

export default products;