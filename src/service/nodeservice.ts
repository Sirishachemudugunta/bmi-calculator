import { Injectable } from '@angular/core';
    
@Injectable()
export class NodeService {
    

    getVegWeightLossData() {
        return [  
            {
    "data": {
      "name": "Monday",
      "quantity": "low",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "low",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Vegetable Poha with peanuts and a glass of green tea.",
              "quantity": "low",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "low",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Carrot sticks with hummus.",
              "quantity": "low",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "medium",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Mixed vegetable curry with brown rice and cucumber salad.",
              "quantity": "medium",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "low",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Apple slices with cinnamon.",
              "quantity": "low",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "medium",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Grilled paneer with steamed broccoli and soup.",
              "quantity": "medium",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Tuesday",
      "quantity": "low",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "low",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Oats porridge with almonds and a cup of black coffee.",
              "quantity": "low",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "low",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Cucumber slices with mint yogurt dip.",
              "quantity": "low",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "medium",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Spinach dal with quinoa and steamed vegetables.",
              "quantity": "medium",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "low",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A handful of roasted chickpeas.",
              "quantity": "low",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "medium",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Vegetable stir-fry with tofu and a bowl of soup.",
              "quantity": "medium",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Wednesday",
      "quantity": "low",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "low",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Multigrain toast with avocado and a glass of orange juice.",
              "quantity": "low",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "low",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Mixed fruit salad.",
              "quantity": "low",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "medium",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Bhindi masala with chapati and a side of salad.",
              "quantity": "medium",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "low",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of popcorn (air-popped).",
              "quantity": "low",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "medium",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Grilled mushrooms with sautéed spinach.",
              "quantity": "medium",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
  "data": {
    "name": "Thursday",
    "quantity": "low",
    "time": "8 am - 8 pm"
  },
  "children": [
    {
      "data": {
        "name": "breakfast",
        "quantity": "low",
        "time": "8 am - 9 am"
      },
      "children": [
        {
          "data": {
            "name": "Idli with coconut chutney and sambar.",
            "quantity": "low",
            "time": "8 am - 9 am"
          }
        }
      ]
    },
    {
      "data": {
        "name": "snack",
        "quantity": "low",
        "time": "10 am - 10.30 am"
      },
      "children": [
        {
          "data": {
            "name": "A handful of almonds and walnuts.",
            "quantity": "low",
            "time": "10 am - 10.30 am"
          }
        }
      ]
    },
    {
      "data": {
        "name": "lunch",
        "quantity": "medium",
        "time": "1 pm - 2 pm"
      },
      "children": [
        {
          "data": {
            "name": "Vegetable khichdi with a side of curd.",
            "quantity": "medium",
            "time": "1 pm - 2 pm"
          }
        }
      ]
    },
    {
      "data": {
        "name": "eveningSnack",
        "quantity": "low",
        "time": "4 pm - 4.30 pm"
      },
      "children": [
        {
          "data": {
            "name": "A cup of herbal tea with a small fruit.",
            "quantity": "low",
            "time": "4 pm - 4.30 pm"
          }
        }
      ]
    },
    {
      "data": {
        "name": "dinner",
        "quantity": "medium",
        "time": "8 pm - 8.30 pm"
      },
      "children": [
        {
          "data": {
            "name": "Zucchini noodles with marinara sauce.",
            "quantity": "medium",
            "time": "8 pm - 8.30 pm"
          }
        }
      ]
    }
  ]
},
{
  "data": {
    "name": "Friday",
    "quantity": "low",
    "time": "8 am - 8 pm"
  },
  "children": [
    {
      "data": {
        "name": "breakfast",
        "quantity": "low",
        "time": "8 am - 9 am"
      },
      "children": [
        {
          "data": {
            "name": "Besan chilla with a glass of buttermilk.",
            "quantity": "low",
            "time": "8 am - 9 am"
          }
        }
      ]
    },
    {
      "data": {
        "name": "snack",
        "quantity": "low",
        "time": "10 am - 10.30 am"
      },
      "children": [
        {
          "data": {
            "name": "Celery sticks with peanut butter.",
            "quantity": "low",
            "time": "10 am - 10.30 am"
          }
        }
      ]
    },
    {
      "data": {
        "name": "lunch",
        "quantity": "medium",
        "time": "1 pm - 2 pm"
      },
      "children": [
        {
          "data": {
            "name": "Lauki sabzi with bajra roti and salad.",
            "quantity": "medium",
            "time": "1 pm - 2 pm"
          }
        }
      ]
    },
    {
      "data": {
        "name": "eveningSnack",
        "quantity": "low",
        "time": "4 pm - 4.30 pm"
      },
      "children": [
        {
          "data": {
            "name": "A small bowl of yogurt with chia seeds.",
            "quantity": "low",
            "time": "4 pm - 4.30 pm"
          }
        }
      ]
    },
    {
      "data": {
        "name": "dinner",
        "quantity": "medium",
        "time": "8 pm - 8.30 pm"
      },
      "children": [
        {
          "data": {
            "name": "Vegetable soup with a side of grilled tofu.",
            "quantity": "medium",
            "time": "8 pm - 8.30 pm"
          }
        }
      ]
    }
  ]
},
{
  "data": {
    "name": "Saturday",
    "quantity": "low",
    "time": "8 am - 8 pm"
  },
  "children": [
    {
      "data": {
        "name": "breakfast",
        "quantity": "low",
        "time": "8 am - 9 am"
      },
      "children": [
        {
          "data": {
            "name": "Methi paratha with curd and a cup of green tea.",
            "quantity": "low",
            "time": "8 am - 9 am"
          }
        }
      ]
    },
    {
      "data": {
        "name": "snack",
        "quantity": "low",
        "time": "10 am - 10.30 am"
      },
      "children": [
        {
          "data": {
            "name": "A small bowl of watermelon.",
            "quantity": "low",
            "time": "10 am - 10.30 am"
          }
        }
      ]
    },
    {
      "data": {
        "name": "lunch",
        "quantity": "medium",
        "time": "1 pm - 2 pm"
      },
      "children": [
        {
          "data": {
            "name": "Rajma curry with brown rice and a cucumber salad.",
            "quantity": "medium",
            "time": "1 pm - 2 pm"
          }
        }
      ]
    },
    {
      "data": {
        "name": "eveningSnack",
        "quantity": "low",
        "time": "4 pm - 4.30 pm"
      },
      "children": [
        {
          "data": {
            "name": "A handful of roasted fox nuts (makhana).",
            "quantity": "low",
            "time": "4 pm - 4.30 pm"
          }
        }
      ]
    },
    {
      "data": {
        "name": "dinner",
        "quantity": "medium",
        "time": "8 pm - 8.30 pm"
      },
      "children": [
        {
          "data": {
            "name": "Stuffed bell peppers with a side of vegetable soup.",
            "quantity": "medium",
            "time": "8 pm - 8.30 pm"
          }
        }
      ]
    }
  ]
},
{
  "data": {
    "name": "Sunday",
    "quantity": "low",
    "time": "8 am - 8 pm"
  },
  "children": [
    {
      "data": {
        "name": "breakfast",
        "quantity": "low",
        "time": "8 am - 9 am"
      },
      "children": [
        {
          "data": {
            "name": "Smoothie bowl with mixed berries and granola.",
            "quantity": "low",
            "time": "8 am - 9 am"
          }
        }
      ]
    },
    {
      "data": {
        "name": "snack",
        "quantity": "low",
        "time": "10 am - 10.30 am"
      },
      "children": [
        {
          "data": {
            "name": "Sliced cucumber and carrots with hummus.",
            "quantity": "low",
            "time": "10 am - 10.30 am"
          }
        }
      ]
    },
    {
      "data": {
        "name": "lunch",
        "quantity": "medium",
        "time": "1 pm - 2 pm"
      },
      "children": [
        {
          "data": {
            "name": "Vegetable biryani with raita.",
            "quantity": "medium",
            "time": "1 pm - 2 pm"
          }
        }
      ]
    },
    {
      "data": {
        "name": "eveningSnack",
        "quantity": "low",
        "time": "4 pm - 4.30 pm"
      },
      "children": [
        {
          "data": {
            "name": "A small bowl of roasted peanuts.",
            "quantity": "low",
            "time": "4 pm - 4.30 pm"
          }
        }
      ]
    },
    {
      "data": {
        "name": "dinner",
        "quantity": "medium",
        "time": "8 pm - 8.30 pm"
      },
      "children": [
        {
          "data": {
            "name": "Lentil soup with a side of steamed vegetables.",
            "quantity": "medium",
            "time": "8 pm - 8.30 pm"
          }
        }
      ]
    }
  ]
}
]}

getVegWeightGainData() {
        return [ 
		      {
    "data": {
      "name": "Monday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Paneer Paratha with butter and curd.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "medium",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Banana Shake with peanut butter.",
              "quantity": "medium",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Dal Makhani with steamed rice and a side of salad.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Roasted peanuts and dry fruits.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Shahi Paneer with naan and a glass of sweet lassi.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Tuesday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Aloo Paratha with butter and pickle.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "medium",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A handful of cashews and almonds.",
              "quantity": "medium",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Rajma Chawal with a side of papad.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Fruit smoothie with honey.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Vegetable biryani with raita.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Wednesday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Besan Chilla with curd and chutney.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "medium",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of makhana roasted in ghee.",
              "quantity": "medium",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Palak Paneer with jeera rice and salad.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A glass of mango lassi.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Paneer Tikka Masala with butter naan.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Thursday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Upma with ghee and a glass of milk.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "medium",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of chikki.",
              "quantity": "medium",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Chole Bhature with a side of pickle.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A glass of banana milkshake.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Stuffed capsicum with roti and a glass of kheer.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Friday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Oats with milk, jaggery, and dry fruits.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "medium",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of yogurt with honey.",
              "quantity": "medium",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Baingan Bharta with paratha and salad.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A handful of roasted chickpeas.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Vegetable kofta curry with steamed rice.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Saturday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Idli with ghee and coconut chutney.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "medium",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of halwa.",
              "quantity": "medium",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Vegetable pulao with dal fry.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A glass of buttermilk with spices.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Mutter Paneer with roti and salad.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Sunday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Poori with aloo sabzi and a glass of lassi.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "medium",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of kheer.",
              "quantity": "medium",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Vegetable biryani with raita and papad.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A glass of milk with turmeric.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Paneer Bhurji with paratha and salad.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  }]}
  
  getNonVegWeightLossData(){
      return [
	  
	  {
    "data": {
      "name": "Monday",
      "quantity": "low",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "low",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Boiled eggs with multigrain toast and masala chai.",
              "quantity": "low",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "low",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Grilled chicken tikka slices.",
              "quantity": "low",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "medium",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Tandoori chicken with cucumber salad.",
              "quantity": "medium",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "low",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of sprouts chaat.",
              "quantity": "low",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "medium",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Chicken soup with steamed vegetables.",
              "quantity": "medium",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Tuesday",
      "quantity": "low",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "low",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Omelette with spinach and a glass of green tea.",
              "quantity": "low",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "low",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A boiled egg with a pinch of black pepper.",
              "quantity": "low",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "medium",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Grilled fish with brown rice and a side of salad.",
              "quantity": "medium",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "low",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of roasted peanuts.",
              "quantity": "low",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "medium",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Lemon herb chicken with steamed broccoli.",
              "quantity": "medium",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Wednesday",
      "quantity": "low",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "low",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Scrambled eggs with onions and tomatoes.",
              "quantity": "low",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "low",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Cucumber slices with tuna spread.",
              "quantity": "low",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "medium",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Chicken curry with a small portion of brown rice.",
              "quantity": "medium",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "low",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A handful of almonds.",
              "quantity": "low",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "medium",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Fish tikka with roasted vegetables.",
              "quantity": "medium",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Thursday",
      "quantity": "low",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "low",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Masala omelette with a slice of whole-grain bread.",
              "quantity": "low",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "low",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of yogurt with fruit.",
              "quantity": "low",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "medium",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Grilled shrimp with a side of salad.",
              "quantity": "medium",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "low",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A handful of walnuts.",
              "quantity": "low",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "medium",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Chicken stew with vegetables.",
              "quantity": "medium",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Friday",
      "quantity": "low",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "low",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Idli with sambar and a cup of black coffee.",
              "quantity": "low",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "low",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of roasted chickpeas.",
              "quantity": "low",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "medium",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Chicken biryani (small portion) with cucumber raita.",
              "quantity": "medium",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "low",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A boiled egg with green chutney.",
              "quantity": "low",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "medium",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Grilled fish with a side of sautéed spinach.",
              "quantity": "medium",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Saturday",
      "quantity": "low",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "low",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Hard-boiled eggs with a slice of avocado.",
              "quantity": "low",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "low",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of fruit salad.",
              "quantity": "low",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "medium",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Turkey salad with a light lemon dressing.",
              "quantity": "medium",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "low",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A small portion of chicken tikka.",
              "quantity": "low",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "medium",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Grilled chicken breast with a side of roasted vegetables.",
              "quantity": "medium",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Sunday",
      "quantity": "low",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "low",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Oats with milk and a handful of dry fruits.",
              "quantity": "low",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "low",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A boiled egg with a sprinkle of salt.",
              "quantity": "low",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "medium",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Fish curry with a small portion of brown rice.",
              "quantity": "medium",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "low",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A handful of roasted makhana.",
              "quantity": "low",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "medium",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Chicken soup with a side of sautéed greens.",
              "quantity": "medium",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  }]}
  
  
    getNonVegWeightGainData(){
      return [
          {
    "data": {
      "name": "Monday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Omelette with cheese and paratha.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "high",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Chicken sandwich with mayonnaise.",
              "quantity": "high",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Butter chicken with naan and salad.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A boiled egg with nuts.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Grilled fish with mashed potatoes and a glass of lassi.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Tuesday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Scrambled eggs with cheese and a glass of milk.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "high",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Tandoori chicken drumsticks.",
              "quantity": "high",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Chicken biryani with raita.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A handful of cashews and almonds.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Mutton curry with steamed rice.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Wednesday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Pancakes with honey and a glass of milk.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "medium",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Chicken kebabs with mint chutney.",
              "quantity": "medium",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Fish curry with steamed rice.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A boiled egg with butter toast.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Chicken curry with paratha.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Thursday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "French toast with a glass of milk.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "medium",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Chicken nuggets with a dip.",
              "quantity": "medium",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Mutton biryani with cucumber raita.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "low",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of kheer.",
              "quantity": "low",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Grilled prawns with butter garlic sauce.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Friday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Bagel with cream cheese and smoked salmon.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "medium",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Chicken tikka with green chutney.",
              "quantity": "medium",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Egg curry with steamed rice.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A glass of milkshake with nuts.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Roast chicken with mashed potatoes.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Saturday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Chicken sausage with scrambled eggs and toast.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "low",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "A small bowl of halwa.",
              "quantity": "low",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Prawn curry with steamed rice.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A handful of roasted peanuts.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Grilled lamb chops with mashed potatoes.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  },
  {
    "data": {
      "name": "Sunday",
      "quantity": "high",
      "time": "8 am - 8 pm"
    },
    "children": [
      {
        "data": {
          "name": "breakfast",
          "quantity": "high",
          "time": "8 am - 9 am"
        },
        "children": [
          {
            "data": {
              "name": "Pancakes with a side of bacon and maple syrup.",
              "quantity": "high",
              "time": "8 am - 9 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "snack",
          "quantity": "high",
          "time": "10 am - 10.30 am"
        },
        "children": [
          {
            "data": {
              "name": "Chicken kebabs with naan.",
              "quantity": "high",
              "time": "10 am - 10.30 am"
            }
          }
        ]
      },
      {
        "data": {
          "name": "lunch",
          "quantity": "high",
          "time": "1 pm - 2 pm"
        },
        "children": [
          {
            "data": {
              "name": "Fish fry with biryani.",
              "quantity": "high",
              "time": "1 pm - 2 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "eveningSnack",
          "quantity": "medium",
          "time": "4 pm - 4.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "A bowl of ice cream with nuts.",
              "quantity": "medium",
              "time": "4 pm - 4.30 pm"
            }
          }
        ]
      },
      {
        "data": {
          "name": "dinner",
          "quantity": "high",
          "time": "8 pm - 8.30 pm"
        },
        "children": [
          {
            "data": {
              "name": "Roast turkey with gravy and mashed potatoes.",
              "quantity": "high",
              "time": "8 pm - 8.30 pm"
            }
          }
        ]
      }
    ]
  }
	  ]}
    
    

    getVegWLData() {
        return Promise.resolve(this.getVegWeightLossData());
    }
	
	getVegWGData() {
        return Promise.resolve(this.getVegWeightGainData());
    }
    
	getNonVegWLData() {
        return Promise.resolve(this.getNonVegWeightLossData());
    }
	
	getNonVegWGData() {
        return Promise.resolve(this.getNonVegWeightGainData());
    }
};