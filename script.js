fetch('./imsak_vakitleri.json')
  .then(response => response.json())
  .then(data => {
    // Arama işlemini yapan fonksiyon
    function searchCity() {
      const searchElement = document.getElementById("search");
      const city = searchElement.value.toLowerCase();
      const resultDiv = document.getElementById("result");

      // Eğer kullanıcı şehir ismi girmezse uyarı veriyoruz
      if (city === "") {
        resultDiv.innerHTML = "<p>Lütfen bir şehir ismi girin.</p>";
        return;
      }

      // Girilen şehir ismiyle eşleşen verileri buluyoruz
      const cityData = Object.keys(data).find(item => item.toLowerCase() === city);

      if (!cityData) {
        // Eğer girilen şehir bulunamazsa uyarı veriyoruz
        resultDiv.innerHTML = `<p>${city} için imsak vakitleri bulunamadı.</p>`;
        return;
      }

      // Girilen şehir bulunursa imsak vakitlerini gösteriyoruz
      document.getElementById("imsak").innerText = `İmsak: ${data[cityData].imsak}`;
      document.getElementById("ogle").innerText = `Öğle: ${data[cityData].ogle}`;
      document.getElementById("ikindi").innerText = `İkindi: ${data[cityData].ikindi}`;
      document.getElementById("aksam").innerText = `Akşam: ${data[cityData].aksam}`;
      document.getElementById("yatsi").innerText = `Yatsı: ${data[cityData].yatsi}`;
    }

    // Arama butonuna tıklanınca veya "Enter" tuşuna basılınca searchCity() fonksiyonunu çağırıyoruz
    const searchButton = document.getElementById("search-btn");
    searchButton.addEventListener("click", searchCity);
    const searchElement = document.getElementById("search");
    searchElement.addEventListener("keypress", event => {
      if (event.key === "Enter") {
        searchCity();
      }
    });
  })
  .catch(error => console.log("Hata oluştu: " + error));
