/* =====================================================================
   story/Hoshino.js — CỐT TRUYỆN CỦA NHÂN VẬT "Hoshino"
   Tên file = tên đăng nhập (web tự quét: có file là gõ tên đó vào được ngay).
   Dòng window.FUSOU_STORY["..."] bên dưới phải trùng tên file (đúng hoa/thường).
   ---------------------------------------------------------------------
   Cấu trúc các trường giống Airi.js / Ryosuke.js / Client.js (xem _template.js).
   Ghi chú: nhân vật được viết trung tính về giới (không dùng "nàng"/"hắn"),
   chỉ gọi bằng tên "Hoshino". Muốn đổi, tìm/thay trong file này.
   Quái vật giữ nhất quán với các tuyến khác: Tanuki, Kappa, Tengu, Oni, Rồng.
   ===================================================================== */
window.FUSOU_STORY=window.FUSOU_STORY||{};
window.FUSOU_STORY["Hoshino"]={
  "title": "Hoshino · Kẻ giữ những chấm sao",
  "tagline": "Hướng về Fusō — nơi bầu trời mất những đường nối giữa các vì sao, và một người ít nói chưa dám kẻ nét đầu tiên.",
  "greet": "Chào {name}, cứ thong thả nhé ~",
  "sub": "ようこそ、星野さん。ゆっくり、自分のペースで行こう。",
  "intro": [
    "Sau ba năm không mặt trời, ánh sáng trở về Fusō và phương Bắc, nhưng bầu trời đêm thức dậy trong một dáng hình lạ: sao vẫn còn đó, mà những đường nối giữa chúng thì mất. Truyền rằng thuở khai thiên, chư thần phương Bắc nhặt những tia lửa rơi từ xứ Muspelheim mà ghim lên vòm trời; còn ở phương Đông, người ta kể có một dòng sông sao mà đôi tình nhân chỉ gặp nhau mỗi năm một đêm. Hai câu chuyện ấy sống được là nhờ có người nối các vì sao thành hình, thành tên, thành hướng đi. Giờ các hình tan rã như tuyết gặp nắng: thuyền ra khơi ngẩng lên chỉ thấy muôn chấm sáng ngang nhau, chẳng biết chấm nào là chấm của mình.",
    "Ở một bến nhỏ dưới chân dốc có một người ít nói tên là Hoshino. Hoshino không cao giọng giữa chợ, không đứng đầu hàng người đi tiễn, và thường là kẻ cuối cùng được hỏi ý kiến — rồi lặng lẽ thở ra nhẹ nhõm khi không ai hỏi nữa. Nhưng Hoshino nghe giỏi: hiểu phần lớn lời của lái buôn đường xa, lời nào quá khó thì nghe thêm một lần rồi gật. Hoshino có một cuốn sổ nhỏ, mỗi đêm ngồi chép vị trí các vì sao bằng những chấm than chì, và chưa từng nối chấm nào với chấm nào — vì mỗi đường kẻ giống như một lời tuyên bố, mà Hoshino chưa biết mình muốn tuyên bố điều gì.",
    "Có một điều Hoshino muốn mà chưa dám gọi tên: sang bờ Đông, nơi mặt trời mọc, ngồi trong một giảng đường bên kia biển để học. Muốn, nhưng không biết học gì, muốn ở hay muốn đi, hay chỉ muốn thoát khỏi câu hỏi “rồi con sẽ làm gì?” mà các bậc trưởng lão nhắc lại mỗi mùa. Người ta bảo: chọn đi, chậm là mất. Hoshino cúi đầu, và đêm ấy lại thêm một chấm vào sổ.",
    "Rồi bà Verðandi — một trong ba Norn dệt vận mệnh, người dệt phần “đang đến” nằm giữa quá khứ và tương lai — ghé bến vào một đêm không trăng. Bà đặt vào tay Hoshino một thỏi than chì và một chiếc tẩy nhỏ, giọng khàn như sợi chỉ cũ:",
    {
      "q": "« Ta dệt vận người đã ngàn năm mà chưa dệt xong tấm nào. Không ai bắt ngươi biết mình sẽ là gì trước khi bước. Năm kẻ giữ đường nắm năm đoạn của bầu trời — người đời gọi chúng là ác linh, nhưng chúng chỉ là những kẻ đã quá lâu không ai chịu ngồi lại. Qua được mỗi kẻ, ngươi nối được một đường. Chỉ một đường mỗi lần, và nét nào cũng có thể xoá. »"
    },
    "Trên cột đá đầu bến, Hoshino thấy một chữ khắc nông: Ryosuke — nét còn run, nằm cạnh một chiếc lông quạ đen. Người ở bến bảo đó là dấu của một bóng áo choàng từng ghé qua, đi mà không để lại bước chân, và chẳng ai biết hắn tìm gì. Hoshino đứng nhìn rất lâu, rồi chấm vào sổ một chấm nhỏ cạnh chữ ấy, vẫn không nối với chấm nào. Sau đó Hoshino buộc sổ vào thắt lưng, bước xuống thuyền — một mình, nhưng lần đầu tiên không phải vì không ai hỏi cùng đi."
  ],
  "bosses": {
    "n5": {
      "name": "Tanuki",
      "title": "Kẻ bán bản đồ sao",
      "place": "Chợ đêm bến Vindvik",
      "setup": "Giữa chợ đêm, Tanuki trải một hàng toàn lá: mỗi chiếc lá là một tấm bản đồ sao, nối các vì sao thành một hình và đề ba chữ “Đường đúng nhất”. Giá chỉ là một cái gật đầu — nhưng kẻ nào đã gật thì lá dính chặt vào lòng bàn tay, đường ấy thành đường của mình, bỏ không được. Nó giữ dấu son đầu tiên, và chỉ trao cho kẻ nào cầm được lá mà lá không dính.",
      "resolve": "Tanuki giục: « Nhanh lên, hàng sắp hết! » Hoshino không gật. Từng tấm lá được giơ lên soi dưới sao thật, và Hoshino nhận ra mọi hình đều nối chung một vì sao ở sai chỗ — kiểu sai của kẻ vẽ theo trí nhớ, chưa từng ngẩng đầu. Muốn chỉ ra, Hoshino phải nói to giữa chợ đông, điều khó hơn mọi cuộc mặc cả; giọng run, nhưng đủ nghe: « Vì sao này không ở đó. » Cả chợ quay lại. Tanuki đỏ mặt đến tận tai lá, dúi dấu son vào tay Hoshino rồi vội lật úp cả hàng.",
      "moral": "Tấm bản đồ nào bắt ngươi gật đầu ngay thì chưa phải bản đồ.",
      "duel": [
        "Soi lá dưới ánh sao thật",
        "Phân biệt điều đúng với điều chỉ nghe có vẻ đúng — vượt qua cả chủ đề N5 trước khi hết giờ."
      ],
      "train": [
        "Học cách ngẩng đầu nhìn sao",
        "Luyện từng chủ đề N5 — nền chắc rồi thì lá nào cũng khó dính."
      ],
      "lose": "Chiếc lá dính vào lòng bàn tay, Tanuki cười khúc khích: “Gật rồi nhé!” Ôn lại rồi soi lại từng tấm."
    },
    "n4": {
      "name": "Kappa",
      "title": "Người chèo đò sông sao",
      "place": "Bến đò sông sao",
      "setup": "Ngang qua bầu trời đêm có một dòng sông toàn sao: người phương Bắc gọi là Đường Mùa Đông, người phương Đông gọi là Amanogawa. Kappa chèo đò ở đó với đúng một luật: lên đò phải nói trước sẽ sang bờ nào. Từ khi các hình sao tan, khách nào cũng lên đò khi chưa chọn được bờ, giữa sông đổi ý rồi đổ lỗi cho người chèo. Nó giữ dấu son thứ hai, và chỉ muốn một lần được ai đó đối đãi tử tế.",
      "resolve": "« Sang bờ nào? » Hoshino đứng yên rất lâu, rồi đáp thật: « Tôi chưa biết. Nhưng tôi không đổ lỗi cho ông đâu. » Kappa sững người: chưa ai từng nói câu thứ hai ấy. Hoshino hỏi tiếp: « Đêm nào ông cũng chèo suốt, có mỏi không? » rồi ngồi xuống mạn đò, cầm một mái chèo phụ. Hai bên chèo ra giữa dòng; tay Hoshino rộp lên, và sang bờ muộn hơn người khác cả một đêm. Chỉ khi nước hai bên mạn đều lặng, Hoshino mới thấy cả hai bờ cùng lúc, và chọn một bờ — cho đêm ấy, chưa phải cho mãi mãi. Kappa nghiêng đĩa, không đổ giọt nào, đưa dấu son cùng một quả dưa.",
      "moral": "Đứng giữa dòng mới thấy được cả hai bờ.",
      "duel": [
        "Chèo ra giữa sông",
        "Chọn đúng đáp án cho từng câu hỏi bờ-nào trước khi nước trên đĩa Kappa cạn."
      ],
      "train": [
        "Học cách nói “tôi chưa biết”",
        "Luyện từng chủ đề N4 — biết rõ chỗ mình còn hổng để hỏi cho đúng."
      ],
      "lose": "Kappa nghiêng đĩa, nước khẽ rung: “Chưa chọn bờ thì đò chưa rời.” Ôn lại rồi ra bến lần nữa."
    },
    "n3": {
      "name": "Tengu",
      "title": "Chủ vách đá không chịu đợi",
      "place": "Vách đá đón gió",
      "setup": "Tengu giữ một vách đá đón gió và tin rằng chỉ kẻ dám nhảy mới đáng được kính trọng. Ai tới đây cũng phải bước ra mép đá, buông mình vào ngọn gió đầu tiên thổi tới và cưỡi nó sang bên kia thung lũng. Kẻ ngần ngừ, nó gọi là kẻ nhát rồi quay lưng. Nó giữ dấu son thứ ba, và muốn một lần được người khác nhìn mình bằng sự kính trọng thay vì sợ hãi.",
      "resolve": "Gió đầu tiên thổi tới; cả đàn chim khác bay theo. Hoshino không nhúc nhích. Tengu cười nhạt: « Sợ rồi? » Hoshino chỉ buộc một mảnh giấy mỏng nơi mép đá, ngồi nhìn nó rung suốt đêm, không nói một lời cãi lại. Tengu bực dọc, rồi dần im theo. Gần sáng gió đổi hướng, mảnh giấy nằm xuôi về phía Đông; Hoshino đứng dậy, cúi chào một lần, rồi nhảy, bay thẳng qua thung lũng. Cái giá là đã lỡ ngọn gió đầu cùng cả đàn, đi một mình giữa trời. Tengu nhìn theo, lần đầu thấy mình phải học lại cách chờ, và đặt dấu son xuống vách đá.",
      "moral": "Chờ đúng ngọn gió không phải là sợ bay.",
      "duel": [
        "Đọc gió trước khi nhảy",
        "Chọn đúng đáp án trước khi gió đổi chiều — không vội, nhưng cũng đừng chậm quá."
      ],
      "train": [
        "Học cách đọc gió",
        "Luyện từng chủ đề N3 — hiểu đủ ý rồi mới quyết định đáp."
      ],
      "lose": "Gió đổi hướng, mảnh giấy lật ngược. Tengu khoanh tay: “Chưa đúng gió.” Ôn lại rồi quay lại mép đá."
    },
    "n2": {
      "name": "Oni",
      "title": "Kẻ ngồi ngoài cửa mọi nhà",
      "place": "Thềm đá cuối làng",
      "setup": "Oni từng gõ cửa từng nhà trong làng xin một chỗ ấm để ngồi, và nhà nào cũng đóng sập cửa. Giờ nó ngồi trên thềm đá cuối làng, chùy sắt đặt xuống bên cạnh, hỏi mỗi kẻ đi qua một câu: « Ngươi dám ngồi cạnh ta không? » Ai ngồi cũng nói thật nhiều để lấp nỗi sợ, và nó nhận ra nỗi sợ ấy ngay từ lời đầu. Nó giữ dấu son thứ tư, chỉ để chờ một người chịu ở lại.",
      "resolve": "Hoshino ngồi xuống, cách một gang tay, không nói gì. Oni chờ lời trấn an, lời xin lỗi, lời nào cũng được; không có gì đến. Đêm xuống lạnh, Hoshino chia đôi chiếc áo ấm, đặt một nửa cạnh nó rồi chịu rét đến sáng. Sao dịch qua mái nhà, hai bên vẫn im lặng, và Oni nhận ra lần đầu im lặng không đồng nghĩa với bị bỏ rơi. « Sao ngươi không nói gì? » nó khàn giọng. « Ngồi cạnh là đủ rồi. » Oni nghẹn lại, đặt dấu son thứ tư lên nửa chiếc áo, như kẻ cuối cùng trong làng cũng có một chỗ ngồi.",
      "moral": "Có những chỗ đứng chỉ cần một người chịu ngồi cạnh.",
      "duel": [
        "Ngồi cạnh Oni đến sáng",
        "Đáp đúng giữa những câu hỏi dồn dập — không cần nói nhiều, chỉ cần đúng — trước khi hết giờ."
      ],
      "train": [
        "Học cách ngồi yên",
        "Luyện từng chủ đề N2 — một từ chọn đúng nặng hơn mười lời lấp chỗ trống."
      ],
      "lose": "Oni quay đi, chùy nằm im trên đá: “Ngươi chưa ngồi đủ lâu.” Ôn lại rồi quay lại thềm đá."
    },
    "n1": {
      "name": "Rồng",
      "title": "Kẻ giữ ngã ba cuối của bầu trời",
      "place": "Ngã ba cuối của sông sao",
      "setup": "Ở ngã ba cuối của sông sao, nơi mọi đường nối giữa các vì sao phải được kẻ nốt, Rồng quấn mình quanh trụ trời giữ cánh cửa; thân nó vốn là mạch rễ ngầm nối hai bờ thế giới. Nó đã thấy hàng ngàn kẻ đến đây: người vội kẻ một đường rồi hối hận cả đời, người không dám kẻ nên để cả bầu trời tối. Nó chỉ mở cửa cho người nào kẻ được một nét mà không tuyên bố đó là nét cuối cùng, và giữ dấu son cuối chờ người hiểu điều ấy.",
      "resolve": "Hoshino lấy thỏi than chì của Verðandi, nối hai vì sao gần nhất bằng một nét mỏng, nói rất nhỏ: « Đường này của hôm nay. » Rồng gầm khẽ: « Nét chì xoá được. Ngươi tin gì ở nó? » « Xoá được nên tôi mới dám vẽ. » Rồng im thật lâu; ở hồ đen, một đầu của nó từng đọc một cái danh cho kẻ áo choàng đen tên Ryosuke, hắn bỏ đi không để lại đường nào trên giấy, chỉ có dấu chân — mà dấu chân cũng là một nét. Hoshino gật, rồi đặt chiếc tẩy xuống trước mặt nó: « Ông giữ giùm. Muốn xoá nét nào, tôi sẽ quay lại xin — để mỗi lần đổi ý là một lần đã nghĩ kỹ. » Rồng đặt dấu son cuối cùng lên nét chì ấy.",
      "moral": "Một nét chì mỏng vẫn là một con đường.",
      "duel": [
        "Kẻ nốt đường cuối cùng",
        "Đáp từng câu nhiều tầng nghĩa, rồi chọn nét nối — trước khi hết giờ."
      ],
      "train": [
        "Cầm chì trước ngã ba",
        "Luyện từng chủ đề N1 — mỗi lựa chọn từ là một nét chì thật."
      ],
      "lose": "Rồng khẽ siết quanh trụ trời, các vì sao vẫn rời rạc. Ôn lại rồi quay lại ngã ba."
    }
  },
  "ending": [
    "Năm nét chì nối nhau, và bầu trời đêm đáp lại bằng một tiếng thở rất nhẹ: các vì sao trên đầu tự nghiêng về phía nhau, kéo thành một hình chưa từng có trong sách nào — không phải mãnh thú, không phải con thuyền, chỉ là một con đường vòng quanh năm điểm sáng, mỗi điểm vẫn còn thấy rõ chỗ có thể rẽ.",
    "Khi trở về bến, Hoshino thấy thuyền nào nhìn lên cũng biết chấm nào là chấm của mình. Hoshino không đặt tên cho hình mới. Chỉ mở sổ: trang đầu vẫn đầy chấm, còn trang sau, lần đầu tiên, có năm nét. Rồi Hoshino đến bên cột đá, nối chấm nhỏ cạnh chữ Ryosuke với một vì sao ở phương Đông bằng một vệt chì thật mảnh, rồi quay đi mà không ngoái lại.",
    "Hoshino vẫn chưa trả lời được câu hỏi của các bậc trưởng lão, và không còn thấy cần trả lời trong một đêm. Nét chì thứ sáu — nét của ngày mai — vẫn nằm trên đầu thỏi than, chờ."
  ],
  "kyubi": {
    "title": "Hồ ly chín đuôi · Kẻ giữ la bàn",
    "place": "Đỉnh núi cuối cùng của Fusō",
    "setup": [
      "Sao đã có đường nối, nhưng Hoshino chưa vội xuống núi. Cuốn sổ vẫn còn một trang trắng ở cuối, và có một hướng mà mắt Hoshino cứ ngoái lại mãi từ lúc rời bến: hướng Đông. Chân lần theo hướng ấy, tới đỉnh núi cuối cùng của Fusō, nơi sương chưa từng tan, chín chiếc đuôi đang khẽ lay giữa tàn tro những ngôi đền cổ.",
      "Đó là Cửu Vĩ Hồ, con hồ ly đã sống qua một nghìn năm, nghe đủ mọi lời thề và nhớ từng lời thất hứa. Nó nhìn Hoshino, rồi nhìn cuốn sổ có năm nét chì và vô số chấm chưa nối.",
      {
        "q": "« Chín đuôi ta là chín ngã rẽ ta chưa từng chọn, và ta vẫn là ta. Ngươi cũng chưa chọn xong mà đã đi tới tận đây. Người ta gọi đó là lạc. Ta gọi đó là đang đi. »"
      }
    ],
    "resolve": [
      "Cửu Vĩ Hồ rũ một chiếc đuôi, bứt ra đốm lửa xanh nhỏ như hơi thở rồi thả vào cuốn sổ. Lửa không đốt giấy; nó chìm xuống thành một chiếc kim bé xíu, xanh như sương, xoay mấy vòng rồi dừng lại — không chỉ về phương Bắc, mà chỉ đúng hướng Hoshino hay ngoái lại.",
      {
        "q": "« Kim này không biết đường nào đúng. Nó chỉ biết ngươi hay nhìn đâu khi tưởng không ai thấy. Cứ coi đó là một lời gợi ý, đừng coi là mệnh lệnh. »"
      },
      "Hoshino cúi đầu thật sâu. Từ ngày ấy, mỗi lần Hoshino học thêm một lời cũ, chiếc kim lại sáng lên một chút — như một ngã rẽ đang tự lộ ra cho kẻ chịu đi chậm."
    ],
    "moral": "Hướng mắt cứ ngoái lại mãi là la bàn, không phải điểm yếu."
  },
  "finale": {
    "resolve": [
      "Ngoài câu chuyện, Ryosuke gửi đến bạn lời nhắn:",
      {
        "q": "Hoshino nghĩa là cánh đồng sao. Bạn không cần nối hết các vì sao trong một đêm. Ít nói không phải là thiếu quyết đoán, và chưa biết mình sẽ học gì cũng chưa phải là lạc — nhiều người chỉ biết đường sau khi đã đi được một đoạn. Bạn đang ở quãng N3: đủ để hiểu nhiều thứ, chưa đủ để thấy mọi thứ dễ dàng, đúng chỗ để bước tiếp từng nét chì một. Nếu mai sau bạn sang bờ Đông, mong bạn tìm thấy ở đó một chỗ ngồi hợp với mình. Cứ đi chậm cũng được, miễn là còn đi. Nếu muốn nhánh truyện này sửa lại cho đúng hơn với bạn, cứ nhắn cho mình nhé. :)"
      }
    ]
  },
  "yokai": {
    "title": "Bốn người ngồi lại bên đường sao",
    "tagline": "Bên con đường sao mới nối, bốn yêu quái từng hầu cận hồ ly chín đuôi vẫn ngồi chờ một người chịu đi chậm đủ để nghe chúng.",
    "intro": [
      "Trên đường xuống núi, Hoshino nhận ra nét chì mỏng của mình chạy qua một khung cửi, một gian phòng nhiều đèn, một quán trọ và một cổng đền đổ nát. Ở mỗi nơi có một đốm sáng khác màu lập lòe.",
      {
        "q": "« Tứ yêu — bốn kẻ từng hầu cận hồ ly, nay ngồi lại bên đường sao. Chúng không chặn ai. Chúng chỉ chờ người chịu đi chậm đủ để nghe. »"
      },
      "Hoshino không vội. Với kẻ quen đi chậm, đây là lần đầu chậm trở thành một lợi thế."
    ],
    "monsters": {
      "rokurokubi": {
        "title": "Bà chủ trọ muốn được nghe",
        "place": "Quán trọ lưng chừng núi",
        "setup": [
          "Ban ngày bà chủ quán rót trà không đổ một giọt; ban đêm cổ bà dài ra như sợi thừng, luồn qua vách giấy nghe khách nói mớ. Đó là Rokurokubi — kẻ đã nghe chuyện của người khác suốt hai trăm năm, mà chưa ai kể cho bà nghe một chuyện.",
          "Bà chỉ cho trọ kẻ nào chịu kể, và kể thật, chứ không đọc thuộc."
        ],
        "resolve": [
          "Hoshino không giỏi kể. Hoshino mở cuốn sổ, chỉ vào từng chấm than chì và đọc một câu nhỏ cho mỗi chấm: « Sao này tôi thấy đêm trước khi rời nhà. Sao này tôi thấy lúc chưa biết mình muốn đi đâu. » Giọng ngập ngừng, có chỗ phải dừng để tìm chữ.",
          "Cổ bà từ từ co lại. Hai trăm năm bà nghe toàn chuyện trơn tru soạn sẵn; đêm nay lần đầu bà nghe những chuyện nhỏ đang tự tìm đường ra khỏi miệng người kể. Bà đóng dấu, và rót thêm cho Hoshino một chén trà."
        ],
        "moral": "Chuyện nhỏ kể thật thà cũng đủ làm một đêm không ngủ."
      },
      "jorogumo": {
        "title": "Người dệt lưới giữ sương",
        "place": "Khung cửi dưới mái hiên đá",
        "setup": [
          "Nàng nhện dệt một tấm lưới lớn giữa hai cột đá, mỗi sáng sương đọng lại trên tơ thành trăm giọt. Đó là Jorogumo — nhện hóa mỹ nhân, dệt như ba nàng Norn dệt vận người.",
          "Nàng muốn được ai đó khen tấm lưới, nhưng không tin lời khen nào nói ra quá nhanh. Kẻ khen vội bị tơ siết, vì lời khen ấy chưa nhìn vào đâu cả."
        ],
        "resolve": [
          "Hoshino không khen ngay. Hoshino ngồi xuống, ngẩng lên, chỉ nói tên: « Sao này ở giọt thứ ba. Sao kia ở giọt thứ mười một. » Giọt nào cũng giữ đúng một điểm sáng của bầu trời vừa nối — nàng nhện chưa từng biết lưới của mình đang giữ cả bầu trời trong từng giọt sương.",
          "Nàng run tay. « Ngươi nhớ hết sao? » « Tôi chép chúng mỗi đêm. » Hoshino xé một trang sổ, vẽ lại những hình vừa nhìn, tặng nàng treo lên khung cửi — cái giá là một trang sổ quý. Nàng đóng dấu."
        ],
        "moral": "Lời khen chậm mà đúng chỗ nặng hơn lời khen nhanh."
      },
      "aoandon": {
        "title": "Ngọn đèn thứ một trăm",
        "place": "Gian phòng trăm ngọn đèn",
        "setup": [
          "Người ta kể trăm chuyện ma, mỗi chuyện tắt một ngọn đèn. Ngọn đèn giấy xanh thứ một trăm là ngọn không ai dám tắt, vì kẻ đứng sau nó sẽ bước ra: Ao-andon, quỷ nữ sừng cong, răng nhuộm đen.",
          "Bà chỉ muốn một điều: kể trọn câu chuyện thứ một trăm cho một người nghe tới chữ cuối. Ai cũng bỏ giữa chừng, vì chuyện ấy kể về một kẻ mở hết cánh cửa này đến cánh cửa khác mà chưa bao giờ bước qua cửa nào."
        ],
        "resolve": [
          "Hoshino ngồi xuống, không ngắt lời, nghe bà kể hết — kể dài, kể chậm, kể cả những chỗ bà lặp lại. Đến chỗ kẻ trong chuyện đứng trước cánh cửa nhỏ nhất, bà ngập ngừng, như chưa tìm được lời kết.",
          "« Người ấy có bước qua cánh cửa nhỏ nhất không? » Hoshino hỏi khẽ, không phải để dạy bà, chỉ để biết. Bà quỷ nữ đứng sững: « Chuyện của ta trăm năm nay chưa có đoạn ấy. » « Vậy thì thêm vào. » Ngọn đèn xanh chuyển sang vàng ấm, và bà đóng dấu."
        ],
        "moral": "Câu chuyện nào cũng có một cánh cửa nhỏ chờ được bước qua."
      },
      "karakasaobake": {
        "title": "Chiếc ô thích tiếng cười",
        "place": "Cổng đền đổ nát dưới mưa",
        "setup": [
          "Một chiếc ô giấy bị bỏ lại sau trăm năm đã thành yêu — một mắt, một chân, cái lưỡi dài thè ra. Đó là Karakasa-obake: nó nhảy ra dọa người ta chỉ để được nghe họ cười.",
          "Nhưng nó chỉ nhận ra tiếng cười khi đủ to, nên bỏ sót hầu hết những tiếng cười nhỏ trên đời."
        ],
        "resolve": [
          "Chiếc ô nhảy ra, thè lưỡi sát mặt Hoshino. Hoshino khẽ giật mình, rồi mím môi, đôi vai run run, không thành tiếng. Chiếc ô nghiêng đầu thất vọng: cười đâu? Hoshino chỉ vào chính đôi vai đang run.",
          "Chiếc ô nhìn rất lâu, rồi hiểu. Nó xoay một vòng, thử run cán ô y như đôi vai ấy. Mưa tạnh, hai bên cùng run rẩy cười không tiếng giữa cổng đền, rồi nó đóng dấu và nhảy lò cò theo Hoshino một đoạn dốc."
        ],
        "moral": "Tiếng cười nhỏ vẫn là tiếng cười."
      }
    }
  },
  "hak": {
    "title": "Kẻ biết tên của mọi con đường",
    "place": "Tháp mười tầng trong mây",
    "setup": [
      "Tương truyền Bạch Trạch mình rồng, mặt người, sáu mắt, thuộc tên mười một nghìn năm trăm loài yêu quái và tên mọi con đường dưới trời. Như giếng Mímir đòi một con mắt, ông chỉ nhận một câu hỏi mỗi tầng, và không bao giờ đáp câu “ta nên đi đường nào”."
    ],
    "resolve": [
      "Hoshino leo từng tầng, mỗi tầng hỏi một câu nhỏ: « Có ai chọn sai ngay lần đầu không? » « Gần như tất cả. » « Họ có quay lại không? » « Phần nhiều là có. » Đến tầng mười, Hoshino không hỏi về mình nữa: « Với ông, con đường nào là đẹp nhất? » Bạch Trạch lặng đi: ông đã đáp vạn câu về đường của người khác, chưa ai hỏi ông thích đường nào. « Đường đi chậm mà không bỏ dở. » Ông đặt dấu lên cuốn sổ."
    ],
    "moral": "Chọn sai lần đầu chỉ làm con đường dài ra, không làm nó biến mất."
  },
  "nue": {
    "title": "Kẻ ngàn năm chưa tự nối mình",
    "place": "Mái điện cổ dưới mây đen",
    "setup": [
      "Tương truyền Nue mình khỉ, thân tanuki, chân hổ, đuôi rắn; đêm đêm nó kêu như chim hét trên mái điện cổ, người nghe bảo là điềm gở. Như Chimera xứ Lycia bị Bellerophon bắn từ trời, nó quen bị gọi từng phần rồi bị giương cung. Nó hỏi mỗi kẻ một câu: « Ta là gì? » — kẻ nào vội chọn một phần để gọi coi như đã giương cung."
    ],
    "resolve": [
      "Hoshino nhìn rất lâu — khỉ, tanuki, hổ, rắn — mà không chọn phần nào. Hoshino mở sổ, chấm bốn chấm lên giấy, đưa cả sổ lẫn than chì lên mái điện: « Bốn chấm, tôi chưa nối. Nối thế nào là quyền của ông. » Nue ngẩn người: ngàn năm nay ai cũng nối giúp nó, nối thành điềm gở. Nó dùng móng nối thử bốn chấm thành một vòng khép kín, rồi kêu lên — nghe như tiếng người đang gọi ai về — và đặt dấu."
    ],
    "moral": "Ai cũng có quyền tự nối các chấm của mình."
  }
};
