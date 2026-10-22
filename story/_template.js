/* =====================================================================
   story/_template.js — KHUÔN CỐT TRUYỆN CHO NHÂN VẬT MỚI
   Cách dùng: copy file này → đổi tên thành <TênĐăngNhập>.js → đổi "TênMới" ở dòng
   window.FUSOU_STORY["..."] cho trùng tên file (đúng hoa/thường). Có file là đăng nhập được.
   ---------------------------------------------------------------------
   NGUYÊN TẮC: ÍT MÀ CHẤT. Người chơi không đọc dài — mỗi đoạn một ý, một hình ảnh, một câu đáng nhớ.
   Độ dài tối đa (đếm theo chữ cách nhau bởi dấu cách):
     intro ≤ 350 | mỗi boss (setup + resolve) ≤ 160 | mỗi yêu quái nhỏ (setup + resolve) ≤ 100
     hak / nue ≤ 120 | kyubi ≤ 150 | ending ≤ 120 | finale ≤ 100 | moral đúng 1 câu
   ---------------------------------------------------------------------
   VĂN PHONG
    1. Phép thử: xoá hết chữ Nhật mà đoạn văn vẫn đọc ra thần thoại. Nếu không, viết lại.
    2. Trong intro / setup / resolve / moral / ending / kyubi: KHÔNG dùng kana, kanji, thành ngữ hay từ
       vựng tiếng Nhật; tên riêng viết romaji (Tanuki, Nue, Ame-no-Uzume…). Chủ đề học (N5→N1…) chỉ nằm
       ở duel / train. Riêng "sub" (lời chào ở màn đăng nhập) được dùng tiếng Nhật; nếu không chắc kanji
       của tên thì viết bằng hiragana/katakana.
    3. Mỗi boss = một nỗi niềm (nó muốn gì) + một LUẬT thử thách + lời giải bằng THẾ MẠNH riêng của
       nhân vật + một cái giá hoặc điều nhận lấy. Mỗi chặng khai thác một khía cạnh khác nhau, không lặp
       cách thắng đã dùng (xem danh sách bên dưới). Nhân vật không giảng bài, không giải thích thuật ngữ.
    4. Tính cách thật quyết định cách thắng: ít nói, chậm, giỏi, hoạt ngôn… đều là thế mạnh. Đừng ép
       nhân vật hoá thành người khác để thắng.
    5. Giọng cổ ("Tương truyền…") cho hak / nue; nối thần thoại châu Âu bằng một vế ngắn "như…".
    6. Liên tuyến: Rồng, Bạch Trạch, Cửu Vĩ Hồ, Nue là MỘT nhân vật duy nhất xuyên mọi tuyến; boss khác
       là "một cá thể của loài". Nhắc người đi trước tối đa 1 câu mỗi chặng.
    7. Ryosuke (tác giả web) là mối nối giữa các tuyến: xuất hiện ở intro (chữ khắc, lông quạ…) và ở
       ending / finale; trong 5 chặng chỉ nhắc tối đa 1 câu. Lời nhắn finale viết như người ngoài truyện,
       giọng ấm.
    8. KHÔNG đưa thông tin cá nhân vào file (số điện thoại, địa chỉ, email, tên trường, điểm số…) — ai mở
       trang cũng đọc được. Hoàn cảnh và thế mạnh thật của người chơi hãy hoá thân thành chất liệu thần thoại.
    9. Chưa rõ giới tính thì viết trung tính: chỉ gọi bằng tên nhân vật, tránh "nàng/hắn/anh/cô".
   10. Chặng N1 (Rồng): "moral" được phép để rỗng "" hoặc có 1 câu.
   ---------------------------------------------------------------------
   NỖI NIỀM GỐC GỢI Ý (đổi luật và cách hoá giải theo nhân vật)
     Tanuki: muốn lừa mà cũng muốn được tin      Kappa: muốn được đối đãi tử tế
     Tengu: muốn được tôn trọng, không chỉ sợ    Oni: muốn có chỗ đứng, bị mọi nhà xua đuổi
     Rồng: giữ cánh cửa / giữ danh, chờ được hiểu
     Rokurokubi: muốn có người kể chuyện cho mình nghe   Jorogumo: muốn có người khen tấm lưới
     Aoandon: muốn kể trọn câu chuyện thứ một trăm       Karakasaobake: muốn có người cười cùng
     Bạch Trạch: biết tên vạn vật mà chưa ai hỏi tên ông
     Nue: muốn được gọi trọn tên; tiếng kêu là điềm gở hay lời gọi?
       (mình khỉ, thân tanuki, chân hổ, đuôi rắn; bị Minamoto no Yorimasa bắn rồi thả trôi trên thuyền
        rỗng. Mối nối: Chimera xứ Lycia bị Bellerophon bắn từ trời.)
   ---------------------------------------------------------------------
   CÁCH THẮNG ĐÃ DÙNG (tránh lặp; hãy nghĩ một cách mới hợp nhân vật)
     Airi    : mặc cả đa ngôn ngữ, cúi chào đúng nhịp, nhún mình đúng lúc, bát cơm hoà giải, điệu múa
     Ryosuke : im lặng, một chữ nặng, không biện hộ, nghe hết cái danh bị đọc
     Tabito  : "tôi là lữ khách", nhận mình nhầm, câu trọn nghĩa, chọn lời còn ngập ngừng, ngồi nghe suốt đêm
     Hoshino : soi lá dưới sao thật, "tôi chưa biết", chờ đúng gió, ngồi cạnh không nói, nét chì xoá được
     Koharu  : đọc từng nét tìm chỗ lệch (chọn bản vụng mà thật), nói đúng giọng rồi nhờ boss sửa chữ,
               đọc hết cuộn rồi bất đồng có dẫn chứng, đọc hết thư từ chối không lọc ("chưa" ≠ "không bao giờ"),
               dịch mà để chỗ hụt ở lề
     Bạch Trạch — đã hỏi: tên của ông / chọn lời của kẻ khác / câu hỏi mọc từ câu trả lời /
                   con đường ông thích / lập mục lục để người khác tìm được ông
     Nue — đã dùng: bốn tiếng / "Ta là gì?" (không chọn phần nào) / "báo điềm hay gọi ai?" /
           đưa chì cho nó tự nối / chép thêm những đêm lành mà sổ trực chưa ghi
   ---------------------------------------------------------------------
   CÁC TRƯỜNG
   title / tagline : tiêu đề + câu dẫn nhánh truyện (hiện đầu bản đồ)
   greet / sub     : (tuỳ chọn) lời chào + lời nhắn ở màn đăng nhập. {name} = tên người đăng nhập,
                     web tự thay vào; file riêng cho một người thì cứ ghi thẳng tên nhân vật.
   img             : (tuỳ chọn) tên file ảnh con dấu, mặc định img/ui/<Tên>.jpg
   share           : (tuỳ chọn) dùng chung cốt truyện của người khác, ví dụ "share":"Airi"
   intro           : chương mở đầu. Mỗi phần tử là 1 đoạn; {q:"..."} = đoạn trích dẫn
   bosses          : 5 chặng n5 → n1. Mỗi chặng:
       name, title, place, setup (luôn hiện)
       resolve, moral (CHỈ hiện khi đã đóng dấu)
       duel [tên, mô tả]   train [tên, mô tả]   lose (câu khi thua)
   ending          : đoạn kết, mở khi đủ 5 dấu son
   kyubi           : phần thưởng Cửu Vĩ Hồ, hiện ngay sau ending — title, place, setup, resolve, moral
   finale          : (tuỳ chọn) lời nhắn cuối, hiện giữa màn hình sau phần thưởng Cửu Vĩ Hồ, chạy từng chữ,
                     chỉ hiện 1 lần rồi có nút đọc lại. resolve: mảng đoạn văn, {q:"..."} = trích dẫn
   yokai           : 4 yêu quái nhỏ — title, tagline, intro, monsters{rokurokubi|jorogumo|aoandon|
                     karakasaobake: {title, place, setup, resolve, moral}}. setup luôn hiện;
                     resolve + moral hiện sau khi thắng quyết đấu CHÍNH yêu quái đó.
                     Ảnh: img/game/<id>.jpg   Dấu: img/game/<id>1.png
   hak             : (tuỳ chọn) truyện Bạch Trạch — title, place, setup, resolve, moral
   nue             : (tuỳ chọn) truyện Nue — cùng cấu trúc với hak
   ===================================================================== */
window.FUSOU_STORY=window.FUSOU_STORY||{};
window.FUSOU_STORY["TênMới"]={
  "title": "TênMới · Danh hiệu",
  "tagline": "Hướng về Fusō — một câu dẫn ngắn, ≤ 25 chữ.",
  "greet": "Chào TênMới, một câu chào ngắn ~",
  "sub": "ようこそ、TênMới さん。一言だけ。",
  "intro": [
    "Đoạn 1 — thế giới đang gặp chuyện gì (≤ 80 chữ).",
    "Đoạn 2 — nhân vật là ai, mạnh ở đâu, ngại hoặc muốn điều gì (≤ 90 chữ).",
    "Đoạn 3 — người dẫn đường trao một vật nhỏ (≤ 40 chữ):",
    {
      "q": "« Lời người dẫn đường: nhiệm vụ + gợi ý cách thắng (≤ 60 chữ). »"
    },
    "Đoạn cuối — dấu vết của Ryosuke (chữ khắc, lông quạ…) rồi xuống thuyền (≤ 60 chữ)."
  ],
  "bosses": {
    "n5": {
      "name": "Tanuki",
      "title": "Danh hiệu boss (≤ 6 chữ)",
      "place": "Địa điểm (≤ 6 chữ)",
      "setup": "Boss là ai, muốn gì, luật thử thách (≤ 70 chữ).",
      "resolve": "Thế mạnh của nhân vật hoá giải luật ra sao; trả giá hoặc nhận lấy điều gì (≤ 90 chữ).",
      "moral": "Một câu chốt.",
      "duel": [
        "Tên thử thách chính",
        "Mô tả ngắn cho thử thách Boss có đồng hồ."
      ],
      "train": [
        "Tên mục thu thập từ",
        "Mô tả ngắn cho phần thu thập từ vựng."
      ],
      "lose": "Câu hiện khi thua, rồi nhắc ôn lại."
    },
    "n4": {
      "name": "Kappa",
      "title": "Danh hiệu boss (≤ 6 chữ)",
      "place": "Địa điểm (≤ 6 chữ)",
      "setup": "Boss là ai, muốn gì, luật thử thách (≤ 70 chữ).",
      "resolve": "Thế mạnh khác chặng trước hoá giải luật ra sao; cái giá (≤ 90 chữ).",
      "moral": "Một câu chốt.",
      "duel": [
        "Tên thử thách chính",
        "Mô tả ngắn cho thử thách Boss có đồng hồ."
      ],
      "train": [
        "Tên mục thu thập từ",
        "Mô tả ngắn cho phần thu thập từ vựng."
      ],
      "lose": "Câu hiện khi thua, rồi nhắc ôn lại."
    },
    "n3": {
      "name": "Tengu",
      "title": "Danh hiệu boss (≤ 6 chữ)",
      "place": "Địa điểm (≤ 6 chữ)",
      "setup": "Boss là ai, muốn gì, luật thử thách (≤ 70 chữ).",
      "resolve": "Thế mạnh khác hai chặng trước hoá giải luật ra sao; cái giá (≤ 90 chữ).",
      "moral": "Một câu chốt.",
      "duel": [
        "Tên thử thách chính",
        "Mô tả ngắn cho thử thách Boss có đồng hồ."
      ],
      "train": [
        "Tên mục thu thập từ",
        "Mô tả ngắn cho phần thu thập từ vựng."
      ],
      "lose": "Câu hiện khi thua, rồi nhắc ôn lại."
    },
    "n2": {
      "name": "Oni",
      "title": "Danh hiệu boss (≤ 6 chữ)",
      "place": "Địa điểm (≤ 6 chữ)",
      "setup": "Boss là ai, muốn gì, luật thử thách (≤ 70 chữ).",
      "resolve": "Thế mạnh khác ba chặng trước hoá giải luật ra sao; cái giá (≤ 90 chữ).",
      "moral": "Một câu chốt.",
      "duel": [
        "Tên thử thách chính",
        "Mô tả ngắn cho thử thách Boss có đồng hồ."
      ],
      "train": [
        "Tên mục thu thập từ",
        "Mô tả ngắn cho phần thu thập từ vựng."
      ],
      "lose": "Câu hiện khi thua, rồi nhắc ôn lại."
    },
    "n1": {
      "name": "Rồng",
      "title": "Danh hiệu boss (≤ 6 chữ)",
      "place": "Địa điểm (≤ 6 chữ)",
      "setup": "Rồng giữ cánh cửa; luật thử thách cuối (≤ 70 chữ).",
      "resolve": "Thế mạnh cốt lõi của nhân vật; có thể nhắc người đi trước 1 câu (≤ 90 chữ).",
      "moral": "Một câu chốt (hoặc để rỗng).",
      "duel": [
        "Tên thử thách chính",
        "Mô tả ngắn cho thử thách Boss có đồng hồ."
      ],
      "train": [
        "Tên mục thu thập từ",
        "Mô tả ngắn cho phần thu thập từ vựng."
      ],
      "lose": "Câu hiện khi thua, rồi nhắc ôn lại."
    }
  },
  "ending": [
    "Đoạn kết khi đủ 5 dấu son — thế giới đổi thay ra sao, một chi tiết nhỏ về Ryosuke (≤ 120 chữ)."
  ],
  "kyubi": {
    "title": "Hồ ly chín đuôi · Danh hiệu",
    "place": "Đỉnh núi cuối cùng của Fusō",
    "setup": [
      "Gặp hồ ly — luôn hiện (≤ 60 chữ).",
      {
        "q": "« Lời hồ ly nhìn thấu nhân vật (≤ 40 chữ). »"
      }
    ],
    "resolve": [
      "Hồ ly trao một vật nhỏ đồng hành cùng nhân vật (≤ 60 chữ)."
    ],
    "moral": "Một câu chốt."
  },
  "yokai": {
    "title": "Tiêu đề thẻ yêu quái nhỏ",
    "tagline": "Một câu dẫn ngắn dưới tiêu đề thẻ.",
    "intro": [
      "Đoạn mở đầu của thẻ (≤ 40 chữ).",
      {
        "q": "« Một câu trích dẫn ngắn. »"
      }
    ],
    "monsters": {
      "rokurokubi": {
        "title": "Danh hiệu",
        "place": "Quán trọ lưng chừng núi",
        "setup": [
          "Yêu quái là ai, muốn gì, luật — luôn hiện (≤ 45 chữ)."
        ],
        "resolve": [
          "Thế mạnh nhân vật hoá giải ra sao — chỉ hiện sau khi thắng quyết đấu chính yêu quái đó (≤ 55 chữ)."
        ],
        "moral": "Một câu chốt."
      },
      "jorogumo": {
        "title": "Danh hiệu",
        "place": "Khung cửi dưới mái hiên đá",
        "setup": [
          "Yêu quái là ai, muốn gì, luật — luôn hiện (≤ 45 chữ)."
        ],
        "resolve": [
          "Thế mạnh nhân vật hoá giải ra sao (≤ 55 chữ)."
        ],
        "moral": "Một câu chốt."
      },
      "aoandon": {
        "title": "Danh hiệu",
        "place": "Gian phòng trăm ngọn đèn",
        "setup": [
          "Yêu quái là ai, muốn gì, luật — luôn hiện (≤ 45 chữ)."
        ],
        "resolve": [
          "Thế mạnh nhân vật hoá giải ra sao (≤ 55 chữ)."
        ],
        "moral": "Một câu chốt."
      },
      "karakasaobake": {
        "title": "Danh hiệu",
        "place": "Cổng đền đổ nát dưới mưa",
        "setup": [
          "Yêu quái là ai, muốn gì, luật — luôn hiện (≤ 45 chữ)."
        ],
        "resolve": [
          "Thế mạnh nhân vật hoá giải ra sao (≤ 55 chữ)."
        ],
        "moral": "Một câu chốt."
      }
    }
  },
  "hak": {
    "title": "Danh hiệu Bạch Trạch",
    "place": "Tháp mười tầng trong mây",
    "setup": [
      "Tương truyền Bạch Trạch… + một vế \"như…\" nối thần thoại châu Âu + luật mỗi tầng một câu hỏi (≤ 50 chữ)."
    ],
    "resolve": [
      "Nhân vật hoá giải ra sao theo thế mạnh riêng (≤ 70 chữ)."
    ],
    "moral": "Một câu chốt."
  },
  "nue": {
    "title": "Danh hiệu Nue",
    "place": "Mái điện cổ dưới mây đen",
    "setup": [
      "Tương truyền Nue… + một vế \"như Chimera…\" + luật thử thách theo thế mạnh nhân vật (≤ 60 chữ)."
    ],
    "resolve": [
      "Nhân vật hoá giải ra sao theo thế mạnh riêng (≤ 60 chữ)."
    ],
    "moral": "Một câu chốt."
  },
  "finale": {
    "resolve": [
      "Ngoài câu chuyện, Ryosuke gửi đến bạn lời nhắn:",
      {
        "q": "Lời nhắn ấm, ngắn, không có liên lạc cá nhân (≤ 100 chữ)."
      }
    ]
  }
};
