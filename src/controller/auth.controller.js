import User from "../models/user.model.js";
import bycrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import  {TOKEN_SECRET} from '../config.js';

export const register = async (req, res) => {
  
  const { email, password ,  username} = req.body;
  try {

    const userFound = await User.findOne({ email });
    if (userFound) 
      return res.status(400).json( ["The email is already use"] );

    const passwordHash = await bycrypt.hash(password, 10);
    const newUser = new User({ email, 
    password: passwordHash , 
    username});

 const usersaved= await newUser.save();

 const token = await createAccessToken({id: usersaved._id});
 res.cookie('token', token)

  res.json(
    {
      id: usersaved._id,
      email: usersaved.email,
      username: usersaved.username,
      createdAt: usersaved.createdAt,
      updatedAt: usersaved.updatedAt
    }
  );
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const login = async (req, res) => {
  
  const { email, password} = req.body;
  try {

   

    const userFound = await User.findOne({email});

    if(!userFound) return res.status(400).json({message: "User not found"});
    const isMatch = await bycrypt.compare(password, userFound.password);

    if(!isMatch) return res.status(400).json({message: "Incorrect password"});




 

 const token = await createAccessToken({id: userFound._id});
 res.cookie('token', token)
  res.json(
    {
      id: userFound._id,
      email: userFound.email,
      username: userFound.username,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt
    }
  );
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const logout =  (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  return res.status(200).json({message: "Logged out"});

}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)

  if(!userFound) return res.status(400).json({message: "User not found"});

  return res.json({
    id: userFound._id,
    email: userFound.email,
    username: userFound.username,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt
  })
  
}

 export const verifytoken= async (req, res) => {

  const {token} = req.cookies;

  if (!token) return res.status(401).json({message: "Unauthorized"});

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    
    if(err) return res.status(401).json({message: "Unauthorized"});

    const userFound = await User.findById(user.id);

    if(!userFound) return res.status(400).json({message: "User not found"});

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      
    })

  }
  )

 }
