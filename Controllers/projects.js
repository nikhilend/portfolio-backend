import Projects from '../Model/Projects.js';
import { setCors } from '../utils/corsHandler.js';

export const insertData = async (req, res) => {
  if (!setCors(req, res)) return;
  try {
    const project = req.body;
    await Projects.create(project);

    res.status(200).json({message: "Inserted Successfully" ,success : true})

  } catch (err) {
    res.status(401).json({message: 'Error inserting data:', err})
  }
};

export const getData = async (req, res) => {
  if (!setCors(req, res)) return;
  try {
    const projects = await Projects.find();
    res.json({projects, success: true});
  } catch (err) {
    res.status(500).json({ message: 'Server Error', detail: err });
  }
};

export const updateData = async (req, res)=> {
  if (!setCors(req, res)) return;
  try {
    const { id } = req.params;        // project id from URL
    const updateData = req.body;      // new data from request body

    // Find the project and update
    const updatedProject = await Projects.findOneAndUpdate(
      { id: id },                     // match project by id (not _id)
      { $set: updateData },           // apply updates
      { new: true }                   // return the updated document
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({
      message: 'Project updated',
      updatedProject
    });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', "err" : err });
  }
}

export const deleteData = async (req, res)=> {
  if (!setCors(req, res)) return;
  try {
    const { id } = req.params;        // project id from URL

    // Find the project and update
    const deletedProject = await Projects.findOneAndDelete(
      { id: id }                     // match project by id (not _id)
    );
    
    res.json({
      message: 'Project updated',
      success : true
    });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', success: false });
  }
}

export default insertData