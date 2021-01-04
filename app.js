/**
 * Sinan Bey bizden balik satisi icin online bir sistem gelistirmemizi istiyor
 * Bunun icin  istedigi bazi kriterler var bu kriterlerin her biri birer fonksiyon olarak olusuturulacak
 * olusturulan bu fonksiyonlar istenilen bilgileri bizlere filtrelicek ve bu fonksiyonlar ayri bir dosyada bulunmali
 * filtrelenen bu datalar yeni birer array olarak musteriye sunulacak
 * bu programi yaparken bazi kriterlerimiz olacak bunlar ;
 * 1. Programin duzgun calisiyor olmasi [-20]
2. Algoritmanin dogru kurilmasi [-20]
3. Programlarin fonksiyon ile olusturulmasi [-20]
4. Programinin hizalamalarinin duzgun olmasi [-10]
5. Array methodlarinin kullanilmasi (map, filter, reduce ..vb) [-20]
6. Fonksiyonlarin ana programdan ayrilmasi (functions.js diye ayri bir dosya olusturunuz) [-10]
 */
const fishFarm = [{
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1), // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway",
        season: "Winter",
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12), // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan",
        season: "Winter",
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    {
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom",
        season: "Spring",
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    {
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland",
        season: "Summer",
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    {
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France",
        season: "Autumn",
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Bluefish",
        price: 13.70,
        entryDate: new Date(2021, 10, 11),
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy",
        season: "Winter",
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    {
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE",
        season: "Summer",
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    {
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt",
        season: "Summer",
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    {
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam",
        season: "Summer",
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain",
        season: "Winter",
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },
]
//Stock Control
let sArray = [];

//Preis Control
let preisControl = []

//Sadece Bernde ve kis sezonu olan baliklar
let canBuyBernandWinter = [];

//Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
let comeFromEu = [];
let comeFromEusort = comeFromEu.sort()

// Toplam balik stoku ne kadardir?
let totalStock = 0
for (let index = 0; index < fishFarm.length; index++) {
    totalStock += fishFarm[index].stockVolumeInKg
}
//En pahali olan balik
let fishPriceArray = []
let mostExpensiveFish = [];

//En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
let fishDuration = [];
let freshFish = [];

//Swiss Romandy Region
let fishforFrench = [];

//Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
let fishForTc = [];
let totalFishforTc = [];
let total = 0

// Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
let avaregeGrams = [];
let allIn = 0
let average = 0

stock();
render("Elimizde 500 kg ustunde stok bulunan baliklar : ", sArray)

preisControlFunction();
render("Fiyati 9 ve 12 CHF arasinda olan baliklar : ", preisControl)

onlyCanbuyBern();
render("Sadece Bern de ve kis sezonu satilan baliklar : ", canBuyBernandWinter)

endDate()

cameFromEurope()
render("Avrupa ülkelerinden gelen ve fiyati 10 frdan dusuk olan baliklarimiz : ", comeFromEusort)

render("TESISIMIZIN TOPLAM BALIK STOGU : ", totalStock + " KG")

expensiveFish()
render("En pahali balik : ", mostExpensiveFish + " CHF")

freshFishfunc()
render("Tesisimizde en uzun sure tazeligini koruyan baliklar : ", freshFish)

fishForRomandy()
render("Tesisimizde Kis ve Sonbahar sezonu icin Romandi bölgesinde satisa sunulan baliklarimiz", fishforFrench)

fishTicino()
render("Ticino Kantonu icin toplam stogumuz :", total + " KG")

sumSeason()
render("Yazlik sezonda cikan,AB disindan gelen ve ZH'de satilan baliklarin ortalama gramaji : ", average)