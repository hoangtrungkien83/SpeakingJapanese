/* =====================================================================
   story/Client.js — CỐT TRUYỆN CỦA NHÂN VẬT "Client" (khách không đăng ký)
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
   nue             : (tuỳ chọn) truyện Nue — quái chimera (mình khỉ, thân tanuki, chân hổ, đuôi rắn; kêu như chim hét) (cùng cấu trúc với hak:
                     title, place, setup, resolve, moral)
   ---------------------------------------------------------------------
   Ghi chú: tên chung của khách trong truyện là "Tabito" (旅人 = lữ khách).
   Muốn đổi, chỉ cần tìm/thay "Tabito" trong file này.
   Tên quái vật giữ nhất quán với Airi.js / Ryosuke.js: Tanuki, Kappa, Tengu, Oni, Rồng.
   ===================================================================== */
window.FUSOU_STORY=window.FUSOU_STORY||{};
window.FUSOU_STORY["Client"]={
  "title": "Tabito · Người cầm đèn",
  "tagline": "Hướng về Fusō — nơi Bifröst và Ame-no-Ukihashi chỉ là hai cái tên của cùng một nhịp cầu, nhìn từ hai bờ.",
  "greet": "Chào lữ khách ghé qua ~",
  "sub": "ようこそ、旅のお客さん。ゆっくり見ていってね！",
  "intro": [
    "Ba ngày sau ánh bình minh đầu tiên, băng ở Vindvik còn đang tan thành tiếng nước nhỏ giọt, và Fusō còn đang học lại cách thức dậy. Nhưng ánh sáng trở về quá gấp: nó chảy ngược theo mạch rễ của Cây Thế Giới như nước lũ qua lòng suối cạn, và nơi hai thế giới chạm nhau — nhịp cầu mà người phương Bắc gọi là Bifröst, người phương Đông gọi là Ame-no-Ukihashi — đã nứt dọc theo sống lưng. Cùng lúc ấy, tù và Gjallarhorn của Heimdallr, thứ mỗi sớm thổi một hơi để đánh thức cây cầu, vỡ thành năm mảnh âm tản vào năm kẻ giữ đường. Từ đó, thế gian mất tiếng gọi: thuyền ra khơi không còn biết tìm về, những lối làng quanh co tự tan vào sương, vì một con đường chỉ còn là đường khi có ai đó gọi nó dậy.",
    "Các vị thần ngồi lại bàn bạc suốt ba ngày: người đòi tìm gươm, người đòi tìm lời tiên tri, kẻ đòi lật lại cả Ragnarök. Chỉ có một lữ khách đứng nguyên ở bến cầu gãy, tay cầm chiếc đèn lồng giấy trắng chưa đề một chữ nào.",
    "Khách không nói mình từ đâu đến, và cũng chưa ai hỏi. Khách chưa khắc danh riêng vào đá bến, nên người ở bến gọi khách bằng một cái tên chung mà bất cứ ai lỡ chuyến cũng có thể mang: Tabito — 旅人, lữ khách. Cái tên ấy như chiếc áo mượn của bến cầu, rộng rãi, ai khoác vào cũng vừa. Tabito đi nhẹ, hỏi nhiều, ngồi nghe người lạ nói hết câu rồi mới đáp, và tin rằng một cái tên chung vẫn dẫn được tới một con đường riêng, chỉ cần có người chịu đi đủ lâu.",
    "Heimdallr, vị thần canh cầu — người xưa kể ông nghe được cả cỏ mọc, nhìn xa trăm dặm — giờ đã điếc đặc sau trăm năm thổi tù và, chỉ còn đôi mắt vẫn sắc. Ông đặt tay lên vai Tabito, nói bằng thứ giọng khàn của kẻ không còn nghe được chính mình:",
    {
      "q": "« Cầu không cần một kẻ mạnh. Cầu cần một kẻ biết nghe. Năm mảnh âm nằm ở năm kẻ giữ đường — chúng không phải kẻ thù, chỉ là những kẻ đã quá lâu không ai chịu nghe nốt nhạc của mình. Gom đủ năm mảnh, thổi tù và một lần, cầu sẽ nhớ lại mình là cầu. Đèn này chưa có chữ — chữ nào ngươi muốn đề, cứ đề sau. Tabito là cái tên chung ta gọi ngươi lúc này; cái tên riêng, nếu có, sẽ đến sau con đường. Đừng vội. »"
    },
    "Tabito cúi đầu nhận đèn. Ở bậc đá cuối cùng trước khi xuống bến, Tabito thấy một chiếc lông quạ đen nằm trên mặt đất ẩm, và một hàng dấu chân đều, rõ, như của kẻ vừa học lại cách bước cho nặng — dẫn về phía đường chân trời. Cạnh chiếc lông, trên phiến đá bến, có ai đó vừa khắc một chữ: Ryosuke — nét khắc còn nông, run run, như của kẻ lần đầu tập viết lại tên mình. Tabito không nhặt chiếc lông, cũng không chạm vào chữ. Chỉ nghiêng đèn, để ánh sáng rơi qua cả hai một lúc, rồi bước tiếp."
  ],
  "bosses": {
    "n5": {
      "name": "Tanuki",
      "title": "Kẻ cho mượn tên",
      "place": "Chân cầu, bến Ukihashi",
      "setup": "Ở chân cầu gãy, Tanuki dựng một quầy nhỏ cho những kẻ lỡ chuyến: nó cho mượn tên. Mỗi tấm thẻ là một chiếc lá hóa phép — viết “Đại thương gia”, “Hiệp sĩ”, “Thượng khách của thần” — đeo vào thì sáng đó oai phong lẫm liệt, tới trưa lá lại là lá. Nó giữ mảnh âm thứ nhất — nốt ngắn nhất, đơn giản nhất của tù và, đơn giản đến mức ai cũng tưởng mình đã biết và không ai buồn học. Nó chỉ trao nốt ấy cho kẻ nào nói được điều đơn giản nhất mà không cần mượn gì.",
      "resolve": "Tanuki đẩy tấm thẻ “Thượng khách của thần” về phía Tabito, cười tít mắt. Tabito lắc đầu, chỉ vào chiếc lá nhỏ nhất trên quầy — một chiếc lá nguyên là lá, không phép, không chữ. « Tôi là Tabito, một lữ khách. Chừng đó là đủ để qua cầu. » Tanuki chưng hửng: nó đã cho mượn cả ngàn danh hiệu, chưa từng ai chọn thứ không hóa phép. Nó thử biến thành Tabito để trêu chơi, và nhận ra mình biến thành bất kỳ ai cũng được — một người đi đường, không nét nào đặc biệt — chỉ có ánh sáng trong chiếc đèn là không thể bắt chước. Nốt đầu tiên rơi vào lòng bàn tay Tabito, ngắn và rõ như tiếng gõ cửa. Dấu son đầu tiên in lên góc đèn lồng.",
      "moral": "Câu đơn giản nhất nói cho thật là câu khó giả nhất.",
      "duel": [
        "Giới thiệu mình, không mượn lá",
        "Trả lời đúng những câu đơn giản nhất — vượt qua cả chủ đề trước khi hết giờ."
      ],
      "train": [
        "Học lại câu đơn giản nhất",
        "Luyện từng chủ đề N5 — những điều tưởng đã biết mà vẫn còn kẽ hở."
      ],
      "lose": "Chiếc lá trên thẻ khẽ ngả nâu, Tanuki cười khúc khích: “Còn đang mượn đấy nhé.” Ôn lại rồi giới thiệu lại."
    },
    "n4": {
      "name": "Kappa",
      "title": "Người chèo đò chữ trôi",
      "place": "Bến đò dưới nhịp cầu gãy",
      "setup": "Dưới nhịp cầu gãy, dòng sông cuốn theo đủ thứ trôi từ thượng nguồn: chiếc dép lẻ, quả dưa chuột, và cả những con chữ bị người ta đánh rơi. Kappa chèo đò vớt chúng lên, xếp ngay ngắn trên mạn thuyền, rồi chỉ chở sang bờ kẻ nào phân biệt được hai chữ gần giống nhau như hai viên cuội. Đĩa nước trên đầu nó đầy bao nhiêu thì kiên nhẫn đầy bấy nhiêu. Nó giữ mảnh âm thứ hai — nốt mềm, hơi lạc — và chỉ đổi nó lấy một điều khách thật sự đã nhầm.",
      "resolve": "Kappa thả xuống hai chữ trôi cạnh nhau, gần giống đến mức chính nó cũng phải nheo mắt. Nhiều kẻ đã cãi tay đôi cho đúng, rồi đổ cả nước trên đĩa vì cố chấp. Tabito nhìn rất lâu, rồi thú nhận: « Tôi từng nhầm hai chữ này. Tôi tưởng mình nhớ rõ rồi. » Rồi Tabito chỉ ra chỗ khác nhau — chậm, từng nét một. Kappa nghiêng đầu, đĩa nước vẫn đầy, không một giọt tràn. Nó tách hai chữ ra, đặt mỗi chữ về đúng bờ của nó, rồi trao mảnh âm thứ hai — nốt mềm, ngân dài, như tiếng nước vỗ mạn đò.",
      "moral": "Nhận mình đã nhầm là bước đầu tiên để nhớ cho đúng.",
      "duel": [
        "Chèo qua dòng chữ trôi",
        "Phân loại đúng những từ dễ nhầm lẫn trước khi nước trên đĩa Kappa cạn."
      ],
      "train": [
        "Vớt lại những chữ đã trôi",
        "Luyện từng chủ đề N4 — nhặt lại những từ bạn từng nhầm."
      ],
      "lose": "Kappa nghiêng đĩa, nước khẽ rung: “Còn nhầm bờ rồi.” Ôn lại rồi ra bến đò lần nữa."
    },
    "n3": {
      "name": "Tengu",
      "title": "Người đưa tin của gió",
      "place": "Rừng anh đào dưới cành Yggdrasil",
      "setup": "Giữa rừng anh đào có một cành khổng lồ thò ra khỏi sương — người phương Bắc nói đó là một nhánh của Yggdrasil, người phương Đông nói đó là cây thần của núi. Tengu ở đó, tự xưng là kẻ đưa tin giỏi nhất cõi: nó cưỡi gió mang lời qua hai bờ thung lũng. Nhưng từ khi tù và vỡ, gió chỉ còn chịu chở những câu trọn nghĩa; lời thừa lời vụn chạm vào gió là tan. Nó kiêu hãnh đến mức không chịu nhận mình đã mất giọng gió, và giữ mảnh âm thứ ba — nốt vọng — cho kẻ nào gửi được một câu sang bờ bên kia mà tiếng vọng quay lại nguyên vẹn.",
      "resolve": "Tabito thử một lần, lời rời rạc, và gió cuốn nó thành mảnh vụn bay tứ tung. Lần hai, lần ba — hoài công. Rồi Tabito ngồi xuống, nghĩ đến người đang đợi ở bến, nghĩ đến từng chữ mình đã học, và nói thật chậm một câu hoàn chỉnh, có chủ ngữ, có vị ngữ, có điều mình thật sự muốn nói. Gió ôm lấy câu ấy, băng qua thung lũng — và mang về một tiếng đáp từ bờ bên kia. Tengu xòe cánh, đứng sững: lần đầu tiên sau ba ngày, nó nghe thấy tiếng của một người xa lạ. Nó hạ cánh, cúi đầu, trao nốt thứ ba — trong như chuông gió.",
      "moral": "Lời có nghĩa thì gió cũng chịu chở.",
      "duel": [
        "Gửi một câu theo gió",
        "Đặt đúng một câu trọn nghĩa — để gió chở sang bờ bên kia trước khi hết giờ."
      ],
      "train": [
        "Tập nói cho có nghĩa",
        "Luyện từng chủ đề N3 — từ nối thành câu, câu nối thành ý."
      ],
      "lose": "Gió cuốn câu của bạn tan thành vụn, Tengu lắc đầu: “Chưa đủ nghĩa để chở.” Ôn lại rồi gửi lại."
    },
    "n2": {
      "name": "Oni",
      "title": "Kẻ nghe quá nhiều lời thuộc lòng",
      "place": "Mái đền cổ dưới trăng",
      "setup": "Mỗi mùa Setsubun, người ta ném đậu và hô vang “quỷ ra ngoài, phúc vào trong” — trơn tru, đúng nhịp, thuộc làu, chẳng ai thật sự nghĩ gì khi hô. Oni nghe câu ấy hàng trăm năm, đến mức biết phân biệt một lời thật với một lời học thuộc chỉ bằng nửa hơi thở. Khi trăng lên mái đền cổ, nó ngồi đó với chiếc chùy sắt, giữ mảnh âm thứ tư — nốt hay bị nhầm lẫn nhất, vì nó luôn được hát sai bằng một giọng rất đúng.",
      "resolve": "Oni hô lên một câu trả lời — đúng đến từng âm, mượt như lụa, không một chỗ vấp. Rồi hô thêm một câu nữa, cũng đúng như thế. Tabito nghe cả hai, rồi khẽ lắc đầu: « Tiếng nào hoàn hảo quá là tiếng của kẻ đã thuộc lòng. » Tabito chọn câu có một chút ngập ngừng — cái ngập ngừng nhỏ của kẻ vừa thật sự đi tìm câu trả lời. Oni sững lại, chùy trượt khỏi tay. Mấy trăm năm nay, nó nghe vô số lời đúng mà chưa từng nghe một lời thật. Nó trao nốt thứ tư, và lần đầu tiên, chỗ ngồi trên mái đền có thêm một người ngồi cạnh.",
      "moral": "Câu trả lời đáng tin nhất đôi khi là câu còn ngập ngừng.",
      "duel": [
        "Chọn thật giữa những lời trơn tru",
        "Oni hô nhiều câu nghe đều đúng — chọn câu thật sự đúng trước khi trăng lặn."
      ],
      "train": [
        "Tập nghe cho ra lời thật",
        "Luyện từng chủ đề N2 — phân biệt những từ rất gần nhau về nghĩa lẫn âm."
      ],
      "lose": "Oni khịt mũi, nghiêng đầu: “Ngươi chọn câu thuộc lòng rồi.” Ôn lại rồi lên mái đền."
    },
    "n1": {
      "name": "Rồng",
      "title": "Kẻ giữ mạch cầu",
      "place": "Bậc cuối của cầu gãy",
      "setup": "Dưới bậc cuối của cầu gãy, sương tụ lại quanh một thân hình dài đến mức không thấy đầu cũng chẳng thấy đuôi: Rồng. Người phương Bắc gọi nó là Níðhöggr và bảo nó gặm rễ Cây Thế Giới, nhưng thật ra thân nó chính là mạch rễ ngầm nối hai bờ — đầu nằm ở hang đá phương Đông, đầu kia chìm đáy hồ đen, còn đoạn giữa này nằm chống đỡ nhịp cầu. Ánh sáng ba ngày trước đã chảy ngược qua nó như lũ, và vết nứt chạy dọc cầu chính là vết nứt trên sống lưng nó. Nó giữ mảnh âm cuối cùng — nốt nặng nhất — bằng một thứ duy nhất: sự lặng thinh của kẻ đang đau mà chưa ai ngồi lại để hỏi.",
      "resolve": "Tabito không rút gì, không hô gì. Tabito đặt đèn xuống bậc đá, ngồi đối diện thân rồng, và im lặng — không phải im lặng của kẻ sợ, mà của kẻ đang lắng nghe. Suốt một đêm, hai bên không nói một chữ. Khi sương bắt đầu đổi màu, Rồng cất tiếng, khàn như gió trong hang sâu: « Đầu ta ở hang đá từng được một thiếu nữ múa cho bật cười. Đầu ta ở hồ đen từng đọc một cái danh cho kẻ áo choàng đen — hắn nghe hết, không nói một lời, và ta tưởng hắn chẳng còn gì. Nhưng sự im lặng của hắn không rỗng: nó giữ chỗ cho một thứ chưa về. Còn đoạn giữa này, ba ngày nay chỉ có đau, và chưa ai ngồi lại hỏi ta đau chỗ nào. Đêm nay, ngươi dạy ta cách nghe. » Nó trao mảnh âm thứ năm, và cùng với nó là một thứ nhẹ hơn nhiều: khoảng lặng giữa các nốt — thứ làm năm âm thành một khúc nhạc thay vì năm tiếng động.",
      "moral": "Khoảng lặng giữa các âm cũng là một âm.",
      "duel": [
        "Ngồi lại bên nhịp cầu đang đau",
        "Đối diện Rồng suốt đêm — nghe cho hết và đáp đúng trước khi sương đổi màu."
      ],
      "train": [
        "Học cách lặng nghe",
        "Luyện từng chủ đề N1 — nghe đến cuối câu rồi mới đáp."
      ],
      "lose": "Rồng khẽ siết quanh chân cầu, sương lặng như tờ. Ôn lại rồi quay lại bậc cầu cuối."
    }
  },
  "ending": [
    "Tabito đặt năm mảnh âm cạnh khoảng lặng, ghép vào miệng tù và gãy; tù và liền lại như chưa từng vỡ. Tabito thổi một hơi. Tiếng tù và vang qua hai bờ: nốt đầu như tiếng gõ cửa, nốt hai mềm như tiếng nước vỗ mạn đò, nốt ba trong như chuông gió, nốt bốn ngập ngừng mà thật, nốt năm nặng như thân rồng — và giữa các nốt, một khoảng lặng vừa đủ để nghe được nhau.",
    "Vết nứt trên cầu khép lại từ chân lên đỉnh. Bifröst hiện ra bảy sắc rồi chuyển dần thành nhịp cầu đỏ son trôi lơ lửng của Ame-no-Ukihashi. Dưới chân đồi, những lối làng quanh co trồi lên khỏi sương. Heimdallr, trên đỉnh cầu, ngẩng đầu — và lần đầu tiên sau trăm năm, ông nghe thấy. Ông không nói gì, chỉ gật đầu thật chậm.",
    "Chiếc đèn lồng của Tabito vẫn trống chữ. Nhưng bên trong, ánh sáng đã ấm hơn một chút, như ánh sáng của kẻ vừa đi xong con đường đầu tiên mà chưa cần đặt cho nó một cái tên riêng."
  ],
  "kyubi": {
    "title": "Hồ ly chín đuôi · Kẻ thắp đèn",
    "place": "Đỉnh núi cuối cùng của Fusō",
    "setup": [
      "Cầu đã nhớ lại mình, nhưng Tabito chưa vội xuống núi. Chiếc đèn lồng trong tay vẫn trắng, và có điều gì kéo Tabito lên đỉnh núi cuối cùng của Fusō, nơi sương chưa bao giờ tan, giữa tàn tro những ngôi đền cổ, chín chiếc đuôi đang khẽ lay.",
      "Đó là 九尾の狐 — Cửu Vĩ Hồ, con hồ ly sống qua một nghìn năm, nghe đủ mọi lời thề và nhớ từng lời thất hứa. Nó nhìn chiếc đèn rất lâu, rồi nhìn Tabito.",
      {
        "q": "« Ngươi mang cái tên của mọi lữ khách từng qua cầu, nên ta chẳng có lời thề riêng nào để nhớ về ngươi. Hiếm thật. Vậy ta sẽ nhớ điều ngươi sắp làm. »"
      }
    ],
    "resolve": [
      "Cửu Vĩ Hồ rũ một chiếc đuôi, bứt ra một đốm lửa xanh nhỏ như hơi thở rồi thả vào chiếc đèn lồng. Giấy đèn không cháy — nó chỉ ngả sang sắc xanh dịu, như mặt hồ trước lúc bình minh, và một dáng hồ ly bé xíu thoáng hiện trong ánh sáng, cuộn mình ngủ ở đáy đèn.",
      {
        "q": "« Chín đuôi ta để lại trên núi, một đuôi ta gửi vào đèn. Đèn sẽ sáng thêm mỗi lần ngươi học thêm một lời cũ. Còn trang giấy ấy, cứ để trắng — một cái tên chung vẫn có thể dẫn tới một con đường riêng. »"
      },
      "Tabito cúi đầu thật sâu. Từ ngày ấy, mỗi lần Tabito thuộc thêm một chữ, ngọn lửa nhỏ trong đèn lại sáng thêm một chút — như một con đường đang tự nhớ lấy chính mình."
    ],
    "moral": "Một cái tên chung vẫn có thể dẫn tới một con đường riêng."
  },
  "finale": {
    "resolve": [
      "Ngoài câu chuyện, Ryosuke gửi đến bạn lời nhắn:",
      {
        "q": "Cảm ơn bạn đã ghé qua và đi hết hành trình này dưới cái tên chung của một lữ khách, khi chưa có tên riêng trong cuốn sổ nào. Cái tên chung không phải là thiếu sót — nhiều khi đó chỉ là chỗ chờ của một cái tên riêng, hoặc một con đường chưa đi đủ xa. Hy vọng những chữ bạn học hôm nay sẽ ở lại, và ngọn đèn của bạn sẽ sáng thêm mỗi ngày. Nếu bạn muốn có một nhánh truyện riêng mang đúng tên mình, cứ nhắn cho mình nhé. Chúc bạn học vui và đi thật xa. :)"
      }
    ]
  },
  "yokai": {
    "title": "Bốn người trực đêm của cầu gãy",
    "tagline": "Khi cầu còn nứt, bốn yêu quái ở lại gác đêm bên bờ — mỗi kẻ giữ một việc nhỏ mà không ai còn nhớ để cảm ơn.",
    "intro": [
      "Dưới chân núi, nơi con đường đã bắt đầu nhớ lại mình, bốn đốm sáng khác màu lập lòe trong sương. Chúng không canh cầu, cũng không canh âm. Chúng chỉ ở lại — bốn người trực đêm của một bến đã quá lâu không có thuyền.",
      {
        "q": "« Đừng hỏi chúng cần gì. Hãy hỏi chúng đã chờ ai. Chờ lâu thì thành thói quen; thói quen lâu thì thành một món nợ không ai nhớ. »"
      },
      "Tabito không vội. Tabito nâng đèn lên, đủ để bốn đốm sáng nhận ra mình không phải kẻ lạ — rồi bước vào sương."
    ],
    "monsters": {
      "rokurokubi": {
        "title": "Người ngóng thuyền về",
        "place": "Chòi gác đầu bến",
        "setup": [
          "Mỗi đêm, cổ của bà gác bến dài ra như sợi dây neo, vươn qua mặt nước tối để đếm những cánh buồm không bao giờ về. Đó là Rokurokubi — kẻ vươn cổ chờ suốt mùa này sang mùa khác.",
          "Bà không hỏi ai đi, không hỏi ai ở. Bà chỉ đếm — và đêm nào cũng đếm thiếu một chiếc."
        ],
        "resolve": [
          "Tabito ngồi xuống cạnh bà, không nói gì về thuyền. Chỉ đợi tới khi cổ bà vươn dài hết cỡ, rồi nói khẽ, hướng ra bóng tối: « Tôi về rồi. » Bà sững lại.",
          "« Thuyền nào cũng cần một người đáp ‘mừng về nhà’, » Tabito nói. Bà há miệng, nói thử một lần, rồi hai lần. Cổ bà từ từ co về, vì bà không còn phải vươn đi tìm — chỉ cần ngồi yên đợi tiếng gọi quay về. Bà đóng dấu lên góc ô cửa chòi, rồi mỉm cười lần đầu sau rất nhiều đêm."
        ],
        "moral": "Lời ‘tôi về rồi’ cần một người đáp ‘mừng về nhà’ để chuyến đi trọn vẹn."
      },
      "jorogumo": {
        "title": "Người dệt bản đồ",
        "place": "Khung cửi dưới mái hiên cầu",
        "setup": [
          "Nàng nhện không giăng tơ để bắt mồi nữa. Từ khi cầu nứt, nàng dệt bản đồ: mỗi sợi tơ là một con đường, mỗi nút là một ngã ba. Đó là Jorōgumo — nhện hóa mỹ nhân, giờ là kẻ dệt đường.",
          "Nàng dệt không ngừng, vì tin rằng một bản đồ chỉ cần hoàn hảo một lần là đủ cho cả ngàn kẻ lạc. Nàng chỉ chưa dám dệt đoạn cuối."
        ],
        "resolve": [
          "Tabito ngắm tấm bản đồ rất lâu, khen từng nút thắt, từng ngã rẽ. Rồi chỉ vào đoạn tơ cuối còn trơ một đầu lơ lửng, hỏi: « Sợi này dẫn tới đâu? » Nàng nhện im lặng thật lâu. « Ta chưa biết. Ta sợ dệt sai. »",
          "« Vậy hãy để ngỏ, » Tabito nói. « Một con đường tốt luôn chừa một sợi cho người đi sau nối tiếp. » Nàng nhìn đầu tơ, rồi cười khẽ, buộc nó vào một nút lỏng. Đoạn tơ ấy lập tức sáng lên như mạch nước, và dấu son in giữa những sợi còn run."
        ],
        "moral": "Một con đường tốt luôn chừa một sợi cho người đi sau."
      },
      "aoandon": {
        "title": "Ngọn đèn giữ sổ danh",
        "place": "Sảnh sổ danh bên bến",
        "setup": [
          "Trong sảnh nhỏ bên bến, một ngọn đèn giấy xanh treo giữa không trung, và dưới nó là cuốn sổ ghi tên mọi kẻ từng qua cầu. Đó là Ao-andon — quỷ nữ sừng cong, răng nhuộm đen, người giữ sổ.",
          "Người ta ghi vội, ghi bịa, ghi tên người khác. Ít ai dám ghi đúng thứ mình thật sự là."
        ],
        "resolve": [
          "« Tên? » bà hỏi, bút lông đã chấm mực. « Tabito. » Bà nhướng mày: « Tên ấy ta đã ghi cho cả ngàn kẻ rồi. » Tabito gật đầu: « Vậy cứ ghi đúng như thế — rồi chừa lại một dòng bên cạnh. Tên ấy là chỗ mượn tạm, chưa phải chỗ ở. »",
          "Bà quỷ nữ im lặng thật lâu. Rồi bà ghi một chữ ‘Tabito’ nhỏ xíu, chừa lại cả dòng trống phía sau, và ngọn đèn xanh chuyển sang vàng ấm. Bà đóng dấu bên cạnh dòng ấy — không phải bên cạnh một cái tên riêng, mà bên cạnh một lời hứa sẽ có."
        ],
        "moral": "Một chỗ trống chừa đúng còn quý hơn một cái tên ghi vội."
      },
      "karakasaobake": {
        "title": "Chiếc ô giữ chỗ cho người lạ",
        "place": "Mái hiên chờ mưa cuối bến",
        "setup": [
          "Chiếc ô giấy bị bỏ lại sau trăm năm đã thành tsukumogami — một mắt, một chân, cái lưỡi dài thè ra. Đó là Karakasa-obake. Nó đứng ở cuối bến để che mưa cho những kẻ lạ, dù hiếm có ai dừng lại.",
          "Cơn mưa nào cũng từng dạy nó một điều. Nhưng từ khi cầu nứt, không còn ai qua đây để nghe."
        ],
        "resolve": [
          "Mưa lất phất. Chiếc ô nhảy ra, thè lưỡi, chờ Tabito giật mình. Tabito không giật mình; chỉ mỉm cười và nói: « Đường xa có bạn thì ngắn lại, đời có tình thì ấm lên. »",
          "Chiếc ô đứng sững, rồi xếp mình, nhảy lò cò lại gần, đặt dấu xuống nền đá. Nó đi cùng Tabito thêm một đoạn dốc, cán ô rung nhẹ như người vừa tìm được một người bạn đồng hành."
        ],
        "moral": "Đường xa có bạn đồng hành thì ngắn lại."
      }
    }
  },
  "hak": {
    "title": "Kẻ chờ câu hỏi kế tiếp",
    "place": "Tháp mười tầng trong mây",
    "setup": [
      "Tương truyền Bạch Trạch mình rồng, mặt người, sáu mắt, thuộc tên mười một nghìn năm trăm loài yêu quái. Như ba nàng Norn bên giếng Urðr, ông chỉ nhận một câu hỏi mỗi tầng; hỏi trùng hay hỏi vội thì tầng kế khóa. Chưa ai qua quá tầng ba, vì ai cũng hỏi điều mình đã định mà chẳng nghe câu đáp."
    ],
    "resolve": [
      "Tabito hỏi một câu nhỏ ở tầng một, nghe đáp xong mới nghĩ câu tầng hai, rồi câu tầng ba mọc ra từ lời đáp ấy. Mười câu nối nhau như mười bậc thang. Đến đỉnh, Bạch Trạch cười khẽ: « Ta đáp suốt ngàn năm, lần đầu có kẻ nghe ta đáp. » Ông đặt dấu lên đèn lồng."
    ],
    "moral": "Câu hỏi hay là câu mọc ra từ câu trả lời trước."
  },
  "nue": {
    "title": "Tiếng kêu trên mái điện",
    "place": "Mái điện cổ dưới mây đen",
    "setup": [
      "Tương truyền Nue mình khỉ, thân tanuki, chân hổ, đuôi rắn; đêm đêm nó kêu như chim hét trên mái điện cổ, người nghe bảo là điềm gở. Chưa ai gọi trọn tên nó: thấy phần nào gọi phần ấy rồi giương cung, như Chimera bị Bellerophon bắn từ trời. Nó chỉ cho qua kẻ nào dám hỏi điều chưa ai hỏi: tiếng kêu ấy báo điềm, hay đang gọi ai?"
    ],
    "resolve": [
      "Tabito chẳng mang cung, chỉ thắp đèn đặt lên mái điện cho nó thấy mình không giấu gì. « Ngươi kêu để báo điềm, hay để gọi kẻ lạc đường? » Nue ngẩn ra: ngàn năm nay ai cũng nghe điềm gở, chưa ai hỏi. « Tôi cũng chỉ có một cái tên chung cho kẻ chưa biết rõ, » Tabito nói. Nue kêu lần nữa, nghe như người đang gọi ai về, rồi đặt dấu lên góc đèn."
    ],
    "moral": "Tiếng bị gọi là điềm gở có khi chỉ là một lời gọi chưa ai đáp."
  }
};
