 
 // animate language btns on click
 const langAnim = document.querySelector(".language");
 const langRight = document.querySelector(".ln-right");
 const langLeft = document.querySelector(".ln-left");

 let langIndex = 0;
 langRight.addEventListener("click", () => { languageHide()});
 langLeft.addEventListener("click", () => {languageHide()});

function languageHide() {

  if (langIndex == 0) {
    langAnim.classList.remove("languageHIDE");
    langAnim.classList.add("languageUNHIDE");
    langRight.style.display = "inline-block";
    langLeft.style.display = "none";
    langIndex = 1;
    return;
  } else if (langIndex == 1) {
    langAnim.classList.remove("languageUNHIDE");
    langAnim.classList.add("languageHIDE");
    langRight.style.display = "none";
    langLeft.style.display = "inline-block";
    langIndex = 0;
  }
};
 

 // use user language
 let languageSave = localStorage.getItem("language");

 if (languageSave === "turkish") {
  languageTR();
 } else {
  langAnim.classList.add("languagePop");
 setTimeout(() => {
  langAnim.classList.remove("languagePop");
 },5500);
 }

 function languageEN() {
  languageSave = localStorage.getItem("language");
  localStorage.removeItem("language");
  window.location.replace("https://www.ibrahimali.net");
 }

function languageTR() {

  // save users language
  languageSave = localStorage.getItem("language");
  localStorage.setItem("language", "turkish");

  // text stroke 
document.querySelector(".gen-h3").style.display = "none";
document.querySelector(".tr-ho-2").style.display = "inline";

 // <!-- header design-->
document.querySelector(".logo-btn").innerHTML = `Destek<i class="bx bx-smile"></i>`;
document.querySelector(".ev").innerText = "Ev";
document.querySelector(".hakkım").innerText = "Hakkında";
document.querySelector(".inter").innerText = "Röportajlar";
document.querySelector(".bios").innerText = "Bio";
document.querySelector(".beceri").innerText = "Beceriler";
document.querySelector(".proje").innerText = "Projeler";
document.querySelector(".iletiş").innerText = "İletişim";


  //  <!--Home section design-->
document.querySelector(".i-am").innerHTML = `Hi,Ben<br />`;
document.querySelector(".tr-ho-3").innerText = `HTML, CSS ve JavaScript deneyimine sahip bir ön uç yazılım geliştiricisiyim. Hızlı öğrenme yeteneğim sayesinde, müşterilerle yakın işbirliği içinde çalışarak, gerçek dünyadaki sorunları çözen verimli, ölçeklenebilir ve kullanıcı dostu çözümler oluşturuyorum.`;
document.querySelector(".tr-ho-4").innerText = `Web sitenizin fikirlerini hayata geçirmek için birlikte çalışalım!`;
document.querySelector(".resume").innerText = "Özgeçmişim";
document.querySelector(".talk").innerText = "Konuşalım";


// <!--about section design-->
document.querySelector(".about .heading").innerHTML = `Hakkımda<span>.</span>
<span class="animate scroll" style="--i: 1"></span>`;

document.querySelector(".about-content h3").innerHTML = `Dron Geliştiricisi!<span class="animate scroll" style="--i: 3"></span>`;

document.querySelector(".about-content p").innerHTML = `Tamamen duyarlı modern web siteleri geliştirmenin yanı sıra, aynı
zamanda bir dron geliştiricisi ve yenilikçisiyim. 28 yenilik
tamamladım, RF, su ve sabunluk sensörü dahil olmak üzere. Ayrıca, bir
V şekli, bir quadcopter, bir hexacopter ve güneş enerjisiyle çalışan
bir VTOL hibrit dron dahil olmak üzere beş farklı türde otonom dron
geliştirdim.
<span class="animate scroll" style="--i: 5"></span>`;

document.querySelector(".btns .btn").innerHTML = "Devamını oku";


// <!--Some of my Interviews-->
document.querySelector(".interviews .heading").innerHTML = `<span>Röportajlarım</span>
<span class="animate scroll" style="--i: 1"></span>`; 

document.querySelector(".in-txt-1").innerHTML = `<h1><span>Seifu EBS</span><br />1.31M Abone</h1>
<p>120K Görüntüleme</p>`;

document.querySelector(".in-txt-2").innerHTML = `<h1><span>Fana TV</span><br />1.25M Abone</h1>
<p>20K Görüntüleme</p>`;

document.querySelector(".in-txt-3").innerHTML = `<h1><span>Ashruka Channel</span><br />480K Abone</h1>
<p>4.4K Görüntüleme</p>`;

document.querySelector(".in-txt-4").innerHTML = `<h1><span>Minber TV</span><br />437K Abone</h1>
<p>1.9K Görüntüleme</p>`; 


// <!--education section design-->
document.querySelector(".education .heading").innerHTML = `Yolculuğum <span>.</span
><span class="animate scroll" style="--i: 1"></span>`; 
document.querySelector(".education-row .tr-ed-1").innerHTML = `Eğitim<span class="animate scroll" style="--i: 2"></span>`; 

document.querySelector(".education-row .tr-ed-2").innerHTML = `İlkokul - Geez Akademisi`; 
document.querySelector(".education-row .tr-ed-3").innerHTML = `Geez Academy'de şehir içi inovasyon yarışmasının 3'üncü
oldum.<span style="visibility: hidden"
  >I took a Mobile Mobile and Computer maintenance course and
</span>`; 
document.querySelector(".education-row .tr-ed-4").innerHTML = `Ortaokul - Millennium`; 
document.querySelector(".education-row .tr-ed-5").innerHTML = `2018 yılında 10. sınıfın tüm bölümlerinden katılımcıların yer
aldığı bir eğitim yarışmasında 2.lik birincilik.<span
  style="visibility: hidden"
>
  I took a Mobile and Computer maintenance course and
  maintenance</span
>`; 
document.querySelector(".education-row .tr-ed-6").innerHTML = `<i class="bx bxs-calendar"></i> 2022 - Günümüz`; 
document.querySelector(".education-row .tr-ed-7").innerHTML = `<h3>Lisans - Samsun Üniversitesi</h3>`; 
document.querySelector(".education-row .tr-ed-8").innerHTML = `Şu anda Türkiye'de SAMSUN Üniversitesi'nde Yazılım
Mühendisliği bölümünde okuyorum.<span
  style="visibility: hidden"
>
  I took a Mobile and Computer maintenance course and
  maintenance course and
</span>`; 
document.querySelector(".education-row .tr-ed-9").innerHTML = `Deneyim<span class="animate scroll" style="--i: 5"></span>`; 
document.querySelector(".education-row .tr-ed-10").innerHTML = `Bakım - Satcom`; 
document.querySelector(".education-row .tr-ed-11").innerHTML = `Mobil ve bilgisayar bakım kursunu tamamladım ve 2019'da
Etiyopya'nın Addis Ababa kentindeki COC sınavını başarıyla
geçtim.`; 
document.querySelector(".education-row .tr-ed-12").innerHTML = `Dron geliştirme ve pilotluk`;  
document.querySelector(".education-row .tr-ed-13").innerHTML = `Dron geliştirmeyi ve dron pilotluğu kendi başıma öğrendim. Ana
tasarımı 7 kereden fazla yineledikten ve 10'dan fazla kaza
yaşadıktan sonra ilk dron'umu başarıyla yaptım.`;  
document.querySelector(".education-row .tr-ed-14").innerHTML = `Web Geliştirici - Kodlama`;  
document.querySelector(".education-row .tr-ed-15").innerHTML = `Yalnızca WORDPRESS kullanmak yerine, modern web geliştirme
programlama dillerini, CSS dahil, kullanarak web sitesi
geliştirme becerilerine sahibim.`;  


// <!--skills section design-->
document.querySelector(".skills .heading").innerHTML = `<span>Becerilerim</span
><span class="animate scroll" style="--i: 1"></span>`;
document.querySelector(".testimonials").innerHTML = `Görüşler<span class="animate scroll" style="--i: 9.5"></span>`;
document.querySelector(".tr-te-1").innerHTML = `Bundan sonra büyük başarılara ulaşacağınızı ve tekrar
görüşeceğimizi umarım.`;
document.querySelector(".tr-te-2").innerHTML = `Güçlü kal. İstediğin zaman, benimle iletişime geçebilirsin.`;
document.querySelector(".tr-te-3").innerHTML = `Dronlarda "Etiyopya'da Üretildi" yazısını görene kadar
durmayacağınızı biliyorum.`;


//  <!--Projects Section-->
document.querySelector(".projects .heading").innerHTML = `Projelerim<span>.</span
><span class="animate scroll" style="--i: 1"></span>`;
document.querySelector(".tr-pr-1").innerHTML = `V-Şekilli Dron`;
document.querySelector(".tr-pr-2").innerHTML = `İlk dronum, kodlanmış bir formatta koronavirüs örneklerini
toplamak ve depolamak için uygun olan bir V şekilli modeldi. Bu
dron, bir kilometre uzaktaki kişilerin sıcaklıklarını ölçebilir
ve aynı anda yirmi örnek depolayabilir. İkinci dron ise...
<a href="https://fb.watch/kx_Jqh6xqC/">Videoyu&nbsp;gör</a>`;
document.querySelector(".tr-pr-3").innerHTML = `3'üncü dron`;
document.querySelector(".tr-pr-4").innerHTML = `Oluşturduğum 3'üncü dron ise birçok modern özellikle donatılmış
bir Tarım Dronudur. Google Haritasını kullanarak atanmış
görevleri belirlenen konumlarda otonom olarak tamamlar ve kendi
kendine kalkış noktasına geri döner. Ülkemizde çekirge sürüleri
olduğunda, bu dronla...
<a href="https://fb.watch/kx_MVcKKcO/">Videoyu&nbsp;gör</a>`;
document.querySelector(".tr-pr-5").innerHTML = `5'inci Dron`;
document.querySelector(".tr-pr-6").innerHTML = `<span>Inn NAME<br /></span>
Güneş enerjisiyle çalışan bu VTOL hibrit insansız drone,
gelişmiş bir uçuş kontrol sistemine ve bir yer istasyonuna kadar
10 km veya 22 km uzaktan kumandaya sahiptir. Dayanıklılığı 8 ila
23 saat arasında değişir, birden fazla pil kullanır ve tükenen
pilleri havada değiştirerek güneş enerjisiyle şarj etmek için
iniş yapmasına gerek kalmaz. Ayrıca kesin dahil olmak üzere
önemli verileri iletir... Daha fazlasını okuyun.<!-- Alt and Lat coordinates,live video, battery/fuel consumption and
remaining capacity. With solar energy integration, the drone
charges in-flight through flexible collectors on its wings.-->
<a
  href="https://m.facebook.com/story.php?story_fbid=pfbid02X5nJyvfYrJtr763Ei3P73SrwGuKvxVYtKTn78rsyDcuZzag7DxNUwEvvnH4Uk5w5l&id=100082742832420&mibextid=Nif5oz"
  >Devamını Gör</a
>`;


//   <!--contact section design-->
document.querySelector(".contact .heading").innerHTML = `Benimle İletişime <span>Geçin!</span
><span class="animate scroll" style="--i: 1"></span>`;
document.getElementsByName('full-name')[0].placeholder='Tam İsim';
document.getElementsByName('email-address')[0].placeholder='E-posta Adresi';
document.getElementsByName('mobile-number')[0].placeholder='Telefon Numarası';
document.getElementsByName('email-subject')[0].placeholder='E-posta Konusu';
document.getElementsByName('users-message')[0].placeholder='Mesajınız';
document.querySelector(".tr-co-1").innerHTML = `Gönder`;
document.querySelector(".tr-co-2").innerHTML = `Teşekkürler!`;
document.querySelector(".tr-co-3").innerHTML = `Mesajınız başarıyla gönderildi.`;
document.querySelector(".tr-co-4").innerHTML = `Tamam`;


// <!-- footer design-->
document.querySelector(".tr-fo-1").innerHTML = `Telif Hakkı &copy; 2023 İbrahim Ali tarafından | Tüm Hakları Saklıdır.`;

window.location.replace("https://www.ibrahimali.net");
languageSave = localStorage.getItem("language");
};
