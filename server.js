import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Assume you have a function `compile` in `compiler.js` that executes the compilation logic
import compile from './compiler/compiler.js';


const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/compile', (req, res) => {
  const { code } = req.body;
  try {
    const output = compile(code);
    res.send({ output });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
