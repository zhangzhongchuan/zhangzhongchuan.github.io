!(function () {
  window.addEventListener("load", function () {
    let body = document.body;
    let content = [
      "❤去活出你自己。❤",
      "❤《日不落》❤",
      "❤《一格格》❤",
      "❤《森林巴士》❤",
      "❤《爱就一个字》❤",
      "❤《星辰大海》❤",
      "❤《千千万万》❤",
      "❤《我在等》❤",
      "❤《如一》❤",
      "❤《收敛》❤",
      "❤《间距》❤",
      "❤《早点早点》❤",
      "❤《阿拉斯加海湾》❤",
      "❤《Peace&Love》❤",
      "❤《灰色》❤",
      "❤《带你回家》❤",
      "❤《等我回家》❤",
      "❤《0919》❤",
      "❤《我很好》❤",
      "❤《会不会》❤",
      "❤《经济舱》❤",
      "❤《我走后》❤",
      "❤《不删》❤",
      "❤《Girls》❤",
      "❤《Let Her Go》❤",
      "❤《关于你的梦》❤",
      "❤《慢慢》❤",
      "❤《下雨天》❤",
      "❤《翅膀》❤",
      "❤《靠近一点》❤",
      "❤《翅膀》❤",
      "❤《This Is Love》❤",
      "❤《重来》❤",
      "❤《晴天》❤",
      "❤《空白格》❤",
      "❤《爱你3000》❤",
      "❤《下落不明》❤",
      "❤《我要》❤",
      "❤《晚星》❤",
      "❤《你，好不好？》❤",
      "❤《50 Feet》❤",
      "❤《COCO》❤",
      "❤《NUMB》❤",
      "❤《重演》❤",
      "❤《所念皆星河》❤",
    ]; //自定义内容的数组
    body.addEventListener("click", function (e) {
      let x = e.pageX;
      let y = e.pageY; //当前坐标
      let randContent = Math.ceil(Math.random() * content.length);
      let text = new Text(x, y, randContent);
      let span = document.createElement("span");
      span.style.color = text.getRandom();
      text.create(span);
      setTimeout(function () {
        text.out(span);
      }, 1900);
    });

    function Text(x, y, rand) {
      this.x = x;
      this.y = y;
      this.rand = rand;
    }
    Text.prototype.create = function (_this) {
      let body = document.body;
      _this.innerHTML = content[this.rand - 1];
      _this.className = "text";
      _this.style.top = this.y - 20 + "px";
      _this.style.left = this.x - 50 + "px";
      _this.style.animation = "remove 2s";
      body.appendChild(_this);
      let i = 0;
      setInterval(() => {
        _this.style.top = this.y - 20 - i + "px";
        i++;
      }, 10);
    };
    Text.prototype.out = function (_this) {
      _this.remove();
    };
    //设置随机颜色
    Text.prototype.getRandom = function () {
      let allType = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"; //16进制颜色
      let allTypeArr = allType.split(","); //通过','分割为数组
      let color = "#";
      for (var i = 0; i < 6; i++) {
        //随机生成一个0-16的数
        var random = parseInt(Math.random() * allTypeArr.length);
        color += allTypeArr[random];
      }
      return color; //返回随机生成的颜色
    };
  });
})();
