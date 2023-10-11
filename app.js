const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get("/", (req, res) => {
    res.send(data);
});

router.get("/by-name/:name", (req, res) => {
    const searchTerm = req.params.name;
    const rawData = fs.readFileSync('./data.json');
    const data = JSON.parse(rawData);

    const result = data.find(item => item.Title.toLowerCase().includes(searchTerm.toLowerCase()));

    res.json(result);
});

router.delete("/by-name/:name", (req, res) => {
    const searchTerm = req.params.name;
    const rawData = fs.readFileSync('./data.json');
    const data = JSON.parse(rawData);

    const index = data.find(item => item.Title.toLowerCase().includes(searchTerm.toLowerCase()));

        if (index !== -1) {
            data.splice(index, 1);

            fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));

            res.json({ message: 'Item deleted successfully' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    });
module.exports = router;