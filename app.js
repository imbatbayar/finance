// Дэлгэцтэй ажиллах контроллор
var uiController = (function () {})();
// Санхүүтэй ажиллах контроллор
var financeController = (function () {})();
// Программын холбогч контроллор
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдөлийг дэлгэцнээс олж авна
    // 2. Олж авсан өгөгдүүлдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдүүдээ вэб дээр тохирох хэсэгт нь гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл тооцоог дэлгэц дээр гаргана.
    console.log("Дэлгэцээс өгөгдөл авах хэсэг");
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
