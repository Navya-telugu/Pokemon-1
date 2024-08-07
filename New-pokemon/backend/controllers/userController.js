const { readData, writeData } = require('../utils/fileUtils');

const getAllUsers = (req, res) => {
    const data = readData();
    res.json(data.users);
};

const addUser = (req, res) => {
    const data = readData();
    const newUser = req.body;
    data.users.push(newUser);
    writeData(data);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const data = readData();
    const userId = req.params.id;
    const updatedUser = req.body;
    const userIndex = data.users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        data.users[userIndex] = updatedUser;
        writeData(data);
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

const deleteUser = (req, res) => {
    const data = readData();
    const userId = req.params.id;
    const userIndex = data.users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        const deletedUser = data.users.splice(userIndex, 1);
        writeData(data);
        res.json(deletedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = { getAllUsers, addUser, updateUser, deleteUser };
