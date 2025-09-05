import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProduct = async (req, res) => { 
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
    console.log(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

export const getProductId = async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id)
      },
    });
    res.status(200).json(product);
    console.log(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {return res.status(400).json({ message: "Name and price are required" });}
  try {
    const product = await prisma.product.create({
      data: {
        name: name,
        price: price,
      },
    })
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

export const updateProduct = async (req, res) => {
  const { name, price } = req.body;
  if(!name || !price) {return res.status(400).json({ message: "Name and price are required" });}
  try {
    const product = await prisma.product.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        name: name,
        price: price,
      },
    })
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

export const deleteProduct = async (req, res) => {
    try {
        await prisma.product.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
