const user = [];
user[0] = {
    name: "Monica",
    gender: "Female",
    age: 22,
    email: "monica@dingdong.com",
    favoriteColor: ["Yellow", "Pink", "White", "Purple"],
    peliharaan: "Yes",
    education: [
        {
            name: "SD 01",
            city: "Jakarta",
            graduate: "2016",
        },
        12,
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: "2019",
        },
        {   name: "SMA 03",
            city:  "Tangerang"

        },
    ],
    favoriteRestaurant: ["Bento", "Sushi", "Panecake", "Eggy", "Tempura","Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]
};

user[1] = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: ["Blue", "Black", "Grey",],
    peliharaan: "No",
    education: [
        {
            name: "SD 02",
            city: "Jakarta",
            graduate: "2010",
        },
        {
            name: "SMP 03",
            city: "Bogor",
            graduate: "2013",
        },
        {   name: "SMA 01",
            city:  "Surabaya",
            graduate: "2016",
        },
        {
            name: "Universitas Maju",
            city: "Tangerang",
        },
    ],
    favoriteRestaurant: ["Tempura", "Bento", "Sushi", "Panecake", "Padang","Katsu", "Geprek", "Panecake", "Eggy",]
};


console.log("Nama : " + user[1].name);
console.log("Pendidikan : " + user[1].education[2].name);
console.log("Pendidikan : " + user[1].education[2].city);
console.log("Makanan Favorit : " + user[1].favoriteRestaurant[5]);

