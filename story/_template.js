/* =====================================================================
   story/TênMới.js — CỐT TRUYỆN CỦA NHÂN VẬT "TênMới"
   Tên file = tên người dùng (đúng hoa/thường) trong USERS của index.html.
   Web tự nạp file này sau khi đăng nhập; game 朱印帖 > 地図 sẽ hiển thị.
   ---------------------------------------------------------------------
   QUY TẮC VĂN PHONG (thần thoại) — đọc trước khi viết
   1. Phép thử: xoá hết chữ Nhật mà đoạn văn vẫn đọc ra thần thoại. Nếu không, viết lại.
   2. Trong intro / setup / resolve / moral / ending: KHÔNG dùng kana, kanji, thành ngữ hay
      từ vựng tiếng Nhật. Chỉ dùng tên riêng viết romaji (Tanuki, Yukionna, Ame-no-Uzume…).
      Chủ đề học (N5→N1, trạng từ, thành ngữ, từ tượng thanh…) chỉ nằm ở duel / train và
      trong game; trong truyện chỉ ẩn dụ bằng tính cách và hành động.
   3. Mỗi boss / yêu quái = một nỗi niềm (nó muốn gì) + một hành động hoá giải (nhân vật làm gì).
      Mỗi nhân vật nên thắng bằng cách khác nhau, và nên để lại / trả giá một điều gì đó.
      Đừng để nhân vật thắng chỉ nhờ "khí chất" lặp lại ở mọi chặng.
   4. Nhân vật không giảng bài. Không giải thích thuật ngữ trong lời kể.
   5. Độ dài: setup 1–2 đoạn, resolve 1–2 đoạn, mỗi đoạn tối đa khoảng 4 câu; moral đúng 1 câu.
   6. Liên tuyến: Rồng, Bạch Trạch, Cửu Vĩ Hồ, Yukionna là MỘT nhân vật duy nhất xuyên mọi tuyến.
      Boss khác là "một cá thể của loài". Nhắc người đi trước tối đa 1 câu mỗi chặng.
   7. Không đưa thông tin cá nhân (số điện thoại, địa chỉ…) vào file — ai mở trang cũng đọc được.
   ---------------------------------------------------------------------
   NỖI NIỀM GỐC GỢI Ý (đổi cách hoá giải theo nhân vật của bạn)
     Tanuki : muốn lừa mà cũng muốn được tin      Kappa  : muốn được đối đãi tử tế
     Tengu  : muốn được tôn trọng, không chỉ sợ   Oni    : muốn có chỗ đứng, bị mọi nhà xua đuổi
     Rồng   : giữ cánh cửa / giữ danh, chờ được hiểu
     Rokurokubi : muốn có người kể chuyện cho mình nghe   Jorogumo : muốn có người khen tấm lưới
     Aoandon    : muốn kể trọn câu chuyện thứ một trăm    Karakasaobake : muốn có người cười cùng
     Bạch Trạch : biết tên vạn vật                        Yukionna : biết tiếng của vạn vật
        (truyền thuyết gốc: tha mạng với điều kiện im lặng, kẻ kia thất hứa → bà không tin lời hứa;
         hợp với Skaði — nữ thần núi tuyết không chung nổi tiếng động với thần biển)
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
   finale   : (tuỳ chọn) màn Quyết đấu Diêm Ma sau N1 — setup (lời dẫn), resolve (lời kết khi thắng).
              Bỏ trống "name" và "setup" để dùng mặc định.
   yokai    : (tuỳ chọn) 四妖 — thẻ lớn 4 yêu quái hiện ra khi bấm vào ảnh Cửu Vĩ Hồ.
       title, tagline, intro (mảng đoạn như intro ở trên)
       monsters: { rokurokubi | jorogumo | aoandon | karakasaobake : { title, place, setup, resolve, moral } }
       setup luôn hiện; resolve + moral CHỈ hiện sau khi đã khuất phục Cửu Vĩ Hồ.
       Ảnh:  img/game/<id>.jpg   Dấu: img/game/<id>1.png   (id = tên bên trên)
   hak      : (tuỳ chọn) truyện Bạch Trạch — title, place, setup, resolve (hiện khi đã có ấn), moral
   yuki     : (tuỳ chọn) truyện Yukionna — cùng cấu trúc với hak.
              Chủ đề trạng từ / từ tượng thanh / tượng hình CHỈ nằm ở game; trong truyện chỉ viết về
              "tiếng của vạn vật" và nỗi đau của bà, không nêu thuật ngữ, không liệt kê từ.
   ===================================================================== */
window.FUSOU_STORY=window.FUSOU_STORY||{};
window.FUSOU_STORY["TênMới"]={
  "title": "TênMới · Danh hiệu",
  "tagline": "Một câu dẫn ngắn…",
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
      "setup": "Boss là ai, muốn gì, đang canh giữ điều gì…",
      "resolve": "Nhân vật làm gì để hoá giải nỗi niềm của boss; có trả giá hay để lại gì không…",
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
      "setup": "Boss là ai, muốn gì, đang canh giữ điều gì…",
      "resolve": "Nhân vật làm gì để hoá giải nỗi niềm của boss; có trả giá hay để lại gì không…",
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
      "setup": "Boss là ai, muốn gì, đang canh giữ điều gì…",
      "resolve": "Nhân vật làm gì để hoá giải nỗi niềm của boss; có trả giá hay để lại gì không…",
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
      "setup": "Boss là ai, muốn gì, đang canh giữ điều gì…",
      "resolve": "Nhân vật làm gì để hoá giải nỗi niềm của boss; có trả giá hay để lại gì không…",
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
      "setup": "Boss là ai, muốn gì, đang canh giữ điều gì…",
      "resolve": "Nhân vật làm gì để hoá giải nỗi niềm của boss; có trả giá hay để lại gì không…",
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
  "yokai": {
    "title": "Tiêu đề thẻ 四妖",
    "tagline": "Câu dẫn ngắn dưới tiêu đề thẻ…",
    "intro": ["Đoạn mở đầu của thẻ…", {"q": "« Một đoạn trích dẫn… »"}],
    "monsters": {
      "rokurokubi":    {"title": "Danh hiệu", "place": "Địa điểm", "setup": ["Yêu quái là ai, muốn gì — luôn hiện…"], "resolve": ["Nhân vật hoá giải ra sao — chỉ hiện sau khi khuất phục Cửu Vĩ Hồ…"], "moral": "Câu chốt."},
      "jorogumo":      {"title": "Danh hiệu", "place": "Địa điểm", "setup": ["…"], "resolve": ["…"], "moral": ""},
      "aoandon":       {"title": "Danh hiệu", "place": "Địa điểm", "setup": ["…"], "resolve": ["…"], "moral": ""},
      "karakasaobake": {"title": "Danh hiệu", "place": "Địa điểm", "setup": ["…"], "resolve": ["…"], "moral": ""}
    }
  },
  "hak": {
    "title": "Danh hiệu Bạch Trạch",
    "place": "Địa điểm",
    "setup": ["Đoạn dẫn — luôn hiện…"],
    "resolve": ["Diễn biến — hiện khi đã nhận ấn Bạch Trạch…"],
    "moral": "Câu chốt."
  },
  "yuki": {
    "title": "Danh hiệu Yukionna",
    "place": "Sân tuyết sau tháp mười tầng",
    "setup": ["Truyền thuyết Yukionna (lời hứa im lặng bị phá) — luôn hiện…", "Vì sao bà chờ chính nhân vật này — nối với nỗi đau của bà, không nêu thuật ngữ…"],
    "resolve": ["Diễn biến — hiện khi đã nhận ấn Yukionna…"],
    "moral": "Câu chốt."
  },
  "ending": [
    "Đoạn kết khi đủ 5 dấu son…"
  ],
  "finale": {
    "setup": ["(Tuỳ chọn) Lời dẫn trước màn Quyết đấu Diêm Ma. Bỏ trống để dùng câu mặc định."],
    "resolve": ["Lời kết hiện sau khi thắng Diêm Ma (màn tuỳ chọn sau N1). Không ghi thông tin cá nhân."]
  }
};
/* Dùng: copy file này, đổi tên thành <TênNgườiDùng>.js, đổi "TênMới" ở dòng window.FUSOU_STORY[...] cho khớp. */
