
import categoryModel from './../models/category/category';
import subcategoryModel from './../models/subcategory/subcategory';
import userModel from './../models/user/user';
import playlistModel from './../models/playlist/playlist';
import userplaylistCategorytModel from './../models/userplaylistCategory/userplaylistCategory';
import likesModel from './../models/likes/likes';

userModel.sync({ force: false }).then(() => {
    console.log('user table created!');
}).catch((err) => {
    console.error('Error while creating userinterest table', err);
});

categoryModel.sync({ force: false }).then(() => {
    categoryModel.bulkCreate([
        { name: "Genre" },
        { name: "Mood" },
        { name: "Theme" },
        { name: "Vocals" },
        { name: "Indie" }]).then(result => {
            console.log('category table created!');
        }).catch(err => {
            console.log(err);
        });
}).catch((err) => {
    console.error('Error while creating userinterest table', err);
});

subcategoryModel.sync({ force: false }).then(() => {
    subcategoryModel.bulkCreate([
        { name: "Rock", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Pop", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKl_cG3OyV2uK4bNIYVk3I2ic-TvTZ8DRVCAp9Y_GNGTYqQeh', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Country", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://media1.s-nbcnews.com/j/newscms/2018_01/1308202/deal-of-the-day-bracelet-inline-1-today-180104_0fc5881d35e6dcd7d68299b1fbc8e3c2.fit-720w.jpg', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Electronic", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://op-cdn-madavor.netdna-ssl.com/2018/03/Theresa-Ditson.jpg', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "R&B", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Ambient", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKl_cG3OyV2uK4bNIYVk3I2ic-TvTZ8DRVCAp9Y_GNGTYqQeh', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Folk", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Reggae", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Religious", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Classical", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Slow & Moody", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Emotional", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Upbeat & Happy", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Sunny", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Romantic", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Intense", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Calm & Peaceful", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Sentimental", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Rock1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Pop1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Country1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Electronic1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "R&B1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Ambient1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Folk1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Reggae1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Religious1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Classical1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Slow & Moody1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
        { name: "Emotional1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },

    ]).then(result => {
        console.log('subcategory table created');
    }).catch(err => {
        console.log(err);
    });
}).catch((err) => {
    console.error('Error while creating userinterest table !', err);
});

playlistModel.sync({ force: false }).then(() => {
    console.log('playlist table created!');
}).catch((err) => {
    console.error('Error while creating userinterest table', err);
});

userplaylistCategorytModel.sync({ force: false }).then(() => {
    console.log('userplaylistCategories table created!');
}).catch((err) => {
    console.error('Error while creating userinterest table', err);
});
