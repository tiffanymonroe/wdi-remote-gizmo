const mongoose = require('mongoose');

const Article = require('./models/articles.js');

mongoose.connect('mongodb://localhost:27017/example');

mongoose.connection.once('open', ()=>{
    // Article.create(
    //     {
    //         title: "Awesome Title",
    //         author: "Matt"
    //     },
    //     (error, createdArticle)=>{
    //         console.log('article created!');
    //         console.log(createdArticle);
    //         mongoose.connection.close();
    //     }
    // );
    // Article.find(
    //     { author: 'Matt'},
    //     (error, articles) => {
    //         console.log(articles);
    //         mongoose.connection.close();
    //     }
    // );
    // Article.update(
    //     { author: 'Matt' },
    //     {
    //         $set: {
    //             author: 'Matthew'
    //         }
    //     },
    //     { multi: true },
    //     (error, response) => {
    //         console.log(response);
    //         mongoose.connection.close();
    //     }
    // )
    // Article.remove(
    //     { author: 'Matthew'},
    //     (error, response)=>{
    //         console.log(response);
    //         mongoose.connection.close();
    //     }
    // )

    Article.create(
        {
            title: "Awesome Title",
            author: "Matt"
        },
        (error, createdArticle)=>{
            console.log('article created!');
            console.log(createdArticle);
            Article.find(
                { author: 'Matt'},
                (error, articles) => {
                    console.log(articles);
                    mongoose.connection.close(); //only have one of these.  Put it in the last callback
                }
            );
        }
    );
});
