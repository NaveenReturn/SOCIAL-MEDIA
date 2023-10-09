const express = require('express')
const app = express()
const middleware = require('./middleware/error')
const cookieParser = require('cookie-parser')
const path = require('path');

app.use(express.json())
app.use(cookieParser())
app.use('/uploads',express.static(path.join(__dirname,'uploads')));

// ALL CONTROLL SECTION
const userRouter = require('./router/AuthRouter');
const postUrl = require('./router/postDetails');
const admin = require('./router/AdminRoutee');
const moviesControll = require('./router/MoviesRouter');
const Ticket = require('./router/cinemaPassword');
const Actoers = require('./router/Actoters');
const Story = require('./router/StoryRouter');
const ActorPost = require('./router/ActoresPostRouter');
const FunctionEvent = require('./router/functionRouter')


// URL parser section
app.use('/api/cinema',userRouter);
app.use('/api/cinema',admin);
app.use('/api/cinema/new',postUrl);
app.use('/api/cinema',moviesControll)

// TICKET PASSWORD
app.use('/api/cinema',Ticket);

// ACTOERS URL
app.use('/api/cinema/actoers',Actoers);
app.use('/api/cinema/actor/post',ActorPost)
// Story URl
app.use('/api/cinema/story',Story)

// FUNCTION EVENT
app.use('/api/cinema/event',FunctionEvent)


app.use(middleware)
module.exports = app;