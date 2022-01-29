window.onload = function(){
    //-----------------------------------------------------------------
    // localStorage的一些初始化 
    // 切记当在浏览器中打开页面后就注释掉
    // 要不然页面每次刷新都会再初始化一遍！！！
    // var a = [];
    // var a1 = [ {title: "从敲代码到敲文字，程序员大V“敖丙”的自媒体之路",
    //             collectNumber: 0,
    //             commentArr: [],
    //             content: "在面试时，很多时候大家觉得履历很重要，但我觉得各种表达的逻辑思维，以及你带给人的感觉是更加分的东西，我自己现在也做面试官，我发现面试别人的时候真的很看感觉，你的履历有多好不重要，毕竟进来是要一起干活的，如果你表现出一副没法沟通的样子，那极有可能会被提前pass掉。能进华为实习，我认为自己的运气占一部分，因为在我参加的所有比赛里，只有一次是华为赞助的，在那次比赛中我也没有拿下第一名的名次，但凭借着我多次参加比赛得来的表达能力和逻辑能力，在面试环节我拿到了第一。",
    //             imgSrc: "./img/blog2.png",
    //             kind: "AI",
    //             likeNumber: 0,
    //             title: "从敲代码到敲文字，程序员大V“敖丙”的自媒体之路"}
    // ]
    // localStorage.setItem('nowUser',JSON.stringify(null));
    // localStorage.setItem('nowBlog',JSON.stringify(null));
    // localStorage.setItem('manager','qazwsx');
    // localStorage.setItem('AllPerson',JSON.stringify(a));
    // localStorage.setItem('AllBlog',JSON.stringify(a1));
    //-----------------------------------------------------------------
    var change_wrapper = document.getElementById("change-wrapper");
    change_wrapper.style.height = window.innerHeight + 'px'; 
    // 详情页的blog
    // localStorage.setItem('nowBlog',JSON.stringify(null));
    var user_outer  = document.getElementsByClassName("user-outer")[0];
    var dz_outer = document.getElementById("dz-outer")
    var nowUser = JSON.parse(localStorage.getItem("nowUser"));
    // 退出登录 
    var out = document.getElementById("out");
    out.onclick = function(){
            localStorage.setItem('nowUser',JSON.stringify(null));
            user_outer.style.display = 'none';
            dz_outer.style.display = 'block'
            history.go(0)
    }
    // 检查是否登录
    if(nowUser ==  null){
        user_outer.style.display = 'none';
        dz_outer.style.display = 'block';
    }else{
        user_outer.style.display = 'block';
        dz_outer.style.display = 'none'
        var head = document.getElementById("head");
        var id = document.getElementById("id");
        var sex = document.getElementById("sex");
        var age = document.getElementById("age");
        var likeNumber = document.getElementById("likeNumber");
        var collectNumber = document.getElementById("collectNumber");
        var area = document.getElementById("area");
        var improve = document.getElementById("improve");
        // 普通用户
        if(nowUser != "manager"){
            // 找到nowUser
            var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
            for( var  i = 0; i < arrPerson.length ; i++)
            {
                if(nowUser == arrPerson[i].ID){
                    // 更新个人页面信息
                    head.style.backgroundImage = 'url(' + arrPerson[i].imgSrc + ')';
                    head.innerHTML = '';
                    id.innerHTML = '<i class="iconfont" style="color: rgb(235, 193, 116);">&#xe6ee;</i> ' + arrPerson[i].ID;
                    sex.innerHTML = '<i class="iconfont">&#xe604;</i> 性别 ' + arrPerson[i].sex ;
                    age.innerHTML = '<i class="iconfont" style="font-size: 20px;">&#xe619;</i> 年龄 ' + arrPerson[i].age;
                    var like = 0;
                    var collect = 0;
                    for(var j = 0 ;j < arrPerson[i].likeArr.length ; j++ )
                    {
                        if(arrPerson[i].likeArr[j] == 1)
                        {
                            like++;
                        }
                    }
                    for(var j = 0 ;j < arrPerson[i].collectArr.length ; j++ )
                    {
                        if(arrPerson[i].collectArr[j] == 1)
                        {
                            collect++;
                        }
                    }
                    likeNumber.innerHTML = '点赞数 ' + like ;
                    collectNumber.innerHTML = '收藏数 ' + collect ;
                    area.innerHTML = '<i class="iconfont">&#xe7de;</i> 地区 ' + arrPerson[i].area ;
                }
            }
            // 修改框
        var improve = document.getElementById("improve");
        var change_outer  = document.getElementsByClassName("change-outer")[0];
        var change_cancel = document.getElementById("change-cancel");
        var change_ensure = document.getElementById("change-ensure");
        var change_sex = document.getElementById("change-sex");
        var change_data = document.getElementById("change-data");
        var change_imgSrc = document.getElementById("change-imgSrc");
        var change_id = document.getElementById("change-id");
        change_id.value = nowUser;
        // 取出当前用户信息
        var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
        var index;
        for(var i = 0 ;i < arrPerson.length ; i++)
        {
            if(arrPerson[i].ID == nowUser)
                index = i;
        }
        // 设置默认值
        change_sex.value = arrPerson[index].sex;
        change_imgSrc.value = arrPerson[index].imgSrc;
        improve.onclick = function() {
            change_outer.style.display = 'inline-block';
            change_wrapper.style.display = 'inline-block';
        }
        change_cancel.onclick  = function(){
            change_outer.style.display = 'none';
            change_wrapper.style.display = 'none';
        }
        // 二级地区联动
        var province = document.getElementById("province");
        var city = document.getElementById("city");
        var index1;
        var result = '';
        // 先将省份全部添加到第一个下拉框里
        for(var i = 0 ; i < all.length ; i++)
        {
            var newOption = document.createElement("option");
            newOption.innerHTML = all[i].name;
            province.appendChild(newOption);
        }
        province.onchange = function(){
            result = '';
            city.innerHTML = '<option value="none" selected disabled hidden>请选择城市</option>';
            // 获取省份下标 更新二级下拉框
            index1 = province.selectedIndex;
            for(var i = 0 ; i < all[index1 - 1].sub.length ; i++)
            {
                var newOption = document.createElement("option");
                newOption.innerHTML = all[index1 - 1].sub[i].name;
                city.appendChild(newOption);
            }
        }
        city.onchange = function(){
            result = province.value + '-' + city.value;
        }
        // 确认修改
        change_ensure.onclick = function(){
                console.log(change_sex.value);
                if(change_sex.value){
                    arrPerson[index].sex = change_sex.value;
                }
                if(change_data.value != '1900-01-01'){
                    arrPerson[index].age = 2021  - parseInt(change_data.value);
                }
                if(change_imgSrc.value){
                    arrPerson[index].imgSrc = change_imgSrc.value;
                }
                if(result != ''){
                    arrPerson[index].area = result;
                }
            localStorage.setItem('AllPerson',JSON.stringify(arrPerson))
            alert("信息修改成功！");
            change_outer.style.display = 'none';
            change_wrapper.style.display = 'none';
            history.go(0);
        }
        }
        // 管理员
        else{
            var hidden_list = document.getElementsByClassName("hidden-list")[0];
            id.innerHTML = '<i class="iconfont" style="color: rgb(235, 193, 116);">&#xe6ee;</i> ' + 'manager';
            head.innerHTML = '<a href="./管理员.html" title="点我到管理员页面"><i class="iconfont" style="color:#fff; ">&#xe646;</i></a>';
            sex.innerHTML = '<i class="iconfont">&#xe604;</i> 性别 ' + '女';
            age.innerHTML = '<i class="iconfont" style="font-size: 20px;">&#xe619;</i> 年龄 ' + '18';
            area.innerHTML = '<i class="iconfont">&#xe7de;</i> 地区 ' + '无'
            likeNumber.innerHTML = '点赞数 ' + '无' ;
            collectNumber.innerHTML = '收藏数 ' + '无' ;
            improve.innerText = ''
        }
        
    }
    // 顶部导航条样式变换
    var nav_outer = document.getElementsByClassName("nav-outer")[0];
    var allA = nav_outer.getElementsByClassName("allA");
    window.onscroll = function(){
        var s = document.body.scrollTop || document.documentElement.scrollTop;
        // 当鼠标滚动时  上面的滚动距离大于 10 时 背景颜色改变  a字体颜色改变
        if(s > 10 ){
            nav_outer.style.backgroundColor = '#fff';
            for(var  i = 0 ;i < allA.length ;i++)
            {
                allA[i].style.color = 'rgb(100, 100, 100)';
            }
        }else{
            nav_outer.style.backgroundColor = 'rgba(47, 47, 47, 0.3)';
            for(var  i = 0 ;i < allA.length ;i++)
                allA[i].style.color = '#fff';
        }
    }
    //主体blog的显示
    var blog_outer = document.getElementsByClassName("blog-outer")[0];
    var like = blog_outer.getElementsByClassName("like");
    var collect = blog_outer.getElementsByClassName("collect");
    var detail = blog_outer.getElementsByClassName("detail");
    var hotList = document.getElementById("hotList");
    var Python = document.getElementById("Python");
    var AI = document.getElementById("AI");
    var bigData = document.getElementById("bigData");
    var gameDevelopment = document.getElementById("gameDevelopment");
    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
    var search_box = document.getElementById("search-box");
    // 默认显示总榜
    // 打印blog函数
    function PrintHotBlog(){
        var hotBlog = JSON.parse(localStorage.getItem('AllBlog'));
        // for(var i = 0 ; i < hotBlog.length ; i++)
        //     hotBlog[i].likeNumber = i ;
        // // 按照点赞量给 hotBlog 排序    
        // hotBlog.sort(function(x , y){
        //     return y.likeNumber - x.likeNumber;
        // })
        // 打印博客
        for(let k = 0 ; k < hotBlog.length ; k++){
            var newLi = document.createElement("li");
            newLi.id = 'blog' + k ;
            newLi.innerHTML = '<p class="title">' + hotBlog[k].title + '</p>' + '<div class="content">' + hotBlog[k].content + '</div>' + '<img src="' + hotBlog[k].imgSrc + '" alt="" class="img">' + '<div class="other"><i class="iconfont like" title="点赞">&#xe602;</i><i class="iconfont collect"  title="收藏">&#xe6a9;</i></div><a href="./博客详情.html" class="detail">查看详情</a>'
            blog_outer.appendChild(newLi);
            if(nowUser != null && nowUser != 'manager')
            {
                // 取出当前用户信息
                var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                var index;
                for(var j = 0 ;j < arrPerson.length ; j++)
                {
                    if(arrPerson[j].ID == nowUser)
                        index = j;
                }
                // 给点赞收藏图标加上颜色
                if(arrPerson[index].likeArr[k] == 1){
                    like[k].style.color = 'rgb(96, 195, 235)';
                    like[k].title = '已点赞'
                }
                if(arrPerson[index].collectArr[k] == 1){
                    collect[k].style.color = 'rgb(230, 193, 72)';
                    collect[k].title = '已收藏';
                }
            }
            // 给like collect detail 添加函数
            // console.log(like[kBlog])
            like[k].onclick = function(){
                console.log('你在点赞哦', k)
                if(nowUser != null && nowUser != 'manager'){
                    // 取出当前用户信息
                    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                    var index;
                    for(var j = 0 ;j < arrPerson.length ; j++)
                    {
                        if(arrPerson[j].ID == nowUser)
                            index = j;
                    }
                    if(arrPerson[index].likeArr[k] == 1)
                    {
                        alert('请不要重复点赞哦!')
                    }else{
                        like[k].style.color = 'rgb(96, 195, 235)';
                        like[k].title = '已点赞'
                        arrPerson[index].likeArr[k] = 1;
                        localStorage.setItem('AllPerson',JSON.stringify(arrPerson));
                        history.go(0);
                    }
                    
                }else{
                    alert('请先登录普通用户哦!');
                }
            }
            collect[k].onclick = function(){
                console.log('你在收藏哦', k)
                if(nowUser != null && nowUser != 'manager'){
                    console.log('2222')
                    // 取出当前用户信息
                    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                    var index;
                    for(var j = 0 ;j < arrPerson.length ; j++)
                    {
                        if(arrPerson[j].ID == nowUser)
                            index = j;
                    }
                    if(arrPerson[index].collectArr[k] == 1)
                    {
                        alert('请不要重复收藏哦!')
                    }else{
                        collect[k].style.color = 'rgb(230, 193, 72)';
                        collect[k].title = '已收藏';
                        arrPerson[index].collectArr[k] = 1;
                        localStorage.setItem('AllPerson',JSON.stringify(arrPerson))
                        history.go(0);
                    }
                }else{
                    alert('请先登录普通用户哦!');
                }
            }
            detail[k].onclick = function(){
                console.log('nowBlog' , k);
                localStorage.setItem('nowBlog',JSON.stringify(k));
            }
        }
        // 打印剩余的占位blog
        var restBlogCount = 3 - hotBlog.length%3;
        for(let j = 0 ; j < restBlogCount ; j++)
        {
            var newLi = document.createElement("li");
            newLi.style.backgroundColor = 'transparent'
            blog_outer.appendChild(newLi);
        }
        // 底下分页按钮
        footButtonCount = Math.ceil(hotBlog.length/3);
        var buttonNav = document.createElement("div");
        buttonNav.id = 'button-nav';
        blog_outer.appendChild(buttonNav);
        var buttonList = document.createElement("div");
        buttonList.id = 'button-list';
        buttonNav.appendChild(buttonList);
        buttonList.style.left = 0 + 'px';
        buttonList.style.width = 40*footButtonCount +'px';
        var buttonGoOuter = document.createElement("div");
        buttonGoOuter.id = 'button-go-outer';
        buttonGoOuter.innerText  = 'hhh'
        buttonNav.appendChild(buttonGoOuter);
        // 滑动分页
        var newButtons = buttonList.getElementsByTagName("a");
        FunPage(footButtonCount);
        function FunPage(n){
            // 打印所有分页按钮
            for(let j = 1; j <= n ; j++)
            {
                var newButton = document.createElement("a");
                newButton.href = '#blog' + 3*(j - 1);
                newButton.className = 'button'
                newButton.innerHTML = j;
                buttonList.appendChild(newButton);
            }
            for(let j = 0 ; j < n ;j++){
                newButtons[j].onclick = function(){
                    if(j <= 2){
                        buttonList.style.left = 0 + 'px';
                    }else if(j >= n-3){
                        buttonList.style.left = -(n - 5)*37 + 'px';
                    }else{
                        buttonList.style.left = -(j - 2)*37 + 'px';
                    }
                    for(let l = 0 ; l < newButtons.length ;l++)
                    {
                        if(l == j){
                            newButtons[l].style.color = 'rgb(12, 144, 184)';
                            newButtons[l].style.border = '1px solid rgb(12, 144, 184)'
                        }else{
                            newButtons[l].style.color = 'rgb(195, 191, 191)';
                            newButtons[l].style.border = '1px solid rgb(173, 169, 169)'
                        }
                    }
                }
            }
        }
        // 随着点击自动生成分页栏 被套住了
        // Page(footButtonCount);
        // function Page(num){
        //     // 传入分页个数
        //     // 分页个数 <= 5 可以直接打印
        //     // 分页个数 > 5  先打印前5个
        //     if(num <= 5){
        //         buttonNav.style.width = 36*num +'px';
        //         for(let j = 1 ; j <= num ; j++){
        //             var newButton = document.createElement("a");
        //             newButton.href = '#blog' + 3*(j - 1);
        //             newButton.className = 'button'
        //             newButton.innerHTML = j;
        //             buttonNav.appendChild(newButton);
        //         }
        //     }else{
        //         buttonNav.style.width = 36*5 +'px';
        //         for(let j = 1 ; j <= 5 ; j++){
        //             var newButton = document.createElement("a");
        //             newButton.href = '#blog' + 3*(j - 1);
        //             newButton.className = 'button'
        //             newButton.innerHTML = j;
        //             buttonNav.appendChild(newButton);
        //         }
        //     }
            
        // }
        // // 按钮样式
        // var newButtons = buttonNav.getElementsByTagName("a");
        // newButtons[0].style.color = 'rgb(12, 144, 184)';
        // newButtons[0].style.border = '1px solid rgb(12, 144, 184)'
        // console.log(footButtonCount)
        // // 当点击分页时 
        // //footButtonCount <=5 不予考虑
        // //footButtonCount > 5
        // //     1~3  直接打印前5个
        // //     n-2 n-1 n 打印后5个  
        // //     中间n  打印 n-2 n-1 n n+1 n+2
        // for(let t = 0 ; t < newButtons.length ; t++){
        //     newButtons[t].onclick = function(){
        //         var n = this.innerText;
        //         console.log(n);
        //         if(footButtonCount > 5){
        //             // 分页数目大于5
        //             if(n <= 3){
        //                 // 打印前5个
        //                 // 清除
        //                 buttonNav.innerHTML = ''
        //                 for(let j = 1 ; j <= 5 ; j++){
        //                     var newButton = document.createElement("a");
        //                     newButton.href = '#blog' + 3*(j - 1);
        //                     newButton.className = 'button'
        //                     newButton.innerHTML = j;
        //                     buttonNav.appendChild(newButton);
        //                 }
        //             }else if(n >= footButtonCount-2){
        //                 // 打印后5个
        //                 // 清除
        //                 buttonNav.innerHTML = '';
        //                 for(let j = footButtonCount-4 ; j <= footButtonCount ; j++){
        //                     var newButton = document.createElement("a");
        //                     newButton.href = '#blog' + 3*(j - 1);
        //                     newButton.className = 'button'
        //                     newButton.innerHTML = j;
        //                     buttonNav.appendChild(newButton);
        //                 }
        //             }else{
        //                 // 打印中间5个
        //                 // 清除
        //                 buttonNav.innerHTML = '';
        //                 for(let j = n -2 ; j <= n + 2 ; j++){
        //                     var newButton = document.createElement("a");
        //                     newButton.href = '#blog' + 3*(j - 1);
        //                     newButton.className = 'button'
        //                     newButton.innerHTML = j;
        //                     buttonNav.appendChild(newButton);
        //                 }
        //             }
        //         }
        //         var newButtons = buttonNav.getElementsByTagName("a");
        //         for(let l = 0 ; l < newButtons.length ;l++)
        //         {
        //             if(newButtons[l].innerText == n){
        //                 newButtons[l].style.color = 'rgb(12, 144, 184)';
        //                 newButtons[l].style.border = '1px solid rgb(12, 144, 184)'
        //             }else{
        //                 newButtons[l].style.color = 'rgb(195, 191, 191)';
        //                 newButtons[l].style.border = '1px solid rgb(173, 169, 169)'
        //             }
        //         }
        //     }
        // }
    }
    PrintHotBlog();
    // 热榜
    hotList.onclick = function(){
        search_box.value = '';
        search_box.placeholder = '搜索你喜欢的内容吧';
        blog_outer.innerHTML = '';
        hotList.style.backgroundColor = 'rgba(3, 149, 246, 0.7)';
        AI.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        bigData.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        Python.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        gameDevelopment.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        PrintHotBlog();
    }
    // // Python
    Python.onclick = function(){
        search_box.value = '';
        search_box.placeholder = '搜索你喜欢的内容吧';
        blog_outer.innerHTML = '';
        Python.style.backgroundColor = 'rgba(3, 149, 246, 0.7)';
        AI.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        bigData.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        gameDevelopment.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        hotList.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        var hotBlog = JSON.parse(localStorage.getItem('AllBlog'));
        for(let k = 0 ; k < hotBlog.length ; k++){
            var newLi = document.createElement("li");
            newLi.innerHTML = '<p class="title">' + hotBlog[k].title + '</p>' + '<div class="content">' + hotBlog[k].content + '</div>' + '<img src="' + hotBlog[k].imgSrc + '" alt="" class="img">' + '<div class="other"><i class="iconfont like" title="点赞">&#xe602;</i><i class="iconfont collect"  title="收藏">&#xe6a9;</i></div><a href="./博客详情.html" class="detail">查看详情</a>'
            if(hotBlog[k].kind != 'Python'){
                newLi.style.display = 'none';
            }
            blog_outer.appendChild(newLi);
            if(nowUser != null && nowUser != 'manager')
            {
                // 取出当前用户信息
                var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                var index;
                for(var j = 0 ;j < arrPerson.length ; j++)
                {
                    if(arrPerson[j].ID == nowUser)
                        index = j;
                }
                // 给点赞收藏图标加上颜色
                if(arrPerson[index].likeArr[k] == 1){
                    like[k].style.color = 'rgb(96, 195, 235)';
                    like[k].title = '已点赞'
                }
                if(arrPerson[index].collectArr[k] == 1){
                    collect[k].style.color = 'rgb(230, 193, 72)';
                    collect[k].title = '已收藏';
                }
            }
            // 给like collect detail 添加函数
            // console.log(like[kBlog])
            like[k].onclick = function(){
                console.log('你在点赞哦', k)
                if(nowUser != null && nowUser != 'manager'){
                    console.log('1111')
                    // 取出当前用户信息
                    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                    var index;
                    for(var j = 0 ;j < arrPerson.length ; j++)
                    {
                        if(arrPerson[j].ID == nowUser)
                            index = j;
                    }
                    if(arrPerson[index].likeArr[k] == 1)
                    {
                        alert('请不要重复点赞哦!')
                    }else{
                        like[k].style.color = 'rgb(96, 195, 235)';
                        like[k].title = '已点赞'
                        arrPerson[index].likeArr[k] = 1;
                        localStorage.setItem('AllPerson',JSON.stringify(arrPerson));
                        // history.go(0);

                    }
                    
                }else{
                    alert('请先登录普通用户哦!');
                }
            }
            collect[k].onclick = function(){
                console.log('你在收藏哦', k)
                if(nowUser != null && nowUser != 'manager'){
                    console.log('2222')
                    // 取出当前用户信息
                    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                    var index;
                    for(var j = 0 ;j < arrPerson.length ; j++)
                    {
                        if(arrPerson[j].ID == nowUser)
                            index = j;
                    }
                    if(arrPerson[index].collectArr[k] == 1)
                    {
                        alert('请不要重复收藏哦!')
                    }else{
                        collect[k].style.color = 'rgb(230, 193, 72)';
                        collect[k].title = '已收藏';
                        arrPerson[index].collectArr[k] = 1;
                        console.log(arrPerson[index].collectArr);
                        localStorage.setItem('AllPerson',JSON.stringify(arrPerson))
                        // history.go(0);

                    }
                }else{
                    alert('请先登录普通用户哦!');
                }
            }
            detail[k].onclick = function(){
                console.log('nowBlog' , k);
                localStorage.setItem('nowBlog',JSON.stringify(k));
            }
        }
    }
    // // AI
    AI.onclick = function(){
        search_box.value = '';
        search_box.placeholder = '搜索你喜欢的内容吧';
        blog_outer.innerHTML = '';
        AI.style.backgroundColor = 'rgba(3, 149, 246, 0.7)';
        Python.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        bigData.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        gameDevelopment.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        hotList.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        var hotBlog = JSON.parse(localStorage.getItem('AllBlog'));
        for(let k = 0 ; k < hotBlog.length ; k++){
            var newLi = document.createElement("li");
            newLi.innerHTML = '<p class="title">' + hotBlog[k].title + '</p>' + '<div class="content">' + hotBlog[k].content + '</div>' + '<img src="' + hotBlog[k].imgSrc + '" alt="" class="img">' + '<div class="other"><i class="iconfont like"  title="点赞">&#xe602;</i><i class="iconfont collect"  title="收藏">&#xe6a9;</i></div><a href="./博客详情.html" class="detail">查看详情</a>'
            if(hotBlog[k].kind != 'AI'){
                newLi.style.display = 'none';
            }
            blog_outer.appendChild(newLi);
            if(nowUser != null && nowUser != 'manager')
            {
                // 取出当前用户信息
                var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                var index;
                for(var j = 0 ;j < arrPerson.length ; j++)
                {
                    if(arrPerson[j].ID == nowUser)
                        index = j;
                }
                // 给点赞收藏图标加上颜色
                if(arrPerson[index].likeArr[k] == 1){
                    like[k].style.color = 'rgb(96, 195, 235)';
                    like[k].title = '已点赞'
                }
                if(arrPerson[index].collectArr[k] == 1){
                    collect[k].style.color = 'rgb(230, 193, 72)';
                    collect[k].title = '已收藏';
                }
            }
            // 给like collect detail 添加函数
            // console.log(like[k])
            like[k].onclick = function(){
                console.log('你在点赞哦', k)
                if(nowUser != null && nowUser != 'manager'){
                    console.log('1111')
                    // 取出当前用户信息
                    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                    var index;
                    for(var j = 0 ;j < arrPerson.length ; j++)
                    {
                        if(arrPerson[j].ID == nowUser)
                            index = j;
                    }
                    if(arrPerson[index].likeArr[k] == 1)
                    {
                        alert('请不要重复点赞哦!')
                    }else{
                        like[k].style.color = 'rgb(96, 195, 235)';
                        like[k].title = '已点赞'
                        arrPerson[index].likeArr[k] = 1;
                        localStorage.setItem('AllPerson',JSON.stringify(arrPerson));
                        // history.go(0);

                    }
                    
                }else{
                    alert('请先登录普通用户哦!');
                }
            }
            collect[k].onclick = function(){
                console.log('你在收藏哦', k)
                if(nowUser != null && nowUser != 'manager'){
                    console.log('2222')
                    // 取出当前用户信息
                    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                    var index;
                    for(var j = 0 ;j < arrPerson.length ; j++)
                    {
                        if(arrPerson[j].ID == nowUser)
                            index = j;
                    }
                    if(arrPerson[index].collectArr[k] == 1)
                    {
                        alert('请不要重复收藏哦!')
                    }else{
                        collect[k].style.color = 'rgb(230, 193, 72)';
                        collect[k].title = '已收藏';
                        arrPerson[index].collectArr[k] = 1;
                        console.log(arrPerson[index].collectArr);
                        localStorage.setItem('AllPerson',JSON.stringify(arrPerson))
                        // history.go(0);

                    }
                }else{
                    alert('请先登录普通用户哦!');
                }
            }
            detail[k].onclick = function(){
                console.log('nowBlog' , k);
                localStorage.setItem('nowBlog',JSON.stringify(k));
            }
            
        }
    }
    // // bigData
    bigData.onclick = function(){
        search_box.value = '';
        search_box.placeholder = '搜索你喜欢的内容吧';
        blog_outer.innerHTML = '';
        bigData.style.backgroundColor = 'rgba(3, 149, 246, 0.7)';
        Python.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        AI.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        gameDevelopment.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        hotList.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        var hotBlog = JSON.parse(localStorage.getItem('AllBlog'));
        for(let k = 0 ; k < hotBlog.length ; k++){
            var newLi = document.createElement("li");
            newLi.innerHTML = '<p class="title">' + hotBlog[k].title + '</p>' + '<div class="content">' + hotBlog[k].content + '</div>' + '<img src="' + hotBlog[k].imgSrc + '" alt="" class="img">' + '<div class="other"><i class="iconfont like"  title="点赞">&#xe602;</i><i class="iconfont collect"  title="收藏">&#xe6a9;</i></div><a href="./博客详情.html" class="detail">查看详情</a>'
            if(hotBlog[k].kind != '大数据'){
                newLi.style.display = 'none';
            }
            blog_outer.appendChild(newLi);
            if(nowUser != null && nowUser != 'manager')
            {
                // 取出当前用户信息
                var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                var index;
                for(var j = 0 ;j < arrPerson.length ; j++)
                {
                    if(arrPerson[j].ID == nowUser)
                        index = j;
                }
                // 给点赞收藏图标加上颜色
                if(arrPerson[index].likeArr[k] == 1){
                    like[k].style.color = 'rgb(96, 195, 235)';
                    like[k].title = '已点赞'
                }
                if(arrPerson[index].collectArr[k] == 1){
                    collect[k].style.color = 'rgb(230, 193, 72)';
                    collect[k].title = '已收藏';
                }
            }
            // 给like collect detail 添加函数
            // console.log(like[kBlog])
            like[k].onclick = function(){
                console.log('你在点赞哦', k)
                if(nowUser != null && nowUser != 'manager'){
                    console.log('1111')
                    // 取出当前用户信息
                    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                    var index;
                    for(var j = 0 ;j < arrPerson.length ; j++)
                    {
                        if(arrPerson[j].ID == nowUser)
                            index = j;
                    }
                    if(arrPerson[index].likeArr[k] == 1)
                    {
                        alert('请不要重复点赞哦!')
                    }else{
                        like[k].style.color = 'rgb(96, 195, 235)';
                        like[k].title = '已点赞'
                        arrPerson[index].likeArr[k] = 1;
                        localStorage.setItem('AllPerson',JSON.stringify(arrPerson));
                        // history.go(0);

                    }
                    
                }else{
                    alert('请先登录普通用户哦!');
                }
            }
            collect[k].onclick = function(){
                console.log('你在收藏哦', k)
                if(nowUser != null && nowUser != 'manager'){
                    console.log('2222')
                    // 取出当前用户信息
                    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                    var index;
                    for(var j = 0 ;j < arrPerson.length ; j++)
                    {
                        if(arrPerson[j].ID == nowUser)
                            index = j;
                    }
                    if(arrPerson[index].collectArr[k] == 1)
                    {
                        alert('请不要重复收藏哦!')
                    }else{
                        collect[k].style.color = 'rgb(230, 193, 72)';
                        collect[k].title = '已收藏';
                        arrPerson[index].collectArr[k] = 1;
                        console.log(arrPerson[index].collectArr);
                        localStorage.setItem('AllPerson',JSON.stringify(arrPerson))
                        // history.go(0);

                    }
                }else{
                    alert('请先登录普通用户哦!');
                }
            }
            detail[k].onclick = function(){
                console.log('nowBlog' , k);
                localStorage.setItem('nowBlog',JSON.stringify(k));
            }
            
        }
    }
    // // gameDevelopment
    gameDevelopment.onclick = function(){
        search_box.value = '';
        search_box.placeholder = '搜索你喜欢的内容吧';
        blog_outer.innerHTML = '';
        gameDevelopment.style.backgroundColor = 'rgba(3, 149, 246, 0.7)';
        Python.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        AI.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        bigData.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        hotList.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
        var hotBlog = JSON.parse(localStorage.getItem('AllBlog'));
        for(let k = 0 ; k < hotBlog.length ; k++){
                var newLi = document.createElement("li");
                newLi.innerHTML = '<p class="title">' + hotBlog[k].title + '</p>' + '<div class="content">' + hotBlog[k].content + '</div>' + '<img src="' + hotBlog[k].imgSrc + '" alt="" class="img">' + '<div class="other"><i class="iconfont like"  title="点赞">&#xe602;</i><i class="iconfont collect"  title="收藏">&#xe6a9;</i></div><a href="./博客详情.html" class="detail">查看详情</a>'
                if(hotBlog[k].kind != '游戏开发'){
                    newLi.style.display = 'none';
                }
                blog_outer.appendChild(newLi);
                if(nowUser != null && nowUser != 'manager')
            {
                // 取出当前用户信息
                var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                var index;
                for(var j = 0 ;j < arrPerson.length ; j++)
                {
                    if(arrPerson[j].ID == nowUser)
                        index = j;
                }
                // 给点赞收藏图标加上颜色
                if(arrPerson[index].likeArr[k] == 1){
                    like[k].style.color = 'rgb(96, 195, 235)';
                    like[k].title = '已点赞'
                }
                if(arrPerson[index].collectArr[k] == 1){
                    collect[k].style.color = 'rgb(230, 193, 72)';
                    collect[k].title = '已收藏';
                }
            }
            // 给like collect detail 添加函数
            // console.log(like[kBlog])
            like[k].onclick = function(){
                console.log('你在点赞哦', k)
                if(nowUser != null && nowUser != 'manager'){
                    console.log('1111')
                    // 取出当前用户信息
                    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                    var index;
                    for(var j = 0 ;j < arrPerson.length ; j++)
                    {
                        if(arrPerson[j].ID == nowUser)
                            index = j;
                    }
                    if(arrPerson[index].likeArr[k] == 1)
                    {
                        alert('请不要重复点赞哦!')
                    }else{
                        like[k].style.color = 'rgb(96, 195, 235)';
                        like[k].title = '已点赞'
                        arrPerson[index].likeArr[k] = 1;
                        localStorage.setItem('AllPerson',JSON.stringify(arrPerson));
                        // history.go(0);
                    }
                    
                }else{
                    alert('请先登录普通用户哦!');
                }
            }
            collect[k].onclick = function(){
                console.log('你在收藏哦', k)
                if(nowUser != null && nowUser != 'manager'){
                    console.log('2222')
                    // 取出当前用户信息
                    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                    var index;
                    for(var j = 0 ;j < arrPerson.length ; j++)
                    {
                        if(arrPerson[j].ID == nowUser)
                            index = j;
                    }
                    if(arrPerson[index].collectArr[k] == 1)
                    {
                        alert('请不要重复收藏哦!')
                    }else{
                        collect[k].style.color = 'rgb(230, 193, 72)';
                        collect[k].title = '已收藏';
                        arrPerson[index].collectArr[k] = 1;
                        console.log(arrPerson[index].collectArr);
                        localStorage.setItem('AllPerson',JSON.stringify(arrPerson))
                        // history.go(0);
                    }
                }else{
                    alert('请先登录普通用户哦!');
                }
            }
            detail[k].onclick = function(){
                console.log('nowBlog' , k);
                localStorage.setItem('nowBlog',JSON.stringify(k));
            }
            
        }
    }
    // 搜索
    search_box.onfocus = function(){
        search_box.placeholder = '';
    }
    var Go = document.getElementById("Go");
    Go.onclick = function(){
        if( search_box.value ){
            blog_outer.innerHTML = '';
            gameDevelopment.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
            Python.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
            AI.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
            bigData.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
            hotList.style.backgroundColor = 'rgba(46, 46, 46, 0.3)';
            var hotBlog = JSON.parse(localStorage.getItem('AllBlog'));
            for(let k = 0 ; k < hotBlog.length ; k++){
                var newLi = document.createElement("li");
                newLi.innerHTML = '<p class="title">' + hotBlog[k].title + '</p>' + '<div class="content">' + hotBlog[k].content + '</div>' + '<img src="' + hotBlog[k].imgSrc + '" alt="" class="img">' + '<div class="other"><i class="iconfont like"  title="点赞">&#xe602;</i><i class="iconfont collect"  title="收藏">&#xe6a9;</i></div><a href="./博客详情.html" class="detail">查看详情</a>'
                if(hotBlog[k].title.indexOf(search_box.value) == -1){
                    newLi.style.display = 'none';
                }
                blog_outer.appendChild(newLi);
                if(nowUser != null && nowUser != 'manager')
                {
                    // 取出当前用户信息
                    var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                    var index;
                    for(var j = 0 ;j < arrPerson.length ; j++)
                    {
                        if(arrPerson[j].ID == nowUser)
                            index = j;
                    }
                    // 给点赞收藏图标加上颜色
                    if(arrPerson[index].likeArr[k] == 1){
                        like[k].style.color = 'rgb(96, 195, 235)';
                        like[k].title = '已点赞'
                    }
                    if(arrPerson[index].collectArr[k] == 1){
                        collect[k].style.color = 'rgb(230, 193, 72)';
                        collect[k].title = '已收藏';
                    }
                }
                // 给like collect detail 添加函数
                // console.log(like[kBlog])
                like[k].onclick = function(){
                    console.log('你在点赞哦', k)
                    if(nowUser != null && nowUser != 'manager'){
                        // 取出当前用户信息
                        var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                        var index;
                        for(var j = 0 ;j < arrPerson.length ; j++)
                        {
                            if(arrPerson[j].ID == nowUser)
                                index = j;
                        }
                        if(arrPerson[index].likeArr[k] == 1)
                        {
                            alert('请不要重复点赞哦!')
                        }else{
                            like[k].style.color = 'rgb(96, 195, 235)';
                            like[k].title = '已点赞'
                            arrPerson[index].likeArr[k] = 1;
                            localStorage.setItem('AllPerson',JSON.stringify(arrPerson));
                            // history.go(0);
                        }
                        
                    }else{
                        alert('请先登录普通用户哦!');
                    }
                }
                collect[k].onclick = function(){
                    console.log('你在收藏哦', k)
                    if(nowUser != null && nowUser != 'manager'){
                        // 取出当前用户信息
                        var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                        var index;
                        for(var j = 0 ;j < arrPerson.length ; j++)
                        {
                            if(arrPerson[j].ID == nowUser)
                                index = j;
                        }
                        if(arrPerson[index].collectArr[k] == 1)
                        {
                            alert('请不要重复收藏哦!')
                        }else{
                            collect[k].style.color = 'rgb(230, 193, 72)';
                            arrPerson[index].collectArr[k] = 1;
                            collect[k].title = '已收藏';
                            console.log(arrPerson[index].collectArr);
                            localStorage.setItem('AllPerson',JSON.stringify(arrPerson));
                            // history.go(0);
                        }
                    }else{
                        alert('请先登录普通用户哦!');
                    }
                }
                detail[k].onclick = function(){
                    console.log('nowBlog' , k);
                    localStorage.setItem('nowBlog',JSON.stringify(k));
                }
                
            }
        }else{
            alert('请输入你想搜索的关键词哦!')
        }
        
    }
}
