
const colbyRoute = (req, res) => {
    res.send("Colby Hale");
};

const lukeRoute = (req, res) => {
    res.send("Luke Skywalker");
};

module.exports = { colbyRoute, lukeRoute };