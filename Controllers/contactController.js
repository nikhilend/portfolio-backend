import Contact from '../Model/Contact.js';

const insertContact = async (req, res) => {
  try {
    const contact = req.contact;
    await Contact.create(contact);

    res.status(200).send({message: "Inserted Successfully" ,success : true})

  } catch (err) {
    res.status(401).send({message: 'Error inserting data:', err})

  } finally {
    process.exit();
  }
};

export default insertContact