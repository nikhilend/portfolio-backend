import Contact from '../Model/Contact.js';
import { setCors } from '../utils/corsHandler.js';

export const insertContact = async (req, res) => {
  if (!setCors(req, res)) return;
  try {
    const contact = req.body;
    await Contact.create(contact);

    res.status(200).send({message: "Inserted Successfully" ,success : true})

  } catch (err) 
  {
    res.status(401).send({message: 'Error inserting data:', err})

  }
};

export default insertContact