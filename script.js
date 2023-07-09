// JSON dosyasını okuyoruz
fetch("./imsak_vakitleri.json")
  .then(response => response.json())
  .then(data => {
    // Arama işlemini yapan fonksiyon
    function searchCity() {
      const city = document.getElementById("search").value.toLowerCase();
      const resultDiv = document.getElementById("result");

      // Eğer kullanıcı şehir ismi girmezse uyarı veriyoruz
      if (city === "") {
        resultDiv.innerHTML = "<p>Lütfen bir şehir ismi girin.</p>";
        return;
      }

      // Girilen şehir ismiyle eşleşen verileri buluyoruz
      const cityData = Object.keys(data).find(item => item.toLowerCase() === city);

      if(!cityData){
      // Eğer girilen şehir bulunamazsa uyarı veriyoruz
        resultDiv.innerHTML = `<p>${city} için imsak vakitleri bulunamadı.</p>`;
        return;
      }

      // Girilen şehir bulunursa imsak vakitlerini gösteriyoruz
      const imsak = document.getElementById("imsak");
      const ogle = document.getElementById("ogle");
      const ikindi = document.getElementById("ikindi");
      const aksam = document.getElementById("aksam");
      const yatsi = document.getElementById("yatsi");

      imsak.innerText = `İmsak: ${data[cityData].imsak}`;
      ogle.innerText = `Öğle: ${data[cityData].ogle}`;
      ikindi.innerText = `İkindi: ${data[cityData].ikindi}`;
      aksam.innerText = `Akşam: ${data[cityData].aksam}`;
      yatsi.innerText = `Yatsı: ${data[cityData].yatsi}`;
    }

    // Arama butonuna tıklanınca veya "Enter" tuşuna basılınca searchCity() fonksiyonunu çağırıyoruz
    const searchButton = document.getElementById("search-btn");
    searchButton.addEventListener("click", searchCity);
    document.querySelector('#search').addEventListener("keypress", event => {
      if (event.key === "Enter") {
        searchCity();
      }
    });
  })
  .catch(error => console.log("Hata oluştu: " + error));
