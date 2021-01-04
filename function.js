
//Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
let stock = () => {
    fishFarm.map(stock => {
        if (stock.stockVolumeInKg > 500) {
            sArray.push(stock.fishType)
        }
    })
}



//Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
let preisControlFunction = () => {


    fishFarm.map(preis => {
        if (preis.price > 9 && preis.price < 12) {
            preisControl.push(preis.fishType)
        }
    })
}

//Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
let onlyCanbuyBern = () => {
    fishFarm.map(buy => {
        if (buy.saleLocations.includes("BE") && buy.season.includes("Winter")) {
            canBuyBernandWinter.push(buy.fishType)
        }
    })
}
//Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
function addDays(date, days) {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
}

let endDate = () => {
    fishFarm
        .map(fish => {
            return {
                "name": fish.fishType,
                "enddate": addDays(fish.entryDate, fish.durationInDays)
            }
        })
        .sort((a, b) => a.enddate - b.enddate)
        .map(a => {
            console.log(`Balik adi:${a.name} ==> Son Kullanma Tarihi ${a.enddate}`)
        })
}
//Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
let cameFromEurope = () => {
    fishFarm.map(from => {
        if ((from.price < 10) && (from.originCountry == ("Spain") || from.originCountry == ("Norway") || from.originCountry == ("Italy") || from.originCountry == ("France") || from.originCountry == ("GREECE") || from.originCountry == ("Poland"))) {
            comeFromEu.push(from.fishType)
        }
    })

}
//En pahali olan balik hangisidir?
let expensiveFish = () => {
    fishFarm.map(fprice => {
        fishPriceArray.push(fprice.price)
    })
    let max = Math.max.apply(Math, fishPriceArray)
    for (let index = 0; index < fishFarm.length; index++) {
        if (fishFarm[index].price == max) {
            mostExpensiveFish.push(fishFarm[index].fishType, max)
        }

    }
}
//En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
let freshFishfunc = () => {
    fishFarm.map(fduration => {
        fishDuration.push(fduration.durationInDays)
    })
    let maxDur = Math.max.apply(Math, fishDuration)


    for (let index = 0; index < fishFarm.length; index++) {
        if (fishFarm[index].durationInDays == maxDur) {
            freshFish.push(fishFarm[index].fishType)
        }

    }
}
//Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
let fishForRomandy = () => {
    fishFarm.map(pfrench => {
        if ((pfrench.season == "Autumn" || pfrench.season == "Winter") && (pfrench.saleLocations.includes("VD") || pfrench.saleLocations.includes("GE") || pfrench.saleLocations.includes("NE"))) {
            fishforFrench.push(pfrench.fishType)
        }
    })
}
//Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
let fishTicino = () => {
    fishFarm.map(pfish => {
        if (pfish.saleLocations.includes("TI")) {
            fishForTc.push(pfish.stockVolumeInKg)
        }
    })

    for (let index = 0; index < fishForTc.length; index++) {
        total = total + fishForTc[index]

    }
}

//Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
let sumSeason = () => {
    fishFarm.map(grams => {
        if (grams.saleLocations.includes("ZH") && (grams.season.includes("Summer")) && (grams.originCountry == "Vietnam" || grams.originCountry == "Egypt" || grams.originCountry == "United Kingdom" || grams.originCountry == "Japan")) {
            avaregeGrams.push(grams.itemWeightInGrams)
        }
    })
    for (let index = 0; index < avaregeGrams.length; index++) {
        allIn = allIn + avaregeGrams[index]
        average = allIn / avaregeGrams.length
    }

}

let render = (pText, pList) => {
    console.log(pText, pList)
}