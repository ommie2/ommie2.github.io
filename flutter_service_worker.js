'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a41818285d730180d5ac36ef473f52b3",
"index.html": "cb5c30d86ea149d95c69a21ab40452cd",
"/": "cb5c30d86ea149d95c69a21ab40452cd",
"main.dart.js": "474972ca97f0d166cca04b6e6faa34ee",
"favicon.png": "58165c330997cb57ec16036c5ab79460",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "810737a8430416dd7aba2f9375e21d4f",
"assets/AssetManifest.json": "99423adb2426d6573652fff36305ef04",
"assets/NOTICES": "ffc7b95b8479f3dc41947c4ce9252fbb",
"assets/lang/de.json": "3d29a75fcf0ed7dfff86d3db8f92fc69",
"assets/lang/en.json": "969ad5e58fa581d7e918a1047581ecf2",
"assets/lang/it.json": "3d29a75fcf0ed7dfff86d3db8f92fc69",
"assets/lang/fr.json": "3d29a75fcf0ed7dfff86d3db8f92fc69",
"assets/lang/es.json": "3d29a75fcf0ed7dfff86d3db8f92fc69",
"assets/FontManifest.json": "684bb588a3a2c90050b6892cb364aeba",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/img_user.png": "9fcf2f9c2cf98d0fb7dfb71275963065",
"assets/assets/images/3x/img_user.png": "82413282b5d6f923464983f044711d48",
"assets/assets/images/3x/img_email.png": "48e59d21d77b8f947210a532c14bd88c",
"assets/assets/images/3x/ic_notification.png": "cba7073d24799bb1c97eedbe574d952c",
"assets/assets/images/3x/radio_checked.png": "951507d3107b021b68d4bd91ca3feb82",
"assets/assets/images/3x/ic_user.png": "82413282b5d6f923464983f044711d48",
"assets/assets/images/3x/ic_drawer_menu.png": "87b9c8e24ccb5b0a99641d38102abca4",
"assets/assets/images/3x/ic_add.png": "e42a16d652dc06257dabd0e0c7007ffa",
"assets/assets/images/3x/ic_splash.png": "8270f6e4120904c50ae8dfd4bdcc4898",
"assets/assets/images/3x/img_feed.png": "e135c25f25ac494f0da384ffad696217",
"assets/assets/images/3x/ic_profile.png": "60ccb5be758aa6403bef87d92384c1a2",
"assets/assets/images/3x/ic_edit.png": "42712ce39565fbe4c7199093cb3d2a16",
"assets/assets/images/3x/ic_verify_account.png": "50529715edbd023cba9dda6a92af1f01",
"assets/assets/images/3x/ic_back.png": "833fe22b733495c5d4f9db26f0de81e7",
"assets/assets/images/3x/ic_sub_dimaond.png": "5a3a01c38556d4421c8b2a77397968e6",
"assets/assets/images/3x/img_home_hero.png": "c6cb15dea09a6c07e7d1d7295ed6d582",
"assets/assets/images/3x/ic_add_image.png": "5e93429c38258b7b5ba10fe42caccbc6",
"assets/assets/images/3x/on_boarding.png": "203bc393a607c46cd5f964afd6848493",
"assets/assets/images/3x/ic_temp_map_pin.png": "5746615707dab342451c5bd54b3a6091",
"assets/assets/images/3x/img_heros.png": "28cf3864be033999843512b79f9e28c5",
"assets/assets/images/feed_post.png": "80b0cb7c45f30dc9d6f25dc870f346cc",
"assets/assets/images/img_email.png": "6c07aa1317d931268e4b0db0b8c2f3f4",
"assets/assets/images/ic_notification.png": "49a1fdb0347dd7c2c2f9b77c536e5ad7",
"assets/assets/images/radio_checked.png": "f52af22639febda347cc82a2f52ba706",
"assets/assets/images/ic_user.png": "9fcf2f9c2cf98d0fb7dfb71275963065",
"assets/assets/images/ic_drawer_menu.png": "87a5978834662a35b518f7ca21e5d50f",
"assets/assets/images/ic_photo.png": "40839cb9b5d0859392494e5674284905",
"assets/assets/images/ic_add.png": "4cd1be54334712f223950a66ed2bf72c",
"assets/assets/images/ic_splash.png": "a481cc48fee51b5bb3e2690cebb5da93",
"assets/assets/images/img_feed.png": "1d4fb0f248f4732fa02cd9d7cc729b7c",
"assets/assets/images/ic_profile.png": "aa961586e81b86941604a87fa5552bd0",
"assets/assets/images/ic_edit.png": "d5abc3acf79565a46ba0aaccab34411e",
"assets/assets/images/ic_verify_account.png": "6568afc3032826c31cb8fc62af875857",
"assets/assets/images/ic_back.png": "34dbe35e77cee58f2abcebc56519958d",
"assets/assets/images/ic_sub_dimaond.png": "bf91acf0f40c70dd5df57f9739e49a66",
"assets/assets/images/img_home_hero.png": "51e8740aa3610bc0e358addfc62f5f73",
"assets/assets/images/ic_add_image.png": "c5ebdb0d88fcf6acaf3060fbe49d7e7c",
"assets/assets/images/user_web.png": "4b05c5ba7e971cbdbd253f448c0b295e",
"assets/assets/images/map_dummy.png": "96b3374b99b4e4585b6d4b5807c5f578",
"assets/assets/images/2x/img_user.png": "9717262ed6db44c9702b9f3ec476c13a",
"assets/assets/images/2x/feed_post.png": "513aa2f91ff13deb9c7e6adde9b9c9b7",
"assets/assets/images/2x/img_email.png": "aeba31b0d766fafdee462bfa62827dbd",
"assets/assets/images/2x/ic_notification.png": "9591848956ad58dd41877acb4b0c6e72",
"assets/assets/images/2x/radio_checked.png": "84981eac68ae6e0fa9b9f4859dac1781",
"assets/assets/images/2x/ic_user.png": "9717262ed6db44c9702b9f3ec476c13a",
"assets/assets/images/2x/ic_drawer_menu.png": "f06f0d95527ba42c2dcafd4cfe008d13",
"assets/assets/images/2x/ic_photo.png": "ad73fce017fa91050432f948ead6abce",
"assets/assets/images/2x/ic_add.png": "7265cf8355061f908d6628c1df8a9353",
"assets/assets/images/2x/ic_splash.png": "c457eba6a9f07fa0ea638ccf59f671fd",
"assets/assets/images/2x/img_feed.png": "2abaec9bb76d025edfb69d91eca8b189",
"assets/assets/images/2x/ic_profile.png": "91411ecc9481038ad7cb797f1bec3a41",
"assets/assets/images/2x/ic_edit.png": "f19ebaa72ae7b31c6c7193069eeec97d",
"assets/assets/images/2x/ic_verify_account.png": "1e0a7d172c74dd0facde173f0cbdf0fc",
"assets/assets/images/2x/ic_back.png": "ab26d3a279a3eb2242d67f32dd2550cf",
"assets/assets/images/2x/ic_sub_dimaond.png": "d1bd8cf9351d2f4f5a35a3a49b57182f",
"assets/assets/images/2x/img_home_hero.png": "b4fa26ade952011d0480f683601831aa",
"assets/assets/images/2x/ic_add_image.png": "b7506ca06802bf5c09a6743c9df5063b",
"assets/assets/images/2x/user_web.png": "0e6d8d4712c72bc3e1af01ec95485ad5",
"assets/assets/images/2x/on_boarding.png": "f4d3bf196d9ced43bc316cac0d566f97",
"assets/assets/images/2x/ic_temp_map_pin.png": "1ab804d6ae0f18ed2bcc20c46e781c44",
"assets/assets/images/2x/img_heros.png": "08014fee03a7b7eed545d28541532ba5",
"assets/assets/images/on_boarding.png": "5d0ce8b90657fc3f781f9297d1c7b8d7",
"assets/assets/images/ic_temp_map_pin.png": "addcf6f135b016d1f8603fa450fe7e97",
"assets/assets/images/img_heros.png": "61a41bf2e05e0a0edf9dd0fb7c6bbd69",
"assets/assets/svg_images/img_contact_info.svg": "86db183a8a8620636d1e655f0d5151f7",
"assets/assets/svg_images/add_post.svg": "993ef4bc800cca416d838271a26540cd",
"assets/assets/svg_images/img_gals.svg": "f4f084f9bbdbfe83b615e106712bb096",
"assets/assets/svg_images/img_pin.svg": "d8421693d58c8c085cdcb4957f937f8a",
"assets/assets/svg_images/add_photo.svg": "f3fae67bc0b7a144ba7279af9e5e4303",
"assets/assets/svg_images/ic_my_order.svg": "f611c56f42c5f25c2e1ffd77fcd68c8c",
"assets/assets/svg_images/ic_filter.svg": "2c13be82a7e68125627b20eaabb19ff5",
"assets/assets/svg_images/gender_male_inactive.svg": "3140abc56c7afe28a21c3453468e413b",
"assets/assets/svg_images/img_earned_point.svg": "594f454f7e3395d1bc0d8e87a6f30bd6",
"assets/assets/svg_images/img_skill.svg": "8964fe40d3bf3a9a6de00aadd4254bf0",
"assets/assets/svg_images/ic_share.svg": "e83298bfecd0159c6f5a403b0da3b1b7",
"assets/assets/svg_images/ic_cart.svg": "2519298d0938d406d20b758cf9edd787",
"assets/assets/svg_images/menu_setting.svg": "dfcc67f0c78727434d6d800e1c0ae41f",
"assets/assets/svg_images/ic_video_active.svg": "4f7e1292b95974cf3bc290ee4b72d2a9",
"assets/assets/svg_images/ic_gaming_active.svg": "c7221a877b9fb1e291f0d103a9dc1a1a",
"assets/assets/svg_images/ic_cc_setting.svg": "5d26b4c9dcffc1bc3cbffcb2f1a28571",
"assets/assets/svg_images/ic_gaming_inactive.svg": "38f78f4df0837148cbba43722b5cc3e0",
"assets/assets/svg_images/ic_setting_sq.svg": "2c13be82a7e68125627b20eaabb19ff5",
"assets/assets/svg_images/ic_facebook.svg": "eaef7fb2f7aade6b9722a44e8cdc9dc0",
"assets/assets/svg_images/img_wifi.svg": "290a192208b0c8d353c364da811651be",
"assets/assets/svg_images/img_point.svg": "bd5e44f0175b3bb0ec9922bc1f2dc30d",
"assets/assets/svg_images/ic_subscribe_web.svg": "d5b26894efb12a0bb94c4dfa9f15cd99",
"assets/assets/svg_images/img_info.svg": "bd168824feb36ea8e79e2da1836a5b53",
"assets/assets/svg_images/img_edits.svg": "4607dca86609e7c6635276cb9b7100ec",
"assets/assets/svg_images/ic_delete.svg": "f4294c34706132705c23ad77b4840648",
"assets/assets/svg_images/ic_pause.svg": "69c1be2b43e2c8f95d0d7bb6386ae41a",
"assets/assets/svg_images/menu_home.svg": "708f0d8049edd6859e42010182885f4b",
"assets/assets/svg_images/ic_plus.svg": "a212f3e189c286536465600d3a9b3b8f",
"assets/assets/svg_images/ic_experince.svg": "814ed728e37fde02ab761b66c745586b",
"assets/assets/svg_images/ic_arts_inactive.svg": "7939fe412a6610c00f2edf28f2eca3e3",
"assets/assets/svg_images/ic_check_web.svg": "df507a787cce86c9e5c1e381eeaa653f",
"assets/assets/svg_images/ic_bag_post.svg": "e4ea8266acc94106590438976b7cbd28",
"assets/assets/svg_images/ic_timer.svg": "071908eebc7099064e48f189b20dd348",
"assets/assets/svg_images/ic_apple.svg": "d46694fbc01c0a1aba4ec623076d80c0",
"assets/assets/svg_images/img_congratulations.svg": "1a7676ba0bd0ce892e4889798ae7f170",
"assets/assets/svg_images/img_gps.svg": "5b3b3619a43740c626bcba46c93ccf77",
"assets/assets/svg_images/bottom_home.svg": "8b9afe453dab59b6203b05c891698882",
"assets/assets/svg_images/menu_subscription.svg": "40a1403e5a29b125f18cbe528a15fe2e",
"assets/assets/svg_images/ic_checkbox.svg": "eaf9c1d6db3d8fc2d35d07e6cf02cb4f",
"assets/assets/svg_images/img_contact_us.svg": "3c732cb848a05f00abb11d5698188683",
"assets/assets/svg_images/ic_cart_plus.svg": "7fb237da33d62a38e78370deffe98adc",
"assets/assets/svg_images/img_camera.svg": "a39c00b1066ecafa5ccc570c28b9f364",
"assets/assets/svg_images/round_right_arrow.svg": "6c022db0565d653dd7c3fa6a423b5639",
"assets/assets/svg_images/img_play_round.svg": "327fe041eb002af33090686707e58d16",
"assets/assets/svg_images/ic_camera.svg": "994b876e09d2b80ba30f41958658783d",
"assets/assets/svg_images/img_check_yellow.svg": "01291e7c36ce1a1fc561b5721032ea21",
"assets/assets/svg_images/ic_smile.svg": "655834df0a0ac079e474230ce04fc5b6",
"assets/assets/svg_images/ic_language.svg": "464bb0e67184684f335fc7b21db8e076",
"assets/assets/svg_images/ic_setting.svg": "42c28e90c3f394c5a30a6fecfa73485c",
"assets/assets/svg_images/ic_shuffix.svg": "079d62580cef014cb2bf3ab6ca77e93a",
"assets/assets/svg_images/gal_web.svg": "cca302cd657e82d274e0803be43f3f1f",
"assets/assets/svg_images/ic_checkbox_blue.svg": "9e910ead57ddbca1ceb496521a28fa28",
"assets/assets/svg_images/ic_notification_badge.svg": "c5396829c82eef1b40e7478c7edfcf41",
"assets/assets/svg_images/ic_correct_white.svg": "0f8bc570b117b5d27369be38eda53c18",
"assets/assets/svg_images/img_avatar.svg": "1838a1a16612e85ccb4432d1a7601a86",
"assets/assets/svg_images/menu_terms.svg": "bb10ac8dbe83d2e086e2de7d9fcdba8c",
"assets/assets/svg_images/menu_change_color.svg": "0bbd270b86e26765a5329f6f4bb8148f",
"assets/assets/svg_images/ic_map_marker_bg.svg": "d42fdd7b72dd3b72a69d775b032dc757",
"assets/assets/svg_images/ic_wallet_start.svg": "079e1365fe611d42994032566a661d3f",
"assets/assets/svg_images/img_arrow_forward.svg": "691664e4f4d50eed2ddb9361de46a8f2",
"assets/assets/svg_images/img_delete.svg": "5cf52e7b051398d10af4edbfd456125b",
"assets/assets/svg_images/ic_media.svg": "99d6a1bdef0027d0fa4243d3a33cd91c",
"assets/assets/svg_images/round_left_arrow.svg": "d186d56879c226902776769101024acc",
"assets/assets/svg_images/img_like.svg": "ba9ca5a3c0dbc8b83a2736a89fb11f0d",
"assets/assets/svg_images/ic_signout.svg": "adfa2010938a2b37877eff40849bf0cd",
"assets/assets/svg_images/gender_female_inactive.svg": "f4546fa5afff0943b1cd8a171d8851bb",
"assets/assets/svg_images/gender_other_active.svg": "657e4dae469ba6cbb5b9de2d6eb128bc",
"assets/assets/svg_images/img_dots.svg": "15d5e670a9c38a985b545962d6f1f3f1",
"assets/assets/svg_images/img_check.svg": "75e1ec700c93bf71745260501164ca58",
"assets/assets/svg_images/img_gal.svg": "a60a17ec7b7ee0e5826e4577959779f3",
"assets/assets/svg_images/ic_level_check.svg": "75e1ec700c93bf71745260501164ca58",
"assets/assets/svg_images/ic_superhero.svg": "7765a420cd54abe2465be23898e3a754",
"assets/assets/svg_images/post_job.svg": "e8457f464aea5396c755231897f2db0c",
"assets/assets/svg_images/ic_building.svg": "d35ba00333dba5366a0a7ec453f041a9",
"assets/assets/svg_images/img_points.svg": "9e941657b8baed4285fa2ed7cbb5c234",
"assets/assets/svg_images/img_amzon_coupon.svg": "fb055154b5b52cb2acb2b16150728bd5",
"assets/assets/svg_images/ic_google.svg": "96280cb24ff82f3b1db3a27b83e363b4",
"assets/assets/svg_images/img_check_white.svg": "6db4464e3f32f65fbef60ab5c0c6cc4e",
"assets/assets/svg_images/ic_search_white.svg": "e15007834c714467fc1793f5489c3a0b",
"assets/assets/svg_images/menu_feeds.svg": "e60207c3f5205acb20db9a6c339d80ee",
"assets/assets/svg_images/img_web_logo.svg": "ed34ea23d76dbe23fe6f9e50baa88328",
"assets/assets/svg_images/ic_edit_web.svg": "e3ca1a87f5908421439ce929d8b84a5f",
"assets/assets/svg_images/img_comment.svg": "bd9e2cb17164caeabf319b273b8858c5",
"assets/assets/svg_images/ic_password_visible.svg": "e8c3e7bba5c5c10af4ba6b131477a17d",
"assets/assets/svg_images/img_profile.svg": "15adea3ff68c9c8bdbfb6c3342aa6afb",
"assets/assets/svg_images/menu_crypto.svg": "7d3dfcfa4994979715af6297c6ba84f3",
"assets/assets/svg_images/ic_video_inactive.svg": "4ae72a5ee8d3bec616cd8d9421f51588",
"assets/assets/svg_images/ic_filter_white.svg": "43c457c443264188ebfa58caddeecfcb",
"assets/assets/svg_images/menu_wallet.svg": "e37003e32b88419e3569bf49c9708a35",
"assets/assets/svg_images/super_hero.svg": "951f7f421274fafe4a176952f909cacb",
"assets/assets/svg_images/img_close.svg": "ef025840f7785291a0d592c7a2424ad1",
"assets/assets/svg_images/ic_click_to_add_image.svg": "5c90a185e3d9273ad03031381b313789",
"assets/assets/svg_images/menu_invite_friend.svg": "3e0e50fc2003ee67b793903cf17ef85e",
"assets/assets/svg_images/ic_arts_active.svg": "4fb15789b2a415319347fd7678a43e81",
"assets/assets/svg_images/gender_male_active.svg": "a035cc14ec871c1012a67325c7c32369",
"assets/assets/svg_images/ic_edit_small.svg": "562cb69cecb9e7a04eb46d023f2e859c",
"assets/assets/svg_images/ic_cart_fill_black.svg": "3b008e2a33786fc1900c9e8e99284b8d",
"assets/assets/svg_images/ic_next_play.svg": "ded44c43e56a852cfee244bdd341cda0",
"assets/assets/svg_images/ic_music_active.svg": "0b343c603b9d32a7404d66bd3386c7a3",
"assets/assets/svg_images/img_history.svg": "1d5f9e46d555c1732df56fd9ef4d9a33",
"assets/assets/svg_images/menu_chat.svg": "0a94457e31cb053daaa90279b88b3aac",
"assets/assets/svg_images/hero_logo.svg": "19db6648d5a0faac448e4c16a445e259",
"assets/assets/svg_images/ic_password_in_visible.svg": "bfb21720ed67111d6622c78806069ee2",
"assets/assets/svg_images/gender_female_active.svg": "bb8af378af0a339b4447f5965e19c9ed",
"assets/assets/svg_images/img_bitcoin_wallet.svg": "a9b3f111c0ca0f622da8ff94e0cad42c",
"assets/assets/svg_images/img_accepted.svg": "9d9ec166571db6a3f30c67709ac2a41c",
"assets/assets/svg_images/ic_music_inactive.svg": "0f13c3faf2d095bbb24fe800a5571c19",
"assets/assets/svg_images/ic_logo.svg": "ed34ea23d76dbe23fe6f9e50baa88328",
"assets/assets/svg_images/ic_change_pwd.svg": "ff95c762bf46a3ed96fd6eeeddce60e8",
"assets/assets/svg_images/ic_round_bag.svg": "571e4ec39fc12a72ae4bc6d753605f7d",
"assets/assets/svg_images/ic_earning.svg": "44951668613af64554cc6fb71fdae35c",
"assets/assets/svg_images/img_star.svg": "c2b344c252b69a2caab04bf6ca2ac31e",
"assets/assets/svg_images/ic_bag.svg": "fd6c7c9afcff0ae7c00196fa30749e46",
"assets/assets/svg_images/ic_repeat.svg": "ba85a83e27b5e91592df86ff07d4ca1c",
"assets/assets/svg_images/img_edit.svg": "6cac16249d721a56e72a889f45604b1e",
"assets/assets/svg_images/menu_help.svg": "be6e91296fd9cc79841535898bd74767",
"assets/assets/svg_images/ic_media_web.svg": "99d6a1bdef0027d0fa4243d3a33cd91c",
"assets/assets/svg_images/subscribe_menu.svg": "7d3a369b0c043c50c89206720e981c36",
"assets/assets/svg_images/radio_unchecked.svg": "dfa9adf3d2ce8f87a77497dc34a86c8b",
"assets/assets/svg_images/ic_add_white.svg": "ba802425d5b0234949f0a7b559a366b8",
"assets/assets/svg_images/ic_sos.svg": "d16606170c59bbb5922dc07958ebcc91",
"assets/assets/svg_images/ic_prev_play.svg": "d28fc6ea06250f2024e7cac4e1e3aa26",
"assets/assets/svg_images/img_pending.svg": "c6e45ceab6d2c632dcb642e58e039173",
"assets/assets/svg_images/img_edit_profile.svg": "cd00d7f735c7ad3beaf105c310bd936e",
"assets/assets/svg_images/gender_other_inactive.svg": "83b202d0c14452133be1660af6b9bcd0",
"assets/assets/svg_images/menu_e_commerce.svg": "92972327dd5bfa2290552369afe01987",
"assets/assets/svg_images/img_map_pin.svg": "cb091a010db50c53eb3c79cb2b6ba082",
"assets/assets/svg_images/img_location.svg": "a82d47d81e7f13112ae5f7d308f490e1",
"assets/assets/svg_images/img_FAQ.svg": "1ff301e3b23c8206bbe2f6629c92f1c9",
"assets/assets/svg_images/img_dropdown.svg": "22acf7e7b00d943fad6ec203801365d4",
"assets/assets/svg_images/menu_jobs.svg": "949bbff809d28769ee1a75100a10dbb1",
"assets/assets/svg_images/menu_rate_now.svg": "38a620618ebfd531a48a8a6a888291cc",
"assets/assets/svg_images/ic_cart_minus.svg": "eb3a55a8a168b6d9dacd25c4685db0b9",
"assets/assets/svg_images/img_web_signin_avtar.svg": "21d3b9d7f4acdaf949b2b8ce03f42695",
"assets/assets/svg_images/ic_subscribe.svg": "7f1626042384bbc958151b6f4fc54d5e",
"assets/assets/svg_images/menu_task_history.svg": "0f38198b178476bee11e13d494c3a82d",
"assets/assets/svg_images/img_uncheck_light_grey.svg": "6477176909b63dda51f668f04bba6a4e",
"assets/assets/map_styles/light_style.txt": "98b9292ca35bf7486c8efccd45c57145",
"assets/assets/map_styles/dark_style.txt": "3d43210a46424b224b8599359e3d75eb",
"assets/assets/fonts/Montserrat-LightItalic.ttf": "01c4560c9c15069b6700ce7ad2e49a9c",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/Montserrat-BoldItalic.ttf": "1b38414956c666bd1df78fe5b9c84756",
"assets/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/assets/fonts/Montserrat-ThinItalic.ttf": "3c2b290f95cd5b33c3ead2911064a2ab",
"assets/assets/fonts/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/assets/fonts/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-MediumItalic.ttf": "40a74702035bf9ef19053c84ce9a58b9",
"assets/assets/fonts/Montserrat-BlackItalic.ttf": "d9b6ba595b059fc5d48e8f52c30f73b3",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/fonts/Montserrat-ExtraLightItalic.ttf": "1170df5548b7e238df5fa14b6f1a753e",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/assets/fonts/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/assets/fonts/Montserrat-SemiBoldItalic.ttf": "83c1ec1f1db9a6416791f7d9d29536f2",
"assets/assets/fonts/Montserrat-ExtraBoldItalic.ttf": "52a50ca037f2f96fa567404dc3c5bdfb",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
