const express = require('express');
const path = require('path');
const dbConfig = require('./configs/db.config');
const compression = require('compression');
const cors = require('cors');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');
// Router
const taikhoanRoute = require('./routes/taikhoan.Route');
const sanphamRoute = require('./routes/sanpham.Route');
const orderRoute = require('./routes/order.Route');
const uploadRoute = require('./routes/upload.Route');

const app = express();
app.use(cors());
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Route
app.use('/api/taikhoan', taikhoanRoute);
app.use('/api/sanpham', sanphamRoute);
app.use('/api/order', orderRoute);

// Upload quickly
app.use('/api/upload', uploadRoute);
const dirname = path.resolve();
app.use('/uploads', express.static(path.join(dirname, '/uploads/')));

if (dbConfig.NODE_ENV === 'production') {
  app.use(express.static(path.join(dirname, '/frontend/build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

//Error Handle
// Not found URL link
app.use(notFound);
// Error Handler
app.use(errorHandler);

const port = dbConfig.PORT;
app.listen(port, () => {
  console.log(`App connect to ${dbConfig.DB} on host: ${dbConfig.HOST}`);
});
