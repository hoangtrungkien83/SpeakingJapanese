/* =====================================================================
   story/TênMới.js — CỐT TRUYỆN CỦA NHÂN VẬT "TênMới"
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
   finale   : (tuỳ chọn) màn Quyết đấu Diêm Ma sau N1 — name, setup (lời dẫn), resolve (lời kết khi thắng)
   yokai    : (tuỳ chọn) 四妖 — thẻ lớn 4 yêu quái hiện ra khi bấm vào ảnh Cửu Vĩ Hồ.
       title, tagline, intro (mảng đoạn như intro ở trên)
       monsters: { rokurokubi | jorogumo | aoandon | karakasaobake : { title, place, setup, resolve, moral } }
       setup luôn hiện; resolve + moral CHỈ hiện sau khi đã khuất phục Cửu Vĩ Hồ.
       Ảnh:  img/game/<id>.jpg   Dấu: img/game/<id>1.png   (id = tên bên trên)
   hak      : (tuỳ chọn) truyện Bạch Trạch — title, place, setup, resolve (hiện khi đã có ấn), moral
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
      "setup": "Đoạn dẫn: boss là ai, đang canh giữ điều gì…",
      "resolve": "Diễn biến khi nhân vật vượt qua boss…",
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
      "setup": "Đoạn dẫn: boss là ai, đang canh giữ điều gì…",
      "resolve": "Diễn biến khi nhân vật vượt qua boss…",
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
      "setup": "Đoạn dẫn: boss là ai, đang canh giữ điều gì…",
      "resolve": "Diễn biến khi nhân vật vượt qua boss…",
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
      "setup": "Đoạn dẫn: boss là ai, đang canh giữ điều gì…",
      "resolve": "Diễn biến khi nhân vật vượt qua boss…",
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
      "setup": "Đoạn dẫn: boss là ai, đang canh giữ điều gì…",
      "resolve": "Diễn biến khi nhân vật vượt qua boss…",
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
      "rokurokubi":    {"title": "Danh hiệu", "place": "Địa điểm", "setup": ["Đoạn dẫn — luôn hiện…"], "resolve": ["Diễn biến — chỉ hiện sau khi khuất phục Cửu Vĩ Hồ…"], "moral": "Câu chốt."},
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
  "ending": [
    "Đoạn kết khi đủ 5 dấu son…"
  ],
  "finale": {
    "name": "閻魔",
    "setup": ["(Tuỳ chọn) Lời dẫn trước màn Quyết đấu Diêm Ma. Bỏ trống để dùng câu mặc định."],
    "resolve": ["Lời kết hiện sau khi thắng Diêm Ma (màn tuỳ chọn sau N1)."]
  }
};
/* Dùng: copy file này, đổi tên thành <TênNgườiDùng>.js, đổi "TênMới" ở dòng window.FUSOU_STORY[...] cho khớp. */
