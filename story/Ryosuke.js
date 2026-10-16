/* =====================================================================
   story/Ryosuke.js — CỐT TRUYỆN CỦA NHÂN VẬT "Ryosuke"
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
window.FUSOU_STORY["Ryosuke"]={
  "title": "Ryosuke · Kẻ không tên",
  "tagline": "Hướng về Fusō — cây mặt trời mọc ở cực Đông, nơi rễ cây uống chung mạch nước sâu thẳm với Yggdrasil.",
  "greet": "Yo {name}! Hôm nay học gì nào?",
  "sub": "ようこそ、リョウスケさん。今日も楽しく学ぼう！",
  "intro": [
    "Người ta thấy hắn lần đầu ở bến Vindvik vào một đêm sương dày, ngay sau khi một cánh buồm gỗ thông rời bến — người đưa tiễn kể rằng chủ nó cười nhiều đến mức sóng cũng dịu. Hắn đứng đó, áo choàng đen, mũ rộng vành che nửa khuôn mặt, bước chân nhẹ đến mức không để lại dấu trên tuyết. Hắn mang khí chất của kẻ bất cần đời — nhìn thế gian như một câu chuyện đã biết trước kết cục. Hắn giống Odin hóa trang thành Gangleri, lang thang qua các làng với một cái danh giả. Hắn chỉ nói danh mình là Ryosuke, rồi không nói thêm một lời. Chó thấy hắn thì lùi, trẻ con thấy hắn thì im bặt, và ngọn đèn nhà nào hắn đi qua cũng chập chờn như đang nín thở.",
    "Hắn không có làng, không có bạn, không có gia tộc. Hắn đi một mình, ngủ một mình, và không thấy ba năm không mặt trời là một mất mát — với kẻ đã quen bóng tối, Fimbulvetr chỉ là mùa của những người khác. Sự bất cần của hắn không phải là chán ghét, mà là trống rỗng sâu thẳm, như một người đã nhìn quá nhiều kết thúc nên không còn muốn mở đầu nữa. Các bậc trưởng lão thì thầm rằng hắn là Úlfhéðinn — chiến binh khoác da sói, sống ở nơi quá lạnh để còn nhớ danh mình.",
    "Nhưng hắn nhớ đúng một điều. Có một đêm, giữa bóng tối không đáy của mạch nước ngầm, một giọng nói đã nuốt mất danh thật của hắn. Còn lại “Ryosuke” chỉ là một cái vỏ rỗng. Hắn không thù hận, không oán trách; trong hắn gần như chẳng còn gì mong cầu, ngoài đúng một sợi dây mảnh còn nối vào chỗ trống ấy: lấy lại nó, rồi có lẽ lại tiếp tục bất cần như cũ.",
    "Tin đồn kể rằng ở Fusō, danh bị chia thành năm mảnh dấu, mỗi mảnh do một ác linh canh giữ. Hắn bước lên thuyền một mình, không hỏi giá. Chỉ có một con quạ đen đậu trên mũi thuyền, không dám kêu. Không ai biết hắn tìm lại danh để làm gì — để báo thù, để trả nợ, hay chỉ để biết mình từng là ai, rồi lại quên."
  ],
  "bosses": {
    "n5": {
      "name": "Tanuki",
      "title": "Kẻ bắt chước",
      "place": "Cửa ngõ Fusō",
      "setup": "Tanuki tự hào là bậc thầy hóa hình, bắt chước được cả giọng nói lẫn dáng đi của con người. Nó đứng ở cửa ngõ Fusō để lấy cắp một mảnh của mỗi kẻ đi qua — nên mới có nhiều gương mặt đến thế.",
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
      "setup": "Kappa ngồi bên sông trong đêm, thích kể chuyện cho khách đi qua và ghét những kẻ im lặng — vì im lặng là thứ duy nhất nó không thể chạm tay vào để bắt nạt.",
      "resolve": "Nó ném đủ lời vào bóng áo choàng đen mà không nhận được một chữ đáp lại. Ryosuke chỉ cúi chào một lần, thật sâu, rồi đứng yên cho đến khi mặt nước trên đĩa của nó phẳng lặng như gương. Sự bất cần của hắn khiến Kappa bất giác nói ra điều nó chưa từng kể với ai. Khi tỉnh lại, nó đã trao dấu thứ hai cùng một chiếc đèn lồng. Hắn nhận dấu, bỏ lại chiếc đèn.",
      "moral": "Kẻ biết im lặng là kẻ nghe được nhiều nhất.",
      "duel": [
        "Đứng yên bên sông",
        "Kappa sẽ ném đủ lời — nghe cho đủ, rồi đáp đúng, đừng để thời gian trôi."
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
      "setup": "Tengu sống một mình trên đỉnh núi từ hàng trăm năm, kiêu hãnh và lạnh lùng. Nó đã quen đến mức tin rằng sự cô độc là một phẩm hạnh, và coi mọi kẻ leo lên đây là kẻ đến để chứng minh điều ngược lại.",
      "resolve": "Nó nhận ra ở Ryosuke thứ khí chất giống mình thuở trước, nhưng còn sâu hơn: sự bất cần đời đến mức không cần cả sự công nhận. Hai bên đối mặt suốt một đêm dài — đêm chẳng cần đợi rạng đông, vì ba năm nay ở đây không có rạng đông nào cả. Lời ít mà sắc như lưỡi kiếm. Khi ngọn đuốc cuối cùng trên vách đá cháy tàn, Tengu hỏi: « Ngươi định đi một mình tới bao giờ? » Hắn đáp: « Tới khi hết đường. » Tengu im lặng, trao dấu thứ ba, và lần đầu tiên sau nhiều thế kỷ, nó nhìn xuống chân núi.",
      "moral": "Con đường một mình cũng là một lựa chọn, và phải trả giá.",
      "duel": [
        "Đối mặt cả đêm trên vách đá",
        "Lời nói sắc như kiếm — đáp gọn và đúng trước khi ngọn đuốc cuối cháy tàn."
      ],
      "train": [
        "Mài lưỡi kiếm lời nói",
        "Luyện từng chủ đề N3 cho tới khi câu đáp gọn như một nhát chém."
      ],
      "lose": "Tengu quay lưng, gió núi lạnh buốt: “Đuốc còn cháy.” Ôn lại rồi lên núi tiếp."
    },
    "n2": {
      "name": "Oni",
      "title": "Kẻ canh bóng tối",
      "place": "Cửa ngục tối",
      "setup": "Oni canh cửa ngục tối, nơi những lời nói dối cũ bị chôn vùi. Nó như Garm, con chó canh cửa Hel, ngửi ra tội lỗi trên người kẻ đến — và chưa từng ngửi nhầm.",
      "resolve": "Nó gầm: « Ngươi đã làm gì? » Ryosuke không biện hộ, không giải thích, chỉ đáp một chữ duy nhất — chữ ấy chỉ mình Oni nghe thấy. Đôi mắt đỏ của nó chợt trũng xuống. « Ngươi không mang tội, » nó khàn giọng. « Ngươi mang một chỗ trống có hình dạng của tội. » Nó đã nghe tội lỗi của hàng ngàn kẻ, chưa từng ai nhìn nó bằng ánh mắt lạnh lẽo và thờ ơ đến thế. Nó mở cửa và trao dấu thứ tư.",
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
      "setup": "Rồng nằm dưới đáy hồ đen, ngậm danh của những kẻ đã bị thế gian lãng quên, như Níðhöggr gặm rễ cây thế giới ở Náströnd. Nó chỉ là một đầu của con rồng ấy: đầu kia quấn quanh tảng đá nơi cửa hang Ama-no-Iwato phương Đông, còn thân nó chính là mạch rễ ngầm nối hai bờ thế giới. Qua mạch ấy, trong một đêm không trăng, nó đã nuốt danh của Ryosuke từ rất xa — và nhớ rất rõ vị của nó.",
      "resolve": "Nó cười: « Muốn lấy lại không? » Ryosuke chỉ nhìn, khí chất bất cần đời khiến cả hồ nước như im lặng theo. Rồng đọc lên cái danh thật, chậm rãi, từng âm một, rồi nhả dấu cuối. Hắn nghe hết, không nói gì, quay đi. Mặt hồ đen lần đầu tiên in lại bóng một người trọn vẹn. Không ai biết cái danh đó là gì, kể cả con quạ đen.",
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
    "Ánh sáng đầu tiên sau ba năm rơi xuống mặt hồ đen — ở một nơi rất xa, có ai đó vừa mở một cánh cửa. Hắn không ngẩng lên. Chỉ còn một chiếc lông quạ nằm trên bờ hồ, và dấu chân hắn dẫn về phía đường chân trời: lần đầu tiên, mặt đất nhớ được bước chân của hắn.",
    "Hắn đã lấy lại thứ mình cần, và chọn mang theo nó thay vì đeo nó lên mặt. Cũng như những ngọn đèn bên hắn không còn chập chờn nữa, câu hỏi của Oni ngày nào đã có lời đáp — không phải bằng một chữ, mà bằng cách hắn bước đi."
  ],
  "kyubi": {
    "title": "Hồ ly chín đuôi · Kẻ nhớ giúp",
    "place": "Đỉnh núi cuối cùng của Fusō",
    "setup": [
      "Không ai tiễn hắn xuống núi, và hắn cũng chẳng đợi ai tiễn. Nhưng lúc quay lưng khỏi bờ hồ đen, hắn thấy lối mòn bên kia sườn núi sáng lên — không phải ánh mặt trời, mà là thứ sáng lạnh của tro còn ấm. Con quạ đen đậu trên vai hắn, lần đầu tiên dám kêu một tiếng, rồi lại im bặt.",
      "Trên đỉnh núi cuối cùng của Fusō, giữa tàn tro những ngôi đền cổ, chín chiếc đuôi đang khẽ lay. Đó là 九尾の狐 — Cửu Vĩ Hồ, con hồ ly sống qua một nghìn năm, nghe đủ mọi lời thề và nhớ từng lời thất hứa. Nó đã nhìn thấy hắn từ lúc hắn đặt chân lên bến: một kẻ không để lại dấu chân trên tuyết, nhưng để lại một khoảng im lặng mà không loài nào bắt chước nổi.",
      {
        "q": "« Ngươi chẳng hứa với ai điều gì, nên ta chẳng có gì để nhớ về ngươi. Đó là điều lạ nhất ta từng gặp. »"
      }
    ],
    "resolve": [
      "Ryosuke không đáp. Hắn chưa từng đáp, và Cửu Vĩ Hồ dường như đã hiểu từ lâu rằng sự im lặng ấy cũng là một lời — chỉ là lời nói bằng thứ ngôn ngữ mà loài người đã bỏ quên.",
      "Nó rũ chín chiếc đuôi, bứt ra một đốm lửa xanh nhỏ rồi đặt vào lòng bàn tay hắn. Đốm lửa không nóng; nó lạnh vừa đủ để hắn nhận ra tay mình vẫn còn cảm giác.",
      {
        "q": "« Ta không cho ngươi một cái tên — ngươi đã tự giữ lấy nó. Ta cho ngươi thứ khác: một kẻ nhớ giúp, để mai này ngươi không phải mang tất cả một mình. »"
      },
      "Đốm lửa nở thành một dáng hồ ly nhỏ, lông trắng, đuôi cháy xanh, ngồi xuống cạnh gót chân hắn như đã ngồi ở đó từ trước. Hắn chỉ gật đầu, rất khẽ. Từ ngày ấy, trên những chặng đường chưa có tên phía trước, có một cái bóng nhỏ đi cùng hắn — không hỏi, không đòi, chỉ ở đó; và lần đầu tiên, bóng của hắn trên mặt đất không còn đi một mình."
    ],
    "moral": "Kẻ ít nói nhất cũng cần một người nghe được cả điều không nói."
  },
  "yokai": {
    "title": "Bốn bóng dưới chân núi",
    "tagline": "Dưới chân núi cuối cùng của Fusō, bốn yêu quái từng hầu cận hồ ly chín đuôi ở lại giữ bốn kho lời nói mà loài người đã bỏ quên.",
    "intro": [
      "Con quạ đen không chịu bay tiếp. Nó đậu lên mũi thuyền, quay đầu về phía chân núi cuối cùng của Fusō, nơi bốn đốm sáng khác màu cùng lập lòe trong sương.",
      {
        "q": "« Tứ yêu — bốn kẻ từng hầu cận hồ ly, nay ở lại giữ lời cũ. Mỗi kẻ giữ một kho. Qua được ai, kẻ ấy trả lại một dấu. »"
      },
      "Ryosuke không hỏi ai đã nói câu ấy. Hắn đi qua bốn đốm sáng như đi qua một dãy quán đã đóng cửa — chậm, không ngoái lại, không cần ai chỉ đường. Trên vách giấy, trên tơ, trên mép ô còn vương dư âm một tiếng cười của người đi trước; hắn bước qua nó như bước qua một vệt nắng không dành cho mình."
    ],
    "monsters": {
      "rokurokubi": {
        "title": "Bà chủ trọ nghe lén",
        "place": "Quán trọ lưng chừng núi",
        "setup": [
          "Ban ngày, bà chủ quán trọ là người đàn bà dịu dàng, rót trà không đổ một giọt. Ban đêm, cổ bà dài ra như sợi thừng, luồn qua vách giấy, quấn quanh những kẻ đang ngủ để nghe xem họ nói mớ điều gì. Đó là Rokurokubi — kẻ đã vươn cổ chờ suốt hai trăm năm một vị khách chịu nói thật.",
          "Bà không đòi tiền trọ. Bà chỉ đòi những lời người ta giấu kỹ nhất, nhất là kẻ nào nợ nần đến mức quay đầu cũng không nổi."
        ],
        "resolve": [
          "Đêm ấy cổ bà trườn qua vách, quấn ba vòng quanh Ryosuke. Bà áp tai vào ngực hắn và chẳng nghe thấy gì: không lời nói mớ, không tiếng thở dài, chỉ nhịp tim đều như người đã trả hết mọi món nợ — hoặc chưa từng vay.",
          "« Ngươi mơ gì? » bà hỏi. « Không mơ. » Cổ bà tự co về, vì chẳng có điều giấu nào để thò vào. Bà đặt dấu lên chiếu, và nói thêm một câu mà hắn không đáp: « Người không giấu gì cũng lạc đường như kẻ giấu quá nhiều. »"
        ],
        "moral": "Kẻ không có gì để giấu thì không ai nghe lén nổi — nhưng cũng chẳng ai nghe thấy hắn."
      },
      "jorogumo": {
        "title": "Người gảy đàn bên thác",
        "place": "Thác nước trong sương",
        "setup": [
          "Nơi nước đổ xuống đá, một người đàn bà áo lụa ngồi gảy đàn biwa. Mỗi dây đàn là một sợi tơ. Ai nghe lâu quá sẽ nhận ra mình đã ngồi giữa mạng từ lúc nào. Đó là Jorōgumo — nhện hóa mỹ nhân.",
          "Nàng không giết ai bằng nanh. Nàng giết bằng nhân quả — sợi tơ mảnh nối việc ngươi đã làm với điều ngươi sắp nhận. Gieo gì gặt nấy, và cả con thác là một tấm lưới không ai thoát."
        ],
        "resolve": [
          "Tơ quấn lên áo choàng đen nhưng gần như không bám được: hắn chẳng còn việc nào dang dở để sợi tơ nối vào — trừ đúng một việc. Sợi tơ ấy mảnh như tóc, bám vào gáy hắn và chỉ về phía đáy hồ đen. Nàng gảy hết bản đàn. Kẻ nghe vẫn ngồi nguyên, không tránh, không kháng cự.",
          "« Ngươi không sợ nhân quả sao? » « Nhân quả đã ăn gần hết phần của ta. Còn lại một sợi — để ta tự kéo. » Nàng nhìn hắn rất lâu, rồi buông đàn. Tơ trên thác lặng lẽ rụng xuống, chỉ để lại sợi mảnh dẫn đường, và dấu son nằm lại giữa những sợi còn run."
        ],
        "moral": "Chỉ kẻ còn muốn điều gì mới bị mắc tơ — và đôi khi sợi tơ ấy chính là con đường."
      },
      "aoandon": {
        "title": "Ngọn đèn thứ một trăm",
        "place": "Gian phòng trăm ngọn đèn",
        "setup": [
          "Người ta kể trăm chuyện ma, mỗi chuyện tắt một ngọn đèn. Ngọn đèn giấy xanh thứ một trăm là ngọn không ai dám tắt, vì kẻ đứng sau nó sẽ bước ra: Ao-andon, quỷ nữ sừng cong, răng nhuộm đen, tay ôm quyển sách chép bằng Hán văn và những chữ cổ mà không còn ai đọc nổi.",
          "Bà không hỏi chuyện. Bà chỉ hỏi chữ. Ánh sáng xanh của bà chỉ đủ rọi lên những ký tự đã sống quá lâu — chữ cũ, thể cũ, cách đọc cũ."
        ],
        "resolve": [
          "Ngọn đèn vốn đã ngả vàng ấm từ đêm có người kể chuyện vui; khi hắn bước vào, nó chuyển lại xanh lạnh, như nhận ra lần này cần một thứ ánh sáng khác. Hắn đọc không ngắt một chữ, kể cả những nét chữ mà chính tay hắn từng viết từ trước khi cái danh bị nuốt đi. Hắn không nhận ra chúng. Nhưng ngón tay hắn thì nhận ra.",
          "« Ngươi là kẻ đầu tiên không sợ chuyện thứ một trăm. » « Ta đã là chuyện thứ một trăm của ai đó rồi. » Ao-andon im lặng thật lâu, rồi đưa dấu qua ánh đèn xanh, như người trả lại một trang sách đã đọc xong."
        ],
        "moral": "Có những chữ cũ chỉ đọc được bằng ánh sáng của kẻ đã sống đủ lâu trong bóng tối."
      },
      "karakasaobake": {
        "title": "Chiếc ô bị bỏ quên",
        "place": "Cổng đền đổ nát dưới mưa",
        "setup": [
          "Một chiếc ô giấy bị bỏ lại trăm năm đã thành yêu — một mắt, một chân, cái lưỡi dài thè ra. Đó là Karakasa-obake. Nó chỉ đòi một điều: kẻ nào qua cổng đền dưới mưa phải chịu để nó che.",
          "Kẻ nhát thì chạy, kẻ cứng đầu thì từ chối. Trăm năm nay chưa ai chịu đứng dưới nó."
        ],
        "resolve": [
          "Mưa trút xuống. Ryosuke, kẻ suốt ba mùa đông chưa từng che đầu, dừng trước cổng. Chiếc ô thè lưỡi, nhảy lò cò; hắn vẫn đứng yên. Rồi hắn bước vào dưới tán giấy, lần đầu để một thứ khác gánh mưa thay mình. Chiếc ô đứng im đến run, sợ làm vỡ khoảnh khắc ấy.",
          "Khi mưa tạnh, hắn dựng nó vào mái hiên khô, và nó đặt dấu xuống nền đá."
        ],
        "moral": "Nhận một chỗ che mưa cũng là một cách trả ơn."
      }
    }
  },
  "hak": {
    "title": "Kẻ biết tên của vạn vật",
    "place": "Tháp mười tầng trong mây",
    "setup": [
      "Tương truyền Bạch Trạch mình rồng, mặt người, sáu mắt, thuộc tên mười một nghìn năm trăm loài yêu quái. Như kẻ áo đen từng đổi một con mắt bên giếng Mímir, ai lên tháp cũng phải trả giá: chỉ mang xuống được một điều — nghĩa tên mình, hoặc lời của kẻ khác."
    ],
    "resolve": [
      "Ryosuke leo đủ mười tầng, lặng thinh. « Rồng chỉ trả ngươi âm của tên đã mất, » Bạch Trạch nói. « Ta đọc được cả nghĩa. Chọn đi. » Hắn nhìn rất lâu: « Lời của kẻ kia. » Ông gật, đặt dấu vào tay hắn: « Thiếu nữ đi trước nhắn hai chữ: hẹn gặp lại. » Lông quạ trên vai hắn khẽ rung, như Hugin và Munin thì thầm."
    ],
    "moral": "Cái tên có thể mang theo mà chưa cần hiểu; lời của người khác thì phải nghe ngay."
  },
  "yuki": {
    "title": "Kẻ đi qua tuyết không để lại dấu",
    "place": "Sân tuyết sau tháp mười tầng",
    "setup": [
      "Tương truyền Yukionna đi qua tuyết chẳng để lại dấu chân; từng tha một chàng trẻ, chỉ dặn đừng kể ai. Chàng thất hứa, bà thôi tin lời hứa. Skaði nơi Bắc quốc cũng bỏ biển vì tiếng hải âu. Bà chỉ hỏi mỗi kẻ một câu, và chỉ tin kẻ dám đáp bằng điều trong ngực — như hắn, chưa từng thất hứa vì chưa từng hứa."
    ],
    "resolve": [
      "« Ngươi nghe thấy gì? » « Tuyết. » « Còn trong ngươi? » « Một chỗ trống. » Bà áp tay lên ngực hắn, nghe một tiếng như sỏi rơi đáy giếng khô. « Người đời gọi là vực; ta gọi là chỗ vừa mở ra. » Hắn quay đi, tuyết dưới gót kêu lên — lần đầu bước chân hắn có tiếng."
    ],
    "moral": "Chỗ trống đã có tên thì không còn là vực."
  },
  "finale": {
    "resolve": [
      "Chúc mừng, bạn đã tìm lại được chính mình rồi, Ryosuke — kẻ bất cần đời, kẻ dám thách thức cả những ai muốn thách thức mình."
    ]
  }
};
