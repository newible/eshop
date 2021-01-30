let express = require("express")();
let mysql = require("mysql");
const port = 8080;

// Node解决跨域问题
express.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})

// 规划mysql链接
let sql = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"eshop"
})

// 尝试链接
sql.connect();

express.get("/login",(request,response)=>{
	let username = request.query.username;
	let password = request.query.password;
	sql.query(`SELECT * FROM user WHERE username="${username}" AND password="${password}"`,(error,data)=>{
		if(error){
			console.log(error);
			response.send("error")
		}
		else{
			if(!data.length){
				response.send("error")
			}
			else{
				response.send("success")
			}
		}
	})

})

express.get("/register",(request,response)=>{
	let username = request.query.username;
	let password = request.query.password;
	sql.query(`INSERT INTO user (username,password) VALUES ("${username}","${password}")`,(error)=>{
		if(error){
			console.log(error);
			response.send("error")
		}
		else{
			response.send("success")
		}
	})

})

express.get("/brandinfo",(request,response)=>{
	sql.query(`SELECT * FROM brandinfo`,(error,data)=>{

		if(error){
			console.log(error);
			response.send("error")
		}
		else{
			if(!data.length){
				response.send("error")
			}
			else{
				response.send(data)
			}
		}
	})

})

express.get("/goods-list1",(request,response)=>{
	sql.query(`SELECT * FROM goods1`,(error,data)=>{
		if(error){
			console.log(error);
			response.send("error")
		}
		else{
			if(!data.length){
				response.send("error")
			}
			else{
				response.send(data)
			}
		}
	})

})

express.get("/goods-list2",(request,response)=>{
	sql.query(`SELECT * FROM goods2`,(error,data)=>{
		if(error){
			console.log(error);
			response.send("error")
		}
		else{
			if(!data.length){
				response.send("error")
			}
			else{
				response.send(data)
			}
		}
	})

})

express.get("/goods-details",(request,response)=>{
	let id = request.query.id;
	sql.query(`SELECT * FROM goodsdetail WHERE id="${id}"`,(error,data)=>{
		if(error){
			console.log(error);
			response.send("error")
		}
		else{
			if(!data.length){
				response.send("错误")
			}
			else{
				console.log(data)
				response.send(data)
			}
		}
	})

})
// 监听在哪一个8080端口上
express.listen(port)
console.log("server is running at " + port)