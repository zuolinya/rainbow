
wx.ready(function () {
    function getShareData(shareType) {
        return shareData = {
            title: '你有一份圣诞豪礼待签收！',
            desc: '圣诞豪礼各不同，今年送你个特别滴！',
            link: 'http://digital.chinacloudsites.cn/chrismas/index.html',
            imgUrl: 'http://digital.chinacloudsites.cn/chrismas/images/shareImages.png',
            complete: function (res) {
                //alert(JSON.stringify(res));
            },
            success: function (res) {
                shareConfirm(shareType);
               
            },
            cancel: function (res) {
                shareCancel(shareType);
            },
            fail: function (res) {
                shareFail(shareType);
            }
        };
    }


    function shareCancel(type) {
		
    }

    function shareFail(type) {

    }

    function shareConfirm(type) {
          $.ajax({
              url: '/wechat/Home/SendFriend',
              type: 'post',
              datatype: 'json',
              data: {type:type,url:window.location.href},
              success: function (data) {

              }
        });
      
    }


    wx.onMenuShareAppMessage(getShareData(1));
    wx.onMenuShareTimeline(getShareData(2));
    wx.onMenuShareQQ(getShareData(3));
});

wx.error(function (res) {
    // alert(res.errMsg);
});
