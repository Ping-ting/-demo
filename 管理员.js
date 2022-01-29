
        window.onload = function(){
            var operate_box = document.getElementById("operate-box");
            var publish_box = document.getElementById("publish-box");
            var back_box = document.getElementById("back-box");
            var operate_outer = document.getElementById("operate-outer");
            var publish_outer = document.getElementById("publish-outer");
            var search_outer = document.getElementsByClassName("search-outer")[0];
            // 初始化博客
            // var blog1 = {
            //     title: '教你3个python「性能分析」工具，再也不用自己计算函数耗时了',
            //     content: '如果你想优化python程序的运行效率，你会从哪里下手？首先，我们要找到「性能瓶颈」，比如哪些函数的运行效率低、计算时间长，然后分析原因，针对性地进行优化。最朴素的方法是，在你预估的函数前后加上time.perf_counter()1，然后得出这个函数的运行时间。但这种方法不适用于具有大量函数调用的程序。',
            //     imgSrc:'./img/blog1.png',
            //     kind: 'Python',
            //     likeNumber: 0,
            //     collectNumber: 0,
            //     commentArr: []
            // }
            // var blog2 = {
            //     title: '从敲代码到敲文字，程序员大V“敖丙”的自媒体之路',
            //     content: '在面试时，很多时候大家觉得履历很重要，但我觉得各种表达的逻辑思维，以及你带给人的感觉是更加分的东西，我自己现在也做面试官，我发现面试别人的时候真的很看感觉，你的履历有多好不重要，毕竟进来是要一起干活的，如果你表现出一副没法沟通的样子，那极有可能会被提前pass掉。能进华为实习，我认为自己的运气占一部分，因为在我参加的所有比赛里，只有一次是华为赞助的，在那次比赛中我也没有拿下第一名的名次，但凭借着我多次参加比赛得来的表达能力和逻辑能力，在面试环节我拿到了第一。',
            //     imgSrc:'./img/blog2.png',
            //     kind: 'AI',
            //     likeNumber: 0,
            //     collectNumber: 0,
            //     commentArr: []
            // }
            // var blog3 = {
            //     title: '大数据—— Hadoop 常见面试题整理',
            //     content: '集群启动时：由于 NameNode 在启动时加载的是所有块位置的映射信息，而非完整的块数据，所以需要各个 DataNode 向 NameNode 发送最新的块列表信息来验证块是否有效，在此期间 NameNode 的文件系统对于客户端来说是只读的 ',
            //     imgSrc:'./img/blog2.png',
            //     kind: '大数据',
            //     likeNumber: 0,
            //     collectNumber: 0,
            //     commentArr: []
            // }
            // var blog4 = {
            //     title: '全网首发，你没玩过的pygame小游戏开发：马赛逻辑',
            //     content: '马赛逻辑的基本玩法如下图所示，上侧横向的各组数字为：对每一列中存在的目标方格的标注，如 2 表示该列有 2 个连续的目标，1 2 表示该列有 1 个独立的目标 + 2 个连续的目标。左侧纵向的各组数据为对每一行的标注。通过上、左两侧的提示，将所有目标方格点亮即为通关。',
            //     imgSrc:'./img/blog3.png',
            //     kind: '游戏开发',
            //     likeNumber: 0,
            //     collectNumber: 0,
            //     commentArr: []
            // }
            // var AllBlog = [blog1,blog2,blog3,blog4];
            // localStorage.setItem('AllBlog',JSON.stringify(AllBlog))
            // 打印博客函数
            function PrintBlog(){
                operate_outer.innerHTML  = '';
                var AllBlog = JSON.parse(localStorage.getItem('AllBlog'));
                var AllPerson = JSON.parse(localStorage.getItem("AllPerson"));
                var blog_delete = operate_outer.getElementsByClassName("blog-delete");
                // console.log(AllBlog,AllPerson);
                for(let i = 0 ; i < AllBlog.length ;i++)
                {
                        var num = AllBlog[i].commentArr.length;
                        var newLi = document.createElement("li");
                        var likeNum = 0;
                        var collectNum = 0;
                        var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                        for(var j = 0 ; j < arrPerson.length ;j++){
                            if(arrPerson[j].likeArr[i] == 1){
                                likeNum++;
                            }
                            if(arrPerson[j].collectArr[i] == 1){
                                collectNum++;
                            }
                        }
                        newLi.classList.add('each-blog');
                        newLi.innerHTML = '<p class="blog-title">' + AllBlog[i].title + '</p>'+ '<img src="' + AllBlog[i].imgSrc + '" alt="" class="blog-img" >' + '<div class="blog-content">' + AllBlog[i].content + '</div>' + '<div class="foot-outer"><div class="like-num">点赞量：' + likeNum + '</div><div class="collect-num">收藏量：' + collectNum + '</div><div class="comment-num">评论量：' + num + '</div><div class="blog-delete">删除</div></div>'
                        operate_outer.appendChild(newLi);
                        blog_delete[i].onclick = function(){
                            console.log(i)
                            if(confirm('确认要删除吗？')){
                                AllBlog.splice(i,1);
                                for(var j = 0 ; j < AllPerson.length ;j++){
                                    AllPerson[j].likeArr.splice(i,1);
                                    AllPerson[j].collectArr.splice(i,1);
                                }
                                console.log(AllBlog,AllPerson);
                                localStorage.setItem('AllPerson',JSON.stringify(AllPerson))
                                localStorage.setItem('AllBlog',JSON.stringify(AllBlog))
                                history.go(0)                   
                            }
                        }
                }
            }
            PrintBlog();
            // 模糊搜索博客
            var search = document.getElementById("search");
            var submit = document.getElementById("submit");
            search.onfocus = function(){
                this.placeholder = '';
            }
            // var AllBlog = JSON.parse(localStorage.getItem('AllBlog'));
            // AllBlog[0] = {
            //     title: '教你3个python「性能分析」工具，再也不用自己计算函数耗时了',
            //     content: '如果你想优化python程序的运行效率，你会从哪里下手？首先，我们要找到「性能瓶颈」，比如哪些函数的运行效率低、计算时间长，然后分析原因，针对性地进行优化。最朴素的方法是，在你预估的函数前后加上time.perf_counter()1，然后得出这个函数的运行时间。但这种方法不适用于具有大量函数调用的程序。',
            //     imgSrc:'./img/blog1.png',
            //     kind: 'Python',
            //     likeNumber: 0,
            //     collectNumber: 0,
            //     commentArr: []
            // }
            // localStorage.setItem('AllBlog',JSON.stringify(AllBlog));
            submit.onclick = function(){
                operate_outer.innerHTML  = '';
                console.log(search.value);
                if(search.value){
                    var AllBlog = JSON.parse(localStorage.getItem('AllBlog'));
                    var blog_delete = operate_outer.getElementsByClassName("blog-delete");
                    for(let i = 0 ; i < AllBlog.length ;i++){
                            var num = AllBlog[i].commentArr.length;
                            var newLi = document.createElement("li");
                            newLi.classList.add('each-blog');
                            newLi.innerHTML = '<p class="blog-title">' + AllBlog[i].title + '</p>'+ '<img src="' + AllBlog[i].imgSrc + '" alt="" class="blog-img" >' + '<div class="blog-content">' + AllBlog[i].content + '</div>' + '<div class="foot-outer"><div class="like-num">点赞量：' + AllBlog[i].likeNumber + '</div><div class="collect-num">收藏量：' + AllBlog[i].collectNumber + '</div><div class="comment-num">评论量：' + num + '</div><div class="blog-delete">删除</div></div>'
                            if(AllBlog[i].title.indexOf(search.value) == -1){
                                newLi.style.display = 'none';
                            }
                            operate_outer.appendChild(newLi);
                            blog_delete[i].onclick = function(){
                            console.log(i)
                            if(confirm('确认要删除吗？')){
                                
                                AllBlog.splice(i,1);
                                for(var j = 0 ; j < AllPerson.length ;j++){
                                    AllPerson[j].likeArr.splice(i,1);
                                    AllPerson[j].collectArr.splice(i,1);
                                }
                                localStorage.setItem('AllPerson',JSON.stringify(AllPerson))
                                localStorage.setItem('AllBlog',JSON.stringify(AllBlog))
                                history.go(0)                   
                            }
                        }
                    }
                }else{
                    PrintBlog();
                }
            }
            // 操作博客
            function OperateFunction(){
                // 按钮样式的改变
                operate_box.style.backgroundColor = '#53bff1';
                operate_box.style.color = '#fff';
                publish_box.style.backgroundColor = '#d9eff8'
                publish_box.style.color = '#1d77c0';
                back_box.style.backgroundColor = '#d9eff8'
                back_box.style.color = '#1d77c0';
                // 主题框内容的改变
                search_outer.style.display = 'inline-block';
                operate_outer.style.display = 'inline-block';
                publish_outer.style.display = 'none';
                // 打印出所有博客内容
                operate_outer.innerHTML  = '';
                PrintBlog();
            }
            operate_box.onclick = function(){
                OperateFunction();
            }
            // 发表博客
            publish_box.onclick = function(){
                this.style.backgroundColor = '#53bff1';
                this.style.color = '#fff';
                operate_box.style.backgroundColor = '#d9eff8'
                operate_box.style.color = '#1d77c0';
                back_box.style.backgroundColor = '#d9eff8'
                back_box.style.color = '#1d77c0';
                // 主题框内容的改变
                search_outer.style.display = 'none';
                operate_outer.style.display = 'none';
                publish_outer.style.display = 'block';
                var newBlog_title = document.getElementById("newBlog-title");
                var newBlog_kind = document.getElementById("newBlog-kind");
                var newBlog_content = document.getElementById("newBlog-content");
                var newBlog_imgSrc = document.getElementById("newBlog-imgSrc");
                var ensure_publish = document.getElementById("ensure-publish");
                var cancel_publish = document.getElementById("cancel-publish");
                var newBlog_box = document.getElementsByClassName("newBlog-box");
                for(var i = 0; i<newBlog_box.length ;i++)
                {
                    newBlog_box[i].onfocus = function(){
                        this.placeholder = '';
                    }
                }
                function getFileUrl(file) {
                    var url;
                    var agent = navigator.userAgent;
                    if (agent.indexOf("MSIE") >= 1 || agent.indexOf("NET")!=-1) {
                        url = window.URL.createObjectURL(file);
                    } else if (agent.indexOf("Firefox") > 0) {
                        url = window.URL.createObjectURL(file);
                    } else if (agent.indexOf("Chrome") > 0) {
                        url =window.webkitURL.createObjectURL(file);
                    }
                    return url;
                }
                newBlog_imgSrc.onchange = function(){
                    var url = getFileUrl(newBlog_imgSrc.files[0]);
                    console.log(typeof url , url ,newBlog_imgSrc.value);
                    
                }
                // 确认发表
                ensure_publish.onclick = function(){
                    console.log(newBlog_title.value , newBlog_kind.value , newBlog_content.value , newBlog_imgSrc.value);
                    if(!newBlog_imgSrc.value){
                        newBlog_imgSrc.value = './img/blog0.png';
                    }
                    if(newBlog_title.value && newBlog_kind.value && newBlog_content.value && newBlog_imgSrc.value){
                        var newBlog = {
                            title: newBlog_title.value,
                            content: newBlog_content.value,
                            imgSrc:newBlog_imgSrc.value,
                            kind: newBlog_kind.value,
                            likeNumber: 0,
                            collectNumber: 0,
                            commentArr: []
                        }
                        var AllBlog = JSON.parse(localStorage.getItem('AllBlog'));
                        AllBlog.push(newBlog);
                        localStorage.setItem('AllBlog',JSON.stringify(AllBlog));
                        newBlog_title.value = '';
                        newBlog_kind.value = '';
                        newBlog_content.value = '';
                        newBlog_imgSrc.value = '';
                        var arrPerson = JSON.parse(localStorage.getItem("AllPerson"));
                        for(var i = 0; i < arrPerson.length ; i++){
                            arrPerson[i].likeArr.push(0);
                            arrPerson[i].collectArr.push(0);
                        }
                        localStorage.setItem('AllPerson',JSON.stringify(arrPerson))
                        alert('发表成功!');
                    }else{
                        alert('请确认信息填写完整后再提交!')
                    }
                }
                // 取消发表  清除输入框内容 + 回到主页面
                cancel_publish.onclick = function(){
                    newBlog_title.value = '';
                    newBlog_kind.value = '';
                    newBlog_content.value = '';
                    newBlog_imgSrc.value = '';
                }
            }
            // 回到主页
            back_box.onclick = function(){
                this.style.backgroundColor = '#53bff1';
                this.style.color = '#fff';
                publish_box.style.backgroundColor = '#d9eff8'
                publish_box.style.color = '#1d77c0';
                operate_box.style.backgroundColor = '#d9eff8'
                operate_box.style.color = '#1d77c0';
                history.go(-1);
            }
        }
    