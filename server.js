import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import vm from 'vm';

// Assume you have a function `compile` in `compiler.js` that executes the compilation logic
import compile from './compiler/compiler.js';

const app = express();

app.use(cors());  
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/compile', (req, res) => {
  const { code, outputType } = req.body;
  try {
    // This compiles the code and presumably translates it to JS.
    const jsCode = compile(code, outputType);

    // Create a new script from the compiled code.
    const script = new vm.Script(jsCode);

    // Create a context for the script to run in, providing a console object.
    let output = ''; // This will capture the output.
    const context = vm.createContext({
      console: {
        log: (...args) => {
          output += args.join(' ') + '\n'; // Capture console.log output
        }
      }
    });

    // Run the script in the defined context.
    script.runInContext(context);

    // Send back the captured output.
    res.send({ output });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
