// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

favoriteColor1 = new Set(['Yellow', 'Pink', "White", "Purple"]);
favoriteRestaurant1 = new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"])
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: Array.from(favoriteColor1),
    isHavePet: "Yes",
    education:[
        {   
        name: "SD 01",
        city: "Jakarta", 
        graduate: 2016 },
        {
            name: "SMP 02", 
            city: "Jakarta", 
            graduate: 2019
        },
        {
            name: "SMA 03", 
            city: "Tangerang"
        }
],
    favoriteRestaurant: Array.from(favoriteRestaurant1)

};

favoriteColor2 = new Set(["Blue","Black","Grey"]);
favoriteRestaurant2 = new Set(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]);
const secondUser = {

    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: Array.from(favoriteColor2),
    isHavePet: "No",
    education:[
        {   
        name: "SD 02",
        city: "Jakarta", 
        graduate: 2010 },
        {
            name: "SMP 03", 
            city: "Bogor", 
            graduate: 2013
        },
        {
            name: "SMA 01", 
            city: "Surabaya"
        },
        {
            name: "Universitas Maju", 
            city: "Tangerang"            
        }
],
    favoriteRestaurant: Array.from(favoriteRestaurant2)

};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
