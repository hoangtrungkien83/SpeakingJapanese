/* =====================================================================
   story/Ryosuke.js — CỐT TRUYỆN CỦA NHÂN VẬT "Ryosuke"
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
window.FUSOU_STORY["Ryosuke"]={
  "title": "Ryosuke · Kẻ không tên",
  "tagline": "Hướng về Fusō — cây mặt trời mọc ở cực Đông, nơi rễ cây uống chung mạch nước sâu thẳm với Yggdrasil.",
  "intro": [
    "Người ta thấy hắn lần đầu ở bến Vindvik vào một đêm sương dày. Áo choàng đen, mũ rộng vành che nửa khuôn mặt, bước chân nhẹ đến mức không để lại dấu trên tuyết. Hắn mang khí chất của kẻ bất cần đời — nhìn thế gian như một câu chuyện đã biết trước kết cục, không vui, không buồn, không mong cầu. Hắn giống Odin hóa trang thành Gangleri, lang thang qua các làng với cái danh giả. Không ai biết hắn từ đâu tới. Hắn chỉ nói danh mình là Ryosuke, rồi không nói thêm một lời nào. Chó thấy hắn thì lùi, trẻ con thấy hắn thì im bặt, và ngọn đèn nhà nào hắn đi qua cũng chập chờn như đang nín thở.",
    "Hắn không có làng, không có bạn, không có gia tộc. Hắn đi một mình, ngủ một mình. Sự bất cần của hắn không phải là sự chán ghét, mà là sự trống rỗng sâu thẳm — như một người đã nhìn quá nhiều kết thúc nên không còn muốn mở đầu nữa. Các bậc trưởng lão thì thầm rằng hắn là Úlfhéðinn — chiến binh khoác da sói, sống ở nơi quá lạnh để còn nhớ danh mình.",
    "Nhưng hắn nhớ đúng một điều. Có một đêm, trong bóng tối không đáy, một giọng nói đã nuốt mất danh thật của hắn. Còn lại “Ryosuke” chỉ là một cái vỏ rỗng. Hắn không thù hận, không oán trách, chỉ cần lấy lại nó — rồi có lẽ lại tiếp tục bất cần như cũ.",
    "Tin đồn kể rằng ở Fusō, danh bị chia thành năm mảnh dấu, mỗi mảnh do một ác linh canh giữ. Hắn bước lên thuyền một mình, không hỏi giá. Chỉ có một con quạ đen đậu trên mũi thuyền, không dám kêu. Không ai biết hắn tìm lại danh để làm gì — để báo thù, để trả nợ, hay chỉ để biết mình từng là ai, rồi lại quên."
  ],
  "bosses": {
    "n5": {
      "name": "Tanuki",
      "title": "Kẻ bắt chước",
      "place": "Cửa ngõ Fusō",
      "setup": "Tanuki tự hào là bậc thầy hóa hình, bắt chước được cả giọng nói lẫn dáng đi của con người.",
      "resolve": "Nhưng khi nó cố biến thành Ryosuke, nó chẳng nắm được gì: không thói quen để bắt chước, không cảm xúc để diễn lại, chỉ còn một khoảng tối lạnh lẽo và sự bất cần đến mức không thể diễn. Nó run bần bật. Ryosuke nhìn nó, nói một câu ngắn gọn. Tanuki đưa dấu đầu tiên mà không dám ngẩng mặt.",
      "moral": "Kẻ nói ít và nói đúng thì không ai bắt chước nổi.",
      "duel": [
        "Thử bắt chước kẻ không tên",
        "Nói ít, nói đúng — vượt qua cả chủ đề trước khi hết giờ."
      ],
      "train": [
        "Học cách nói ít mà đúng",
        "Luyện từng chủ đề N5 — mỗi từ một câu ngắn, không thừa."
      ],
      "lose": "Tanuki nhếch mép, hóa hình thành chính bạn nhưng méo mó. Ôn lại rồi nói cho đúng."
    },
    "n4": {
      "name": "Kappa",
      "title": "Kẻ nghe bên sông",
      "place": "Bên sông",
      "setup": "Kappa ngồi bên sông trong đêm, thích kể chuyện cho khách đi qua và ghét những kẻ im lặng.",
      "resolve": "Nó ném đủ lời vào bóng áo choàng đen mà không nhận được một chữ đáp lại. Ryosuke chỉ cúi chào một lần, thật sâu, rồi đứng yên cho đến khi mặt nước trên đĩa của nó phẳng lặng như gương. Sự bất cần của hắn khiến Kappa bất giác nói ra điều nó chưa từng kể với ai. Khi tỉnh lại, nó đã trao dấu thứ hai cùng một chiếc đèn lồng. Hắn nhận dấu, bỏ lại chiếc đèn.",
      "moral": "Kẻ biết im lặng là kẻ nghe được nhiều nhất.",
      "duel": [
        "Đứng yên bên sông",
        "Kappa sẽ ném đủ lời — chỉ cần đáp đúng, đừng để thời gian trôi."
      ],
      "train": [
        "Học cách lắng nghe",
        "Luyện từng chủ đề N4 — nghe kỹ rồi mới đáp."
      ],
      "lose": "Kappa cười: “Ngươi chưa đủ im lặng để nghe.” Mặt nước trên đĩa còn gợn. Ôn lại rồi quay lại bờ sông."
    },
    "n3": {
      "name": "Tengu",
      "title": "Kẻ cô độc trên núi",
      "place": "Vách đá trên đỉnh núi",
      "setup": "Tengu sống một mình trên đỉnh núi từ hàng trăm năm, kiêu hãnh và lạnh lùng.",
      "resolve": "Nó nhận ra ở Ryosuke thứ khí chất giống mình thuở trước, nhưng còn sâu hơn: sự bất cần đời đến mức không cần cả sự công nhận. Hai bên đối mặt cả đêm trên vách đá, lời nói sắc như lưỡi kiếm. Khi rạng sáng, Tengu hỏi: « Ngươi định đi một mình tới bao giờ? » Hắn đáp: « Tới khi hết đường. » Tengu im lặng, trao dấu thứ ba, và lần đầu tiên sau nhiều thế kỷ, nó nhìn xuống chân núi.",
      "moral": "Con đường một mình cũng là một lựa chọn, và phải trả giá.",
      "duel": [
        "Đối mặt cả đêm trên vách đá",
        "Lời nói sắc như kiếm — đáp gọn và đúng trước khi trời sáng."
      ],
      "train": [
        "Mài lưỡi kiếm lời nói",
        "Luyện từng chủ đề N3 cho tới khi câu đáp gọn như một nhát chém."
      ],
      "lose": "Tengu quay lưng, gió núi lạnh buốt: “Chưa tới sáng đâu.” Ôn lại rồi lên núi tiếp."
    },
    "n2": {
      "name": "Oni",
      "title": "Kẻ canh bóng tối",
      "place": "Cửa ngục tối",
      "setup": "Oni canh cửa ngục tối, nơi những lời nói dối cũ bị chôn vùi. Nó như Garm, con chó canh cửa Hel, ngửi ra tội lỗi trên người kẻ đến.",
      "resolve": "Nó gầm: « Ngươi đã làm gì? » Ryosuke không biện hộ, không giải thích, chỉ đáp một chữ duy nhất. Ánh mắt bất cần của hắn khiến Oni lùi lại, đôi mắt đỏ chợt trũng xuống. Nó đã nghe tội lỗi của hàng ngàn kẻ, chưa từng ai nhìn nó bằng ánh mắt lạnh lẽo và thờ ơ đến thế. Nó mở cửa và trao dấu thứ tư.",
      "moral": "Có những lời nặng hơn mọi lời xưng tội.",
      "duel": [
        "Trước cửa ngục tối",
        "Oni gầm hỏi — đáp ngắn và đúng, trước khi hết giờ."
      ],
      "train": [
        "Học cách nặng lời, nhẹ tiếng",
        "Luyện từng chủ đề N2 — một từ đúng nặng hơn mười lời biện hộ."
      ],
      "lose": "Oni gầm khẽ, cánh cửa vẫn đóng. Ôn lại rồi quay lại trước cửa ngục."
    },
    "n1": {
      "name": "Rồng",
      "title": "Kẻ nuốt danh",
      "place": "Đáy hồ đen",
      "setup": "Rồng nằm dưới đáy hồ đen, ngậm danh của biết bao kẻ đã chết, giống Níðhöggr hút xác ở Náströnd. Nó nhớ rất rõ cái danh của Ryosuke vì chính nó đã nuốt.",
      "resolve": "Nó cười: « Muốn lấy lại không? » Ryosuke chỉ nhìn, khí chất bất cần đời khiến cả hồ nước như im lặng theo. Rồng đọc lên cái danh thật, chậm rãi, từng âm một, rồi nhả dấu cuối. Hắn nghe hết, không nói gì, quay đi. Không ai biết cái danh đó là gì, kể cả con quạ đen.",
      "moral": "",
      "duel": [
        "Lấy lại cái danh",
        "Rồng đọc từng âm một — nghe cho hết và đáp đúng trước khi hết giờ."
      ],
      "train": [
        "Lặn xuống hồ đen",
        "Luyện từng chủ đề N1 trước khi đối diện kẻ đã nuốt danh bạn."
      ],
      "lose": "Mặt hồ lặng như tờ, Rồng chìm xuống, cái danh vẫn nằm trong bụng nó. Ôn lại rồi lặn xuống lần nữa."
    }
  },
  "ending": [
    "Bình minh lên. Chỉ còn một chiếc lông quạ nằm trên bờ hồ, và dấu chân của hắn dẫn về phía đường chân trời — như kẻ đã lấy lại thứ mình cần, rồi lại bất cần tất cả."
  ],
  "finale": {
    "resolve": [
      "Chúc mừng , bạn đã tìm lại được chính mình rồi, Ryosuke, kẻ bất cần đời thách thức mọi kẻ muốn thách thức."
    ]
  }
};
