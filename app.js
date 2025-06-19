import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import session from 'express-session';
import authRoutes from './routes/authRoutes.js';
import textosRoutes from './routes/admin/textosRoutes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'secreto', resave: false, saveUninitialized: false }));

app.use('/', routes);
app.use(authRoutes);
app.use(textosRoutes);

export default app;