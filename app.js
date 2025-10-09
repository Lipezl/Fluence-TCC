import express from 'express';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import session from 'express-session';
import authRoutes from './routes/authRoutes.js';
import textosRoutes from './routes/admin/textosRoutes.js';
import testeRoutes from './routes/testeRoutes.js';
import prompt from './routes/prompt.js';
import User from './models/UserModel.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));


app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'secreto', resave: false, saveUninitialized: false }));

app.use((req, res, next) => {
  if (req.session.userId) {
    User.findById(req.session.userId, (err, user) => {
      if (!err && user) {
        res.locals.user = user;
      } else {
        res.locals.user = null;
      }
      next();
    });
  } else {
    res.locals.user = null;
    next();
  }
});

app.use('/', routes);
app.use(authRoutes);
app.use(prompt);
app.use(textosRoutes);
app.use(testeRoutes);


export default app;