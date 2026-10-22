/* =====================================================================
   story/Koharu.js — CỐT TRUYỆN CỦA NHÂN VẬT "Koharu"
   Tên file = tên đăng nhập. Cấu trúc giống Hoshino.js / _template.js.
   - Viết trung tính về giới: chỉ gọi bằng tên "Koharu".
   - Thế mạnh của tuyến: ĐỌC KỸ (rập nguyên văn, đúng giọng, đọc đến chữ cuối,
     dịch mà không giấu chỗ hụt). Hạt giống "chữ biết làm việc": bánh xe nước → Cửu Vĩ Hồ.
   - Ảnh con dấu mặc định: img/ui/Koharu.jpg (cần thêm, hoặc khai báo "img").
   ===================================================================== */
window.FUSOU_STORY=window.FUSOU_STORY||{};
window.FUSOU_STORY["Koharu"]={
  "title": "Koharu · Người chép lề",
  "tagline": "Hướng về Fusō — nơi băng tan làm nhòe những nét chữ trên thân Cây Thế Giới, và một người ít nói chịu đọc từng nét một.",
  "greet": "Chào Koharu, hôm nay mình đọc từ trang nào đây ~",
  "sub": "ようこそ、こはるさん。静かに、でも確かに、一歩ずつ進もう。",
  "intro": [
    "Ba năm Fimbulvetr đóng băng cả mực trong bút lẫn tiếng nói trong cổ; ánh sáng trở về, băng tan đến đâu thì chữ nhòe đến đó. Những nét chữ Odin từng treo mình chín đêm để đổi lấy giờ chồng lên nhau, nghĩa trượt khỏi mặt chữ như sương trượt khỏi lá: bia ghi “đá ngầm” đọc ra “đường thông”, lời thề lem thành lời nguyền. Chẳng ai dám khắc lại, vì khắc sai một nét là sai cả một lời.",
    "Trong gian kho thư cạnh bến Vindvik có một người ít nói tên là Koharu: không cao giọng giữa chợ, ngồi dãy cuối gần cửa, và thường đã đọc xong điều cần đọc khi người ta nhớ ra hỏi ý kiến. Koharu đọc được tiếng của lái buôn đường xa lẫn tiếng khách phương Đông; thư nào khó, đọc một lần rồi chép lại sạch như chưa từng rối. Tay Koharu không run, và Koharu hiếm khi nói điều mình biết — vì nói một điều chưa đọc kỹ là thêm một nét sai lên bia.",
    "Dưới bến có bánh xe nước quay đúng nhịp nhờ một thanh gỗ khắc dấu gắn vào trục: mỗi dấu bảo chiếc búa khi nào nhấc, khi nào nghỉ. Koharu đứng nhìn rất lâu — hoá ra chữ không chỉ để đọc, chữ còn làm việc được. Người trong bến bảo kẻ giỏi chữ thì hợp ngồi giữ kho thư cả đời; Koharu không cãi, chỉ chép thêm một dòng nhỏ vào lề sổ.",
    "Đêm không trăng, bà Sága — nữ thần ngồi bên Sökkvabekkr, nơi những chuyện đã qua chìm xuống rồi nổi lên — đặt vào tay Koharu một cuộn giấy dó và một thỏi than:",
    {
      "q": "« Chữ trên Cây không hỏng vì băng; chữ hỏng vì đã quá lâu không ai đọc cho kỹ. Năm kẻ giữ đường mỗi kẻ giữ một lớp nghĩa — người đời gọi chúng là ác linh, vì chúng đọc sai nên làm sai. Đừng khắc bằng ý mình. Hãy rập nguyên văn rồi đọc, đọc đến khi chữ tự nói. »"
    },
    "Trên cột đá đầu bến, Koharu thấy chữ Ryosuke khắc nông, cạnh một chiếc lông quạ đen. Người ta chỉ thấy một cái tên; Koharu đọc ra nét đầu run, nét cuối sâu, như người khắc bắt đầu bằng ngần ngừ và kết thúc bằng quyết tâm. Koharu rập lại bằng giấy dó và than, gấp vào sổ làm trang đầu tiên, rồi bước xuống thuyền, mang theo một câu hỏi: người khắc chữ ấy đã viết xong chưa?"
  ],
  "bosses": {
    "n5": {
      "name": "Tanuki",
      "title": "Kẻ rập bia giả",
      "place": "Chợ bản rập bến Vindvik",
      "setup": "Tanuki bán bản rập ở chợ bến Vindvik: giấy mỏng ép lên bia cổ, in lại lời thề, luật bến, tên đường. Ba tờ giống hệt nhau trải trên chiếu, và nó hỏi: « Tờ nào là thật? » Khách nào cũng chọn nét đẹp nhất, về mới biết một chữ đã bị đổi. Nó giữ dấu son đầu tiên; muốn lừa, mà cũng muốn một lần có người tin tờ giấy của mình.",
      "resolve": "Koharu không chọn vội. Koharu đọc từng tờ, từng chữ, chậm đến mức Tanuki sốt ruột. Hai tờ lệch một nét ở chữ cuối; tờ thứ ba còn nguyên, nhưng là tờ nó rập vụng nhất, mép nhòe, đầy vết tay — rập từ đêm đầu nó còn tin chữ. « Tờ này. Tôi mua tờ này. » Tanuki nhìn vết tay mình rất lâu rồi cuộn hai tờ kia lại. Koharu trả bằng đồng bạc cuối trong túi, và nhận dấu son.",
      "moral": "Chữ đẹp nhất chưa chắc là chữ thật nhất.",
      "duel": [
        "Tờ nào là thật",
        "Đọc kỹ từng lựa chọn, tìm đúng nét lệch — vượt qua cả chủ đề N5 trước khi hết giờ."
      ],
      "train": [
        "Học cách đọc chậm",
        "Luyện từng chủ đề N5 — nền chắc thì nét giả nào cũng lộ."
      ],
      "lose": "Tanuki cười khúc khích, nhét tờ giả vào tay bạn: “Chọn nhanh quá rồi.” Ôn lại rồi đọc lại từng nét."
    },
    "n4": {
      "name": "Kappa",
      "title": "Người đưa lời qua sông",
      "place": "Trạm đưa lời giữa hai bờ sông",
      "setup": "Kappa giữ trạm đưa lời giữa hai bờ sông: thư gửi sang bờ bên kia thì nhờ nó đọc lại bằng giọng của bờ ấy. Nó chỉ chuyển lời nói đúng giọng — không ra lệnh, không nịnh. Khách nào cũng sai khiến nó như cái chèo hoặc tâng bốc cho khỏi mất lòng, nên đĩa nước trên đầu nó lúc nào cũng nghiêng. Nó giữ dấu son thứ hai, và muốn một lần được nói chuyện như người ngang hàng.",
      "resolve": "Koharu viết thư thật ngắn, giọng đều như mặt nước lặng, rồi chìa cho nó: « Ông đọc thử xem giọng này đúng chưa? Chuyện giọng, ông rành hơn tôi. » Kappa lặng đi: có người hỏi nghề của nó, chứ không chỉ nhờ vả. Nó sửa một chữ, rất khẽ. Koharu để nó sửa chữ của mình, rồi ghi tên nó ở lề thư. Đĩa nước đứng thẳng, không đổ giọt nào; nó đặt dấu son cạnh chính tên mình.",
      "moral": "Nói đúng giọng với ai cũng là một cách tôn trọng người ấy.",
      "duel": [
        "Chuyển lời qua sông",
        "Chọn đúng từ ngữ cho từng lời gửi sang bờ bên kia trước khi nước trên đĩa Kappa cạn."
      ],
      "train": [
        "Học cách chọn giọng",
        "Luyện từng chủ đề N4 — cùng một ý, mỗi người nghe cần một cách nói."
      ],
      "lose": "Nước trên đĩa Kappa chao nghiêng, lá thư bị trả lại: “Giọng này chưa đúng người.” Ôn lại rồi viết lại từ đầu."
    },
    "n3": {
      "name": "Tengu",
      "title": "Chủ am không ai đọc",
      "place": "Am nhỏ trên đỉnh núi",
      "setup": "Tengu giữ một am trên đỉnh núi, treo trong am cuộn sách dài bằng cả con dốc — công trình cả đời nó. Ai lên cũng khen vài câu rồi vội xuống, vì sợ cái mũi dài và chiếc quạt lông; nó biết chưa ai đọc quá trang đầu. Luật của nó: muốn qua phải nói ra một điều trong sách mà chưa ai từng nhắc. Nó giữ dấu son thứ ba, và muốn được đọc bằng mắt thay vì sợ bằng tim.",
      "resolve": "Koharu không khen. Koharu ở lại ba đêm, đọc từ chữ đầu đến chữ cuối, tay tê, mắt đỏ. Ở một góc cuộn có dòng chú thích nhỏ như hạt gạo, dòng mà chính Tengu cũng quên đã viết. Koharu đọc lên, rồi nói chậm: « Chỗ này tôi nghĩ ông đúng. Còn chỗ này tôi không đồng ý, vì thế này. » Chưa ai từng cãi lại nó, vì chưa ai đọc đủ để có chỗ mà cãi. Hai bên cãi đến sáng, không ai thắng; nó đặt dấu son, cộc lốc: « Quay lại khi đọc xong cuốn kế. »",
      "moral": "Bất đồng có đọc kỹ là một cách tôn trọng.",
      "duel": [
        "Tìm dòng chú thích trong cuộn dài",
        "Đọc đủ ý của từng câu rồi mới đáp — vượt qua cả chủ đề N3 trước khi hết giờ."
      ],
      "train": [
        "Học cách đọc đến chữ cuối",
        "Luyện từng chủ đề N3 — hiểu đến chữ cuối rồi mới có quyền bất đồng."
      ],
      "lose": "Tengu phẩy quạt, cuộn sách khép lại: “Ngươi mới đọc nửa trang.” Ôn lại rồi lên núi đọc tiếp."
    },
    "n2": {
      "name": "Oni",
      "title": "Kẻ giữ rương thư từ chối",
      "place": "Cuối làng, bên chiếc rương sắt",
      "setup": "Oni từng gõ cửa từng nhà xin một chỗ ngồi, và nhà nào cũng dán lên cửa một mảnh giấy từ chối. Nó giữ hết trong chiếc rương sắt cuối làng, đọc đi đọc lại đến thuộc làu, tin mảnh nào cũng nói “không bao giờ”. Nó đẩy rương ra: « Đọc đi. Ngươi dám đọc hết không? » Kẻ nào cũng chọn vài mảnh nhẹ. Nó giữ dấu son thứ tư, chỉ chờ một người đọc hết mà không nói dối.",
      "resolve": "Koharu đọc hết, kể cả mảnh gay gắt nhất, giọng đều, không lọc bớt. Hai mảnh viết thẳng « Đi đi », Koharu đọc nguyên văn, và Oni run lên vì lần đầu có người không nói dối nó. Rồi Koharu chỉ ra phần còn lại: « Mảnh này viết “hết củi mùa này”. Mảnh này viết “nhà đang có tang”. Mảnh này chưa hề viết “không” — chỉ viết “chưa”. » Oni ngồi sụp xuống. Koharu nhờ nó giữ giùm chiếc rương — chẳng ai giữ thư tử tế bằng kẻ từng bị chúng làm đau — và nó đặt dấu son lên nắp rương như nhận một chỗ đứng.",
      "moral": "Nhiều chữ “chưa” bị nỗi sợ đọc thành “không bao giờ”.",
      "duel": [
        "Đọc hết rương thư từ chối",
        "Đáp đúng giữa những câu dài nhiều tầng nghĩa — đọc đủ, không bỏ sót — trước khi hết giờ."
      ],
      "train": [
        "Học cách đọc cả điều khó nghe",
        "Luyện từng chủ đề N2 — nghĩa nằm ở chữ nhỏ nhất, không ở chữ ồn nhất."
      ],
      "lose": "Oni gầm khẽ, nắp rương đóng lại: “Ngươi bỏ sót mảnh nào rồi.” Ôn lại rồi đọc lại từ mảnh đầu tiên."
    },
    "n1": {
      "name": "Rồng",
      "title": "Kẻ giữ cửa giữa hai thứ tiếng",
      "place": "Chỗ thân Cây Thế Giới chẻ đôi",
      "setup": "Ở nơi thân Cây Thế Giới chẻ đôi, Rồng quấn quanh khe nứt giữ cánh cửa; thân nó là mạch rễ ngầm nối hai bờ thế giới. Hai đầu nó nói hai thứ tiếng, Bắc và Đông, và suốt ngàn năm vẫn đọc cho nhau cùng một câu mà chưa nghe ra nhau. Nó chỉ mở cửa cho kẻ chuyển được câu ấy sang bên kia mà không giấu chữ nào đã rơi, và giữ dấu son cuối chờ người hiểu điều đó.",
      "resolve": "Koharu viết hai dòng song song lên giấy dó, tiếng Bắc bên trái, tiếng Đông bên phải, như hai bờ một con sông. Chữ nào cũng sang được, trừ một chữ: bờ nào cũng không có chữ ngang bằng bờ kia. Koharu không chọn chữ gần nghĩa nhất cho xong; Koharu để nguyên chữ ấy giữa hai dòng và viết nhỏ ở lề: « Hụt một chút. Nghĩa này chưa sang được. » Với kẻ quen đúng đến từng nét, thế là khó nhất. « Ngươi không sợ bị chê dịch thiếu? » « Thiếu mà nói là thiếu thì chưa phải sai. » Một đầu của Rồng, ở hồ đen, từng đọc một cái danh cho kẻ áo choàng đen; Koharu nhớ nét khắc run ở cột bến và không hỏi thêm. Hai đầu cùng đặt xuống dấu son cuối, lần đầu nhìn thấy nhau trong một chữ chưa dịch được.",
      "moral": "Chữ nào chưa sang được bờ bên kia thì để ở lề, đừng giấu.",
      "duel": [
        "Dịch một câu cho hai đầu Rồng",
        "Đáp từng câu nhiều tầng nghĩa, chọn đúng chữ cho cả hai bờ — trước khi hết giờ."
      ],
      "train": [
        "Viết ở lề giấy",
        "Luyện từng chủ đề N1 — chỗ nào chưa chắc thì ghi ra, chỗ nào chắc thì đứng vững."
      ],
      "lose": "Hai đầu Rồng lắc đầu, dòng chữ vẫn nằm lệch giữa hai bờ. Ôn lại rồi quay lại chỗ thân cây chẻ đôi."
    }
  },
  "ending": [
    "Năm đoạn chữ được gỡ lại, và Koharu đứng trước thân Cây Thế Giới mà chưa khắc một nét. Koharu đọc to — không to lắm — từng đoạn một; đến dòng cuối, các vết khắc tự rõ lại, nghĩa trở về mặt chữ. Chữ sống lại không phải vì có ai khắc đè lên, mà vì cuối cùng đã có người đọc cho kỹ.",
    "Về đến bến, Koharu dừng bên bánh xe nước, nhìn thanh gỗ khắc dấu đẩy chiếc búa lên xuống đúng nhịp, và lần đầu thấy điều mình thắc mắc năm xưa không còn xa. Rồi Koharu mở sổ, đến bản rập tên Ryosuke, viết ở lề một dòng rất nhỏ, không đề tên mình: « Nét sau vững hơn nét đầu. »",
    "Trang cuối của cuốn sổ vẫn để trắng, lề rộng — chỗ cho chú thích của ngày mai."
  ],
  "kyubi": {
    "title": "Hồ ly chín đuôi · Kẻ đọc được chín cách",
    "place": "Đỉnh núi cuối cùng của Fusō",
    "setup": [
      "Chữ trên Cây đã rõ lại, nhưng Koharu chưa vội xuống núi. Mắt Koharu cứ ngước về đỉnh núi cuối cùng của Fusō, nơi sương chưa từng tan và chín chiếc đuôi đang khẽ lay giữa tàn tro đền cổ.",
      "Đó là Cửu Vĩ Hồ, con hồ ly sống qua một nghìn năm, nghe đủ mọi lời thề và nhớ từng lời thất hứa. Nó nhìn cuốn sổ rất lâu, rồi hỏi:",
      {
        "q": "« Chín đuôi ta là chín cách đọc một câu, và ta chưa tìm ra cách nào đúng hơn. Ngươi đọc kỹ hơn bất kỳ ai ta từng gặp — ngươi đoán được nó sẽ đưa ngươi tới đâu không? »"
      }
    ],
    "resolve": [
      "Koharu không đáp, chỉ lật sổ đến trang đã rập từ trục bánh xe nước và đặt trước mặt hồ ly. Cửu Vĩ Hồ đọc hết một lượt, rồi khẽ cười như nghe điều đã đoán trước.",
      {
        "q": "« Ở xứ Praha xa có kẻ nhào đất thành hình người, đặt một chữ lên trán, hình ấy đứng dậy mà đi; xoá một nét, nó ngã xuống thành đất. Chữ biết làm việc là có thật. Nhưng chữ nào biết tự đi cũng cần một người đã đọc kỹ đứng đằng sau. »"
      },
      "Nó thả một đốm lửa xanh vào lề sổ. Lửa không đốt giấy; nó chìm xuống thành một dòng chữ mảnh, tự mọc rồi tự dừng đúng chỗ. Từ ngày ấy, mỗi lần Koharu học thêm một lời cũ, một dòng chú thích nhỏ lại tự hiện ở lề, chờ Koharu đọc kỹ rồi giữ hay xoá."
    ],
    "moral": "Chữ nào biết tự đi cũng cần một người đã đọc kỹ đứng sau."
  },
  "yokai": {
    "title": "Bốn dòng chú thích bên đường xuống núi",
    "tagline": "Bên đường xuống núi, bốn yêu quái từng hầu cận hồ ly chờ một người chịu đọc đến dòng cuối.",
    "intro": [
      "Ở bốn chỗ ven đường xuống núi có vệt sáng xanh mảnh chạy dọc mép cảnh vật, như dòng chữ viết ở lề một trang sách rất lớn.",
      {
        "q": "« Tứ yêu — bốn kẻ từng hầu cận hồ ly, nay ngồi ở lề những chuyện chưa ai chép lại. Chúng chỉ chờ người chịu đọc đến dòng cuối. »"
      },
      "Koharu mở sổ ở trang có lề rộng nhất."
    ],
    "monsters": {
      "rokurokubi": {
        "title": "Người nghe hai trăm năm",
        "place": "Quán trọ lưng chừng núi",
        "setup": [
          "Ban ngày bà chủ quán rót trà không đổ một giọt; ban đêm cổ bà dài ra như sợi thừng, luồn qua vách giấy gom lời khách nói mớ. Đó là Rokurokubi — hai trăm năm nghe mà chưa ai kể cho bà nghe một chuyện. Bà chỉ cho trọ kẻ nào chịu ghép những mẩu nói mớ rời rạc ấy thành một câu chuyện."
        ],
        "resolve": [
          "Koharu chép suốt đêm những mẩu bà còn nhớ, mỗi mẩu một dòng, đề ai nói, đêm nào. Gần sáng, đọc lại cả trang, Koharu thấy trong hàng trăm giấc mơ của kẻ lạ có một hình lặp đi lặp lại: một bàn tay rót trà, không đổ một giọt. Koharu đọc thành một chuyện — chuyện về người được cả trăm kẻ lạ mơ thấy mà không hay. Cổ bà từ từ co lại; hai trăm năm bà nghe để tìm điều người ta giấu, chưa từng nghĩ mình là điều người ta nhớ. Bà đóng dấu, rồi rót cho Koharu một chén trà, không đổ một giọt."
        ],
        "moral": "Kẻ nghe suốt đời cũng muốn biết mình được nhớ ra sao."
      },
      "jorogumo": {
        "title": "Người dệt lưới có một chỗ lệch",
        "place": "Khung cửi dưới mái hiên đá",
        "setup": [
          "Nàng nhện dệt tấm lưới lớn giữa hai cột đá, sương đọng trên tơ thành trăm giọt. Đó là Jorogumo — nhện hoá mỹ nhân, dệt như ba nàng Norn dệt vận người. Nàng muốn được khen tấm lưới, nhưng chỉ tin kẻ nói được điều lưới ấy giấu; khen vẻ đẹp thì bị tơ siết, vì vẻ đẹp ai cũng thấy."
        ],
        "resolve": [
          "Koharu không khen. Koharu nhìn lưới đến khi ra quy tắc của nó: ba sợi ngang một sợi dọc, chín mắt một nút, đều như câu chữ có vần. Rồi Koharu chỉ vào một chỗ ở góc thấp: « Ở đây quy tắc gãy. Một nhịp bị bỏ, một nút bị buộc sai. » Nàng sững tay: hai trăm năm không ai thấy chỗ nàng cố ý dệt sai, vào đêm nàng nhớ một người đã đi. Koharu vẽ lại tấm lưới lên giấy dó, đánh dấu chỗ lệch bằng một chấm than, tặng nàng — cái giá là nửa đêm và một bàn tay bị tơ cứa. Nàng đóng dấu."
        ],
        "moral": "Có chỗ sai là cố ý, và chỉ người đọc kỹ mới biết đó là chữ."
      },
      "aoandon": {
        "title": "Ngọn đèn thứ một trăm",
        "place": "Gian phòng trăm ngọn đèn",
        "setup": [
          "Người ta kể trăm chuyện ma, mỗi chuyện tắt một ngọn đèn. Ngọn đèn giấy xanh thứ một trăm là ngọn không ai dám tắt, vì kẻ đứng sau nó sẽ bước ra: Ao-andon, quỷ nữ sừng cong, răng nhuộm đen. Bà muốn kể trọn chuyện thứ một trăm cho một người nghe tới chữ cuối, nhưng kể đến đâu cũng thêm một đoạn, sợ hồi kết làm tắt đèn của chính mình."
        ],
        "resolve": [
          "Koharu nghe hết một lượt, rồi xin nghe lại, lần này chỉ chú ý những chỗ bà lặp lại. Câu mở đầu — một ngọn đèn đặt ở ngưỡng cửa, chưa ai thắp — bà đã nhắc ba lần giữa truyện. « Truyện này không thiếu kết. Nó kết bằng chính câu đầu: người trong truyện đi một vòng rồi thắp ngọn đèn ở ngưỡng cửa. » Bà im lặng thật lâu: trăm năm tìm lời kết ở cuối, mà nó nằm ở đầu. Bà kể lại một lần nữa, dừng đúng chỗ ngọn đèn được thắp. Ánh xanh chuyển sang vàng ấm, và bà đóng dấu."
        ],
        "moral": "Có chuyện không thiếu kết — chỉ là kết đã nằm sẵn ở câu đầu."
      },
      "karakasaobake": {
        "title": "Chiếc ô chưa nghe ra tiếng cười",
        "place": "Cổng đền đổ nát dưới mưa",
        "setup": [
          "Một chiếc ô giấy bị bỏ lại trăm năm đã thành yêu — một mắt, một chân, cái lưỡi dài thè ra. Đó là Karakasa-obake: nó nhảy ra dọa người ta chỉ để được nghe họ cười. Nhưng kẻ bị dọa thì hét, và nó chưa phân biệt được tiếng hét với tiếng cười."
        ],
        "resolve": [
          "Chiếc ô nhảy ra, thè lưỡi sát mặt Koharu. Koharu khẽ giật mình, rồi thấy buồn cười mà không bật ra tiếng. Koharu mở sổ, viết ở lề một chữ nhỏ — “cười” — và chìa cho nó đọc. Chiếc ô dán một mắt vào trang giấy, đọc từng nét; chưa ai từng báo cho nó biết mình vừa làm người khác cười. Nó nhúng đầu cán vào vũng nước, thử viết lại chữ ấy lên nền đá, nét xiêu vẹo, rồi đóng dấu và nhảy lò cò theo Koharu một đoạn dốc."
        ],
        "moral": "Tiếng cười chưa thành tiếng vẫn có thể được ghi lại."
      }
    }
  },
  "hak": {
    "title": "Kẻ biết mọi tên mà không ai tra được",
    "place": "Tháp mười tầng trong mây",
    "setup": [
      "Tương truyền Bạch Trạch mình rồng, mặt người, sáu mắt, thuộc tên mười một nghìn năm trăm loài yêu quái. Như Mnemosyne nhớ hết mà chẳng điều nào nằm trên giấy, ông chỉ nhận một câu hỏi mỗi tầng, và mọi tên ông đọc lên đều tan khi kẻ hỏi bước xuống tháp."
    ],
    "resolve": [
      "Koharu không hỏi tên nào. Mỗi tầng, Koharu hỏi một câu về cách ông giữ tên — « Tên nào người ta hay hỏi nhất? » — và ghi câu đáp vào một ngăn, đánh dấu cách tìm lại. Đến tầng mười, mười trang đã thành một mục lục, để kẻ chưa từng leo tháp cũng tìm thấy ông. Bạch Trạch lặng đi: vạn năm ông là nơi duy nhất cất mọi câu đáp, và phải leo mười tầng mới chạm tới. Ông đặt dấu lên trang đầu của mục lục."
    ],
    "moral": "Biết nhiều đến mấy cũng cần một cách để người khác tìm được mình."
  },
  "nue": {
    "title": "Kẻ chỉ được nhớ vào đêm xấu",
    "place": "Mái điện cổ dưới mây đen",
    "setup": [
      "Tương truyền Nue mình khỉ, thân tanuki, chân hổ, đuôi rắn; đêm đêm nó kêu như chim hét trên mái điện cổ, người nghe bảo là điềm gở. Như Chimera xứ Lycia bị Bellerophon bắn từ trời, nó bị giương cung chỉ vì một cuốn sổ trực đêm ghi toàn đêm xấu. Nó hỏi mỗi kẻ: « Sổ ghi rõ là điềm gở. Ngươi đọc ra gì? »"
    ],
    "resolve": [
      "Koharu đọc sổ từ đầu đến cuối, và đếm: đêm Nue kêu mà có người ốm chỉ rải rác vài dòng; đêm Nue kêu mà trời yên, trẻ ngủ ngon thì chưa ai chép một chữ. Cả đêm Koharu viết thêm những dòng còn thiếu, tay tê, mực nhoà, cho đến khi mấy dòng điềm gở chỉ còn là vài giọt lẻ giữa trang kín chữ. « Ông kêu mỗi đêm, » Koharu nói, « chỉ là người ta mới chép những đêm xấu. » Nue kêu một tiếng, không còn như báo điềm, rồi đặt dấu lên trang sổ đã đầy."
    ],
    "moral": "Chỉ chép những đêm xấu thì đêm nào cũng thành điềm gở."
  },
  "finale": {
    "resolve": [
      "Ngoài câu chuyện, Ryosuke gửi đến bạn lời nhắn:",
      {
        "q": "Koharu thường được hiểu là mùa xuân nhỏ — những ngày ấm hiếm hoi giữa đầu đông, không ồn ào mà ai đi qua cũng nhận ra. Mình nghĩ nó hợp với bạn: ít nói không phải là ít có điều để nói, và đọc kỹ cũng là một cách lên tiếng. Nếu mai sau đường của bạn dẫn tới những dòng chữ biết tự chạy, mình tin người đọc kỹ, ghi chú trung thực và dám viết “chỗ này chưa chắc” ở lề sẽ là người được cần nhất ở đó. Nếu muốn nhánh truyện này sửa lại cho đúng hơn với bạn, cứ nhắn cho mình nhé. :)"
      }
    ]
  }
};
