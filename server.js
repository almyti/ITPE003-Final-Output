const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'iPhoneStoreDB';
const collectionName = 'iPhones';

let db;

// Sample data for demo purposes
const data = [
    { lastName: 'Doe', firstName: 'John', dateOfBirth: '01/01/1990', address: '123 Main St', phone: '555-5555', email: 'john.doe@example.com', emergencyContact: 'Jane Doe', emergencyContactPhone: '555-5556', allergy: 'Peanuts', findings: 'Healthy' },
    { lastName: 'Smith', firstName: 'Alice', dateOfBirth: '02/02/1985', address: '456 Elm St', phone: '555-5557', email: 'alice.smith@example.com', emergencyContact: 'Bob Smith', emergencyContactPhone: '555-5558', allergy: 'None', findings: 'Good' },
    { lastName: 'Johnson', firstName: 'Michael', dateOfBirth: '03/03/1978', address: '789 Maple Ave', phone: '555-5559', email: 'michael.johnson@example.com', emergencyContact: 'Emily Johnson', emergencyContactPhone: '555-5560', allergy: 'Shellfish', findings: 'Normal' },
    { lastName: 'Williams', firstName: 'Sarah', dateOfBirth: '04/04/1992', address: '101 Oak St', phone: '555-5561', email: 'sarah.williams@example.com', emergencyContact: 'James Williams', emergencyContactPhone: '555-5562', allergy: 'Dust', findings: 'Minor Issues' },
    { lastName: 'Brown', firstName: 'David', dateOfBirth: '05/05/1988', address: '202 Birch Rd', phone: '555-5563', email: 'david.brown@example.com', emergencyContact: 'Laura Brown', emergencyContactPhone: '555-5564', allergy: 'Latex', findings: 'Good' },
    { lastName: 'Jones', firstName: 'Linda', dateOfBirth: '06/06/1975', address: '303 Cedar St', phone: '555-5565', email: 'linda.jones@example.com', emergencyContact: 'Steven Jones', emergencyContactPhone: '555-5566', allergy: 'None', findings: 'Healthy' },
    { lastName: 'Garcia', firstName: 'Robert', dateOfBirth: '07/07/1980', address: '404 Spruce Ln', phone: '555-5567', email: 'robert.garcia@example.com', emergencyContact: 'Maria Garcia', emergencyContactPhone: '555-5568', allergy: 'Eggs', findings: 'Normal' },
    { lastName: 'Miller', firstName: 'Jessica', dateOfBirth: '08/08/1995', address: '505 Pine St', phone: '555-5569', email: 'jessica.miller@example.com', emergencyContact: 'Thomas Miller', emergencyContactPhone: '555-5570', allergy: 'Penicillin', findings: 'Good' },
    { lastName: 'Wilson', firstName: 'William', dateOfBirth: '09/09/1983', address: '606 Fir Rd', phone: '555-5571', email: 'william.wilson@example.com', emergencyContact: 'Nancy Wilson', emergencyContactPhone: '555-5572', allergy: 'Milk', findings: 'Minor Issues' },
    { lastName: 'Moore', firstName: 'Emily', dateOfBirth: '10/10/1991', address: '707 Walnut St', phone: '555-5573', email: 'emily.moore@example.com', emergencyContact: 'Richard Moore', emergencyContactPhone: '555-5574', allergy: 'Soy', findings: 'Healthy' }
];

async function connectToDatabase() {
    try {
        const client = new MongoClient(url);
        await client.connect();
        db = client.db(dbName);
        console.log(`Connected to database: ${dbName}`);
    } catch (error) {
        console.error('Failed to connect to database', error);
    }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

connectToDatabase();

// Ensure these routes exist and are in the correct path
const moviesPage = require('./routes/webpage1');
const aboutMePage = require('./routes/webpage2');
const friendsPage = require('./routes/webpage3');

// Routes for CRUD system
app.get('/crud', async (req, res) => {
    try {
        const iPhones = await db.collection(collectionName).find().toArray();
        res.render('crud', { iPhones });
    } catch (error) {
        console.error('Failed to fetch iPhones', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', async (req, res) => {
    try {
        const { model, color, storage, price } = req.body;
        await db.collection(collectionName).insertOne({ model, color, storage: parseInt(storage), price: parseFloat(price) });
        res.redirect('/crud');
    } catch (error) {
        console.error('Failed to add iPhone', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const iPhone = await db.collection(collectionName).findOne({ _id: new ObjectId(id) });
        if (iPhone) {
            res.render('edit', { iPhone });
        } else {
            res.status(404).send('iPhone not found');
        }
    } catch (error) {
        console.error('Failed to fetch iPhone', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { model, color, storage, price } = req.body;
        await db.collection(collectionName).updateOne({ _id: new ObjectId(id) }, { $set: { model, color, storage: parseInt(storage), price: parseFloat(price) } });
        res.redirect('/crud');
    } catch (error) {
        console.error('Failed to update iPhone', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await db.collection(collectionName).deleteOne({ _id: new ObjectId(id) });
        res.redirect('/crud');
    } catch (error) {
        console.error('Failed to delete iPhone', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/search', async (req, res) => {
    try {
        const query = req.query.query;
        const iPhones = await db.collection(collectionName).find({ model: { $regex: query, $options: 'i' } }).toArray();
        res.render('crud', { iPhones });
    } catch (error) {
        console.error('Failed to search iPhones', error);
        res.status(500).send('Internal Server Error');
    }
});

// New routes
app.get('/movies', (req, res) => moviesPage.handleRequest(req, res));
app.get('/aboutme', (req, res) => aboutMePage.handleRequest(req, res));
app.get('/friends', (req, res) => friendsPage.handleRequest(req, res));

// Other existing routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/activity1', (req, res) => {
    res.render('activity1');
});

app.get('/activity2', (req, res) => {
    res.render('activity2', { data: data });
});

app.get('/activity3', (req, res) => {
    res.render('activity3');
});

app.get('/activity4', (req, res) => {
    res.render('activity4');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
