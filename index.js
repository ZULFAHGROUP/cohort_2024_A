require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const currentDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  let month = `0${date.getMonth() + 1}`.slice(-2);
  let day = `0${date.getDate()}`.slice(-2);

  return `${year}-${month}-${day}`;
};

// const getPrice = (id) => {
//   return ecormmerce.products.find((item) => item.id == id).price;
// };
let ecormmerce = {
  products: [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mas… with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versati…it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
    },
    {
      id: 3,
      title: "Calvin Klein CK One",
      description:
        "CK One by Calvin Klein is a classic unisex fragran…a versatile fragrance suitable for everyday wear.",
      category: "fragrances",
      price: 49.99,
    },
    {
      id: 4,
      title: "Chanel Coco Noir Eau De",
      description:
        "Coco Noir by Chanel is an elegant and mysterious f…e, and sandalwood. Perfect for evening occasions.",
      category: "fragrances",
      price: 129.99,
    },
    {
      id: 5,
      title: "Annibale Colombo Bed",
      description:
        "The Annibale Colombo Bed is a luxurious and elegan… materials for a comfortable and stylish bedroom.",
      category: "furniture",
      price: 1899.99,
    },
    {
      id: 6,
      title: "House Showpiece Plant",
      description:
        "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
      category: "home-decoration",
      price: 39.99,
    },
  ],
  users: [
    {
      id: 1,
      firstName: "Sophia",
      lastName: "Brown",
      username: "sophiab",
      email: "sophia.brown@dummyjson.com",
      password: "sophiabpass",
      age: 42,
      role: "admin",
    },
    {
      id: 2,
      firstName: "James",
      lastName: "Davis",
      username: "jamesd",
      email: "james.davis@dummyjson.com",
      password: "jamesdpass",
      age: 45,
      role: "admin",
    },
    {
      id: 3,
      firstName: "Emma",
      lastName: "Miller",
      username: "emmaj",
      email: "emma.miller@dummyjson.com",
      password: "emmajpass",
      age: 30,
      role: "user",
    },
    {
      id: 4,
      firstName: "Olivia",
      lastName: "Wilson",
      username: "oliviaw",
      email: "olivia.wilson@dummyjson.com",
      password: "oliviawpass",
      age: 22,
      role: "user",
    },
    {
      id: 5,
      first1Name: "Alexander",
      lastName: "Jones",
      username: "alexanderj",
      email: "alexander.jones@dummyjson.com",
      password: "alexanderjpass",
      age: 38,
      role: "user",
    },
  ],
  carts: [
    {
      id: 1,
      productID: 2,
      title: "Eyeshadow Palette with Mirror",
      userID: 2,
      quantity: 3,
    },
    {
      id: 2,
      productID: 3,
      title: "Powder Canister",
      userID: 4,
      quantity: 2,
    },
    {
      id: 3,
      productID: 1,
      title: "Essence Mascara Lash Princess",
      userID: 4,
      quantity: 1,
    },
  ],
  orders: [
    {
      id: 1,
      userID: 4,
      totalPrice: 129.99,
      status: "transit",
      date: "2024-05-10",
      shippingAddress: "7 Aduke close, Maryland cresent, Lagos state, Nigeria",
      paymentStatus: "paid",
      paymentMethod: "Visa",
      products: [2, 3],
    },
    {
      id: 2,
      userID: 4,
      totalPrice: 179.99,
      status: "transit",
      date: "2024-05-10",
      shippingAddress: "7 Aduke close, Maryland cresent, Lagos state, Nigeria",
      paymentStatus: "paid",
      paymentMethod: "Visa",
      products: [1, 4, 5],
    },
    {
      id: 3,
      userID: 3,
      totalPrice: 179.99,
      status: "transit",
      date: "2024-05-10",
      shippingAddress: "7 Aduke close, Maryland cresent, Lagos state, Nigeria",
      paymentStatus: "paid",
      paymentMethod: "Visa",
      products: [1, 4, 5],
    },
  ],
};

// end point to get all products
app.get("/products", (req, res) => {
  let data = ecormmerce.products;
  if (req.query.q) {
    let query = req.query.q;
    data = ecormmerce.products.filter(({ title, description, category }) => {
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        description.toLowerCase().includes(query.toLowerCase()) ||
        category.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
  res.status(200).json({
    status: true,
    message: "Products found",
    data: data,
  });
});

// end point to get a single product
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = ecormmerce.products.find(item => item.id == id);
  if (!product) {
    res.status(404).json({
      status: false,
      message: "Product not found",
    });
    return;
  }
  res.status(200).json({
    status: true,
    message: "Product found",
    data: product,
  });
});

// end point to get all users
app.get("/users", (req, res) => {
  let data = ecormmerce.users;
  let { search, category } = req.query;
  if (search) {
    data = ecormmerce.users.filter(({ firstName, lastName, username }) => {
      return (
        firstName.toLowerCase().includes(search.toLowerCase()) ||
        lastName.toLowerCase().includes(search.toLowerCase()) ||
        username.toLowerCase().includes(search.toLowerCase())
      );
    });
  }
  if (category) {
    data = ecormmerce.users.filter(({ role }) => {
      return role.toLowerCase().includes(category.toLowerCase());
    });
  }
  res.status(200).json({
    status: true,
    message: "Users found",
    data: data,
  });
});

// end point to get a single user
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = ecormmerce.users.find(item => item.id == id);
  if (!user) {
    res.status(404).json({
      status: false,
      message: "User not found",
    });
    return;
  }
  res.status(200).json({
    status: true,
    message: "User found",
    data: user,
  });
});

// end point to get all user's carts
app.get("/users/:id/carts", (req, res) => {
  const { id } = req.params;
  const user = ecormmerce.users.find(item => item.id == id);
  if (!user) {
    res.status(404).json({
      status: false,
      message: "User not found",
    });
    return;
  }
  let carts = ecormmerce.carts.filter(item => item.userID == id);
  carts = carts.map(item => {
    const price = ecormmerce.products.find(
      productItem => productItem.id == item.productID
    ).price;
    item.price = price;
    item.totalPrice = item.quantity * price;
    return item;
  });
  res.status(200).json({
    status: true,
    message: "Carts found",
    data: carts,
  });
});

// end point to get all user's orders
app.get("/users/:id/orders", (req, res) => {
  try {
    const { id } = req.params;
    const user = ecormmerce.users.find(user => user.id == id);
    if (!user) throw new Error("User not found");
    let orders = ecormmerce.orders.filter(item => item.userID == id);
    console.log(orders[0].products);
    if (orders.length) {
      orders = orders.map(order => {
        let orderProducts = order.products.map(id => {
          return ecormmerce.products.find(product => product.id == id);
        });
        order.products = orderProducts;
        return order;
      });
    }
    res.status(200).json({
      status: true,
      message: "Orders found",
      data: orders,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
});

// end point to sign user up
app.post("/signup", (req, res) => {
  try {
    for (let key in req.body) {
      req.body[key] = req.body[key].trim();
    }
    const { firstName, lastName, username, email, password, age, role } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !age ||
      !role
    )
      throw new Error("All fields are required");
    if (ecormmerce.users.find(item => item.username == username))
      throw new Error("Username is taken, please use another one");
    if (ecormmerce.users.find(item => item.email == email))
      throw new Error("Email already exist, please sign in");
    if (password.length < 8)
      throw new Error("Password must be at least 8 characters");
    if (age < 18) throw new Error("You must be at least 18 years old");
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
      throw new Error("Invalid email");
    res.status(201).json({
      status: true,
      message: "Signup successful",
    });

    const newUser = {
      id: ecormmerce.users.length + 1,
      firstName,
      lastName,
      username,
      email,
      password,
      age,
      role,
    };
    ecormmerce.users.push(newUser);
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

// end point to sign user in
app.post("/signin", (req, res) => {
  try {
    let { username, password } = req.body;
    if (!username || !password) throw new Error("All fields are required");
    const user = ecormmerce.users.find(
      each => each.username == username && each.password == password
    );
    if (!user) throw new Error("Credentials not correct");
    let resultUser = Object.assign({}, user);
    delete resultUser.password;
    res.status(200).json({
      status: true,
      message: "Signin successful",
      data: resultUser,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

// end point to add a product
app.post("/products", (req, res) => {
  try {
    let { title, description, category, price } = req.body;
    if (!title || !description || !category || !price)
      throw new Error("All fields are required");
    const newProduct = {
      id: ecormmerce.products.length + 1,
      title,
      description,
      category,
      price,
    };
    ecormmerce.products.push(newProduct);
    res.status(201).json({
      status: true,
      message: "Product added to cart",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

// end point to delete a product
app.delete("/products/:id", (req, res) => {
  try {
    const { id } = req.params;
    const productIndex = ecormmerce.products.findIndex(item => item.id == id);
    if (productIndex < 0) throw new Error("Product not found");
    ecormmerce.products.splice(productIndex, 1);
    res.status(200).json({
      status: true,
      message: "Product removed successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

// end point to update a product
app.patch("/products/:id", (req, res) => {
  try {
    const { id } = req.params;
    const productIndex = ecormmerce.products.findIndex(item => item.id == id);
    if (productIndex < 0) throw new Error("Product not found");
    let { title, description, category, price } = req.body;
    if (!title || !description || !category || !price)
      throw new Error("All fields are required");
    ecormmerce.products[productIndex] = {
      ...ecormmerce.products[productIndex],
      title,
      description,
      category,
      price,
    };
    res.status(200).json({
      status: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

// end point to add a product to cart
app.post("/users/cart/:id", (req, res) => {
  try {
    const { id } = req.params;
    const user = ecormmerce.users.find(user => user.id == id);
    if (!user) throw new Error("User not found");
    const { productID, quantity } = req.body;
    if (!productID || !quantity) throw new Error("All fields are required");
    const product = ecormmerce.products.find(
      product => product.id == productID
    );
    if (!product) throw new Error("Product not found");
    const cart = ecormmerce.carts.find(
      cart => cart.userID == id && cart.productID == productID
    );
    let message;
    if (cart) {
      cart.quantity += quantity;
      message = "Cart updated successfully";
    } else {
      const newCart = {
        id: ecormmerce.carts.length + 1,
        userID: id,
        productID,
        quantity,
      };
      ecormmerce.carts.push(newCart);
      message = "Product added to cart";
    }

    res.status(201).json({
      status: true,
      message,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

// end point to delete a product from cart
app.delete("/users/cart/:id", (req, res) => {
  try {
    let { id } = req.params;
    const cartItemIndex = ecormmerce.carts.findIndex(cart => cart.id == id);
    if (cartItemIndex < 0) throw new Error("Cart item not found");
    ecormmerce.carts.splice(cartItemIndex, 1);
    res.status(200).json({
      status: true,
      message: "Cart item removed successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

// app.post("/users/:id/carts", (req, res) => {
