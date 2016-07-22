var nodemailer = require("nodemailer")

var transport = nodemailer.createTransport({
	host: "smtp.qq.com", // 主机
	secureConnection: true, // 使用SSL
	port: 465, // STMP端口号，必须用465
	auth: {
		user: "xxxxx@qq.com", // 账号
		pass: "" // 授权码
	}
})

var mailOptions = {
	from: "yourname xxxxxx@qq.com", // yourname将变为你邮件的昵称
	to: "xxx@126.com, xxxxx@qq.com", // 收件人，不限于@126邮件,可以有多个收件人，用,号隔开
	subject: "Hello", // 标题
	text: "Hello", //纯文本
	html: "<b>Hello</b>",
	attachments: [
		{
			filename: "text",
			path: "./app.js" // 文件路径
		},
		{
			filename: "text1", // 文件名
			content: "test" // 文件内容，自己写
		}
	]
}

transport.sendMail(mailOptions, function(err, response) {
	if (err) console.log(err)
	else console.log(response)
})