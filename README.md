
* ## HTTP Status Başlıkları

* HTTP status kodları beş farklı sınıf altında yer almaktadır. Bu üç haneli   kodların ik hanesi kodun hangi sınıfa ait olduğunu göstermektedir. HTTP status 200 kodu 2xx sınıfında yer alırken 404 hata kodu 4xx sınıfında yer almaktadır. Bu sınıfların kodun özelliğine ve fonksiyonuna göre belirlenmektedir.

* 1xx Sınıfı – Bilgilendirme Yanıtları: 1xx ile başlayan HTTP status kodu geldiğinde sunucu kullanıcıya isteğin işlemde olduğunu belirtmektedir. Bu sınıf kullanıcının ziyaret ettiği internet sitesindeki ulaştırma bilgilerinden sorumludur.

* 2xx Sınıfı – Başarı Yanıtları: 2xx kodları başarılı işlemleri bildirmeye yöneliktir. Eğer bu kodun iletilmesi kullanıcının isteğinin sunucu tarafından alındığını, anlaşıldığını ve kabul edildiğini göstermektedir. 2xx kodları genellikle ziyaret edilmek istenen site bilgisi ile beraber gönderilmektedir.

* 3xx Sınıfı – Yönlendirme Yanıtları: 3xx kodu isteğin sunucuya ulaştığını göstermektedir. Ancak isteğin başarılı bir şekilde işlenebilmesi için kullanıcının yapması gereken bazı adımlar bulunmaktadır. 3xx kodları yönlendirmelerde ve iletmelerde ortaya çıkmaktadır.

* 4xx Sınıfı – İstemci Hatası Yanıtları: 4xx sınıfından bir hata kodları genellikle kullanıcıdan kaynaklı hatalarda ekrana gelmektedir. Bu noktada kullanıcının isteği sunucuya iletilir ancak bu işlenemez. Bunun en büyük nedenlerinden bir tanesi yanlış isteklerdir. İnternet kullanıcıları genellikle bu sınıfa ait hata kodlarını otomatik olarak oluşturulmuş HTML sayfaları olarak görmektedir.

* 5xx Sınıfı – Sunucu Hatası Yanıtları: 5xx hata kodu sunucunun kullanıcıdan gelen isteği işleyemediği durumlarda ortaya çıkmaktadır. Bu sunucu hata kodları internet sitesinin suanda erişilemez durumda olduğunu göstermektedir ve tıpkı 4xx sınıfı hata kodları gibi otomatik oluşturulmuş HTML sayfası olarak ekrana gelmektedir.

* ## HTTP Metotları

* GET: Bu metod sunucudan veri almak için kullanılır. GET ve POST metodları en sık kullanılan metodlar olup sunucudaki kaynaklara erişmek için kullanılırlar.

* POST: Bu metod ile sunucuya veri yazdırabilirsiniz. Bu metodla istek parametreleri hem URL içinde hem de mesaj gövdesinde gönderilebilir. Sadece mesaj gövdesinin kullanımı yukarıda sayılan riskleri engelleyecektir. Tarayıcılar geri butonuna basıldığında POST isteğinin mesaj gövdesinde yer alan parametreleri tekrar göndermek isteyip istemedimizi sorarlar. Bunun temel nedeni bir işlemi yanlışlıkla birden fazla yapmayı engellemektir. Bu özellik ve de güvenlik gerekçeleriyle bir işlem gerçekleştirileceğinde POST metodunun kullanılması önerilir.

* PUT: Bu metod ile servis sağlayıcı üzerindeki bir kaynağı güncelleyebilirsiniz. Hangi kaynağı güncelleyecekseniz o kaynağın id’sini göndermek zorunludur.

* HEAD: GET metoduyla benzer işleve sahiptir ancak geri dönen yanıtta mesaj gövdesi bulunmaz (yani başlıklar ve içerikleri GET metoduyla aynıdır). Bu nedenle GET mesajı gönderilmeden önce bir kaynağın var olup olmadığını kontrol etmek için kullanılabilir.

* DELETE: Bu metod ile sunucudaki herhangi bir veriyi silebilirsiniz.

* CONNECT: Bir proxy sunucu üzerinden başka bir sunucuya bağlanmak ve proxy sunucuyu bir tünel gibi kullanmak için kullanılır.

* OPTIONS: Bu metod belli bir kaynak için kullanılabilecek HTTP metodlarını sunucudan sorgulamak için kullanılır.

* TRACE: Teşhis amaçlı kullanılan bir metoddur. Sunucu bu metodla gelen istek mesajının içeriğini aynen yanıt gövdesinde geri göndermelidir. Bu yöntemle sunucu ile istemci arasında bir vekil sunucu varsa bu sunucunun ve yaptığı değişikliklerin tespiti mümkün olabilir.

* PATCH: Bu metod bir kaynağa istediğiniz küçük çaplı değişimi yapmanızı sağlar.

* SEARCH: Bir dizinin altındaki kaynakları sorgulamak için kullanılır.

* ## Fetch API'nin metodlari




* İstek Gönderme
fetch()getirmek istediğiniz kaynağın URL’si olan yalnızca bir parametre gerektirir:

*  let response = fetch(url);
fetch()yöntemi bir Promise döndürür. Böylece then()ve catch()kullanabilirsiniz.

*  fetch(url)
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });

* Yanıtı Okumak
*  Yanıtın içeriği ham metin biçimindeyse, text() yöntemini kullanabilirsiniz. text() yöntemi, alınan kaynağın tüm içeriğiyle çözümlenen bir Promise döndürür:

* fetch(url)
    .then(response => {
fetch('/readme.txt')
    .then(response => response.text())
    .then(data => console.log(data));

* Pratikte, genellikle async/await’i fetch() yöntemiyle şu şekilde kullanırsınız:

* async function fetchText() {
    let response = await fetch('/readme.txt');
    let data = await response.text();
    console.log(data);
}
