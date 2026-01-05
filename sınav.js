let urunler = [
    { ad: "Kahve", miktar: 15, resim: "kahve.jpg" },
    { ad: "Tost", miktar: 3, resim: "tost.jpg" },
    { ad: "Çay", miktar: 20, resim: "cay.jpg" },
    { ad: "Limonata", miktar: 5, resim: "limonata.jpg" },
    { ad: "Pasta", miktar: 12, resim: "pasta.jpg" }
];
function listele() {
    const tablo = document.getElementById("tabloGövdesi");
    const arama = document.getElementById("aramaInput").value.toLowerCase();
    tablo.innerHTML = "";
    urunler.forEach(urun => {
        if (urun.ad.toLowerCase().includes(arama)) {
            
            // Satır rengini belirler
            const satirSinifi = urun.miktar <= 5 ? "satir-yetersiz" : "satir-yeterli";

            const satir = `
                <tr class="${satirSinifi}">
                    <td><img src="${urun.resim}" class="urun-img"></td>
                    <td><strong>${urun.ad}</strong></td>
                    <td class="stok-text">${urun.miktar} Adet</td>
                </tr>
            `;
            tablo.innerHTML += satir;
        }
    });
}
function ekle() {
    const adInput = document.getElementById("yeniAd");
    const miktarInput = document.getElementById("yeniMiktar");

    if (adInput.value && miktarInput.value) {
        urunler.push({
            ad: adInput.value,
            miktar: parseInt(miktarInput.value)
        });
        
        adInput.value = "";
        miktarInput.value = "";
        listele();
    } else {
        alert("Lütfen alanları doldurun!");
    }
}
// Başlangıçta listeyi getirir

listele();
