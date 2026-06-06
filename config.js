const SITE_CONFIG = {
    // الأساسيات
    pageTitle: "كلعام وانتِ بخير جنة",
    girlfriendName: "جنة",
    petName: "بت ابو جنة",
    boyName: "عمج اكيو",
    
    // تاريخ الميلاد
    birthDay: "7",
    birthMonth: "6",
    birthYear: "2005",
    
    // نصوص الخلفية
    bgNames: ["جنة💜","بت ابو جنة","heaven💌","❤️🩹","دنة🦦"],
    bgVideo: "video.mp4",
    
    // إعدادات تليجرام
    telegramBotToken: "8318379687:AAGZiSDBVYQmpaIkWwFIJ72CD1IVJqjeotA",
    telegramChatId: "545153196",
    
    // إعدادات الأغاني والكلمات المتزامنة
    songsConfig: {
        1: { src: "song1.m4a", start: 30, end: 85, lyrics: `[00:01.84] To take my love away\n[00:06.73] When I come back around, will I know what to say?\n[00:11.01] Said you won't forget my name\n[00:14.27] Not today, not tomorrow\n[00:18.87] Kinda strange, feelin' sorrow\n[00:22.65] I got change (yup), you could borrow (borrow)\n[00:27.61] When I come back around, will I know what to say?\n[00:31.77] Not today, maybe tomorrow\n[00:35.92] Open up the door, can you open up the door?\n[00:40.40] I know you said before you can't cope with any more\n[00:44.94] You told me it was war, said you'd show me what's in store\n[00:50.72] I hope it's not for sure, can you open up the door?\n[00:53.07] Did you take\n[01:02.40] My love away\n[01:10.80] From me? Me\n[01:22.51] Me\n[01:28.93] Saw your seat at the counter when I looked away\n[01:32.92] Saw you turn around, but it wasn't your face\n[01:37.20] Said, \"I need to be alone now, I'm takin' a break\"\n[01:41.49] How come when I returned, you were gone away?\n[01:45.86] I don't, I don't know why I called\n[01:52.56] I don't know you at all\n[01:56.45] I don't know you\n[02:01.81] Not at all\n[02:03.47] I don't, I don't know why I called\n[02:10.01] I don't know you at all\n[02:14.23] I don't know you\n[02:21.25] Did you take\n[02:29.35] My love away\n[02:37.81] From me? Me\n[02:53.96] And that's when you found me\n[02:57.78] I was waitin' in the garden\n[03:01.63] Contemplatin', beg your pardon\n[03:06.27] But there's a part of me that recognizes you\n[03:10.16] Do you feel it too?\n[03:13.40] When you told me it was serious\n[03:17.02] Were you serious? Mm\n[03:21.87] They told me they were only curious\n[03:26.27] Now it's serious, hm\n[03:30.86] Open up the door, can you open up the door?\n[03:34.66] I know you said before you can't cope with any more\n[03:39.01] You told me it was war, said you'd show me what's in store\n[03:43.67] I hope it's not for sure, can you open up the door?\n[04:05.84] Wringing my hands in my lap\n[04:09.81] And they tell me it's all been a trap\n[04:13.97] And you don't know if you'll make it back\n[04:18.66] I said, \"No, don't say that\"\n[04:23.02] (Wringing my hands in my lap)\n[04:27.10] (Tell me it's all been a trap)\n[04:31.36] (Don't know if you'll make it back)\n[04:36.01] (I said, \"No, don't say that\")\n[04:40.58] (Wringing my hands in my lap)\n[04:44.21] (Tell me it's all been a trap)\n[04:49.17] (Don't know if you'll make it back)\n[04:53.18] (No, don't say that)\n[04:58.10] Hm-hm\n[05:02.27] ` },
        2: { src: "song2.m4a", start: 3, end: 46, lyrics: `[00:02.52] I met her on the way to Chicago\n[00:06.33] Where she was all alone\n[00:10.01] And so was I so I asked her for her name\n[00:14.47] She smiled and looked at me\n[00:17.39] I was surprised to see\n[00:20.79] That a woman like that was really into me\n[00:23.89] She said she didn't have no man\n[00:26.52] Raised the kids the very best she can (she was lovin' me)\n[00:29.33] She told me she was all alone\n[00:31.88] Sad at home, she didn't have no phone (she was wantin' me)\n[00:34.76] She said just to give her a page\n[00:38.44] 59 was the code she gave (She was lovin' me)\n[00:39.70] She lied to you, lied to me\n[00:42.19] 'Cause she was lovin' me, lovin' me, yeah\n[00:46.82] I never would've thought she was living like that\n[00:49.98] Her words seemed so sincere\n[00:53.45] When I held her near she would tell me how she feels\n[00:58.22] It felt so real to me\n[01:00.91] This girl, she had to be\n[01:04.52] An angel sent from heaven just for me\n[01:07.59] She said she didn't have no man\n[01:10.17] Raised the kids the very best she can (She was lovin' me)\n[01:12.96] She told me she was all alone\n[01:15.44] Sad at home, she didn't have no phone (She was wantin' me)\n[01:18.41] She said just to give her a page\n[01:21.05] 59 was the code she gave\n[01:23.40] She lied to you, lied to me\n[01:25.78] 'Cause she was lovin' me, lovin' me, yeah\n[01:29.46] She tried to live a double life (she was lovin' me)\n[01:31.98] Lovin' me while she was still your wife (she was wantin' me)\n[01:34.84] She thought that lovin' me was cool\n[01:36.88] While you at work and the kids at school (she was lovin' me)\n[01:40.22] She said that it would never end\n[01:42.85] Tried to get me any way she can (she was wantin' me)\n[01:45.46] She lied to you, lied to me\n[01:47.61] 'Cause she got a family, family, yeah\n[01:51.15] Why? No, alright\n[02:01.44] \n[02:13.46] I didn't know she was already spoken for\n[02:17.13] 'Cause I'm not that kind of man\n[02:20.88] I swear that I would have never looked her way\n[02:25.44] Now I feel so much shame\n[02:28.29] And know things have to change\n[02:31.93] You should know that I'm holding her to blame\n[02:34.74] She said she didn't have no man\n[02:37.48] Raised the kids the very best she can (holdin' her to blame)\n[02:40.45] She told me she was all alone\n[02:42.73] Sad at home, she didn't have no phone (holdin' her to blame)\n[02:45.73] She said just to give her a page\n[02:49.38] 59 was the code she gave (holdin' her to blame)\n[02:50.65] She lied to you, lied to me\n[02:53.15] 'Cause she was lovin' me, lovin' me, yeah (holdin' her to blame)\n[02:56.77] She tried to live a double life\n[02:59.22] Lovin' me while she was still your wife (holdin' her to blame)\n[03:02.11] She thought that lovin' me was cool\n[03:04.51] With you at work and the kids at school (holdin' her to blame)\n[03:07.54] She said that it would never end\n[03:10.16] Tried to get me any way she can (holdin' her to blame)\n[03:12.52] She lied to you, lied to me\n[03:14.92] 'Cause she got a family, family, yeah\n[03:18.53] She said she didn't have no man\n[03:21.01] Raised the kids the very best she can (she was lovin' me)\n[03:23.97] She told me she was all alone\n[03:26.42] Sad at home, she didn't have no phone (she was lovin' me)\n[03:29.33] She said just to give her a page\n[03:32.93] 59 was the code she gave\n[03:34.38] She lied to you, lied to me\n[03:36.75] 'Cause she was lovin' me, lovin' me, yeah (she was lovin' me)\n[03:40.29] She tried to live a double life\n[03:42.84] Lovin' me while she was still your wife (she was wantin' me)\n[03:45.79] She thought that lovin' me was cool (she was lovin' me)\n[03:48.27] While you at work and the kids at school (she was lovin' me)\n[03:51.18] She said that it would never end\n[03:53.78] Tried to get me any way she can (she was wantin' me)\n[03:56.30] She lied to you, lied to me\n[03:58.53] 'Cause she got a family, family, yeah\n[04:01.88] ` },
        3: { src: "song3.m4a", start: 43, end: 77, lyrics: `[00:17.61] It was just two lovers, sittin' in the car, listening to Blonde\n[00:21.36] Fallin' for each other, pink and orange skies, feelin' super childish\n[00:25.38] No Donald Glover, missed call from my mother\n[00:29.39] Like, \"Where you at tonight?\" Got no alibi\n[00:31.37] I was all alone with the love of my life\n[00:36.11] She's got glitter for skin, my radiant beam in the night\n[00:43.43] I don't need no light to see you\n[00:48.21] Shine\n[00:52.11] It's your golden hour (oh-ooh-oh)\n[01:00.78] You slow down time\n[01:07.60] In your golden hour (oh-ooh-oh)\n[01:12.86] \n[01:16.93] \n[01:19.25] We were just two lovers, feet up on the dash, drivin' nowhere fast\n[01:23.25] Burnin' through the summer, radio on blast, make the moment last\n[01:26.95] She got solar power, minutes feel like hours\n[01:30.95] She knew she was the baddest, can you even imagine\n[01:32.68] Fallin' like I did for the love of my life?\n[01:37.42] She's got glow on her face, a glorious look in her eyes\n[01:44.52] My angel of light\n[01:47.73] I was all alone with the love of my life\n[01:52.78] She's got glitter for skin, my radiant beam in the night\n[01:59.83] I don't need no light to see you\n[02:04.50] Shine\n[02:08.43] It's your golden hour (oh-ooh-oh)\n[02:17.03] You slow down time\n[02:24.08] In your golden hour (oh-ooh-oh)\n[02:32.06] ` },
        4: { src: "song4.m4a", start: 33, end: 72, lyrics: `[00:24.92] 指切りげんまん ホラでも吹いたら\n[00:29.15] 針でもなんでも 飲ませていただき Monday\n[00:32.83] It doesn't matter if it's Sunday\n[00:37.12] 鏡よ鏡よ この世で1番\n[00:40.45] 変わることのない 愛をくれるのはだれ\n[00:45.00] No need to ask 'cause it's my darling\n[00:49.20] わたしの最後はあなたがいい\n[00:52.51] あなたとこのままおサラバするより\n[00:55.52] 死ぬのがいいわ\n[00:58.43] 死ぬのがいいわ\n[01:01.49] 三度の飯よりあんたがいいのよ\n[01:04.99] あんたとこのままおサラバするよか\n[01:07.88] 死ぬのがいいわ\n[01:10.46] 死ぬのがいいわ\n[01:13.30] それでも時々 浮つく my heart\n[01:17.13] 死んでも治らな治してみせます baby\n[01:21.34] Yeah, I ain't nothin' but your baby\n[01:25.76] 失って初めて気がつくなんて\n[01:29.39] そんなダサいこと もうしたないのよ Goodbye\n[01:33.38] Oh don't you ever say bye-bye\n[01:36.90] Yeah\n[01:38.59] わたしの最後はあなたがいい\n[01:41.16] あなたとこのままおサラバするより\n[01:44.04] 死ぬのがいいわ\n[01:47.09] 死ぬのがいいわ\n[01:50.09] 三度の飯よりあんたがいいのよ\n[01:53.33] あんたとこのままおサラバするよか\n[01:56.30] 死ぬのがいいわ\n[01:59.46] 死ぬのがいいわ\n[02:03.23] \n[02:26.49] わたしの最後はあなたがいい\n[02:29.67] あなたとこのままおサラバするより\n[02:32.79] 死ぬのがいいわ\n[02:35.45] 死ぬのがいいわ\n[02:38.30] 三度の飯よりあんたがいいのよ\n[02:41.91] あんたとこのままおサラバするよか\n[02:44.99] 死ぬのがいいわ\n[02:47.71] 死ぬのがいいわ\n[02:51.02] それでも時々浮つく my heart\n[02:54.00] そんなダサいのは もう要らないのよ bye-bye\n[02:58.63] I'll always stick with you, my baby\n[03:00.54] ` }
    },

    // الهدايا
    giftGifs: {
        1: "1.gif",
        2: "2.gif",
        3: "3.gif",
        4: "4.gif"
    },

    // ==========================================
    // نصوص وعناوين الصفحات (الأسئلة والخيارات)
    // ==========================================

    s1_title: "اكلج شي؟؟",
    s1_p: "أنتِ {name}؟",
    s1_btnYes: "يب",
    s1_btnNo: "لاع",
    s1_failMsg: "جذابة انتي مو {name}!",

    s2_title: "شلون اعرفج انتي {name}؟",
    s2_p: "اكتبي تاريخ ميلادج",
    s2_btn: "تأكيد 💌",
    s2_failMsg: "انتي مو {name} !",

    v1_title: "سؤال... 💜",
    v1_p: "بت الناصرية {name} عندي اقتراح بسيط، موافقة لو لا؟",
    v1_btnYes: "موافقة",
    v1_btnNo: "لا",
    v1_failMsg: "يلا ولي!",

    v2_title: "عظيم! 👾",
    v2_p: "تتابعين انمي لو مسلسلات واقعيه؟",
    v2_btnA: "انمي",
    v2_btnB: "مسلسلات واقعيه",

    v3a_title: "حلو! 🦦",
    v3a_p: "تتابعين هجوم العمالقه؟",
    v3a_btn1: "اي",
    v3a_btn2: "لا",

    v3b_title: "نايس 🗿",
    v3b_p: "شنو احلى تصنيف تتابعين ؟؟",
    v3b_btn1: "الاجنبي - كوري",
    v3b_btn2: "العراقي",

    vp_title: "سؤال مهم جداً ",
    vp_p: "تحبين؟",
    vp_btnYes: "لا",
    vp_btnNo: "اي",
    vp_failMsg: "يلا نچبي ولي ماكو هديه إلج",

    vm_title: "هاج السناره مالتي لعد اكليهه",
    vm_p: "كتبي رساله الي اذا عجبتج سنارتي  (للذكرى بس) ماكدر اشوفهه",
    vm_btn: "هاك الرساله",

    ve_title: "اوكي يلا نبلش بالاسئلة الاساسية 💜",
    ve_btn: "التالي",

    s3_title: "ولج باعي {petName} هاي هديه من {boyName} ",
    s3_p: "كلهعام وانتِ بخير والخ.....(ماعرف اكتب فعبرت بالتصاميم ) ، هذني هدايا مني الج، موافقة؟",
    s3_btnYes: "موافقة",
    s3_btnNo: "لا",
    s3_failMsg: "اوك يلا ولي!",

    s4_title: "هدية مني الج {name} 💜",
    s4_p: "عندي 4 هدايا الج، اختاري رقم..."
};