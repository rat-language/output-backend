import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Assume you have a function `compile` in `compiler.js` that executes the compilation logic
import compile from './compiler/compiler.js';

const app = express();

app.use(cors());  // It's typically a good practice to place middleware usage before any routes.
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/compile', (req, res) => {
  const { code, outputType } = req.body;
  try {
    const output = compile(code, outputType);
    console.log("Compilation Output:", output); // Log the output to the console
    res.send({ output });
  } catch (error) {
    console.error("Compilation Error:", error); // Log errors to the console
    res.status(500).send({ error: error.message });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
