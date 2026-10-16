/* =====================================================================
   story/Airi.js — CỐT TRUYỆN CỦA NHÂN VẬT "Airi"
   Tên file = tên đăng nhập (web tự quét: có file là gõ tên đó vào được ngay).
   Dòng window.FUSOU_STORY["..."] bên dưới phải trùng tên file (đúng hoa/thường).
   ---------------------------------------------------------------------
   title / tagline : tiêu đề + câu dẫn nhánh truyện (hiện đầu bản đồ)
   greet / sub     : (tuỳ chọn) lời chào + lời nhắn ở màn đăng nhập, {name} = tên
   img             : (tuỳ chọn) tên file ảnh con dấu khác mặc định img/ui/<Tên>.jpg
   share           : (tuỳ chọn) dùng chung cả cốt truyện của người khác, ví dụ "share":"Airi"
   intro           : chương mở đầu 序章. Mỗi phần tử là 1 đoạn; {q:"..."} = đoạn trích dẫn
   bosses          : 5 chặng n5 → n1, mỗi chặng:
       name, title, place, setup (luôn hiện)
       resolve, moral (CHỈ hiện khi đã đóng dấu)
       duel [tên, mô tả]   train [tên, mô tả]   lose (câu khi thua)
   ending          : đoạn kết 終章, mở khi đủ 5 dấu son
   kyubi           : PHẦN THƯỞNG 九尾の狐 Cửu Vĩ Hồ ở cuối hành trình (hiện ngay sau ending)
       title, place, setup (gặp hồ ly), resolve (hồ ly đồng hành cùng bạn), moral
   finale          : (tuỳ chọn) LỜI NHẮN cuối — sau khi thắng N1 và đọc hết phần thưởng Cửu Vĩ Hồ, lời nhắn hiện giữa màn hình,
                     chạy từng chữ (bấm để bỏ qua). resolve: mảng đoạn văn, {q:"..."} = đoạn trích dẫn. Chỉ hiện 1 lần, sau đó có nút đọc lại.
   yokai           : 四妖 Tiểu yêu quái — title, tagline, intro, monsters{rokurokubi|jorogumo|aoandon|karakasaobake:
                     {title,place,setup,resolve,moral}}  — setup luôn hiện; resolve+moral hiện sau khi
                     thắng quyết đấu CHÍNH yêu quái đó.  Ảnh: img/game/<id>.jpg  Dấu: img/game/<id>1.png
   hak             : (tuỳ chọn) truyện Bạch Trạch
   yuki            : (tuỳ chọn) truyện Yukionna 雪女 — đại diện 副詞・擬音語・擬声語・擬態語 (cùng cấu trúc với hak:
                     title, place, setup, resolve, moral)
   ===================================================================== */
window.FUSOU_STORY=window.FUSOU_STORY||{};
window.FUSOU_STORY["Airi"]={
  "title": "Airi · Sứ giả của mặt trời",
  "tagline": "Hướng về Fusō — cây mặt trời mọc ở cực Đông, nơi rễ cây uống chung mạch nước sâu thẳm với Yggdrasil.",
  "greet": "Hế luuuuu {name} ~",
  "sub": "ようこそ、アイリさん。今日も一緒に頑張ろう！",
  "intro": [
    "Ở rìa cùng của phương Bắc, nơi vịnh Vindvik nằm co ro dưới chân băng, Fimbulvetr đã phủ xuống như tấm áo liệm. Ba mùa đông nối nhau, không một mùa hè xen giữa; biển đặc lại thành đá, gió hú tên người chết qua mái nhà cỏ. Dân làng thì thầm rằng Sól, nữ thần mặt trời, đang chạy cạn hơi trước hàm sói Sköll, và khi nó cắn được nàng thì thế gian sẽ đến hồi tận. Nhưng ở cực Đông, một nỗi giận khác đang ngủ: Amaterasu đã quay lưng với thế gian, ẩn vào hang đá Ama-no-Iwato và đặt tảng đá khổng lồ chắn cửa. Hai bầu trời, hai lời đồn, một sự thật: ánh sáng của cả hai thế giới cùng tắt, vì rễ của chúng uống chung một mạch nước — và mạch ấy đang nghẹn lại sau một cánh cửa đóng.",
    "Giữa lúc các bậc trưởng lão chỉ biết lớn tiếng với nhau, một thiếu nữ đứng lên. Danh nàng là Airi.",
    "Vẻ đẹp của nàng chẳng giống của phàm nhân. Sắc hồng trên má như ánh bình minh còn sót lại, đôi mắt sâu như mặt hồ phản chiếu trời, và khi nàng cười, không khí quanh người dường như sáng lên một nhịp. Người ta bảo khí chất ấy như thần vừa bước xuống từ cõi trên — vừa gần gũi, vừa không thể chạm tới. Nàng nói được tiếng của kẻ buôn đường xa, tiếng chim trời, tiếng gió luồn qua kẽ đá; bước chân nàng nhanh, lời nói sáng như ngọn lửa mới nhóm, và ai nhìn nàng một lần cũng ngoái lại lần nữa, như bị buộc phải nhớ. Nhưng điều khiến người ta đi theo nàng không phải nhan sắc: nàng tin rằng một lời đúng chỗ còn sắc hơn mọi lưỡi rìu, nên người ta gọi nàng là sendiboði — sứ giả.",
    "Bà völva trao cho nàng cuốn sổ vỏ bạch dương, giọng khàn như gió qua xương khô:",
    {
      "q": "« Gươm không mở được cửa đá. Chỉ điều khiến kẻ khác chịu lắng nghe, và điều khiến họ bật cười, mới mở được. Muốn gặp nữ thần, con phải kết thỏa ước với năm kẻ giữ đường — người đời gọi chúng là ác linh, nhưng chưa ai từng hỏi chúng muốn gì. Mỗi thỏa ước sẽ đóng một dấu son lên trang giấy này."
    },
    {
      "q": "Còn có một bóng áo choàng đen vừa ghé bến đêm qua, rồi cũng sẽ vượt cùng một biển cả. Danh hắn là Ryosuke — kẻ không tên, kẻ bất cần đời. Hắn cũng đang đi tìm một thứ đã mất. Nếu con đóng đủ năm dấu son, tấm màn che quanh hắn sẽ mỏng đi… đủ để con thoáng thấy bóng dáng thật của kẻ ấy. »"
    },
    "Airi dong thuyền gỗ thông vượt đường cá voi. Giữa cơn bão, một con quạ ba chân đáp xuống mũi thuyền — Yatagarasu, chim dẫn đường của thần Nhật, họ hàng xa của Huginn và Muninn. Nàng giống Hermóðr năm xưa phi ngựa xuống Hel để xin trả Baldr — nhưng nàng chọn nụ cười thay cho ngọn thương. Và ở cuối đường, nàng sẽ phải làm điều Ame-no-Uzume từng làm: khiến cả trời đất bật cười."
  ],
  "bosses": {
    "n5": {
      "name": "Tanuki",
      "title": "Kẻ buôn lá",
      "place": "Chợ bến cảng",
      "setup": "Tanuki ngồi giữa chợ bến cảng như một thương gia đã sống qua trăm lần đổi danh. Nó bán “vàng” và “thuốc trường sinh” làm từ lá hóa phép, và chưa từng thua một cuộc mặc cả — vì mỗi khi sắp thua, nó đổi tên món hàng giữa chừng, để kẻ mua không còn biết mình đang trả giá cho thứ gì.",
      "resolve": "Airi ngồi xuống đối diện, mỉm cười. Nàng mặc cả bằng ba thứ tiếng nối nhau: mỗi lần Tanuki đổi tên món hàng, nàng gọi lại nó bằng tên cũ trong thứ tiếng kế tiếp, cho đến khi nó rối như tơ vò. Rồi nàng trả nó đúng thứ nó đang bán: một chiếc lá. Cả khu chợ như ngừng thở một nhịp. Tanuki ôm bụng cười đến sặc sụa, trao dấu son đầu tiên chỉ để giữ thể diện — và để giữ lại tiếng cười hiếm hoi ấy.",
      "moral": "Kẻ hay đổi tên món hàng giữa chừng, cuối cùng cũng sẽ bị đổi lại giá.",
      "duel": [
        "Cuộc mặc cả ba thứ tiếng",
        "Vượt qua cả chủ đề trước khi hết giờ — đừng để Tanuki đổi danh món hàng giữa chừng."
      ],
      "train": [
        "Học cách nhìn thấu chiếc lá",
        "Luyện từng chủ đề N5 để khi mặc cả, từ nào Tanuki cũng không lừa nổi bạn."
      ],
      "lose": "Tanuki cười khúc khích: “Hàng này đổi giá rồi nhé!” Ôn lại rồi mặc cả lần nữa."
    },
    "n4": {
      "name": "Kappa",
      "title": "Kẻ giữ phép lịch sự",
      "place": "Cầu sông Asagiri",
      "setup": "Kappa canh cầu sông Asagiri, nơi sương không bao giờ tan. Nó chỉ cho qua những ai cúi chào đúng nghi thức. Đĩa nước trên đầu chính là mạng sống của nó: cúi đúng thì nước giữ, chào vụng thì nước đổ — và nó đã hạ biết bao kẻ hấp tấp chỉ bằng một cái cúi đầu đáp lễ.",
      "resolve": "Airi cúi chào sâu và chậm, không vội ngẩng lên trước khi nó ngẩng. Kappa cúi đáp, và ngạc nhiên nhận ra nàng đã chờ nó thẳng lưng xong rồi mới thẳng lưng theo — thứ lễ nghĩa của kẻ biết nhường nhịp cho người khác. Nó không dám làm đổ dù chỉ một giọt. Nó trao dấu thứ hai cùng một quả dưa chuột, món quà của kẻ vừa kết bạn.",
      "moral": "Phép lịch sự là chữ ký đầu tiên của mọi thỏa ước.",
      "duel": [
        "Nghi thức cúi chào bên cầu",
        "Kappa chỉ cho qua kẻ chào đúng nghi thức. Đáp đúng cả chủ đề trước khi nước trên đĩa nó cạn."
      ],
      "train": [
        "Tập cúi chào trước khi qua cầu",
        "Luyện từng chủ đề N4 cho đến khi mọi nghi thức thật thuần thục."
      ],
      "lose": "“Chào vụng rồi.” Kappa lắc đầu, nước trên đĩa khẽ rung. Ôn lại nghi thức rồi qua cầu lần nữa."
    },
    "n3": {
      "name": "Tengu",
      "title": "Kẻ thích cãi lý",
      "place": "Đường núi",
      "setup": "Tengu giữ đường núi và tự nhận mình là biện sĩ giỏi nhất cõi. Nó từng treo mình chín đêm để học bí mật của chữ, như Odin ngày xưa trên cây thế giới, nên tin rằng chỉ mình nắm được lý lẽ — và coi mọi kẻ đi qua là học trò chưa biết mình là học trò.",
      "resolve": "Airi để nó nói hết, không ngắt một lời. Rồi nàng hỏi ba câu ngắn. Câu thứ ba làm nó nghẹn lời giữa chừng một ý đẹp. Ngay lúc nó xòe cánh định hạ xuống đắc thắng, nàng cúi đầu nhận thua — đúng lúc, đúng chỗ, như người rút lui sau khi đã thắng. Lần đầu tiên trong nhiều thế kỷ, nó thấy mình được tôn trọng chứ không bị sợ. Nó trao dấu thứ ba.",
      "moral": "Biết lúc nào nên nhún mình chính là sự khôn ngoan, không phải yếu đuối.",
      "duel": [
        "Ba câu hỏi ngắn",
        "Để Tengu nói hết, rồi đáp gọn và đúng — trước khi nó mất kiên nhẫn."
      ],
      "train": [
        "Mài sắc lý lẽ",
        "Luyện từng chủ đề N3 để câu thứ ba của bạn khiến biện sĩ nghẹn lời."
      ],
      "lose": "Tengu vỗ cánh đắc ý: “Lý lẽ của ngươi còn mỏng.” Ôn lại rồi tranh luận tiếp."
    },
    "n2": {
      "name": "Oni",
      "title": "Kẻ bị mọi nhà xua đuổi",
      "place": "Hang băng",
      "setup": "Mỗi mùa Setsubun, người ta ném đậu và hô “quỷ ra ngoài”. Oni giận dữ, nên giữ lại những từ khó nhất như giữ con tin, để đòi một lời xin lỗi chưa từng ai chịu nói. Như một Jötunn bị chư thần ruồng bỏ, nó cầm chùy sắt ngồi khóc trong hang băng.",
      "resolve": "Airi không đánh, cũng không dỗ dành suông. Nàng đứng im nghe hết tiếng gầm, rồi hiểu điều nó thật sự đòi không phải xin lỗi, mà là một chỗ trước cửa nhà người. Nàng đề nghị một thỏa ước bằng chính bàn tay mình: mỗi mùa Setsubun, ở bất cứ nơi nào nàng đặt chân, nàng sẽ để lại một bát cơm nóng ngoài cửa cho nó. Oni sững sờ, buông chùy, đóng dấu thứ tư.",
      "moral": "Hòa giải là biết điều đối phương thực sự đòi hỏi khác với điều họ đang gào lên.",
      "duel": [
        "Lắng nghe điều Oni đòi",
        "Hiểu đúng những từ khó nhất mà Oni giữ lại — trước khi nó mất kiên nhẫn."
      ],
      "train": [
        "Học cách hòa giải",
        "Luyện từng chủ đề N2 — hiểu nghĩa thật của từng từ, không chỉ điều nó gào lên bên ngoài."
      ],
      "lose": "Oni siết chùy, mắt ngấn nước: “Ngươi vẫn chưa hiểu ta đòi gì.” Ôn lại rồi quay lại hang băng."
    },
    "n1": {
      "name": "Rồng",
      "title": "Kẻ giữ cánh cửa đá",
      "place": "Hang Ama-no-Iwato",
      "setup": "Rồng quấn quanh tảng đá che hang Ama-no-Iwato, như Níðhöggr gặm rễ cây thế giới. Nó chỉ nhường lối cho kẻ nói được những từ nhiều tầng nghĩa — vì nó biết rằng cánh cửa nào chỉ cần một nghĩa để mở thì cũng chỉ cần một nghĩa để đóng.",
      "resolve": "Airi trả lời từng chữ nhiều tầng nghĩa: chữ nào Rồng gài hai nghĩa, nàng trả lại cả hai. Rồi nàng làm điều chưa ai từng làm trước cánh cửa ấy: nhảy một điệu múa, vừa rộn ràng vừa dí dỏm, như Ame-no-Uzume năm xưa. Cả không gian như lắng xuống, rồi bật lên tiếng cười của những vị thần đứng ngoài hang. Trong hang, Amaterasu tò mò hé cửa nhìn ra, thấy chính mình phản chiếu trong chiếc gương, và ngạc nhiên đến quên cả giận. Rồng cúi đầu, đóng dấu cuối.",
      "moral": "",
      "duel": [
        "Điệu múa trước cửa hang",
        "Đáp từng chữ nhiều tầng nghĩa, rồi múa cho trời đất bật cười — trước khi hết giờ."
      ],
      "train": [
        "Tập điệu múa của Ame-no-Uzume",
        "Luyện từng chủ đề N1 cho từng bước chân thật nhẹ và chắc."
      ],
      "lose": "Rồng khẽ siết quanh tảng đá, cửa hang vẫn đóng. Ôn lại rồi múa lại điệu múa."
    }
  },
  "ending": [
    "Tảng đá nhích ra. Ánh bình minh đầu tiên sau ba năm dài chiếu xuống Fusō, rồi theo mạch rễ ngầm chảy ngược về phương Bắc, rọi xuống vịnh Vindvik đang tan băng. Yatagarasu rúc vào vai Airi, khẽ kêu một tiếng như lời chào của mặt trời.",
    "Khi ánh sáng tràn qua ngưỡng cửa, nàng thoáng thấy ở rìa chân trời, rất xa, bên một bờ hồ còn đen, một bóng áo choàng đen. Hắn không quay lại. Hắn chỉ nhấc một tay, như người đáp lời chào từ phía bên kia của thế giới — rồi bước đi. Màn che đã mỏng đi đủ để nàng biết: kẻ không tên ấy cũng đang tìm đường về phía ánh sáng."
  ],
  "kyubi": {
    "title": "Hồ ly chín đuôi · Kẻ nhớ mọi lời thề",
    "place": "Đỉnh núi cuối cùng của Fusō",
    "setup": [
      "Ánh bình minh đã chảy ngược về phương Bắc, nhưng Airi chưa vội quay gót. Trong cuốn sổ vỏ bạch dương, năm dấu son đã khô; trang cuối vẫn còn trắng, như thể bà völva cố ý chừa lại một chỗ cho điều chính bà cũng không đoán được. Yatagarasu dụi đầu vào má nàng, rồi vỗ cánh về phía đỉnh núi cuối cùng của Fusō — nơi sương chưa từng tan, nơi chín chiếc đuôi đang khẽ lay giữa tàn tro những ngôi đền cổ.",
      "Đó là 九尾の狐 — Cửu Vĩ Hồ, con hồ ly đã sống qua một nghìn năm, nghe đủ mọi lời thề của loài người và nhớ từng lời thất hứa. Nó không chặn đường ai. Suốt bao mùa, nó chỉ ngồi nhìn những kẻ lên núi: kẻ cầu quyền năng, kẻ cầu bất tử, kẻ cầu một lời nói dối đủ đẹp. Chưa ai đến mà không mang theo một điều muốn lấy.",
      {
        "q": "« Ngươi đến tay không. Năm lời thề ngươi kết trên đường, chẳng lời nào là để thắng ai — vậy mà ngươi lại là kẻ thắng. Ta ngồi đây một nghìn năm, chỉ để mong thấy điều ấy một lần. »"
      }
    ],
    "resolve": [
      "Cửu Vĩ Hồ nhìn Airi rất lâu: nhìn nụ cười từng khiến kẻ buôn lá bật cười đến sặc, đôi tai biết lắng nghe cả một tảng đá lạnh, và điệu múa trước cánh cửa hang. Rồi nó cười — lần đầu tiên sau một nghìn năm, không phải bằng ảo ảnh.",
      "Nó rũ chín chiếc đuôi xuống như chín dải lụa, và từ mỗi chiếc bứt ra một đốm lửa xanh nhẹ như hơi thở. Chín đốm lửa xoay quanh Airi một vòng, rồi gom lại thành một dáng hồ ly nhỏ, lông trắng như sương sớm, đuôi cháy một sắc xanh dịu.",
      {
        "q": "« Chín đuôi ta để lại trên núi. Ta chỉ mang theo một. Đây là phần thưởng — không phải vì ngươi đã thắng, mà vì ngươi đã giữ lời. »"
      },
      "Yatagarasu nghiêng đầu nhìn người bạn mới, kêu khẽ một tiếng rồi đậu sang vai bên kia, nhường chỗ. Từ ngày ấy, nơi nào Airi đi qua — những con chữ chưa học, những bậc thang chưa leo, những trang sổ còn trống — cũng có một ngọn lửa xanh nhỏ lẫn trong gót chân nàng; và mỗi lần nàng thuộc thêm một lời cũ, chiếc đuôi ấy lại sáng thêm một chút."
    ],
    "moral": "Kẻ giữ lời với từng người, sau cùng sẽ có một kẻ giữ lời với mình."
  },
  "yokai": {
    "title": "Bốn vị khách cũ của hồ ly",
    "tagline": "Dưới chân núi cuối cùng của Fusō, bốn yêu quái từng hầu cận hồ ly chín đuôi vẫn ngồi chờ một ai đó chịu nghe những lời cũ của chúng.",
    "intro": [
      "Yatagarasu vỗ cánh nhẹ hơn thường lệ. Nó đậu lên vai Airi, nghiêng đầu về phía chân núi cuối cùng của Fusō, nơi bốn đốm sáng khác màu lập lòe trong sương.",
      {
        "q": "« Tứ yêu — bốn kẻ từng hầu cận hồ ly, nay ở lại giữ lời cũ. Chúng không đánh ai. Chúng chỉ chờ người chịu nghe. »"
      },
      "Airi buộc lại tóc, hít một hơi thật dài. Nàng đã đi đủ xa để biết: những kẻ chặn đường thường chỉ là những kẻ chưa ai chịu lắng nghe. Bốn kẻ này, nàng thấy, chỉ cần một nụ cười đến đúng chỗ."
    ],
    "monsters": {
      "rokurokubi": {
        "title": "Bà chủ trọ nghe lén",
        "place": "Quán trọ lưng chừng núi",
        "setup": [
          "Ban ngày, bà chủ quán là một người đàn bà dịu dàng, rót trà không đổ một giọt. Ban đêm, cổ bà dài ra như sợi thừng, luồn qua vách giấy nghe người ngủ nói mớ. Đó là Rokurokubi — kẻ đã 首を長くして待つ suốt hai trăm năm, vươn cổ chờ một vị khách chịu kể chuyện cho mình nghe, thay vì phải đi nghe lén chuyện của người khác.",
          "Người ta sợ bà vì bà hay 首を突っ込む vào chuyện thiên hạ. Nhưng ít ai hỏi vì sao bà thích nghe lén đến thế."
        ],
        "resolve": [
          "Airi xin trọ, rót trà cho bà trước, rồi kể chuyện bằng ba giọng — tiếng buôn đường xa, tiếng chim, tiếng gió qua kẽ đá. Cổ bà vươn qua vách giấy, nghe chăm chú đến mức thắt lại thành nút.",
          "« Chuyện này… ta chưa nghe bao giờ, » bà thì thầm, vừa nghe vừa 首を傾げる. Airi cười, nhẹ nhàng gỡ nút cho bà từng vòng một. Đêm ấy là đêm đầu tiên sau hai trăm năm bà không nghe lén ai — vì có người chịu kể cho bà nghe. Bà đóng dấu lên trang giấy vỏ bạch dương."
        ],
        "moral": "Kẻ hay nghe lén chỉ cần có người chịu kể cho mình nghe."
      },
      "jorogumo": {
        "title": "Người gảy đàn bên thác",
        "place": "Thác nước trong sương",
        "setup": [
          "Nơi nước đổ xuống đá, một người đàn bà áo lụa ngồi gảy đàn biwa. Mỗi dây đàn là một sợi tơ; ai nghe quá lâu sẽ thấy mình đã ngồi giữa mạng từ lúc nào. Đó là Jorōgumo — nhện hóa mỹ nhân.",
          "Nàng tin rằng chỉ có 因果応報 là công bằng: ai làm gì thì nhận nấy. Nàng đã giăng đủ tứ tự thành ngữ để bọc kín cả một con thác — 一期一会, 以心伝心, 七転八起 — nhưng chưa ai từng dừng lại để khen tấm lưới của nàng đẹp."
        ],
        "resolve": [
          "Airi không chạy, cũng không cố cắt tơ. Nàng ngồi xuống, nghe hết bản đàn, rồi vỗ tay thật lớn: « Tấm lưới đẹp nhất ta từng thấy! » Nàng nhện sững sờ — trăm năm nay chỉ có kẻ run rẩy hay kẻ chém xé, chưa ai khen.",
          "Airi giảng cho nàng nghe ba thành ngữ bốn chữ, mỗi câu một nụ cười. Nàng nhện ngồi nghe, quên cả giăng tơ. Cuối buổi, nàng dệt những sợi tơ ấy thành một dải lụa rồi đóng dấu lên trang giấy, như người tặng quà thay vì bắt mồi."
        ],
        "moral": "Một tấm lưới đẹp nhất khi dùng để dệt, không phải để bẫy."
      },
      "aoandon": {
        "title": "Ngọn đèn thứ một trăm",
        "place": "Gian phòng trăm ngọn đèn",
        "setup": [
          "Người ta kể trăm chuyện ma, mỗi chuyện tắt một ngọn đèn. Ngọn đèn giấy xanh thứ một trăm là ngọn không ai dám tắt, vì kẻ đứng sau nó sẽ bước ra: Ao-andon, quỷ nữ sừng cong, răng nhuộm đen, tay ôm quyển sách chép bằng Hán văn và những chữ cổ không còn ai đọc nổi.",
          "Bà đứng chờ ở ngưỡng cuối ấy từ rất lâu, chờ một người dám kể chuyện thứ một trăm — mà không ai dám."
        ],
        "resolve": [
          "Airi đọc từng chữ cổ bằng giọng sáng sủa, dịch ngay sang lời thường, thêm một câu đùa vào chỗ khó. Ngọn đèn xanh khẽ chuyển sang vàng ấm.",
          "« Chuyện thứ một trăm… phải là chuyện ma. » « Ai quy định vậy? » Airi cười. Nàng kể chuyện thứ một trăm là một chuyện thật vui, vui đến mức bà quỷ nữ phải bật cười, hàm răng đen lộ ra, vầng sáng quanh bà dịu lại. Bà đóng dấu, và lần đầu tiên sau ngàn đêm, ngọn đèn không còn lạnh."
        ],
        "moral": "Chuyện thứ một trăm không nhất thiết phải là chuyện ma."
      },
      "karakasaobake": {
        "title": "Chiếc ô bị bỏ quên",
        "place": "Cổng đền đổ nát dưới mưa",
        "setup": [
          "Một chiếc ô giấy bị bỏ lại sau trăm năm đã thành tsukumogami — một mắt, một chân, cái lưỡi dài thè ra. Đó là Karakasa-obake: chẳng hại ai, chỉ thích nhảy ra dọa rồi chờ người ta bật cười.",
          "Nó thuộc rất nhiều tục ngữ vì cơn mưa nào nó cũng từng che qua — 雨降って地固まる, 笑う門には福来る, 石の上にも三年 — nhưng không ai còn cười cùng nó."
        ],
        "resolve": [
          "Nó nhảy lên, thè lưỡi sát mặt Airi. Nàng không giật mình. Nàng thè lưỡi lại. Chiếc ô sững sờ — rồi hai bên thi xem ai thè dài hơn, cho tới khi cả hai cùng cười sặc sụa giữa cơn mưa.",
          "« 笑う門には福来る, » Airi nói. « Cười thì phúc tới. » Chiếc ô gật đầu thật mạnh, rung cả cán. Nó trao dấu, rồi nhảy lò cò theo nàng thêm một đoạn dốc, như đứa trẻ vừa tìm lại được bạn chơi."
        ],
        "moral": "Cười trước, mưa sau — nơi nào có tiếng cười, nơi đó phúc tìm đến."
      }
    }
  },
  "hak": {
    "title": "Kẻ biết tên của vạn vật",
    "place": "Tháp mười tầng trong mây",
    "setup": [
      "Bạch Trạch — thần thú đầu người mình rồng, sáu mắt, biết tên của mọi loài yêu quái và mọi con chữ trên đời. Người xưa kể ông từng đọc cho Hoàng Đế nghe mười một nghìn năm trăm hai mươi cái tên, không sót một.",
      "Airi vốn nói được nhiều thứ tiếng, nhưng nàng hiểu: một chữ Hán không chỉ là một âm, mà là một cánh cửa với nhiều chiếc chìa. Ông chờ ở đỉnh tháp để xem ai biết dùng đủ chìa."
    ],
    "resolve": [
      "Mỗi tầng nàng đọc một chữ bằng ba giọng — On, Kun và âm Hán Việt, thứ tiếng nàng học được từ một lái buôn phương Nam — như đổi ba chiếc chìa cho cùng một ổ khóa. Qua tầng thứ mười, nàng dừng trước thần thú, hơi thở còn dồn, nụ cười vẫn còn.",
      "« Ngươi đọc cùng một chữ bằng ba tiếng mà không lẫn, » Bạch Trạch nói. « Đã lâu lắm ta mới nghe ai làm được vậy. » Ông đặt dấu lên cuốn sổ vỏ bạch dương, rồi hỏi nhỏ: « Còn bóng áo choàng đen ngoài biển… ngươi định nói gì với hắn? » Airi chỉ cười: « Hẹn gặp lại. »"
    ],
    "moral": "Một chữ, ba tiếng đọc — người biết nhiều tiếng thì không bao giờ lạc đường."
  },
  "yuki": {
    "title": "Người đàn bà chưa từng bật cười",
    "place": "Sân tuyết sau tháp mười tầng",
    "setup": [
      "Yukionna — người đàn bà của tuyết. Người xưa kể bà đi qua tuyết mà không để lại dấu chân, và từng tha mạng một chàng trai trẻ với đúng một điều kiện: đừng kể cho ai nghe đêm ấy. Chàng đã kể. Từ đó bà chỉ cất lời khi tuyết dày đủ để lời không vang. Nếu Bạch Trạch biết tên của vạn vật, thì bà biết tiếng của chúng: tuyết rơi nghe thế nào, gió luồn kẽ đá ra sao, bước chân nặng hay nhẹ, và cả những điều không tiếng mà vẫn có dáng.",
      "Airi nhớ phương Bắc cũng có một người như thế: Skaði, nữ thần núi tuyết, gả cho thần biển rồi bỏ đi vì không ngủ nổi giữa tiếng hải âu, trong khi chồng nàng chẳng chịu nổi tiếng sói hú. Hai kẻ yêu nhau mà không chung nổi một thứ tiếng động. Yukionna cũng đứng yên trong mùa đông của mình: từ khi bình minh trở lại, tuyết Fusō tan từng ngày, và bà không biết mình còn lại gì khi mùa đông qua đi."
    ],
    "resolve": [
      "Airi bước vào sân khi mái tháp đang nhỏ giọt. Yukionna ngồi bất động, hơi thở trắng như sương. Airi không hỏi, không giảng. Nghe tuyết rơi, nàng hạ từng ngón tay xuống nhẹ như tuyết; nghe gió, nàng xoay một vòng cho tà áo vút lên; nghe bước chân nặng, nàng nhún ba bước như Ame-no-Uzume trên nền tuyết. Yatagarasu đậu trên mái, kêu một tiếng đáp lại.",
      "Yukionna không cười — băng không biết cười. Nhưng Airi chỉ vào vũng nước dưới mái hiên: « Tuyết tan thành nước, nước lên thành mây, mây lại thành tuyết. Tan không phải là mất, chỉ là đổi cách kêu thôi! » Nắng lọt qua mây, cả sân tuyết sáng bừng. Lần đầu sau rất nhiều mùa đông, bà ngẩng mặt để ánh sáng chạm vào má mà không né. Một tiếng cười rất nhỏ thoát ra, rồi hai, rồi ba, như băng vỡ thành ngàn mảnh, mỗi mảnh một tiếng. Bà đặt lên cuốn sổ một dấu son: một bông tuyết không tan."
    ],
    "moral": "Tan đi không phải là hết — chỉ là đổi cách kêu."
  },
  "finale": {
    "resolve": [
      "Ngoài câu chuyện, Ryosuke gửi đến bạn lời nhắn:",
      {
        "q": "Airi là một nữ sứ giả xinh đẹp và thông minh, khí chất của em đã gây ấn tượng mạnh cho anh. Anh nghĩ rằng, em sẽ toả sáng rất đẹp trong cuộc đời của mình. Ai cũng có quyền được sống cuộc đời của riêng mình, khoẻ mạnh, hạnh phúc, và ngập tràn yêu thương, Ryosuke luôn luôn ủng hộ em. Chúc em tất cả. Nếu khi em đọc được lời nhắn này mà mình đã không còn giữ liên lạc, thì số của anh vẫn ở đây nhaaa: 0362182134 :))). Best wish for U."
      }
    ]
  }
};
