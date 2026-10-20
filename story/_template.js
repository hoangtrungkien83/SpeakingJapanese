/* =====================================================================
   story/TênMới.js — CỐT TRUYỆN CỦA NHÂN VẬT "TênMới"
   Tên file = tên đăng nhập (web tự quét: có file là gõ tên đó vào được ngay).
   Dòng window.FUSOU_STORY["..."] bên dưới phải trùng tên file (đúng hoa/thường).
   ---------------------------------------------------------------------
   QUY TẮC VĂN PHONG (thần thoại) — đọc trước khi viết
   1. Phép thử: xoá hết chữ Nhật mà đoạn văn vẫn đọc ra thần thoại. Nếu không, viết lại.
   2. Trong intro / setup / resolve / moral / ending: KHÔNG dùng kana, kanji, thành ngữ hay từ vựng
      tiếng Nhật. Chỉ dùng tên riêng viết romaji (Tanuki, Nue, Ame-no-Uzume…). Chủ đề học (N5→N1,
      thành ngữ, từ tượng thanh…) chỉ nằm ở duel / train và trong game. (greet / sub là lời chào ở
      màn đăng nhập nên được dùng tiếng Nhật.)
   3. Mỗi boss / yêu quái = một nỗi niềm (nó muốn gì) + một LUẬT THỬ THÁCH + lời giải bằng THẾ MẠNH
      riêng của nhân vật. Thế mạnh của nhân vật là chìa giải; mỗi chặng bao một khía cạnh khác nhau,
      không lặp cùng một cách thắng. Nên để nhân vật trả giá hoặc nhận lấy một điều gì đó.
   4. Nhân vật không giảng bài, không giải thích thuật ngữ trong lời kể.
   5. Độ dài: boss khoảng 140 chữ cả setup + resolve; hak / nue khoảng 130 chữ; moral đúng 1 câu.
   6. Giọng cổ ("Tương truyền…") cho hak / nue; nối thần thoại châu Âu bằng một vế ngắn "như…".
   7. Liên tuyến: Rồng, Bạch Trạch, Cửu Vĩ Hồ, Nue là MỘT nhân vật duy nhất xuyên mọi tuyến. Boss khác
      là "một cá thể của loài". Nhắc người đi trước tối đa 1 câu mỗi chặng.
   8. Không đưa thông tin cá nhân (số điện thoại, địa chỉ…) vào file — ai mở trang cũng đọc được.
   9. Giới tính: nếu chưa rõ thì viết trung tính — chỉ gọi bằng tên nhân vật, tránh "nàng"/"hắn"
      (xem Hoshino.js, Client.js). Muốn đổi sau thì tìm/thay trong file.
  10. Nhân vật Ryosuke (tác giả của web) là mối nối giữa các tuyến: nên xuất hiện ở intro (dấu vết:
      chữ khắc, lông quạ…), ở ending hoặc finale; trong 5 chặng chỉ nhắc tối đa 1 câu. Lời nhắn của
      Ryosuke ở finale viết như lời người ngoài truyện, giọng ấm, không có liên lạc cá nhân.
  11. Nhân vật có thể ít nói, chậm, chưa biết chọn gì — đó cũng là thế mạnh. Đừng ép nhân vật trở
      nên hoạt ngôn để thắng; hãy tìm cách thắng hợp với tính cách thật (nghe, ngồi yên, chờ, hỏi…).
  12. Chặng N1 (Rồng): trường "moral" được phép để rỗng "" (như Airi, Ryosuke) hoặc có 1 câu (Client, Hoshino).
   ---------------------------------------------------------------------
   NỖI NIỀM GỐC GỢI Ý (đổi luật thử thách và cách hoá giải theo nhân vật của bạn)
     Tanuki : muốn lừa mà cũng muốn được tin      Kappa  : muốn được đối đãi tử tế
     Tengu  : muốn được tôn trọng, không chỉ sợ   Oni    : muốn có chỗ đứng, bị mọi nhà xua đuổi
     Rồng   : giữ cánh cửa / giữ danh, chờ được hiểu
     Rokurokubi : muốn có người kể chuyện cho mình nghe   Jorogumo : muốn có người khen tấm lưới
     Aoandon    : muốn kể trọn câu chuyện thứ một trăm    Karakasaobake : muốn có người cười cùng
     Bạch Trạch : biết tên vạn vật, mà chưa ai hỏi tên ông
     Nue : muốn được gọi trọn tên, muốn có người hỏi tiếng kêu của mình là điềm gở hay lời gọi.
        Gốc truyền thuyết: mình khỉ, thân tanuki, chân hổ, đuôi rắn; kêu như chim hét trên mái điện
        cổ; bị Minamoto no Yorimasa bắn rồi thả trôi trên thuyền rỗng. Mối nối: Chimera xứ Lycia bị
        Bellerophon bắn từ trời. Luật gợi ý: "Ta là gì?" / "đáp đủ bốn tiếng" / "kêu để báo điềm hay
        để gọi ai?" — chọn luật hợp với thế mạnh nhân vật.
   ---------------------------------------------------------------------
   CÁCH THẮNG ĐÃ DÙNG Ở CÁC TUYẾN (tránh lặp; hãy nghĩ một cách mới hợp nhân vật)
     Airi    : mặc cả đa ngôn ngữ, cúi chào đúng nhịp, nhún mình đúng lúc, bát cơm hoà giải, điệu múa
     Ryosuke : im lặng, một chữ nặng, không biện hộ, nghe hết cái danh bị đọc
     Tabito (Client) : "tôi là lữ khách", nhận mình nhầm, câu trọn nghĩa, chọn lời còn ngập ngừng, ngồi nghe suốt đêm
     Hoshino : soi lá dưới sao thật, "tôi chưa biết", chờ đúng gió, ngồi cạnh không nói, nét chì xoá được
     Bạch Trạch — đã hỏi: tên của ông / chọn lời của kẻ khác / câu hỏi mọc từ câu trả lời / con đường ông thích
     Nue — đã dùng: bốn tiếng / "Ta là gì?" (không chọn phần nào) / "báo điềm hay gọi ai?" / đưa chì cho nó tự nối
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
   finale          : (tuỳ chọn) LỜI NHẮN cuối — sau khi thắng N1 và đọc hết phần thưởng Cửu Vĩ Hồ, lời nhắn hiện
                     giữa màn hình, chạy từng chữ (bấm để bỏ qua). resolve: mảng đoạn văn, {q:"..."} = trích dẫn.
                     Chỉ hiện 1 lần, sau đó có nút đọc lại.
   yokai           : 四妖 Tiểu yêu quái — title, tagline, intro, monsters{rokurokubi|jorogumo|aoandon|karakasaobake:
                     {title,place,setup,resolve,moral}}  — setup luôn hiện; resolve+moral hiện sau khi
                     thắng quyết đấu CHÍNH yêu quái đó.  Ảnh: img/game/<id>.jpg  Dấu: img/game/<id>1.png
   hak             : (tuỳ chọn) truyện Bạch Trạch — title, place, setup, resolve, moral
   nue             : (tuỳ chọn) truyện Nue (thay cho Yukionna cũ) — cùng cấu trúc với hak:
                     title, place, setup, resolve, moral.
                     Game cần đọc story.nue (trước đây là story.yuki).
   ===================================================================== */
window.FUSOU_STORY=window.FUSOU_STORY||{};
window.FUSOU_STORY["TênMới"]={
  "title": "TênMới · Danh hiệu",
  "tagline": "Một câu dẫn ngắn…",
  "greet": "Lời chào {name} ~",
  "sub": "ようこそ、TênMới さん。今日も一緒に頑張ろう！",
  "intro": [
    "Đoạn mở đầu thứ nhất…",
    {
      "q": "« Một đoạn trích dẫn, ví dụ lời của người dẫn đường… »"
    },
    "Đoạn mở đầu cuối…"
  ],
  "bosses": {
    "n5": {
      "name": "Tanuki",
      "title": "Danh hiệu boss",
      "place": "Địa điểm",
      "setup": "Boss là ai, muốn gì, luật thử thách của nó…",
      "resolve": "Thế mạnh của nhân vật hoá giải luật ấy ra sao; có trả giá hay để lại gì không…",
      "moral": "Câu chốt thỏa ước.",
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
      "title": "Danh hiệu boss",
      "place": "Địa điểm",
      "setup": "Boss là ai, muốn gì, luật thử thách của nó…",
      "resolve": "Thế mạnh của nhân vật hoá giải luật ấy ra sao; có trả giá hay để lại gì không…",
      "moral": "Câu chốt thỏa ước.",
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
      "title": "Danh hiệu boss",
      "place": "Địa điểm",
      "setup": "Boss là ai, muốn gì, luật thử thách của nó…",
      "resolve": "Thế mạnh của nhân vật hoá giải luật ấy ra sao; có trả giá hay để lại gì không…",
      "moral": "Câu chốt thỏa ước.",
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
      "title": "Danh hiệu boss",
      "place": "Địa điểm",
      "setup": "Boss là ai, muốn gì, luật thử thách của nó…",
      "resolve": "Thế mạnh của nhân vật hoá giải luật ấy ra sao; có trả giá hay để lại gì không…",
      "moral": "Câu chốt thỏa ước.",
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
      "title": "Danh hiệu boss",
      "place": "Địa điểm",
      "setup": "Boss là ai, muốn gì, luật thử thách của nó…",
      "resolve": "Thế mạnh của nhân vật hoá giải luật ấy ra sao; có trả giá hay để lại gì không…",
      "moral": "Câu chốt thỏa ước.",
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
    "Đoạn kết khi đủ 5 dấu son…"
  ],
  "kyubi": {
    "title": "Hồ ly chín đuôi · Danh hiệu",
    "place": "Đỉnh núi cuối cùng của Fusō",
    "setup": [
      "Gặp hồ ly — luôn hiện…"
    ],
    "resolve": [
      "Hồ ly đồng hành cùng bạn…"
    ],
    "moral": "Câu chốt."
  },
  "yokai": {
    "title": "Tiêu đề thẻ 四妖",
    "tagline": "Câu dẫn ngắn dưới tiêu đề thẻ…",
    "intro": [
      "Đoạn mở đầu của thẻ…",
      {
        "q": "« Một đoạn trích dẫn… »"
      }
    ],
    "monsters": {
      "rokurokubi": {
        "title": "Danh hiệu",
        "place": "Địa điểm",
        "setup": [
          "Yêu quái là ai, muốn gì, luật thử thách — luôn hiện…"
        ],
        "resolve": [
          "Thế mạnh nhân vật hoá giải ra sao — chỉ hiện sau khi thắng quyết đấu chính yêu quái đó…"
        ],
        "moral": "Câu chốt."
      },
      "jorogumo": {
        "title": "Danh hiệu",
        "place": "Địa điểm",
        "setup": [
          "Yêu quái là ai, muốn gì, luật thử thách — luôn hiện…"
        ],
        "resolve": [
          "Thế mạnh nhân vật hoá giải ra sao — chỉ hiện sau khi thắng quyết đấu chính yêu quái đó…"
        ],
        "moral": "Câu chốt."
      },
      "aoandon": {
        "title": "Danh hiệu",
        "place": "Địa điểm",
        "setup": [
          "Yêu quái là ai, muốn gì, luật thử thách — luôn hiện…"
        ],
        "resolve": [
          "Thế mạnh nhân vật hoá giải ra sao — chỉ hiện sau khi thắng quyết đấu chính yêu quái đó…"
        ],
        "moral": "Câu chốt."
      },
      "karakasaobake": {
        "title": "Danh hiệu",
        "place": "Địa điểm",
        "setup": [
          "Yêu quái là ai, muốn gì, luật thử thách — luôn hiện…"
        ],
        "resolve": [
          "Thế mạnh nhân vật hoá giải ra sao — chỉ hiện sau khi thắng quyết đấu chính yêu quái đó…"
        ],
        "moral": "Câu chốt."
      }
    }
  },
  "hak": {
    "title": "Danh hiệu Bạch Trạch",
    "place": "Tháp mười tầng trong mây",
    "setup": [
      "Tương truyền… luật thử thách của Bạch Trạch, đặt theo thế mạnh nhân vật — luôn hiện…"
    ],
    "resolve": [
      "Nhân vật hoá giải ra sao — hiện khi đã nhận ấn Bạch Trạch…"
    ],
    "moral": "Câu chốt."
  },
  "nue": {
    "title": "Danh hiệu Nue",
    "place": "Mái điện cổ dưới mây đen",
    "setup": [
      "Tương truyền Nue (mình khỉ, thân tanuki, chân hổ, đuôi rắn; tiếng kêu bị coi là điềm gở) + luật thử thách đặt theo thế mạnh nhân vật — luôn hiện…"
    ],
    "resolve": [
      "Nhân vật hoá giải ra sao — hiện khi đã nhận ấn Nue…"
    ],
    "moral": "Câu chốt."
  },
  "finale": {
    "resolve": [
      "Lời nhắn cuối — hiện giữa màn hình sau phần thưởng Cửu Vĩ Hồ. Không ghi thông tin cá nhân.",
      {
        "q": "« Một đoạn trích dẫn… »"
      }
    ]
  }
};
/* Dùng: copy file này, đổi tên thành <TênĐăngNhập>.js, đổi "TênMới" ở dòng window.FUSOU_STORY[...] cho khớp. */
