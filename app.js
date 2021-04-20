import express from 'express';
const app = express();
import cors from 'cors';
import './database.js';
import routes from './routes/index.js';

app.use(express.json());


app.use(cors());
app.use(routes);

app.listen(3000, () => {
    console.log("Server running on 3000: http://localhost:3000/");
});

export default app