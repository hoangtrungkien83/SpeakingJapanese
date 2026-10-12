/* =====================================================================
   story/Airi.js — CỐT TRUYỆN CỦA NHÂN VẬT "Airi"
   Tên file = tên người dùng (đúng hoa/thường) trong USERS của index.html.
   Web tự nạp file này sau khi đăng nhập; game 朱印帖 > 地図 sẽ hiển thị.
   ---------------------------------------------------------------------
   title    : tiêu đề nhánh truyện (hiện đầu bản đồ)
   tagline  : câu dẫn ngắn dưới tiêu đề
   intro    : chương mở đầu 序章. Mỗi phần tử là 1 đoạn; {q:"..."} = đoạn trích dẫn
   bosses   : 5 chặng n5 → n1. Mỗi chặng:
       name   tên boss                 title  danh hiệu (hiện to trên bản đồ)
       place  địa điểm (dòng nhỏ)      setup  đoạn dẫn — luôn hiện
       resolve  diễn biến sau khi thắng (CHỈ hiện khi đã đóng dấu, tránh lộ truyện)
       moral    câu chốt "thỏa ước" (cũng chỉ hiện khi đã đóng dấu, có thể để "")
       duel   [tên thử thách Boss có đồng hồ, mô tả]   train [tên mục thu thập từ, mô tả]
       lose   câu hiện khi thua
   ending   : đoạn kết 終章, mở khi đủ 5 dấu son (mảng đoạn văn)
   ===================================================================== */
window.FUSOU_STORY=window.FUSOU_STORY||{};
window.FUSOU_STORY["Airi"]={
  "title": "Airi · Sứ giả của mặt trời",
  "tagline": "Hướng về Fusō — cây mặt trời mọc ở cực Đông, nơi rễ cây uống chung mạch nước sâu thẳm với Yggdrasil.",
  "intro": [
    "Ở rìa phương Bắc, Fimbulvetr phủ xuống vịnh Vindvik như tấm áo liệm trắng. Ba mùa đông nối tiếp nhau, chẳng một tia hè nào lọt xuống. Dân làng thì thầm rằng Sól, nữ thần mặt trời, đang bị sói Sköll rượt đuổi đến cùng đường. Nhưng ở phương Đông, một nỗi giận khác đang ngủ. Amaterasu đã quay lưng với thế gian, ẩn vào hang đá Ama-no-Iwato và lấp cửa bằng tảng đá khổng lồ. Ánh sáng của cả hai thế giới cùng tắt chỉ vì một cánh cửa đóng.",
    "Giữa lúc các bậc trưởng lão chỉ biết lớn tiếng với nhau, một thiếu nữ đứng lên. Danh nàng là Airi.",
    "Vẻ đẹp của nàng chẳng thuộc về phàm nhân. Máu trên má như ánh bình minh còn sót lại, mắt sâu như mặt hồ phản chiếu trời, và khi nàng cười, cả không khí quanh người dường như sáng hơn một nhịp. Người ta bảo khí chất của nàng giống như thần vừa bước xuống từ cõi trên — vừa gần gũi, vừa không thể chạm tới. Nàng nói được tiếng của kẻ buôn đường xa, tiếng của chim trời, tiếng của gió qua kẽ đá. Bước chân nàng nhanh, lời nói nàng sáng như ngọn lửa mới nhóm, và ai từng nhìn nàng một lần đều ngoái lại lần nữa, như bị buộc phải nhớ. Người ta gọi nàng là sendiboði — sứ giả — vì nàng tin rằng lời nói khéo léo còn sắc hơn bất kỳ lưỡi rìu nào.",
    "Bà völva trao cho nàng cuốn sổ vỏ bạch dương, giọng khàn như gió qua xương khô:",
    {
      "q": "« Gươm không mở được cửa đá. Chỉ lời mới mở. Muốn gặp nữ thần, con phải kết thỏa ước với năm ác linh giữ đường. Mỗi thỏa ước sẽ đóng một dấu son lên trang giấy này."
    },
    {
      "q": "Còn có một bóng áo choàng đen đang đi trên cùng biển cả. Danh hắn là Ryosuke — kẻ không tên, kẻ bất cần đời. Hắn cũng vượt sóng, cũng tìm kiếm. Nếu con hoàn thành hết năm dấu son, tấm màn che khuất quanh hắn sẽ mỏng đi… đủ để con thoáng thấy bóng dáng thật của kẻ ấy. »"
    },
    "Airi dong thuyền gỗ thông vượt đường cá voi. Giữa cơn bão, một con quạ ba chân đáp xuống mũi thuyền — Yatagarasu, chim dẫn đường của thần Nhật, họ hàng xa của Huginn và Muninn. Nàng giống Hermóðr năm xưa từng phi ngựa xuống Hel để thương lượng xin trả Baldr. Nhưng nàng chọn nụ cười thay vì cây thương. Ở cuối con đường, nàng sẽ phải làm điều mà Ame-no-Uzume từng làm: khiến cả trời đất phải bật cười."
  ],
  "bosses": {
    "n5": {
      "name": "Tanuki",
      "title": "Kẻ buôn lá",
      "place": "Chợ bến cảng",
      "setup": "Tanuki ngồi giữa chợ bến cảng như một thương gia đã sống qua trăm lần đổi danh. Nó bán “vàng” và “thuốc” làm từ lá hóa phép, chưa từng thua một cuộc mặc cả vì luôn đổi danh món hàng giữa chừng.",
      "resolve": "Airi cười, ngồi xuống đối diện. Vẻ đẹp và khí chất thần thánh của nàng khiến cả khu chợ như ngừng thở một nhịp. Nàng nói bằng ba thứ tiếng liên tiếp cho đến khi nó rối loạn, rồi trả nó đúng thứ nó đang bán: một chiếc lá. Tanuki ôm bụng cười đến sặc sụa, trao dấu son đầu tiên chỉ để giữ thể diện.",
      "moral": "Ai thích đổi danh hàng giữa chừng, cũng sẽ bị đổi lại giá.",
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
      "setup": "Kappa canh cầu sông Asagiri. Nó chỉ cho qua những ai cúi chào đúng nghi thức. Đĩa nước trên đầu nó chính là mạng sống: cúi đúng thì nước giữ, chào vụng thì nước đổ. Nó đã hạ biết bao kẻ hấp tấp.",
      "resolve": "Airi cúi chào sâu và chậm rãi, nụ cười vừa đủ ấm, khí chất của thần khiến Kappa không dám nhìn thẳng quá lâu. Nó cúi lại, không dám làm đổ dù chỉ một giọt. Nó trao dấu thứ hai cùng một quả dưa chuột — món quà của kẻ vừa kết bạn.",
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
      "setup": "Tengu giữ đường núi và tự nhận mình là biện sĩ giỏi nhất cõi. Nó từng treo mình chín đêm để học bí mật của chữ, như Odin ngày xưa, nên tin rằng chỉ mình nắm được lý lẽ.",
      "resolve": "Airi để nó nói hết, rồi hỏi ba câu ngắn. Câu thứ ba làm nó nghẹn lời. Nàng cúi đầu nhận thua đúng lúc nó định hạ cánh, và lần đầu tiên nó cảm thấy mình được tôn trọng đến thế — tôn trọng từ một sinh linh mang khí chất thần thánh. Nó trao dấu thứ ba.",
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
      "setup": "Mỗi mùa Setsubun, người ta ném đậu và hô “quỷ ra ngoài”. Oni giận dữ, giữ lại những từ khó nhất để đòi một lời xin lỗi chưa từng ai chịu nói. Như một Jötunn bị chư thần ruồng bỏ, nó cầm chùy sắt ngồi khóc trong hang băng.",
      "resolve": "Airi không đánh, cũng không dỗ dành suông. Nàng đề nghị một thỏa ước: mỗi mùa đông, dân làng sẽ để lại một bát cơm nóng ngoài cửa cho nó. Vẻ đẹp và sự bình thản của nàng khiến Oni sững sờ, buông chùy, đóng dấu thứ tư.",
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
      "setup": "Rồng quấn quanh tảng đá che hang Ama-no-Iwato, như Níðhöggr gặm rễ cây thế giới. Nó chỉ nhường lối cho kẻ nói được những từ nhiều tầng nghĩa.",
      "resolve": "Airi trả lời từng chữ, rồi làm điều chưa ai từng làm: nhảy một điệu múa trước cửa hang, vừa rộn ràng vừa dí dỏm, như Ame-no-Uzume năm xưa. Khí chất thần thánh trong từng bước chân khiến cả không gian như lắng xuống. Trong hang, Amaterasu tò mò hé cửa nhìn ra, thấy chính mình phản chiếu trong chiếc gương, và ngạc nhiên. Rồng đóng dấu cuối.",
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
    "Tảng đá nhích ra. Ánh bình minh đầu tiên sau ba năm dài chiếu xuống vịnh Vindvik. Yatagarasu rúc vào vai Airi, khẽ kêu một tiếng như lời chào của mặt trời."
  ],
  "finale": {
    "resolve": [
      "Ryosuke gửi đến bạn lời bình rằng:",
      {"q": "Airi là một chiến binh xinh đẹp và thông minh, khí chất của em đã gây ấn tượng mạnh cho anh. Anh nghĩ rằng, em sẽ toả sáng rất đẹp trong cuộc đời của mình. Ai cũng có quyền được sống cuộc đời của riêng mình, khoẻ mạnh, hạnh phúc , và ngập tràn yêu thương, Ryosuke luôn luôn ủng hộ em. Chúc em tất cả, khi em đọc được lời nhắn này có lẽ mình đã không giữ liên lạc lâu rồi. Best wish for U. Số điện thoại anh nè : 0362182134:))))."}
    ]
  }
};
