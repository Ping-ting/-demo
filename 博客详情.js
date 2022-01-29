window.onload = function(){
    var nowBlog = JSON.parse(localStorage.getItem('nowBlog'));
    var AllBlog = JSON.parse(localStorage.getItem('AllBlog'));
    var nowUser = JSON.parse(localStorage.getItem('nowUser'));
    var blogIndex = Number(nowBlog);
    console.log(blogIndex , typeof blogIndex)
    var blog_title = document.getElementsByClassName("blog-title")[0];
    var blog_img = document.getElementsByClassName("blog-img")[0];
    var blog_content = document.getElementsByClassName("blog-content")[0];
    blog_title.innerHTML = AllBlog[blogIndex].title;
    blog_content.innerHTML = AllBlog[blogIndex].content;
    blog_img.src = AllBlog[blogIndex].imgSrc;
    // 打印全部评论
    var commentOuter = document.getElementsByClassName("comment-outer")[0];
    for(var  i = 0 ; i < AllBlog[blogIndex].commentArr.length ; i++){
        var eachComment = document.createElement("li");
        eachComment.innerHTML = '<span style="font-weight: 800;">&nbsp;&nbsp;|&nbsp;</span> ' + AllBlog[blogIndex].commentArr[i] + '</li>';
        commentOuter.appendChild(eachComment);
    }
    // 提交评论
    var comment = document.getElementById("comment");
    var submit = document.getElementById("submit");
    comment.onfocus = function(){
        this.placeholder = '';
    }
    function commentFun(){
        if( !comment.value ){
            alert('请输入你想说的哦');
        }else{
            if(nowUser == null){
                nowUser = '未知游客';
            }
            var newComment = nowUser + '：' + comment.value;
            comment.value = ''
            console.log(newComment);
            AllBlog[blogIndex].commentArr.unshift(newComment);
            localStorage.setItem('AllBlog',JSON.stringify(AllBlog));
            history.go(0);
            // AllBlog[blogIndex].commentArr.push(newComment);
            // localStorage.setItem('AllBlog',JSON.stringify(AllBlog));
            // var eachComment = document.createElement("li");
            // eachComment.innerHTML = '<span style="font-weight: 800;">&nbsp;&nbsp;|&nbsp;</span> ' + newComment + '</li>';
            // commentOuter.appendChild(eachComment);
        }
    }
    // 点击 submit
    submit.onclick = function(){
        commentFun();
    }
    // 回车
    document.body.onkeydown = function(event){
        console.log('down')
        if(event.keyCode == 13){
            commentFun();
        }
    }
}