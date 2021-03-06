
$(".blog-nav a").click(function () {
    $(".blog-nav a").removeClass('active');
    $(this).addClass('active');
});

const category_dic = {
    '2': '系统架构',
    '3': 'Python',
    '4': '算法',
    '5': '机器学习',
    '6': '阅读',
};

function category_detail(id) {
    $.ajax({
        type: 'GET',
        url: 'category/'+id,
        traditional: true,
        dataType: 'json',
        success: function (msg) {
            // 清空文章列表
            $(".blog-post").remove();
            $.each(msg, function (i) {
                // alert(JSON.stringify(msg[i]['fields']['title']));
                var category_id = msg[i]['fields']['category'];
                var category_name = category_dic[category_id];
                var article_id = msg[i]['pk'];
                var article_title = msg[i]['fields']['title'];
                var article_body = msg[i]['fields']['body'];
                $("#article-list").prepend('<div class="blog-post">\n' +
                                                '<header>\n' +
                                                    '<a class="label">' + category_name +
                                                        '<i class="label-arrow"></i>\n' +
                                                    '</a>\n' +
                                                    '<h2 class="blog-post-title">\n' +
                                                        '<a onclick="article_detail('+ article_id +')">' + article_title + '</a>\n' +
                                                    '</h2>\n' +
                                                '</header>\n' +
                                                '<div class="blog-post-body">\n' +
                                                    '<div class="blog-post-img">\n' +
                                                        '<img width="200" height="123" src="http://www.ahaii.com/static/img/TESLA.png">\n' +
                                                    '</div>\n' +
                                                    '<div class="blog-post-text">\n' +
                                                        '<p style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp:5; overflow: hidden;">' + article_body + '</p>\n' +
                                                    '</div>\n' +
                                                '</div>\n' +
                                            '</div>');
            });
        }
    });
    // history.pushState(null,null,'/category/'+id);
}