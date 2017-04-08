({
	init:function(){
		var me = this;
		me.zh_en = $(".zh_en");

		me.event();
	},
	event:function(){
		var me = this;
		var nn=false;
		me.zh_en.on("click",function(){
			
			if(nn==false){
				$(".zh_en a img").attr({src:"images/eng_zh.png"})
				$(".navLength .nav1").html("关于我")
				$(".navLength .nav2").html("项目集")
				$(".navLength .nav3").html("联系我")


				$(".contTopLeft .p0").html("李舒畅，")
				$(".contTopLeft .p1").html("视觉传达设计科班出身，具有良好的美术功底及艺术素养。")
				$(".contTopLeft .p2").html("13年毕业至今从业3年，从地产平面设计成功转型至UI设计。")
				$(".contTopLeft .p3").html("熟练使用：sketch、photoshop、illustator、axure。")
				$(".contTopLeft .p4").html("性格开朗，思维活跃，待人真诚，易于沟通。")
				$(".contTopLeft .p5").html("工作踏实认真，有强烈的好奇心和较强的学习能力。")

				$(".contTopLeft .p6").html("具有团队合作精神，抗压能力及稳定性好。")

				$(".bgTxet .p1").html("以下项目的UI设计从构思到执行，");
				$(".bgTxet .p2").html("自己独立完成，下面展示的是其中三个项目，");
				$(".bgTxet .p3").html("分别是一款明星社交平台，一款服装店的导购app，");
				$(".bgTxet .p4").html("一款跨境电商app。");
				$(".bgTxet .p5-1").html("");
				$(".bgTxet .p5").html("我的作品都在这里");
				$(".bgTxet .p6 img").attr({src:"images/project_zh.png"});

				$(".contBottom .hire").attr({src:"images/hire_zh.png"})
				$(".contBottom .p1 span").html("邮箱");
				$(".contBottom .p2 span").html("电话");
				$(".contBottom .p3 span").html("微信");

				$("#member li").eq(0).find(".name").html("Joshua    中国");
				$("#member li").eq(0).find(".synopsis").html("标志设计, 视觉VI设计, UI设计, 包装设计");

				$("#member li").eq(1).find(".name").html("Moennig    中国");
				$("#member li").eq(1).find(".synopsis").html("标志设计, 视觉VI设计, UI设计, 包装设计");

				$("#member li").eq(2).find(".name").html("Ruby Chika    加拿大");
				$("#member li").eq(2).find(".synopsis").html("家具环境设计，室内装饰，视觉传达设计");

				$("#member li").eq(3).find(".name").html("Richard   英国");
				$("#member li").eq(3).find(".synopsis").html("标志设计, 视觉VI设计, UI设计, 包装设计");


				$(".about1").html("工作经历 ");
				$(".about2").html("工作于美购－全球购跨境电子商务有限公司");
				$(".about3").html("");
				$(".about4").html("工作于广州炬作广告有限公司");
				$(".about5").html("");
				$(".about6").html("工作于3ti翔傲（上海）信息科技有限公司");
				$(".about7").html("");
				$(".about8").html("工作于深圳筑梦传播机构");
				$(".about9").html("软件技能");


				nn=true;
			}else{
				$(".zh_en a img").attr({src:"images/zh_en.png"})
				$(".navLength .nav1").html("About us")
				$(".navLength .nav2").html("Progects")
				$(".navLength .nav3").html("Hire us")
				$(".navLength .nav4").html("Team")

				$(".contTopLeft .p0").html("SHUCHANG LI.")
				$(".contTopLeft .p1").html("Visual communication design background. 3 years working")
				$(".contTopLeft .p2").html("experience. Skilled in the use of: sketch, Photoshop,")
				$(".contTopLeft .p3").html("illustator, axure. cheerful personality, treat people sincerely,")
				$(".contTopLeft .p4").html("easy to communicate, work conscientiously, steadfast,")
				$(".contTopLeft .p5").html("strong curiosity and strong learning ability. Has the team")
				$(".contTopLeft .p6").html("cooperation spirit, compressive ability and stability good.")

				$(".bgTxet .p1").html("UI design ofthe following projects");
				$(".bgTxet .p2").html("from the idea to the implementation, the completion of their own. ");
				$(".bgTxet .p3").html("The following is the show of which three projects。");
				$(".bgTxet .p4").html("Respectively, is a star social platform, a clothing store shopping guide app,");
				$(".bgTxet .p5-1").html("a cross-border electricity suppliers app.");
				$(".bgTxet .p5").html("Click here to check more about my works");

				$(".bgTxet .p6 img").attr({src:"images/project.png"});

				$(".contBottom .hire").attr({src:"images/hire.png"})
				$(".contBottom .p1 span").html("Email");
				$(".contBottom .p2 span").html("Phone");
				$(".contBottom .p3 span").html("WeChat");

				$("#member li").eq(0).find(".name").html("Joshua    China");
				$("#member li").eq(0).find(".synopsis").html("Logo Design, Visual Communication Design, UI Design, Package Design");

				$("#member li").eq(1).find(".name").html("Moennig    China");
				$("#member li").eq(1).find(".synopsis").html("Logo Design, Visual Communication Design, UI Design, Package Design");

				$("#member li").eq(2).find(".name").html("Ruby Chika    Canada");
				$("#member li").eq(2).find(".synopsis").html("Home Staging, Interior Decoration, Visual Communication Design ");

				$("#member li").eq(3).find(".name").html("Richard   England");
				$("#member li").eq(3).find(".synopsis").html("Logo Design, Visual Communication Design, UI Design, Package Design, Home Staging");

				$(".about1").html("Work Experience ");
				$(".about2").html("Work in the United States - the global");
				$(".about3").html("purchase of cross-border Agel Ecommerce Ltd");
				$(".about4").html("The work for Advertising Co. Ltd.");
				$(".about5").html("in Guangzhou ET");
				$(".about6").html("Work in 3Ti Xiang Ao (Shanghai) Mdt InfoTech Ltd");
				$(".about7").html("The work for Advertising Co. Ltd. ");
				$(".about8").html("Work in Shenzhen dream communication agency");
				$(".about9").html("Skills");
				nn=false;
			}

		})

	}
}).init();