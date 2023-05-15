const Order=require('../model/order');

const createOrders= async (req, res) => {
    try {
      const newOrder = await Order.create(req.body);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create order' });
    }
  };
  
  // GET method for retrieving all orders
const getOrders= async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve orders' });
    }
  };


 const calculateFulfilledorders= async (req,res)=> {
    try {
      const result = await Order.aggregate([
        {
          $match: { orderStatus: "fulfilled" }
        },
        {
          $group: {
            _id: null,
            total: { $sum: "$orderPrice" }
          }
        }
      ]);
      
      if (result.length > 0) {
        const totalSum = result[0].total;
        res.send(`The sum of all fulfilled orders is ${totalSum}`);
        return totalSum;
      }
      
      return 0; // If there are no fulfilled orders, return 0 as the sum
    } catch (error) {
      throw new Error('Failed to calculate the sum of fulfilled orders');
    }
  }


module.exports = {createOrders,getOrders,calculateFulfilledorders};
