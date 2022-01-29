
        window.onload = function(){
            // 动态背景
            !function () {
            function n(n, e, t) {
                return n.getAttribute(e) || t
            }
            function e(n) {
                return document.getElementsByTagName(n)
            }
            function t() {
                var t = e("script"), o = t.length, i = t[o - 1];
                return {l: o, z: n(i, "zIndex", -1), o: n(i, "opacity", 1), c: n(i, "color", "255,255,255"), n: n(i, "count", 99)}
            }
            function o() {
                a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }
            function i() {
                r.clearRect(0, 0, a, c);
                var n, e, t, o, m, l;
                s.forEach(function (i, x) {
                    for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e], null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
                }), x(i)
            }
            var a, c, u, m = document.createElement("canvas"), d = t(), l = "c_n" + d.l, r = m.getContext("2d"),
                x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (n) {
                    window.setTimeout(n, 1e3 / 45)
                }, w = Math.random, y = {x: null, y: null, max: 2e4};
            m.id = l, m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o, e("body")[0].appendChild(m), o(), window.onresize = o, window.onmousemove = function (n) {
                n = n || window.event, y.x = n.clientX, y.y = n.clientY
            }, window.onmouseout = function () {
                y.x = null, y.y = null
            };
            for (var s = [], f = 0; d.n > f; f++) {
                var h = w() * a, g = w() * c, v = 2 * w() - 1, p = 2 * w() - 1;
                s.push({x: h, y: g, xa: v, ya: p, max: 6e3})
            }
            u = s.concat([y]), setTimeout(function () {
                i()
            }, 1000)
            }();
            // 设置dz-outer高度 
            var dz_outer  = document.getElementsByClassName("dz-outer")[0];
            dz_outer.style.height = window.screen.availHeight - 200 + 'px';
            console.log(window.screen.availHeight);
            // 先初始化一些用户
            // var obj1 = {
            //     ID:'bill',
            //     password:'bill123456',
            //     imgSrc:'../JS小练习/模拟相册IMG/1.jpg',
            //     sex:'男',
            //     age:'12',
            //     area:'陕西-西安',
            //     likeArr:[1,0,0,0,1,0,0,0,0],
            //     collectArr:[1,0,0,0,0,0,0,0,0],
            // }
            // var arrPerson = [obj1];
            // localStorage.setItem('AllPerson',JSON.stringify(arrPerson))
            // var obj2 = {
            //     ID:'pingting_',
            //     password:'pingting123456',
            //     imgSrc:'../JS小练习/模拟相册IMG/2.jpg',
            //     sex:'女',
            //     age:'18',
            //     area:'安徽-铜陵',
            //     likeArr:[1,0,0,0,0,1,0,0,0],
            //     collectArr:[0,0,0,0,0,0,0,0,0],
            // }
            // arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
            // arrPerson.push(obj2);
            // localStorage.setItem('AllPerson',JSON.stringify(arrPerson))
            // arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
            // // localStorage.removeItem("AllPerson")
            // // 设置管理员密钥
            // localStorage.setItem('manager','qazwsx');
            // 先给登录 注册 管理员绑定事件
            var login =  document.getElementById("login");
            var register =  document.getElementById("register");
            var manager =  document.getElementById("manager");
            var login_outer =  document.getElementById("login-outer");
            var register_outer =  document.getElementById("register-outer");
            var manager_outer =  document.getElementById("manager-outer");
            // 登录
            var login_id = document.getElementById("login-id");
            var login_password = document.getElementById("login-password");
            var ensure_login = document.getElementById("ensure-login");
            var login_password_span = document.getElementById("login-password-span");
            var login_id_span = document.getElementById("login-id-span");
            function Ensure_Login(){
                ensure_login.onclick = function()
                {
                    if(login_id.value && login_password.value)
                    {
                        // 开始判断ID和密码是否匹配
                        arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                        console.log(arrPerson.length)
                        var flag = 0;
                        for(var i = 0 ; i < arrPerson.length ; i++)
                        {
                            if(login_id.value == arrPerson[i].ID)
                            {
                                flag = 1;
                                if(login_password.value == arrPerson[i].password)
                                {
                                    //登录成功
                                    login_password_span.innerText = '';
                                    login_id_span.innerText = '';
                                    
                                    alert('登录成功！');
                                    nowUser = JSON.parse(localStorage.getItem("nowUser"));
                                    nowUser = login_id.value;
                                    localStorage.setItem('nowUser',JSON.stringify(login_id.value))
                                    history.go(-1);
                                }else{
                                    login_id_span.innerText = '';
                                    login_password_span.innerText = '密码或ID账户错误！';
                                }
                            }
                        }
                        if(flag == 0){
                            alert("该用户不存在！");
                            login_id.value = ''
                            login_password.value = ''
                        }
                        
                    }else{
                        login_id_span.innerText = '';
                        login_password_span.innerText = '';
                        if( !login_id.value)
                        {
                            login_id_span.innerText = '请输入ID！';
                        }
                        if( !login_password.value )
                        {
                            login_password_span.innerText = '请输入密码！';
                        }
                        
                    }
                }
            }
            function Login(){
                // 按钮样式变换
                login.style.color = '#fff';
                login.style.backgroundColor = '#53bff1';
                register.style.color = '#1d77c0';
                register.style.backgroundColor = '#d9eff8';
                manager.style.color = '#1d77c0';
                manager.style.backgroundColor = '#d9eff8';
                // 主体内容变换
                login_outer.style.display = 'block';
                register_outer.style.display = 'none';
                manager_outer.style.display = 'none';
                Ensure_Login();
            }
            Ensure_Login();
            login.onclick = function(){
                Login();
            }
            // 注册
            var register_id = document.getElementById("register-id");
            var register_password = document.getElementById("register-password");
            var register_password_again = document.getElementById("register-password-again");
            var register_id_span = document.getElementById("register-id-span");
            var register_password_span = document.getElementById("register-password-span");
            var ensure_register = document.getElementById("ensure-register");
            register.onclick = function(){
                this.style.color = '#fff';
                this.style.backgroundColor = '#53bff1';
                login.style.color = '#1d77c0';
                login.style.backgroundColor = '#d9eff8';
                manager.style.color = '#1d77c0';
                manager.style.backgroundColor = '#d9eff8';
                login_outer.style.display = 'none';
                register_outer.style.display = 'block';
                manager_outer.style.display = 'none';
                var newPerson;
                ensure_register.onclick = function(){
                    if(register_id.value && register_password.value && register_password_again.value)
                    {
                        // 判断ID
                        arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                        var flagId = 0;
                        for(var i = 0 ; i < arrPerson.length ; i++)
                        {
                            if(arrPerson[i].ID == register_id.value)
                            {
                                flagId = 1;
                            }
                        }
                        if(flagId === 1)
                        {
                            register_id_span.innerText = '该ID已存在哦，换一个试试！'
                        }else{
                            register_id_span.innerText = ''
                        }
                        if(register_password.value != register_password_again.value)
                        {
                            register_password_span.innerText = '与上一次密码不一致哦！'
                        }else{
                            register_password_span.innerText = ''
                        }
                        // 注册成功
                        if(flagId === 0 && register_password.value == register_password_again.value)
                        {
                            var newId = register_id.value;
                            var newPassword = register_password.value;
                            var AllBlog = JSON.parse(localStorage.getItem('AllBlog'));
                            var newLikeArr = [];
                            var newCollectArr = [];
                            newLikeArr.length = AllBlog.length;
                            newCollectArr.length = AllBlog.length;
                            newLikeArr.fill(0);
                            newCollectArr.fill(0);
                            // 检索一遍blog然后重置likeArr collectArr
                            newPerson = {
                                ID:newId,
                                password:newPassword,
                                imgSrc:'',
                                sex:'未知',
                                age:'未知',
                                area:'未知',
                                likeArr:newLikeArr,
                                collectArr:newCollectArr,
                            }
                            console.log(newPerson);
                            arrPerson.push(newPerson);
                            localStorage.setItem('AllPerson',JSON.stringify(arrPerson));
                            alert("注册成功！为您跳转到登录页面！");
                            register_id.value = '';
                            register_password.value = '';
                            register_password_again.value = '';
                            // 跳转到登录
                            Login();
                        }
                    }else{
                        alert("请确认信息填写完整再提交哦！")
                    }
                }
            }
            // 管理员
            var truePassword = localStorage.getItem('manager');
            var ensure_manager = document.getElementById('ensure-manager');
            var manager_password = document.getElementById('manager-password');
            var manager_password_span = document.getElementById('manager-password-span');
            manager.onclick = function(){
                this.style.color = '#fff';
                this.style.backgroundColor = '#53bff1';
                login.style.color = '#1d77c0';
                login.style.backgroundColor = '#d9eff8';
                register.style.color = '#1d77c0';
                register.style.backgroundColor = '#d9eff8';
                login_outer.style.display = 'none';
                register_outer.style.display = 'none';
                manager_outer.style.display = 'block';
                
                ensure_manager.onclick = function(){
                    console.log(truePassword,manager_password.value)
                    if(manager_password.value){
                        if(manager_password.value == truePassword){
                            localStorage.setItem('nowUser',JSON.stringify('manager'));
                            alert("登录成功!");
                            history.go(-1);
                        }else{
                            // manager_password.value = '';
                            manager_password_span.innerText = '密钥错误,请重新输入!'
                        }
                    }else{
                        manager_password_span.innerText = '请输入密钥!'
                    }
                }
            }
            var allInput = [login_id,login_password,register_id,register_password,register_password_again,manager_password];
            var allPlaceholder = ['请输入ID','请输入密码','输入ID','输入密码','请确认密码','']
            console.log(allInput);
            for(let k = 0 ; k < allInput.length ; k++){
                allInput[k].onfocus = function(){
                    this.placeholder = '';
                    this.style.boxShadow = '5px 5px 100px #119cdd';
                }
                allInput[k].onblur = function(){
                    this.style.boxShadow = allPlaceholder[k];
                }
            }
        }
    